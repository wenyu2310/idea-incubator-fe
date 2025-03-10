import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';
import User from '../../assets/user.svg';
import Idea from '../../assets/green-bulb1.svg'

const NavBar = () => {
    const { user, setUser } = useContext(UserContext);

    const handleSignOut = () => {
        localStorage.removeItem('token');
        setUser(null);
    };

    return (
        <nav className="fixed w-full z-0">
            {user ? (
                <div className="navbar bg-base-100 shadow-sm">
                    <div className="navbar-start">
                        <Link to="/" className="btn btn-ghost text-2xl">
                        <img src={Idea} alt="Idea Logo" className="h-10 mr-2" />
                        <p className="text-2xl font-normal text-lime-600 mr-2">Ideas <span className="text-2xl font-bold  mr-2">Incubator</span></p>
                        </Link>
                    </div>
                    <div className="flex space-x-4 items-center">
                        <Link to="/" className="btn btn-ghost">Home</Link>
                        <Link to="/ideas" className="btn btn-ghost">All Ideas</Link>
                        <Link to="/yourideas" className="btn btn-ghost">Your Ideas</Link>
                    </div>

                    <div className="navbar-end flex items-center space-x-4">
                        <img src={User} alt='icon' className='h-8' />
                        <span className="font-bold item">{user.username}</span>
                        <Link
                            to="/"
                            onClick={handleSignOut}
                            className="btn rounded-full bg-lime-600 text-white border-[#4eaa0c]"
                        >
                            Sign out
                        </Link>
                    </div>
                </div>
            ) : (
                <div className="navbar bg-base-100 shadow-sm">
                    <div className="navbar-start">
                        <Link to="/" className="btn btn-ghost text-2xl">
                        <img src={Idea} alt="Idea Logo" className="h-10 mr-2" />
                        <p className="text-2xl font-normal text-lime-600 mr-2">Ideas <a className="text-2xl font-bold  mr-2">Incubator</a></p>
                        </Link>
                    </div>

                    <div className="navbar-end">
                        <Link to="/sign-in" className="btn btn-ghost">Log in</Link>
                        <Link to="/sign-up" className="btn rounded-full bg-lime-600 text-white border-[#4eaa0c]">Sign up</Link> {/* Changed to rounded-full */}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default NavBar;