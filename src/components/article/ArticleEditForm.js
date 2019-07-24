import React, { Component } from "react";
import ArticleManager from "../modules/ArticleManager";

export default class ArticleEditForm extends Component {
  // Set initial state
  state = {
    userId: "",
    url: "",
    title: "",
    synopsis: ""
  };

  handleFieldChange = evt => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };

  updateExistingArticle = evt => {
    evt.preventDefault();

    if (!this.state.title === null) {
      window.alert("Hullo?");
    } else {
        console.log(this.state)
      const editedArticle = {
        id: this.props.match.params.articleId,
        title: this.state.title,
        url: this.state.url,
        synopsis: this.state.synopsis,
        userId: parseInt(this.state.userId)
      };

      this.props
        .updateArticle("articles", editedArticle)
        .then(() => this.props.history.push("/articles"));
    }
  };

  componentDidMount() {
    ArticleManager.get("articles",this.props.match.params.articleId).then(article => { console.log(article)
      this.setState({
        userId: article.userId,
        title: article.title,
        url: article.url,
        synopsis: article.synopsis
      });
    });
  }

  render() {
    return (
      <React.Fragment>
        <form className="articleForm">
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              required
              className="form-control"
              onChange={this.handleFieldChange}
              id="title"
              value={this.state.title}
            />
          </div>
          <div className="form-group">
            <label htmlFor="synopsis">Synopsis</label>
            <input
              type="text"
              required
              className="form-control"
              onChange={this.handleFieldChange}
              id="synopsis"
              value={this.state.synopsis}
            />
          </div>
          <div className="form-group">
            <label htmlFor="url">Url</label>
            <input
              type="text"
              required
              className="form-control"
              onChange={this.handleFieldChange}
              id="url"
              value={this.state.url}
            />
          </div>
          <button
            type="submit"
            onClick={this.updateExistingArticle}
            className="btn btn-primary"
          >
            Submit
          </button>
        </form>
      </React.Fragment>
    );
  }
}
