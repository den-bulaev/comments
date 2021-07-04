import React, {
  ReactElement, useEffect, useState,
} from 'react';

import Form from './components/Form/Form';
import Comments from './components/Comments/Comments';
import Navbar from './components/Navbar/Navbar';

import { getComments } from './api/comments';

import './App.scss';

const step = 3; // commets to display

function App(): ReactElement {
  const [comments, setComments] = useState([]);
  const [isCommentAdded, setCommentAdded] = useState(false);
  const [visibleCommentsAmount, setVisibleCommentsAmount] = useState(step);

  useEffect(() => {
    getComments(30)
      .then((response) => setComments(response));
  }, [isCommentAdded, visibleCommentsAmount]);

  const handleClickMore = () => {
    if (comments.length > visibleCommentsAmount) {
      setVisibleCommentsAmount(visibleCommentsAmount + step);
    }
  };

  const handleClickLess = () => {
    if (visibleCommentsAmount > 0) {
      setVisibleCommentsAmount(visibleCommentsAmount - step);
    }
  };

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

          <Form
            isCommentAdded={isCommentAdded}
            setCommentAdded={setCommentAdded}
          />
        </div>

        <div className="App__block">
          {comments.length > 0 && (
            <>
              <h2 className="subtitle is-2 has-text-primary">
                Comments
              </h2>

              <Comments comments={comments.slice(0, visibleCommentsAmount)} />

              <button
                type="button"
                className="button is-primary App__comments-show-button"
                onClick={handleClickMore}
              >
                Show more
              </button>

              <button
                type="button"
                className="button is-primary App__comments-show-button"
                onClick={handleClickLess}
              >
                Show less
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
