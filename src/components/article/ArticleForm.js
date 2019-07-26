import React, { Component } from "react";
import "./Article.css"


export default class ArticleForm extends Component {
  // Set initial state
  state = {
    userId: "",
    url: "",
    title: "",
    synopsis: ""
  };

  // Update state whenever an input field is edited
  handleFieldChange = evt => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };

  constructNewArticle = evt => {
    evt.preventDefault();
    if (this.state.title === "") {
      window.alert("Hullo?");
    } else {
      const article = {
        title: this.state.title,
        url: this.state.url,
        synopsis: this.state.synopsis,
        userId: parseInt(sessionStorage.getItem("userId"))
      };

      // Create the article and redirect user to article list
      this.props
        .addArticle(article)
        .then(() => this.props.history.push("/articles"));
    }
  };

  render() {
    return (
      <React.Fragment>
        <form className="articleForm">
          <div className="form-group">
            <label htmlFor="title">Article Title</label>
            <input
              type="text"
              required
              className="form-control"
              onChange={this.handleFieldChange}
              id="title"
              placeholder="Article Title"
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
              placeholder="Url"
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
              placeholder="Synopsis"
            />
          </div>
          <button
            type="submit"
            onClick={this.constructNewArticle}
            className="btn btn-primary"
          >
            Submit
          </button>
        </form>
      </React.Fragment>
    );
  }
}
