import { useState } from "react";
import CreatePost from "../componetns/CreatePost";
import Footer from "../componetns/Footer";
import Header from "../componetns/Header";
import HomePost from "../componetns/HomePost";
import PostList from "../componetns/PostList";
import Sidebar from "../componetns/Sidebar";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Postsliststore from "../store/Posts-list-store";

function App() {
  const [selectedtab, setselectedtab] = useState("Home");
  return (
    <Postsliststore>
      <div className="app-container">
        <Sidebar selectedtab={selectedtab} setselectedtab={setselectedtab} />
        <div className="content">
          <Header />
          {selectedtab === "Home" ? <PostList /> : <CreatePost />}

          <Footer />
        </div>
      </div>
    </Postsliststore>
  );
}

export default App;
