import { Route } from "react-router-dom";
import TopNavigationBar from "./layouts/top-nav-bar";
import ProductListPage from "./pages/productlistpage";



function App() {
  return (
    <div>
        <TopNavigationBar></TopNavigationBar>
        <Route path="/" exact component={ProductListPage}></Route>
    </div>
  );
}

export default App;
