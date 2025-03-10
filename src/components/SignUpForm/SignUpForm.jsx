import { useState, useContext } from 'react';
import { useNavigate } from 'react-router';
import { signUp } from '../../services/authServices';
import { UserContext } from '../../contexts/UserContext';

const SignUpForm = () => {
    const navigate = useNavigate();
    const { setUser } = useContext(UserContext);
    const [message, setMessage] = useState('');
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        passwordConf: '',
    });

    const { username, password, passwordConf } = formData;

    const handleChange = (evt) => {
        setMessage('');
        setFormData({ ...formData, [evt.target.name]: evt.target.value });
    };

    const handleSubmit = async (evt) => {
        evt.preventDefault();

        if (password !== passwordConf) {
            setMessage("Passwords do not match.");
            return;
        }

        try {
            const newUser = await signUp(formData);
            setUser(newUser);
            navigate('/');
        } catch (err) {
            setMessage(err.message);
        }
    };

    const isFormInvalid = () => {
        return !(username && password && passwordConf);
    };

    return (
        <main className="pt-20">
            <div className="flex justify-center">
                <section className="w-96">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <h1 className="text-3xl font-bold text-center mb-8">Sign Up</h1>
                        <p className="text-red-500 text-center">{message}</p>
                        <div>
                            <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username:</label>
                            <input
                                type="text"
                                id="username"
                                value={username}
                                name="username"
                                onChange={handleChange}
                                required
                                className="mt-1 block w-full border-b-4 border-gray-300 focus:outline-none focus:ring-0"
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password:</label>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                name="password"
                                onChange={handleChange}
                                required
                                className="mt-1 block w-full border-b-4 border-gray-300 focus:outline-none focus:ring-0"
                            />
                        </div>
                        <div>
                            <label htmlFor="confirm" className="block text-sm font-medium text-gray-700">Confirm Password:</label>
                            <input
                                type="password"
                                id="confirm"
                                value={passwordConf}
                                name="passwordConf"
                                onChange={handleChange}
                                required
                                className="mt-1 block w-full border-b-4 border-gray-300 focus:outline-none focus:ring-0"
                            />
                        </div>
                        <div className="flex justify-between mt-8">
                            <button
                                className="btn bg-[#5EBB2B] text-white border-[#4eaa0c]"
                                disabled={isFormInvalid()}
                            >
                                Sign Up
                            </button>
                            <button className="btn btn-ghost" onClick={() => navigate('/')}>
                                Cancel
                            </button>
                        </div>
                    </form>
                </section>
            </div>
        </main>
    );
};

export default SignUpForm;