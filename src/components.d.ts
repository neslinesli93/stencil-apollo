/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';


export namespace Components {
  interface ApolloAllPosts {
    'renderer': import("stencil-apollo").QueryRenderer<
    AllPostsQuery,
    AllPostsQueryVariables
    >;
    'variables': AllPostsQueryVariables;
  }
  interface ApolloUpvotePost {
    'renderer': import("stencil-apollo").MutationRenderer<
    UpvotePostMutation,
    UpvotePostMutationVariables
    >;
    'variables': UpvotePostMutationVariables;
  }
  interface MyComponentWithCodegen {
    'first': string;
    'last': string;
  }
}

declare global {


  interface HTMLApolloAllPostsElement extends Components.ApolloAllPosts, HTMLStencilElement {}
  var HTMLApolloAllPostsElement: {
    prototype: HTMLApolloAllPostsElement;
    new (): HTMLApolloAllPostsElement;
  };

  interface HTMLApolloUpvotePostElement extends Components.ApolloUpvotePost, HTMLStencilElement {}
  var HTMLApolloUpvotePostElement: {
    prototype: HTMLApolloUpvotePostElement;
    new (): HTMLApolloUpvotePostElement;
  };

  interface HTMLMyComponentWithCodegenElement extends Components.MyComponentWithCodegen, HTMLStencilElement {}
  var HTMLMyComponentWithCodegenElement: {
    prototype: HTMLMyComponentWithCodegenElement;
    new (): HTMLMyComponentWithCodegenElement;
  };
  interface HTMLElementTagNameMap {
    'apollo-all-posts': HTMLApolloAllPostsElement;
    'apollo-upvote-post': HTMLApolloUpvotePostElement;
    'my-component-with-codegen': HTMLMyComponentWithCodegenElement;
  }
}

declare namespace LocalJSX {
  interface ApolloAllPosts {
    'renderer'?: import("stencil-apollo").QueryRenderer<
    AllPostsQuery,
    AllPostsQueryVariables
    >;
    'variables'?: AllPostsQueryVariables;
  }
  interface ApolloUpvotePost {
    'renderer'?: import("stencil-apollo").MutationRenderer<
    UpvotePostMutation,
    UpvotePostMutationVariables
    >;
    'variables'?: UpvotePostMutationVariables;
  }
  interface MyComponentWithCodegen {
    'first'?: string;
    'last'?: string;
  }

  interface IntrinsicElements {
    'apollo-all-posts': ApolloAllPosts;
    'apollo-upvote-post': ApolloUpvotePost;
    'my-component-with-codegen': MyComponentWithCodegen;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      'apollo-all-posts': LocalJSX.ApolloAllPosts & JSXBase.HTMLAttributes<HTMLApolloAllPostsElement>;
      'apollo-upvote-post': LocalJSX.ApolloUpvotePost & JSXBase.HTMLAttributes<HTMLApolloUpvotePostElement>;
      'my-component-with-codegen': LocalJSX.MyComponentWithCodegen & JSXBase.HTMLAttributes<HTMLMyComponentWithCodegenElement>;
    }
  }
}


