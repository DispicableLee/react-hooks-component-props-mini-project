import React from "react";
import blogData from "../data/blog";

export default function Blurb(){
    return(
        <div>
            <img src={blogData.image} alt="lol"/>
            <p>Personal blog by Robert Lee.</p>
            <p>{blogData.about}</p>
        </div>
    )
}