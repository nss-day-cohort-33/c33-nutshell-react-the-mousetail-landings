import React, { Component } from "react"
import "./article.css"
import ArticleCard from "./articleCard"

export default class ArticleList extends Component {
    render () {
        return (
            <React.Fragment>
                <div className="articleButton">
                    <button type="button"
                            onClick={()=> this.props.history.push("/articles/new")}
                            className="btn btn-success">
                        Admit Animal
                    </button>
                </div>
                <section className="articles">
                {
                    this.props.articles.map(article =>
                        <ArticleCard key={article.id} article={article} {...this.props} />
                    )
                }
                </section>
            </React.Fragment>
        )
    }
}