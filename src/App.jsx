import React, { useState } from "react";
//Dovremo creare una nuova app React che contenga un form per creare un nuovo post all’interno di un blog.

const url = "https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts";

function App() {
  const [newPost, setNewPost] = useState({
    author: "",
    title: "",
    body: "",
  });

  function createdPost(e) {
    e.preventDefault();
    if (
      !newPost.author.trim() ||
      !newPost.title.trim() ||
      !newPost.body.trim()
    ) {
      alert("Compila tutti i campi");
      return;
    }
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPost),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setNewPost({ author: "", title: "", body: "" });
        console.log(newPost);
      });
  }
  return (
    <>
      <div className="container p-5">
        <form action="post" onSubmit={createdPost}>
          <label htmlFor="">inserisci nome autore</label>
          <input
            className="form-control"
            type="text"
            value={newPost.author}
            onChange={(e) => {
              setNewPost({ ...newPost, author: e.target.value });
            }}
          />

          <div>
            <label htmlFor="">inserisci il titolo </label>
            <input
              className="form-control"
              type="text"
              value={newPost.title}
              onChange={(e) => {
                setNewPost({ ...newPost, title: e.target.value });
              }}
            />
          </div>

          <div>
            <label htmlFor="">inserisci la descrizione</label>
            <input
              className="form-control"
              type="text"
              value={newPost.body}
              onChange={(e) => {
                setNewPost({ ...newPost, body: e.target.value });
              }}
            />
          </div>

          <button type="submit" className="btn btn-success">
            Salva
          </button>
        </form>
      </div>
    </>
  );
}

export default App;
