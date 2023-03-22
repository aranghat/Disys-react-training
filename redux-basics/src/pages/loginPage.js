import {useForm} from 'react-hook-form'

export default function LoginPage()
{
 
    const {register, handleSubmit, formState: { errors,dirtyFields }} 
    = useForm({mode : "onBlur"});

    function onFormSubmit(data)
    {
        console.debug(errors);
        console.debug(data);
    }

    return(
        <div className="container">
            <form onSubmit={handleSubmit(onFormSubmit)}>
                <div className="form-group">
                    <label for="username">Email</label>
                    <input type="text" 
                            id="username" 
                            name='username'
                            className={"form-control " +
                            (errors.username ? "is-invalid" : 
                             (dirtyFields.username == true ? "is-valid" : ""))
                            }
                            placeholder="Enter your email"
                            {...register("username",{
                                minLength : 5,
                                maxLength : 20,
                                required: true,
                                pattern: /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/
                            })}
                            />
                     {errors.username?.type  == "required" && <p className="text-danger">Email is mandatory</p>}
                     {errors.username?.type == "minLength" && <p className="text-danger">Email must be at least 5 characters</p>}
                     {errors.username?.type == "maxLength" && <p className="text-danger">Email must be at most 20 characters</p>}
                     {errors.username?.type == "pattern" && <p className="text-danger">Invalid Email Address</p>}

                </div>
                <div className="form-group">
                    <label for="password">Password</label>
                    <input type="password" 
                            className="form-control"
                            name="password"
                            id="password" 
                            {...register("password",{})}
                            placeholder="Enter your password" />
                </div>
                <button type="submit" className="btn btn-primary mt-3">Login</button>
            </form>
        </div>
    )
}