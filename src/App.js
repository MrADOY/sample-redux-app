import { Provider } from "react-redux";
import Counter from "./features/todos/components/Counter";
import store from "./redux/store";

const App = () => {
  return (
    <Provider store={store}>
      <Counter></Counter>
    </Provider>
  );
};

export default App;
