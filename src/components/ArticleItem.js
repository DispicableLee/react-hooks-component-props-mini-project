import React from "react";

function makeEmojiList(minutes) {
    const interval = minutes < 30 ? 5 : 10;
    const emoji = minutes < 30 ? "☕️" : "🍱";
  
    let emojis = "";
    for (let i = 0; i < minutes; i += interval) {
      emojis += emoji;
    }
  
    return emojis;
  }

 function ArticleItem({title, date, preview, minutes}){
    const emojis = makeEmojiList(minutes)
    return(
    <div>
        <h1>{title}</h1>
        <small>{date}  {emojis} {minutes}</small>

        <h4>{preview}</h4>
        <br/>
    </div>
    )
}

export default ArticleItem