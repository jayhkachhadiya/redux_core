import { createStore, combineReducers } from "redux";

import useReducer from "./reducers/userReducer";
import studentreducer from "./reducers/studentreducer";

const mainRedcer = combineReducers({
  user: useReducer,
  student: studentreducer,
});

const commanData = {
  user: {
    items: [
      {
        id: 1,
        name: "abc",
        email: "abc@gmail.com",
        phone: 788458745,
      }
    ],
  },
  student: {
    id: 1,
    name: "abc",
  },
};

const store = createStore(mainRedcer, commanData);

export default store;
