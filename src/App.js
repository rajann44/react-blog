import { Route, Routes } from "react-router-dom";
import "./App.css";
import CreatePost from "./components/CreatePost";
import PostsList from "./components/PostsList";

function App() {
  return (
    <Routes>
      <Route path="/" element={<PostsList></PostsList>}></Route>
      <Route path="/create" element={<CreatePost></CreatePost>}></Route>
    </Routes>
  );
}

export default App;
