import React, { useEffect, useState } from "react";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";
import './styles/App.css';
import MyModal from "./UI/modal/MyModal";
import MyButton from "./UI/button/MyButton";
import { usePosts } from "./hooks/usePosts";
import PostService from "./API/PostService";
import Loader from "./UI/loader/Loader";

function App() {
  //_____________STATES_______________________________________________________________________________
  const [posts, setPosts] = useState([]);  
  const [filter, setFilter] = useState({sort: '', query: ''});
  const [modal, setModal] = useState(false);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
  const [loadingPosts, setLoadingPosts] = useState(true);

  //_____________FUNCTIONS____________________________________________________________________________
  useEffect(() => {
    getPosts()
  }, [])
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
  const getPosts = async function() {
    setLoadingPosts(true);
    setTimeout(async () => {
      const posts = await PostService.getAllPosts();
      setPosts(posts);
      setLoadingPosts(false);
    }, 1000)
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
        : <PostList posts={sortedAndSearchedPosts} title={`List number 1`} remove={deletePost}/>}
    </div>
  );
}

export default App;
