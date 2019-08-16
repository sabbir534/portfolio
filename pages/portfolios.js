import React from "react";
//import Link from 'next/link';
import BaseLayout from "../components/layouts/BaseLayout";
import axios from "axios";
import {Link} from '../routes';

class Porfolios extends React.Component {
  static async getInitialProps() {
    let posts = [];
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      posts = response.data;
    } catch (error) {
      console.log(error);
    }

    return { posts: posts.splice(0, 10) };
  }

  renderPosts(posts) {
    return posts.map(post => {
      return (
        <li key={post.id}>
          <Link route={`portfolio/${post.id}`} >
            <a>{post.title}</a>
          </Link>
        </li>
      );
    });
  }
  render() {
    const { posts } = this.props;
    return (
      <BaseLayout>
        <h1>Porfolios</h1>
        <ul>{this.renderPosts(posts)}</ul>
      </BaseLayout>
    );
  }
}

export default Porfolios;
