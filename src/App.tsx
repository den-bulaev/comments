/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { ReactElement } from 'react';

import { Form } from './components/Form/Form';
import { Comments } from './components/Comments/Comments';
import { Navbar } from './components/Navbar/Navbar';

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

          <Form />
        </div>

        <div className="App__block">
          <h2 className="subtitle is-2 has-text-primary">
            Comments
          </h2>

          <Comments />

          <button
            type="button"
            className="button is-primary is-outlined App__show-more-button"
          >
            Show more
          </button>

          <Navbar />
        </div>
      </section>
    </main>
  );
}

export default App;
