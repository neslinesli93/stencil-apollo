import { h, Component, Prop } from '@stencil/core';
import ApolloClient from 'apollo-boost';
// import { isSome } from 'fp-ts/lib/Option';

const client = new ApolloClient({
  uri: 'https://graphql-voter-app.herokuapp.com/',
});

@Component({
  tag: 'my-component-with-codegen',
  styleUrl: 'my-component-with-codegen.css',
})
export class MyComponentWithCodegen {
  @Prop() first?: string;
  @Prop() last?: string;

  renderUpvoteButton(postId: number) {
    return (
      <apollo-upvote-post
        renderer={upvotePost => (
          <button onClick={() => upvotePost({ variables: { postId } })}>Upvote</button>
        )}
      />
    );
  }

  render() {
    return (
      <apollo-provider client={client}>
        <apollo-all-posts
          renderer={({ data, loading, error }) => {
            console.log(error);

            if (loading) {
              return 'Loading...';
            }

            return (
              <ul>
                {data.posts?.map(post => (
                  <li>
                    {post?.title} by {post?.author?.firstName} {post?.author?.lastName} (
                    {post?.votes} votes)
                    {post?.id && this.renderUpvoteButton(post?.id)}
                  </li>
                ))}
              </ul>
            );
          }}
        />
      </apollo-provider>
    );
  }
}
