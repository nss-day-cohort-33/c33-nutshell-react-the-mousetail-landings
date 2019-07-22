import React, { Component } from "react";
import { Link } from "react-router-dom";


export default class ArticleCard extends Component {
  render() {
    return (
      <div key={this.props.article.id} className="card">
        <div className="card-body">
          <div className="card-title">
            {/* <img src={dog} className="icon--dog" alt="dog"/> */}
            <h5>{this.props.article.name}</h5>
            <Link className="nav-link" to={`/articles/${this.props.article.id}`}>
              Details
            </Link>
            <button
              type="button"
              className="btn btn-success"
              onClick={() => {
                this.props.history.push(
                  `/animals/${this.props.article.id}/edit`
                );
              }}
            >
              Edit
            </button>
            <a
              href="#"
              onClick={() => this.props.deleteArticle(this.props.article.id)}
              className="card-link"
            >
              Discharge
            </a>
          </div>
        </div>
      </div>
    );
  }
}
