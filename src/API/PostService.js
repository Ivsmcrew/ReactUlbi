export default class PostService {
  static async getAllPosts(limit = 10, page = 1) {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`);
      return response
    } catch (err) {
      console.log(err)
    }
  }

  static async getById(id) {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
      return response
  }

  static async getCommentsById(id) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
    return response
  }
}