import React from "react";
import MyInput from "../UI/input/MyInput";
import Select from "../UI/select/Select";

const PostFilter = function({filter, setFilter}) {
  return(
    <>
      <MyInput 
        value={filter.query}
        onChange={(e) => { setFilter({...filter, query: e.target.value}) }}
        type="text" 
        placeholder={'Search something...'} 
      />
      <Select 
        value={filter.sort}
        change={selectedSort => setFilter({...filter, sort: selectedSort})}
        options={[
          {value: 'title', name: 'By title'},
          {value: 'body', name: 'By body'}
        ]} 
        defaultOption={`sortBy`}
      />
    </>
  )
}

export default PostFilter