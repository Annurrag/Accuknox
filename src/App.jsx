import { Provider } from "react-redux";
import Header from "./Components/Header";
import Dashboard from "./Components/Dashboard";
import { store } from "./store";

function App() {
  return (
    <Provider store={store}>
      <div>
        <Header />
        <Dashboard />
      </div>
    </Provider>
  );
}

export default App;
