export default function LoginPage()
{
    return(
        <div className="container">
            <div className="form-group">
                <label for="username">Email</label>
                <input type="text" 
                        id="username" 
                        className="form-control"
                        placeholder="Enter your email" />
            </div>
            <div className="form-group">
                <label for="password">Password</label>
                <input type="password" 
                        className="form-control"
                        id="username" 
                        placeholder="Enter your password" />
            </div>
            <button type="submit" className="btn btn-primary mt-3">Login</button>
        </div>
    )
}