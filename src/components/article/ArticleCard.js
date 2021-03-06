import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Article.css"


export default class ArticleCard extends Component {
  render() {
    return (
      <div key={this.props.article.id} className="card">
        <div className="card-body">
          <div className="card-title">
            {/* <img src={dog} className="icon--dog" alt="dog"/> */}
            <h5>{"Title: "}{this.props.article.title}</h5>
            <h5>{"Synopsis: "}{this.props.article.synopsis}</h5>
            <h5>{"URL: "}{this.props.article.url}</h5>
            {/* <Link className="nav-link" to={`/articles/${this.props.article.id}`}>
              Details
            </Link> */}
            <button
              type="button"
              className="btn btn-success"
              onClick={() => {
                this.props.history.push(
                  `/articles/${this.props.article.id}/edit`
                );
              }}
            >
              EDIT
            </button>
            <a
              href="#"
              onClick={() => this.props.deleteArticle(this.props.article.id)}
              className="card-link"
             >
              DELETE
            </a>
          </div>
        </div>
      </div>
    );
  }
}
