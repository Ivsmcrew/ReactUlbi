export default class PostService {
  static async getAllPosts() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const posts = await response.json();
      return posts
    } catch (err) {
      console.log(err)
    }
  }
}