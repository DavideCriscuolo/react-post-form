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
              if (e.target.value.trim() !== "") {
                setNewPost({ ...newPost, author: e.target.value }); //il trim() rimuove spazi iniziali e finali, quindi se il valore è solo un spazio vuoto non verrà aggiornato lo stato.
              }
            }}
          />

          <div>
            <label htmlFor="">inserisci il titolo </label>
            <input
              className="form-control"
              type="text"
              value={newPost.title}
              onChange={(e) => {
                if (e.target.value.trim() !== "") {
                  setNewPost({ ...newPost, title: e.target.value }); //il trim() rimuove spazi iniziali e finali, quindi se il valore è solo un spazio vuoto non verrà aggiornato lo stato.
                }
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
                if (e.target.value.trim() !== "") {
                  setNewPost({ ...newPost, body: e.target.value }); //il trim() rimuove spazi iniziali e finali, quindi se il valore è solo un spazio vuoto non verrà aggiornato lo stato.
                }
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
