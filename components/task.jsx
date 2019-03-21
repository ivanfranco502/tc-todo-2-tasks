import React from 'react';

const Task = ({label, done}) => (
  <li>
    {label}
    <input type="checkbox" checked={done}/>
  </li>
);

export default Task;
