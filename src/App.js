import "./App.css";
import Head from "./components/Head";
import Body from "./components/Body";
import { Provider } from "react-redux";
import store from "./utils/store";

function App() {
  return (

    <Provider store={store}>
    <div className="App">
      <Head />
      <Body />
    </div>
    </Provider>
  );
}

export default App;

/// Head
//Body-
//Sidebar
//Menu Items
//Main Container
//ButtonsList
//Vedio Container
//Vedio Card
