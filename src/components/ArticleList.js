import React from "react";
import ArticleItem from "./ArticleItem";

function ArticleList({ posts }){
    const articles = posts.map((post)=>{
        return (
            <ArticleItem
            id= {post.id}
            title = {post.title}
            date = {post.date}
            preview = {post.preview}
            minutes = {post.minutes}
            />
        )
    })
    return(
        <main>
            {articles}
        </main>
    )
}

export default ArticleList