import "./App.css";
import StudentModel from "./component/studentModel";

import { Provider } from "react-redux";
import store from "./redux/store";
import StudentData from "./component/studentData";
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <div className="mt-5">
          <StudentModel name="add" status={false} />

        </div>
        <StudentData />
      </div>
    </Provider>
  );
}

export default App;
