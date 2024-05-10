import { Link, NavLink } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

const NavBar = () => {

    const { user, logOut } = useAuth();

    const links = <>
        <li> <NavLink to='/'>Home</NavLink></li>
        <li> <NavLink to='/addBook'>Add Book</NavLink></li>
        <li> <NavLink to='/allBooks'>All Books</NavLink></li>
        <li> <NavLink to='/borrowedBooks'>Borrowed Books</NavLink></li>
        <li> <NavLink to='/profile'>Profile</NavLink></li>
         
    </>


    const handleLogOut = () => {
        logOut()
            .then()
            .catch()
    }

    return (
        <div className="shadow-xl">
            <div className="navbar bg-base-100 container mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {links}
                        </ul>
                    </div>
                    <Link to='/' className="btn btn-ghost md:text-xl">School Library</Link>
                     
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ? <div className="flex   gap-3  ">

                            <div className="tooltip tooltip-bottom" data-tip={user?. displayName}>
                                <img className="w-12 h-12 rounded-full bg-white" alt="" src={user?.photoURL}
                                />
                            </div>
                            <button onClick={handleLogOut} className="btn font-bold  ">Log Out</button> </div>

                            : <div className="flex gap-4">
                                <Link to='/login' className="btn font-bold  ">Login</Link>
                                <Link to='/register' className="btn font-bold  ">Register</Link>
                            </div>
                    }

                </div>
            </div>

        </div>
    );
};

export default NavBar;