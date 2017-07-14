import {
   TASKS_REQUEST,
   TASKS_SUCCESS,
   TASKS_FAILURE,
   TASKS_CREATE_REQUEST,
   TASKS_CREATE_SUCCESS,
   TASKS_CREATE_FAILURE,
   TASKS_UPDATE_REQUEST,
   TASKS_UPDATE_SUCCESSS,
   TASKS_UPDATE_FAILURE,
   TASKS_DELETE_REQUEST,
   TASKS_DELETE_SUCCESSS,
   TASKS_DELETE_FAILURE,
} from '../actions';

const task = (state = {
  tasks: [],
  isFetching: false,
  errorMessage: '',
}, action) => {
  switch (action.type) {
    case TASKS_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case TASKS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        errorMessage: null,
        tasks: action.tasks,
      };
    case TASKS_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.errorMesage,
      };
    case TASKS_CREATE_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case TASKS_CREATE_SUCCESS:
      return {
        ...state,
        isFetching: false,
        errorMessage: null,
      };
    case TASKS_CREATE_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.errorMesage,
      };
    default:
      return state;
  }
};

export default task;
