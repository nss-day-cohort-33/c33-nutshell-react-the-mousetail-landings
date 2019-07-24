import React, { Component } from "react"
import ArticleCard from "./ArticleCard"

export default class ArticleList extends Component {
    render () {
        return (
            <React.Fragment>
                <div className="articleButton">
                    <button type="button"
                            onClick={()=> this.props.history.push("/articles/new")}
                            className="btn btn-success">
                        Submit Article
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