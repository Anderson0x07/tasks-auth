import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

function LoginPage() {

    const { register, handleSubmit, formState: {
        errors
    } } = useForm()

    const { signIn, isAuthenticated, errors: loginErrors } = useAuth();


    const navigate = useNavigate();

    useEffect(() => {
        if (isAuthenticated) navigate('/tasks')
    }, [isAuthenticated])

    const onSubmit = handleSubmit((data) => {
        signIn(data)
    })

    return (
        <div className='flex h-[calc(100vh-100px)] items-center justify-center'>
            <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">

                {
                    loginErrors.map((err, i) => (
                        <div key={i} className='bg-red-500 p-2 my-2 text-white text-center'>
                            {err}
                        </div>
                    ))
                }

                <h1 className="text-3xl font-bold my-3">Login</h1>

                <form onSubmit={onSubmit}>

                    <input type="email" name="email" className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
                        placeholder='Email' {...register("email", { required: true })}
                    />
                    {
                        errors.email && <p className='text-red-500'>Email is required</p>
                    }
                    <input type="password" name="password" className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
                        placeholder='Password' {...register("password", { required: true })}
                    />
                    {
                        errors.password && <p className='text-red-500'>Password is required</p>
                    }

                    <button className="bg-sky-500 hover:bg-sky-600 text-white px-4 py-2 rounded-md my-2" type='submit'>Login</button>
                </form>
                <p className='flex gap-x-2 justify-between'>
                    Don't have an account? <Link className='text-sky-500' to="/register">Sign Up</Link>
                </p>
            </div>
        </div>
    )
}

export default LoginPage