import React from "react";
import PostItem from './PostItem'

const PostList = function({posts, title, remove}) {
  return (
    <>
      <h1 style={{textAlign: 'center'}}>
        {title}
      </h1>
      
      {posts.map((post, index) => {
        return <PostItem number={index + 1} post={post} key={post.id} remove={remove}/>
      })}
    </>
  )
}

export default PostList