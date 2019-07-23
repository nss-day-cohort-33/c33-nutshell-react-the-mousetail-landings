import React, { Component } from "react"
import ArticleManager from "../../Modules/ArticleManager"

export default class ArticleEditForm extends Component {
    // Set initial state
    state = {
      userId: "",
      url: "",
      title: "",
      synopsis: ""
    }


    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    updateExistingArticle = evt => {
      evt.preventDefault()

      if (!this.state.user.name === null) {
        window.alert("Hullo?");
      } else {
        const editedArticle = {
            title: this.state.title,
            url: this.state.url,
            synopsis: this.state.synopsis,
            userId: parseInt(this.state.userId)
          };
        };

    this.props.updateArticle(editedArticle)
    .then(() => this.props.history.push("/articles"))
    }
  }

    componentDidMount() {
      ArticleManager.get(this.props.match.params.articleId)
      .then(article => {
        this.setState({
          articleName: article.name,
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
              <label htmlFor="articleName">Article name</label>
              <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="articleName"
                value = {this.state.articleName}
              />
            </div>
            <div className="form-group">
              <label htmlFor="breed">Breed</label>
              <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="breed"
                value = {this.state.breed}
              />
            </div>
            <div className="form-group">
              <label htmlFor="employee">Assign to caretaker</label>
              <select
                name="employee"
                id="employeeId"
                onChange={this.handleFieldChange}
                value = {this.state.employeeId}
              >
                <option value="">Select an employee</option>
                {this.props.employees.map(e => (
                  <option key={e.id} id={e.id} value={e.id}>
                    {e.name}
                  </option>
                ))}
              </select>
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