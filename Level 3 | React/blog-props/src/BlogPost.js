import React from "react"

function BlogPost(props) {
    return (
        <div className="postscontainer">
            <a href="" className="blogPostLink">
                <h1>{props.title}</h1>
                <h3>{props.subTitle}</h3></a>
            <p>Post by <a href="">{props.author}</a> on {props.date}</p>
            
        </div>

    )
}

export default BlogPost;