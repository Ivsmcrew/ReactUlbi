import React from "react";
import { useState } from "react";

const Counter = function() {
  const [likes, setLikes] = useState(0);

  function incrementLikes() {
    setLikes(likes + 1);
  }
  
  function decrementLikes() {
    setLikes(likes - 1);
  }

  return(
    <div>
      <h1>Likes: {likes}</h1>
      <button onClick={incrementLikes} type="submit " class="increment">Increment</button>
      <button onClick={decrementLikes} type="submit" class="decrement">Decrement</button>
    </div>
  )
}

export default Counter;