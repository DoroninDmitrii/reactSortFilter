import "./styles/App.css"
import PostList from "./components/PostList";
import { useMemo, useState } from "react";
import PostForm from "./components/PostForm";
import Myselect from "./components/UI/select/Myselect";
import Myinput from "./components/UI/input/Myinput";

function App() {

  const initialState = [
    { id: 1, title: 'a', body: 'Description' },
    { id: 2, title: 'w', body: 'Description' },
    { id: 3, title: 'c', body: 'Description' }
  ]

  const [posts, setPosts] = useState(initialState);

  const [selectedSort, setSelectedSort] = useState('');

  const [searchQuery, setSearchQuery] = useState('');

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const deletePost = (post) => {
    setPosts(posts.filter(el => el.id !== post.id))
  }

  const sortPosts = (sort) => {
    setSelectedSort(sort)
  }

  const sortedPosts = useMemo(() => {
    if (selectedSort) {
      return [...posts].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]))
    } else {
      return posts;
    }
  }, [selectedSort, posts])

  const sortedAndSearchPosts = useMemo(() => {
    return sortedPosts.filter(item => item.title.toLowerCase().includes(searchQuery))
  }, [searchQuery, sortedPosts])


  return (
    <div className="App">
      <PostForm create={createPost} />
      <hr style={{ margin: "15px" }} />
      <div>
        <Myinput value={searchQuery} onChange={e => setSearchQuery(e.target.value)} placeholder="Find..." />
        <Myselect value={selectedSort} onChange={sortPosts} defaultValue="Sort" options={[
          { value: "title", name: "Name" },
          { value: "body", name: "Description" }
        ]} />
      </div>
      {sortedAndSearchPosts.length !== 0 ? <PostList removePost={deletePost} posts={sortedAndSearchPosts} /> : <h1 style={{ textAlign: "center" }}>There are not posts!</h1>}
    </div>
  );
}

export default App;
