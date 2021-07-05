import React, {
  FC, useEffect, useState,
} from 'react';

import Form from './components/Form/Form';
import Comments from './components/Comments/Comments';
import Navbar from './components/Navbar/Navbar';

import { getComments } from './api/comments';

import './App.scss';

const step = 3; // comments to display

const App: FC = () => {
  const [comments, setComments] = useState([]);
  const [isCommentAdded, setCommentAdded] = useState(false);
  const [visibleCommentsAmount, setVisibleCommentsAmount] = useState(step);
  const [currentPage, setCurrentPage] = useState(1);
  const [pagesAmount, setPagesAmount] = useState(0);

  useEffect(() => {
    getComments(30, currentPage)
      .then((response) => {
        setComments(response.data);
        setPagesAmount(response.last_page);
      });
  }, [isCommentAdded, visibleCommentsAmount, currentPage]);

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
        Comments app
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

              {visibleCommentsAmount < comments.length && (
                <button
                  type="button"
                  className="button is-primary App__comments-show-button"
                  onClick={handleClickMore}
                >
                  Show more
                </button>
              )}

              {visibleCommentsAmount > 0 && (
                <button
                  type="button"
                  className="button is-primary App__comments-show-button"
                  onClick={handleClickLess}
                >
                  Show less
                </button>
              )}

              <Navbar
                pagesAmount={pagesAmount}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
              />
            </>
          )}
        </div>
      </section>
    </main>
  );
};

export default App;
