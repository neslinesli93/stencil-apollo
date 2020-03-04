import * as Types from "../../types";
import gql from "graphql-tag";
import "stencil-apollo";
import { Component, Prop, h } from "@stencil/core";

declare global {
  export type AllPostsQueryVariables = {};

  export type AllPostsQuery = { __typename?: "Query" } & {
    posts: Types.Maybe<
      Array<
        Types.Maybe<
          { __typename?: "Post" } & Pick<
            Types.Post,
            "id" | "title" | "votes"
          > & {
              author: Types.Maybe<
                { __typename?: "Author" } & Pick<
                  Types.Author,
                  "id" | "firstName" | "lastName"
                >
              >;
            }
        >
      >
    >;
  };
}

const AllPostsDocument = gql`
  query allPosts {
    posts {
      id
      title
      votes
      author {
        id
        firstName
        lastName
      }
    }
  }
`;

@Component({
  tag: "apollo-all-posts"
})
export class AllPostsComponent {
  @Prop() renderer: import("stencil-apollo").QueryRenderer<
    AllPostsQuery,
    AllPostsQueryVariables
  >;
  @Prop() variables: AllPostsQueryVariables;
  render() {
    return (
      <apollo-query
        query={AllPostsDocument}
        variables={this.variables}
        renderer={this.renderer}
      />
    );
  }
}
