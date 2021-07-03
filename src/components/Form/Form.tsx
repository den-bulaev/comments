import React, { ReactElement } from 'react';

import './Form.scss';

export const Form = (): ReactElement => (
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
);
