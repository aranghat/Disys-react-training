import { Route, Switch } from "react-router-dom";
import TopNavigationBar from "./layouts/top-nav-bar";
import ProductListPage from "./pages/productlistpage";



function App() {
  return (
    <div>
        <TopNavigationBar></TopNavigationBar>
        <Switch>
          <Route path="/" exact component={ProductListPage}></Route>
          <Route path="/cart" exact component={ProductListPage}></Route>
          <Route path="/orders" exact component={ProductListPage}></Route>
          <Route path="/login" exact component={ProductListPage}></Route>
        </Switch>
    </div>
  );
}

export default App;
