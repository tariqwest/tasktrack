export const TASKS_REQUEST = 'TASKS_REQUEST';
export const TASKS_SUCCESS = 'TASKS_SUCCESS';
export const TASKS_FAILURE = 'TASKS_FAILURE';
export const TASKS_CREATE_REQUEST = 'TASKS_CREATE_REQUEST';
export const TASKS_CREATE_SUCCESS = 'TASKS_CREATE_SUCCESSS';
export const TASKS_CREATE_FAILURE = 'TASKS_CREATE_FAILURE';
export const TASKS_UPDATE_REQUEST = 'TASKS_UPDATE_REQUEST';
export const TASKS_UPDATE_SUCCESS = 'TASKS_UPDATE_SUCCESS';
export const TASKS_UPDATE_FAILURE = 'TASKS_UPDATE_FAILURE';
export const TASKS_DELETE_REQUEST = 'TASKS_DELETE_REQUEST';
export const TASKS_DELETE_SUCCESS = 'TASKS_DELETE_SUCCESS';
export const TASKS_DELETE_FAILURE = 'TASKS_DELETE_FAILURE';

export const requestUserTasks = () => ({
  type: TASKS_REQUEST,
});

export const receiveUserTasks = tasks => ({
  type: TASKS_SUCCESS,
  tasks,
});

export const userTasksError = message => ({
  type: TASKS_FAILURE,
  message,
});

export const getUserTasks = userId => (dispatch) => {
  dispatch(requestUserTasks());
  return fetch(`/api/tasks/?userId=${userId}`)
    .then((response) => {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response;
    })
    .then(res => res.json())
    .then((json) => {
      dispatch(receiveUserTasks(json));
    })
    .catch(err => dispatch(userTasksError(err.message)));
};

export const requestCreateTask = () => ({
  type: TASKS_CREATE_REQUEST,
});

export const confirmCreateTask = userInfo => ({
  type: TASKS_CREATE_SUCCESS,
  userInfo,
});

export const createTaskError = message => ({
  type: TASKS_CREATE_FAILURE,
  message,
});


export const createTask = (task, userId) => (dispatch) => {
  dispatch(requestCreateTask());

  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };

  const options = {
    method: 'POST',
    body: JSON.stringify(task),
    headers,
  };

  return fetch('/api/tasks/', options)
    .then(res => res.text())
    .then(json => {
      console.log(json);
      dispatch((getUserTasks(userId)));
    });
};

export const requestUpdateTask = () => ({
  type: TASKS_UPDATE_REQUEST,
});

export const confirmUpdateTask = userInfo => ({
  type: TASKS_UPDATE_SUCCESS,
  userInfo,
});

export const updateTaskError = message => ({
  type: TASKS_UPDATE_FAILURE,
  message,
});


export const updateTask = (task, userId) => (dispatch) => {
  dispatch(requestUpdateTask());

  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };

  const options = {
    method: 'PUT',
    body: JSON.stringify(task),
    headers,
  };

  return fetch('/api/tasks/', options)
    .then(res => res.text())
    .then(json => {
      console.log(json);
      dispatch((getUserTasks(userId)));
    });
};
