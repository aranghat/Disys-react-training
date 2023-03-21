import { Link, Route, Switch, useHistory } from "react-router-dom";
import Home from "./Home";
import AboutUsComponent from "./AboutUs";
import NotFound from "./404";
import ToDoItemComponent from "./ToDoItem";
import { GuardProvider, GuardedRoute } from "react-router-guards";
import Login from "./Login";

export default function App(){
  
    let navigator = useHistory();
    function checkIsUserLoggedIn()
    {
        let user = sessionStorage.getItem("user");
        return user != null;
    }

    function checkUserRole(role)
    {
        let savedRole = sessionStorage.getItem("role");
        return savedRole && (savedRole == role);
    }

    function checkUserGaurd(to,from,next){
        if(checkIsUserLoggedIn())
        {
            console.debug(to.meta);
            if(to.meta.role)
            {

                if(checkUserRole(to.meta.role))
                    next();
                else
                    navigator.push("/login");
            }
            else
                 next();
        }
        else
            navigator.push("/login");
    }

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
                <GuardProvider guards={[checkUserGaurd]}>
                    <Switch>
                        <GuardedRoute path="/" exact 
                        component={Home} />
                        <Route path="/aboutus" exact 
                        component={AboutUsComponent} />
                        <GuardedRoute path="/todo/:id" exact 
                        component={ToDoItemComponent}
                        meta={{role : "admin", timing : 12}}
                        />
                        <Route path="/login"
                        exact component={Login}></Route>


                        <Route path="*" 
                        component={NotFound}></Route>
                    </Switch>
                </GuardProvider>
            </div>
        </div>
    )
}