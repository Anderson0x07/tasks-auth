import { useForm } from 'react-hook-form'
import { registerRequest } from '../api/auth'

function RegisterPage() {

    const { register, handleSubmit } = useForm()

    const onSubmit = handleSubmit(async (values) => {
        const res = await registerRequest(values)
        console.log(res)
    })

    return (
        <div className='bg-zinc-800 max-w-md p-10 rounded-md'>
            <form onSubmit={onSubmit}>
                <input type="text" name="username" className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
                    placeholder='Username' {...register("username", { required: true })}
                />
                <input type="email" name="email" className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
                    placeholder='Email' {...register("email", { required: true })}
                />
                <input type="password" name="password" className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
                    placeholder='Password' {...register("password", { required: true })}
                />

                <button type='submit'>Register</button>
            </form>
        </div>
    )
}

export default RegisterPage