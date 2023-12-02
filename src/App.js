import React, { useMemo, useState } from "react";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";
import './styles/App.css';
import MyModal from "./UI/modal/MyModal";
import MyButton from "./UI/button/MyButton";

function App() {
  const [posts, setPosts] = useState([ 
    {id: 1, title: 'JavaScript', body: 'Ahhh'},
    {id: 2, title: 'Ruby', body: 'Very good'},
    {id: 3, title: 'Python', body: 'Zzzz'},
  ])  
  const [filter, setFilter] = useState({sort: '', query: ''});
  const [modal, setModal] = useState(false);

  const sortedPosts = useMemo(() => {
    console.log('Have worked');
    if(filter.sort) {
      return [...posts].sort((a,b) => a[filter.sort].localeCompare(b[filter.sort]))
    }
    return posts;
  }, [filter.sort, posts])
    
  const sortedAndSearchedPosts = useMemo(() => {
  return sortedPosts.filter((post => post.title.toLowerCase().includes(filter.query.toLowerCase())))
  }, [sortedPosts, filter.query])

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

  return (
    <div className="App">
      <MyButton style={{marginTop: '30px'}} onClick={() => {setModal(true)}}>
        Create user
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost}/>
      </MyModal>

      <PostFilter 
        filter={filter}
        setFilter={setFilter}  
      />

      <PostList posts={sortedAndSearchedPosts} title={`List number 1`} remove={deletePost}/>
    </div>
  );
}

export default App;
