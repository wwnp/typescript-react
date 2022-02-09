import React, { Component, useMemo } from 'react';
// import { useParams } from 'react-router-dom';
// import { RouteProps } from 'react-router';
// type RouteParams = {
//   id: string,
// }
import {
  useLocation,
  useNavigate,
  useParams
} from "react-router-dom";

interface IPost {
  title?: string,
  body?: string,
}

type PostProps = {
  router: {
    location: {
      [key: string]: any
    },
    navigate: {
      [key: string]: any
    },
    params: {
      [key: string]: any
    },
  }
}
type PostState = {
  // post: IPost,
  post: {
    title?:string
    body?:string
  },
}

class Post extends Component<PostProps, PostState> {
  state = {
    post: {
      title: '',
      body: '',
    },
  }
  componentDidMount() {
    const id = this.props.router.params.id
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(res => res.json())
      .then(post => { this.setState({ post }) })
  }

  render() {
    const { post } = this.state;
    const { title, body } = post;
    return (
      <section>
        <h1>Post</h1>
        <article>
          <h2>{title}</h2>
          <p>{body}</p>
        </article>
      </section>
    );
  }
};

function withRouter(Component: any) {
  function ComponentWithRouterProp(props: any) {
    let location = useLocation()
    let navigate = useNavigate()
    let params = useParams()
    return (
      <Component
        {...props}
        router={{ location, navigate, params }}
      />
    )
  }
  return ComponentWithRouterProp
}
export default withRouter(Post)




