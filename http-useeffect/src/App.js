import { Link, Route, Switch } from "react-router-dom";
import Home from "./Home";
import AboutUsComponent from "./AboutUs";
import NotFound from "./404";
import ToDoItemComponent from "./ToDoItem";

export default function App(){
  
    return(
        <div>
            <nav className="nav navbar-expand-lg bg-light">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to="/" className="nav-link">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/pending" className="nav-link">Pending</Link></li>
                    <li className="nav-item">
                        <Link to="/aboutus" className="nav-link">About Us</Link></li>
                </ul>
            </nav>
            <div>
                <Switch>
                    <Route path="/" exact 
                    component={Home} />
                    <Route path="/aboutus" exact 
                    component={AboutUsComponent} />
                    <Route path="/todo/:id" exact 
                    component={ToDoItemComponent} />
                    <Route path="*" 
                    component={NotFound}></Route>
                </Switch>
            </div>
        </div>
    )
}