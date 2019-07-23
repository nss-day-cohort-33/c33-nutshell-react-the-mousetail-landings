import React, { Component } from "react";


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

  /*
        Local method for validation, creating animal object, and
        invoking the function reference passed from parent component
     */
  constructNewArticle = evt => {
    evt.preventDefault();
    if (this.state.name === "") {
      window.alert("Hullo?");
    } else {
      const article = {
        title: this.state.title,
        url: this.state.url,
        synopsis: this.state.synopsis,
        // Make sure the employeeId is saved to the database as a number since it is a foreign key.
        userId: parseInt(this.state.userId)
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
            <label htmlFor="articleName">Article name</label>
            <input
              type="text"
              required
              className="form-control"
              onChange={this.handleFieldChange}
              id="articleName"
              placeholder="Article name"
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
              placeholder="Breed"
            />
          </div>
          <div className="form-group">
            <label htmlFor="employee">Assign to caretaker</label>
            <select
              defaultValue=""
              name="employee"
              id="employeeId"
              onChange={this.handleFieldChange}
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