import React, { Component } from "react";
import ArticleCard from "./ArticleCard";
import ArticleManager from "../modules/ArticleManager";



let userId = sessionStorage.getItem("userId");

export default class ArticleList extends Component {
  state = {
    articles: []
  };
log = (thing) => {
    console.log(thing)
}
getUserArticles = () => {
    ArticleManager.getAll(parseInt(sessionStorage.getItem("userId")))
      .then(userArticles => this.setState({articles: userArticles}))
  }
  componentDidMount() {
    this.getUserArticles(userId);
  }
  render() {
      {this.log(this.state.articles)}
    return (
      <React.Fragment>
        <div className="articleButton">
          <button
            type="button"
            onClick={() => this.props.history.push("/articles/new")}
            className="btn btn-success"
          >
            Add New Article
          </button>
        </div>
        <section className="articles">
          {this.state.articles.map(article => (
            <ArticleCard key={article.id} article={article} {...this.props} />
          ))}
        </section>
      </React.Fragment>
    );
  }
}
