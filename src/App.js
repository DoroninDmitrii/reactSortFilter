import "./styles/App.css"
import PostList from "./components/PostList";
import { useMemo, useState } from "react";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/MyModal/MyModal";
import Mybutton from "./components/UI/button/Mybutton";

function App() {

  const initialState = [
    { id: 1, title: 'a', body: 'Description' },
    { id: 2, title: 'w', body: 'Description' },
    { id: 3, title: 'c', body: 'Description' }
  ]

  const [posts, setPosts] = useState(initialState);

  const [selectedSort, setSelectedSort] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const [modal, setModal] = useState(false);

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false)
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
      <Mybutton onClick={() => setModal(true)}>Create post</Mybutton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </MyModal>
      <hr style={{ margin: "15px" }} />
      <PostFilter setSearchQuery={setSearchQuery} sortPosts={sortPosts} searchQuery={searchQuery} selectedSort={selectedSort} />
      {sortedAndSearchPosts.length !== 0 ? <PostList removePost={deletePost} posts={sortedAndSearchPosts} /> : <h1 style={{ textAlign: "center" }}>There are not posts!</h1>}
    </div>
  );
}

export default App;
