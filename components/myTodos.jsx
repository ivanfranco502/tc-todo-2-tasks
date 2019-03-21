import React, { Component } from 'react';
import PropTypes from 'prop-types';

/*
  1. Implementar el componente Task el cual renderiza
    una tarea (ver data.json) como un LI:
    * Debe mostrar su label 
    * Debe mostrar un checkbox con un estado checked si "done" es true

  2. Implementar un UL en con la lista de tareas utilizando el componente Task
    creado en el punto anterior:
    * se debe mantener el mensaje "Sin Tareas" cuando tasks no esta definidio 
      o no tiene elementos
    * Utilizar el "id" de la tarea como key de cada Task
*/

import Task from './task';
import tasks from '../data.json';

const MyTodos = ({ tasks }) => (
  <div>
    <input type="text" />
    <button>Add</button>
    <br />
    {tasks ? 
      <ul>
        {tasks.map(({id, ...t}) => <Task key={id} {...t} />)}
      </ul>
      :
      'Sin tareas'
    }
  </div>
);

MyTodos.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    done: PropTypes.bool
  }))
  // Mas info https://reactjs.org/docs/typechecking-with-proptypes.html
};

MyTodos.defaultProps = {
  tasks
  // uncomment following line to test no tasks case
  // tasks: []
};

export default MyTodos;