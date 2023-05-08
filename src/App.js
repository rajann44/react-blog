import { Route, Routes } from "react-router-dom";
import "./App.css";
import CreatePost from "./components/CreatePost";
import Navbar from "./components/Navbar";
import PostsList from "./components/PostsList";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<PostsList></PostsList>}></Route>
        <Route path="/create" element={<CreatePost></CreatePost>}></Route>
      </Routes>
    </>
  );
}

export default App;
