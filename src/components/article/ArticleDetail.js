import React, { Component } from "react";

export default class Article extends Component {
  state = {
    saveDisabled: false
  };

  render() {
    return (
      <section className="article">
        <div key={this.props.article.id} className="card">
          <div className="card-body">
            <h4 className="card-title">
              {/* <img src={dog} className="icon--dog" alt="doggo" /> */}
              {this.props.article.name}
            </h4>
            <h6 className="card-title">{this.props.article.breed}</h6>
            <button
            //   onClick={() => {
            //     this.setState({ saveDisabled: true }, () =>
            //       this.props.dischargeAnimal(this.props.animal.id)
            //     );
            //   }}
              disabled={this.state.saveDisabled}
              className="card-link"
            >
              Delete
            </button>
          </div>
        </div>
      </section>
    );
  }
}