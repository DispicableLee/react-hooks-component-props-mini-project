import React from "react";
import blogData from "../data/blog";
import Blurb from "../components/Blurb"
import ArticleList from "../components/ArticleList"
console.log(blogData);

function App() {
  return (
    <div className="App">
      <h1>{blogData.name}</h1>
      <Blurb/>
      <ArticleList
      posts = {blogData.posts}
      />  
      You're on your own from here! Follow the deliverables; test things out in
      the browser as you write your code; and good luck!
    </div>
  );
}

export default App;
