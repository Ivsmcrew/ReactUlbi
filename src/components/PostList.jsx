import React from "react";
import PostItem from './PostItem'
import { CSSTransition, TransitionGroup } from "react-transition-group";

const PostList = function({posts, title, remove}) {

  if (!posts.length) {
    return (
      <h1 style={{textAlign: 'center'}}>There are no posts!</h1>
    )
  }

  return (
    <>
      <h1 style={{textAlign: 'center'}}>
        {title}
      </h1>
      
      <TransitionGroup>
        {posts.map((post, index) => {
          return(
            <CSSTransition
              key={post.id}
              timeout={299}
              classNames="post"
            >
              <PostItem number={index + 1} post={post} remove={remove}/>
            </CSSTransition>
          )
        })}
      </TransitionGroup>
    </>
  )
}

export default PostList