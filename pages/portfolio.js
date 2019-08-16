import React from "react";
import { withRouter } from 'next/router';
import axios from 'axios';
import BaseLayout from "../components/layouts/BaseLayout";

class Portfolio extends React.Component {
  static async getInitialProps({query}) {
    const portfolioId = query.id;
    let portfolio = {};
    try {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${portfolioId}`);
      portfolio = response.data;
    } catch (error) {
      console.log(error);
    }
    return {portfolio};
  }
  render() {
    const {portfolio} = this.props;
    return (
      <BaseLayout>
        <h1>{portfolio.title}</h1>
        <p>{portfolio.body}</p>
      </BaseLayout>
    );
  }
}


export default withRouter(Portfolio);