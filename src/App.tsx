import React, { ReactElement, useEffect, useState } from 'react';

import Form from './components/Form/Form';
import Comments from './components/Comments/Comments';
import Navbar from './components/Navbar/Navbar';

import { getComments } from './api/comments';

import './App.scss';

function App(): ReactElement {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getComments(30)
      .then((response) => setComments(response));
  }, []);

  return (
    <main className="App">
      <h1 className="title is-1 has-text-primary">
        Simple app
      </h1>

      <section className="section App__container">
        <div className="App__block">
          <h2 className="subtitle is-2 has-text-primary">
            Add new comment
          </h2>

          <Form />
        </div>

        <div className="App__block">
          {comments.length > 0 && (
            <>
              <h2 className="subtitle is-2 has-text-primary">
                Comments
              </h2>

              <Comments comments={comments} />

              <button
                type="button"
                className="button is-primary App__show-more-button"
              >
                Show more
              </button>

              <Navbar />
            </>
          )}
        </div>
      </section>
    </main>
  );
}

export default App;
