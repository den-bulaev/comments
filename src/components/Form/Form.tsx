import React, { ReactElement, useState } from 'react';

import { addComment } from '../../api/comments';

import './Form.scss';

const Form = (): ReactElement => {
  const [username, setUserName] = useState('');
  const [commentText, setCommentText] = useState('');

  const handleChangeSetName = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fieldValue = e.target.value;

    setUserName(fieldValue);
  };

  const handleChangeSetText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const fieldValue = e.target.value;

    setCommentText(fieldValue);
  };

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    const options = {
      method: 'POST',
      body: JSON.stringify({
        name: username,
        text: commentText,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    };

    e.preventDefault();

    addComment(30, options);

    setUserName('');
    setCommentText('');
  };

  return (
    <form className="Form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="input is-primary"
        name="name"
        placeholder="Type name"
        required
        value={username}
        onChange={handleChangeSetName}
      />

      <textarea
        className="textarea is-primary"
        name="comment"
        placeholder="Type comment"
        required
        value={commentText}
        onChange={handleChangeSetText}
      />

      <button
        type="submit"
        className="button is-primary Form--button"
      >
        Add
      </button>
    </form>
  );
};

export default React.memo(Form);
