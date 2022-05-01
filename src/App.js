import "./styles/App.css"
import PostList from "./components/PostList";
import { useState } from "react";
import PostForm from "./components/PostForm";
import Myselect from "./components/UI/select/Myselect";

function App() {

  const initialState = [
    { id: 1, title: 'a', body: 'Description' },
    { id: 2, title: 'w', body: 'Description' },
    { id: 3, title: 'c', body: 'Description' }
  ]


  const [posts, setPosts] = useState(initialState);

  const [selectedSort, setSelectedSort] = useState('');

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const deletePost = (post) => {
    setPosts(posts.filter(el => el.id !== post.id))
  }

  const sortPosts = (sort) => {
    // console.log(sort)
    setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])))
  }

  return (
    <div className="App">
      <PostForm create={createPost} />
      <hr style={{ margin: "15px" }} />
      <div>
        <Myselect value={selectedSort} onChange={sortPosts} defaultValue="Sort" options={[
          { value: "title",  name: "Name"},
          { value: "body", name: "Description"}
        ]} />
      </div>
      {posts.length !== 0 ? <PostList removePost={deletePost} posts={posts} /> : <h1 style={{ textAlign: "center" }}>There are not posts!</h1>}
    </div>
  );
}

export default App;
