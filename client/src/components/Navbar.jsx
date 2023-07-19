import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "../context/AuthContext"
import { Button, Navbar } from 'flowbite-react';

function Nav(props) {

    const urlImage = 'https://raw.githubusercontent.com/Anderson0x07/tasks-auth/main/client/src/assets/'

    const navigate = useNavigate();

    const { isAuthenticated, user, logout } = useAuth()

    return (
        <>

            <Navbar fluid rounded className="mb-5" >
                <Link to={isAuthenticated ? '/tasks' : '/'}>
                    <Navbar.Brand >
                        <img
                            alt="Logo"
                            className="mr-3 h-6 sm:h-9"
                            src={urlImage + 'task_manager.png'}
                        />
                        <span className="self-center whitespace-nowrap text-xl font-semibold text-black dark:text-white ">
                            Tasks Manager
                        </span>
                    </Navbar.Brand>
                </Link>

                <Navbar.Toggle />
                <Navbar.Collapse >

                    {
                        isAuthenticated ? (
                            <>
                                <li className="pt-2.5 cursor-pointer">

                                    <Navbar.Link onClick={() => { navigate('/tasks') }}>
                                        Welcome {user.username}
                                    </Navbar.Link>
                                </li>
                                <li className="pt-2.5 cursor-pointer">
                                    <Navbar.Link active onClick={() => { navigate('/add-task') }}>
                                        Add Task
                                    </Navbar.Link>
                                </li>
                                <li className="pt-2.5 cursor-pointer">
                                    <Navbar.Link onClick={() => logout()}>
                                        Logout
                                    </Navbar.Link>
                                </li>
                            </>
                        ) : (
                            <>
                                <li className="pt-2.5 cursor-pointer">
                                    <Navbar.Link active onClick={() => { navigate('/login') }}>
                                        Login
                                    </Navbar.Link>
                                </li>
                                <li className="pt-2.5 cursor-pointer">

                                    <Navbar.Link onClick={() => { navigate('/register') }}>
                                        Register
                                    </Navbar.Link>
                                </li>


                            </>
                        )
                    }
                    <Navbar.Link >
                        {props.dark}
                    </Navbar.Link>

                </Navbar.Collapse >
            </Navbar >

        </>
    )
}

export default Nav