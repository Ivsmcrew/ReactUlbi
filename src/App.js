import React, { useRef, useState } from "react";
import PostList from "./components/PostList";
import './styles/App.css';
import PostForm from "./components/PostForm";
import Select from "./UI/select/Select";
import MyInput from "./UI/input/MyInput";

function App() {
  const [posts, setPosts] = useState([ 
    {id: 1, title: 'JavaScript', body: 'Ahhh'},
    {id: 2, title: 'Ruby', body: 'Very good'},
    {id: 3, title: 'Python', body: 'Zzzz'},
  ])  
  const [sortedSelect, setSortedSelect] = useState('');
  const [search, setSearch] = useState('');

  function getSortedPosts() {
    console.log('Have worked');
    if(sortedSelect) {
      return [...posts].sort((a,b) => a[sortedSelect].localeCompare(b[sortedSelect]))
    }
    return posts;
  }

  const sortedPosts = getSortedPosts();

  const createPost = function(newPost) {
    setPosts([...posts, newPost])
  }
  const deletePost = function(post) {
    setPosts(posts.filter( (item) => {
      if (item.id !== post.id) {
        return true
      }
      return false
    } ))
  }

  const sortPosts = (sort) => {
    setSortedSelect(sort);
  }

  return (
    <div className="App">
      <PostForm create={createPost}/>
      <hr style={{margin: '15px'}}></hr>

      <MyInput 
        value={search}
        type="text" 
        placeholder={'Search something...'} 
        onChange={ (e) => {setSearch(e.target.value)} }
      />
      <Select 
        value={sortedSelect}
        change={sortPosts}
        options={[
          {value: 'title', name: 'By title'},
          {value: 'body', name: 'By body'}
        ]} 
        defaultOption={`sortBy`}
      />

      {(posts.length !== 0)
        ? <PostList posts={sortedPosts} title={`List number 1`} remove={deletePost}/>
        : <h1 style={{textAlign: 'center'}}>There are no posts</h1>
      }
    </div>
  );
}

export default App;
