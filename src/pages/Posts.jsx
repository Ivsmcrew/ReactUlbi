import React, { useEffect, useState } from "react";
import PostList from "../components/PostList";
import PostForm from "../components/PostForm";
import PostFilter from "../components/PostFilter";
import MyModal from "../UI/modal/MyModal";
import MyButton from "../UI/button/MyButton";
import { usePosts } from "../hooks/usePosts";
import PostService from "../API/PostService";
import Loader from "../UI/loader/Loader";
import { useFetching } from "../hooks/useFetching";
import { getPagesArray, quantityOfPages } from "../utils/pages";
import Pagination from "../UI/pagination/Pagination";
import '../styles/App.css';

function Posts() {
  //_____________STATES_______________________________________________________________________________
  const [posts, setPosts] = useState([]);  
  const [filter, setFilter] = useState({sort: '', query: ''});
  const [modal, setModal] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
  const [getPosts, loadingPosts] = useFetching(async () => {
    const response = await PostService.getAllPosts(limit, page);
    setPosts(await response.json());
    const totalCount = response.headers.get("x-total-count");
    setTotalPages( quantityOfPages(totalCount, limit) );
  })

  //_____________FUNCTIONS____________________________________________________________________________
  let pagesArray = getPagesArray(totalPages);

  useEffect(() => {
    getPosts()
  }, [page])
  const createPost = function(newPost) {
    setPosts([...posts, newPost])
    setModal(false);
  }
  const deletePost = function(post) {
    setPosts(posts.filter( (item) => {
      if (item.id !== post.id) {
        return true
      }
      return false
    } ))
  }
  const changePage = function(page) {
    setPage(page); 
  }

  //______________RETURN________________________________________________________________________________
  return (
    <div className="App">
      <MyButton style={{marginTop: '30px'}} onClick={() => {setModal(true)}}>
        Create post
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost}/>
      </MyModal>

      <PostFilter 
        filter={filter}
        setFilter={setFilter}  
      />

      {loadingPosts 
        ? <div style={{display: 'flex', height: '50vh', width: '100%', justifyContent: 'center', alignItems: 'center'}}>
            <Loader/>
          </div>
        : <PostList posts={sortedAndSearchedPosts} title={`List number 1`} remove={deletePost}
      />}

      <Pagination changePage={changePage} pagesArray={pagesArray} page={page}/>
    </div>
  )
}

export default Posts;
