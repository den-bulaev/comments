import React, { ReactElement, FC } from 'react';

import './Comments.scss';

type TComment = {
  id: number,
  name: string,
  text: string,
  visible: number,
  'product_id': number,
  'created_at': string,
  'updated_at': string,
}

type Props = {
  comments: Array<TComment>,
}

const Comments: FC<Props> = ({ comments }): ReactElement => (
  <ul className="Comments">
    {comments.map(({ id, name, text }) => (
      <li key={id} className="box Comments__item">
        <p className="block">
          <strong className="has-text-primary">Name: </strong>
          <span>{name}</span>
        </p>

        <strong className="has-text-primary">Text:</strong>

        <p className="block">
          {text}
        </p>
      </li>
    ))}
  </ul>
);

export default React.memo(Comments);
