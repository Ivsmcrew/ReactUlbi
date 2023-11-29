import React from "react";

class ClassCounter extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      likes: 0,
    }
    this.incrementLikes = this.incrementLikes.bind(this);
    this.decrementLikes = this.decrementLikes.bind(this);
  }

  incrementLikes() {
    this.setState( {likes: this.state.likes + 1} );
  }

  decrementLikes() {
    this.setState( {likes: this.state.likes - 1} );
  }

  render() {
    return(
      <div>
        <h1>Likes: {this.state.likes}</h1>
        <button onClick={this.incrementLikes} type="submit " class="increment">Increment</button>
        <button onClick={this.decrementLikes} type="submit" class="decrement">Decrement</button>
      </div>
    )
  }
}

export default ClassCounter