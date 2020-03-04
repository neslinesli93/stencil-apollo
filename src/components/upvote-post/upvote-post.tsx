import * as Types from "../../types";
import gql from "graphql-tag";
import "stencil-apollo";
import { Component, Prop, h } from "@stencil/core";

declare global {
  export type UpvotePostMutationVariables = {
    postId: Types.Scalars["Int"];
  };

  export type UpvotePostMutation = { __typename?: "Mutation" } & {
    upvotePost: Types.Maybe<
      { __typename?: "Post" } & Pick<Types.Post, "id" | "votes">
    >;
  };
}

const UpvotePostDocument = gql`
  mutation upvotePost($postId: Int!) {
    upvotePost(postId: $postId) {
      id
      votes
    }
  }
`;

@Component({
  tag: "apollo-upvote-post"
})
export class UpvotePostComponent {
  @Prop() renderer: import("stencil-apollo").MutationRenderer<
    UpvotePostMutation,
    UpvotePostMutationVariables
  >;
  @Prop() variables: UpvotePostMutationVariables;
  render() {
    return (
      <apollo-mutation
        mutation={UpvotePostDocument}
        variables={this.variables}
        renderer={this.renderer}
      />
    );
  }
}
