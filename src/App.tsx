/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { ReactElement } from 'react';
import './App.scss';

function App(): ReactElement {
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

          <form className="Form">
            <input
              type="text"
              className="input is-primary"
              name="name"
              placeholder="Type name"
              required
            />

            <textarea
              className="textarea is-primary"
              name="comment"
              placeholder="Type comment"
              required
            />

            <button
              type="submit"
              className="button is-outlined is-primary Form--button"
            >
              Add
            </button>
          </form>
        </div>

        <div className="App__block">
          <h2 className="subtitle is-2 has-text-primary">
            Comments
          </h2>

          <ul className="Comments">
            <li className="box Comments__item">
              <p className="block">
                <strong className="has-text-primary">Name: </strong>
                <span>Bodya</span>
              </p>

              <strong className="has-text-primary">Text:</strong>

              <p className="block">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero,
              </p>
            </li>

            <li className="box Comments__item">
              <p className="block">
                <strong className="has-text-primary">Name: </strong>
                <span>Bodya</span>
              </p>

              <strong className="has-text-primary">Text:</strong>

              <p className="block">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero,
              </p>
            </li>

            <li className="box Comments__item">
              <p className="block">
                <strong className="has-text-primary">Name: </strong>
                <span>Bodya</span>
              </p>

              <strong className="has-text-primary">Text:</strong>

              <p className="block">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero,
              </p>
            </li>

            <li className="box Comments__item">
              <p className="block">
                <strong className="has-text-primary">Name: </strong>
                <span>Bodya</span>
              </p>

              <strong className="has-text-primary">Text:</strong>

              <p className="block">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero,
              </p>
            </li>

            <li className="box Comments__item">
              <p className="block">
                <strong className="has-text-primary">Name: </strong>
                <span>Bodya</span>
              </p>

              <strong className="has-text-primary">Text:</strong>

              <p className="block">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero,
              </p>
            </li>

            <li className="box Comments__item">
              <p className="block">
                <strong className="has-text-primary">Name: </strong>
                <span>Bodya</span>
              </p>

              <strong className="has-text-primary">Text:</strong>

              <p className="block">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero,
              </p>
            </li>

            <li className="box Comments__item">
              <p className="block">
                <strong className="has-text-primary">Name: </strong>
                <span>Bodya</span>
              </p>

              <strong className="has-text-primary">Text:</strong>

              <p className="block">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero,
              </p>
            </li>

            <li className="box Comments__item">
              <p className="block">
                <strong className="has-text-primary">Name: </strong>
                <span>Bodya</span>
              </p>

              <strong className="has-text-primary">Text:</strong>

              <p className="block">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero,
              </p>
            </li>

            <li className="box Comments__item">
              <p className="block">
                <strong className="has-text-primary">Name: </strong>
                <span>Bodya</span>
              </p>

              <strong className="has-text-primary">Text:</strong>

              <p className="block">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero,
              </p>
            </li>

            <li className="box Comments__item">
              <p className="block">
                <strong className="has-text-primary">Name: </strong>
                <span>Bodya</span>
              </p>

              <strong className="has-text-primary">Text:</strong>

              <p className="block">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero,
              </p>
            </li>
          </ul>

          <button
            type="button"
            className="button is-primary is-outlined App__show-more-button"
          >
            Show more
          </button>

          <nav
            className="pagination Navbar"
            role="navigation"
            aria-label="pagination"
          >
            <a className="pagination-previous">Previous</a>
            <a className="pagination-next">Next page</a>

            <ul className="pagination-list">
              <li>
                <a
                  className="pagination-link"
                  aria-label="Goto page 1"
                >
                  1
                </a>
              </li>

              <li>
                <span className="pagination-ellipsis">&hellip;</span>
              </li>

              <li>
                <a
                  className="pagination-link is-current"
                  aria-label="Page 46"
                  aria-current="page"
                >
                  46
                </a>
              </li>

              <li>
                <span className="pagination-ellipsis">&hellip;</span>
              </li>

              <li>
                <a
                  className="pagination-link"
                  aria-label="Goto page 86"
                >
                  86
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </section>
    </main>
  );
}

export default App;
