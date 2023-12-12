import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFetching } from "../hooks/useFetching";
import PostService from "../API/PostService";
import Loader from "../UI/loader/Loader";

const PostIdPage = function() {
  const params = useParams()
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);
  const [fetchPostById, isLoading, error] = useFetching(async () => {
    const response = await PostService.getById(params.id)
    setPost(await response.json());
  })
  const [fetchCommentsById, isComLoading, comError] = useFetching(async () => {
    const response = await PostService.getCommentsById(params.id);
    setComments(await response.json());
  })

  useEffect(() => {
    fetchPostById();
    fetchCommentsById();
  }, [])

  return(
    <div>
      <h1>This is page of define post with an ID = {params.id}</h1>
      {isLoading
        ? <Loader />
        : <div>{post.id}. {post.title}</div> 
      }   
      <h1>Comments</h1> 
      {isComLoading
        ? <Loader />
        : <div>
            {comments.map((comm) => {
              return (
                <div style={{marginTop: '15px'}}>
                  <h5>{comm.email}</h5>
                  <div>{comm.body}</div>
                </div>
              )
            })}
          </div>
      }
    </div>
  )
}

export default PostIdPage