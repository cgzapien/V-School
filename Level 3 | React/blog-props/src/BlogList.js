import React from "react"
import BlogPost from "./BlogPost"
import posts from "./posts"

function BlogList() {
    let blogPosts = posts.map(function(blogPost) {
        return (
            <BlogPost
            key={blogPost.date}
            title={blogPost.title}
            subTitle={blogPost.subTitle}
            author={blogPost.author}
            date={blogPost.date}
            />
        )
    }) 
    return (
        <div className="blogListContainer">
            {blogPosts}
            <p>older posts &#8594;</p>
        </div>
    )
}

export default BlogList