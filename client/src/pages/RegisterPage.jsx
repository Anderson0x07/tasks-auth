import { useForm } from 'react-hook-form'
import { useAuth } from '../context/AuthContext'
import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function RegisterPage() {

    const { register, handleSubmit, formState: {
        errors
    } } = useForm()

    const { signUp, isAuthenticated, errors: registerErrors } = useAuth();

    const navigate = useNavigate();

    useEffect(() => {
        if (isAuthenticated) navigate('/tasks')
    }, [isAuthenticated])

    const onSubmit = handleSubmit((values) => {
        signUp(values)
    })

    return (
        <div className='flex h-[calc(100vh-200px)] items-center justify-center'>

            <div className='max-w-sm p-10 rounded-md border border-black dark:bg-zinc-800 dark:text-white'>
                {
                    registerErrors.map((err, i) => (
                        <div key={i} className='bg-red-500 p-2 text-white text-center'>
                            {err}
                        </div>
                    ))
                }

                <h1 className="text-3xl font-bold my-3">Register</h1>

                <form onSubmit={onSubmit}>
                    <input type="text" name="username" className='w-full dark:bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
                        placeholder='Username' {...register("username", { required: true })}
                    />
                    {
                        errors.username && <p className='text-red-500'>Username is required</p>
                    }
                    <input type="email" name="email" className='w-full dark:bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
                        placeholder='Email' {...register("email", { required: true })}
                    />
                    {
                        errors.email && <p className='text-red-500'>Email is required</p>
                    }
                    <input type="password" name="password" className='w-full dark:bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
                        placeholder='Password' {...register("password", { required: true })}
                    />
                    {
                        errors.password && <p className='text-red-500'>Password is required</p>
                    }

                    <button className="bg-sky-500 hover:bg-sky-600 text-white px-4 py-2 rounded-md my-2" type='submit'>Register</button>
                </form>
                <p className='flex gap-x-2 justify-between'>
                    Already have an account? <Link className='text-sky-500' to="/login">Login</Link>
                </p>
            </div>
        </div>
    )
}

export default RegisterPage