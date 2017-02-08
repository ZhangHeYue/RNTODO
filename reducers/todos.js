const REMOVE = 'todos/REMOVE';
const CHANGE = 'todos/CHANGE';
const CREATE = 'todos/CREATE';

export const removeTodo = (id) => {
  return (dispatch, getState) => {
    const items = getState().todos.items.filter(todo => todo.id !== id);

    dispatch({ type: REMOVE, payload: items });
  };
};

export const changeTodo = (id) => {
  return (dispatch, getState) => {
    const items = getState().todos.items.map((todo) => {
      return todo.id === id ? { ...todo, finished: !todo.finished } : todo;
    });

    dispatch({ type: CHANGE, payload: items });
  };
};

export const createTodo = (todo) => {
  return (dispatch, getState) => {
    const id = Date.now() + Math.random().toString().substr(2, 3);
    const newItem = { ...todo, id, createdAt: new Date().toString(), isFinish: false };
    const items = getState().todos.items.concat(newItem);

    dispatch({ type: CREATE, payload: items });
  };
};

const _initialState = () => {
  return {
    items: [],
  };
};

const reducer = (state = _initialState(), action) => {
  switch (action.type) {
    case REMOVE:
    case CREATE:
    case CHANGE: {
      return { items: action.payload };
    }
    default:
      return state;
  }
};

export default reducer;
