import "./styles/App.css"
import PostList from "./components/PostList";
import { useState } from "react";
import PostForm from "./components/PostForm";

function App() {

  const initialState = [
    { id: 1, title: 'Javascript-1', body: 'Description' },
    { id: 2, title: 'Javascript-2', body: 'Description' },
    { id: 3, title: 'Javascript-3', body: 'Description' }
  ]

  const [posts, setPosts] = useState(initialState);

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const deletePost = (post) => {
    setPosts(posts.filter(el => el.id !== post.id))
  }



  return (
    <div className="App">
      <PostForm create={createPost}/>
      <PostList removePost={deletePost} posts={posts} />
    </div>
  );
}

export default App;
