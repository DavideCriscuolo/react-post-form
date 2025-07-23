import { useState } from "react";
//Dovremo creare una nuova app React che contenga un form per creare un nuovo post all’interno di un blog.
import "./App.css";

const url = "https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts";
const [newPost, setNewPost] = useState({
  author: "",
  title: "",
  body: "",
  pubblic: null,
});

function createdPost() {
  fetch(url)
    .then((res) => res.json())
    .the(data);
  setNewPost(newPost);
}

function App() {
  return <></>;
}

export default App;
