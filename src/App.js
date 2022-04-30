import "./styles/App.css"
import PostList from "./components/PostList";
import { useState } from "react";
import Mybutton from "./components/UI/button/Mybutton";

function App() {

  const initialState = [
    { id: 1, title: 'Javascript-1', body: 'Description' },
    { id: 2, title: 'Javascript-2', body: 'Description' },
    { id: 3, title: 'Javascript-3', body: 'Description' }
  ]

  const [posts, setPosts] = useState(initialState)


  return (
    <div className="App">
      <form>
        <input type="text" placeholder="Post's name"/>
        <input type="text" placeholder="Post's description"/>
        <Mybutton>Create post</Mybutton>
      </form>
      <PostList posts={posts}/>
    </div>
  );
}

export default App;
