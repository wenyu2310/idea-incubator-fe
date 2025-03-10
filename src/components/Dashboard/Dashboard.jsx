import { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';
import { Link } from 'react-router-dom';
import User from '../../assets/user.svg';

const Dashboard = ({ ideas }) => {
    const { user } = useContext(UserContext);

    const bgColors = [
      "bg-violet-100 hover:violet-400",
      "bg-lime-100 hover:bg-lime-300",
      "bg-yellow-100 hover:bg-amber-200",
      "bg-purple-50 hover:bg-purple-300",
  ];

    return (
        <main className="pt-40 p-4">
            <div className="fixed top-27 left-1/2 -translate-x-1/2 z-40">
                <Link
                    to="/ideas/new"
                    className="py-3 px-6 text-lg rounded-full text-white font-bold bg-gradient-to-b from-violet-200 to-lime-300 hover:from-violet-400 hover:to-lime-600"
                    >
                    + Share a new idea
                </Link>
            </div>
            <div className="w-full mx-auto h-0.5 bg-gradient-to-r from-transparent via-lime-400 to-transparent my-6"></div>
            <div className="text-center">
                <h1>Welcome, <span className="font-bold">{user.username}</span></h1>
                <p>This is the dashboard page where you can see a list of all ideas sorted by their popularity</p>
            </div>
            <br />
            <div className="mx-auto w-fit"> {/* Added container div with mx-auto and w-fit */}
                <h1 className="text-3xl font-bold mt-8 text-center">Top Ideas</h1>
                <div className="flex flex-row space-x-6 overflow-x-auto mt-8 justify-center"> {/* Added justify-center */}
                    {ideas
                        .map((idea) => ({
                            ...idea,
                            likesCount: idea.reactions.filter((reaction) => reaction.type === "Like").length,
                        }))
                        .sort((a, b) => b.likesCount - a.likesCount)
                        .slice(0, 5)
                        .map((idea, index) => {
                            const bgColor = bgColors[index % bgColors.length];
                            return (
                                <Link
                                    to={`/ideas/${idea._id}`}
                                    key={idea._id}
                                    className={`block ${bgColor} text-black p-6 rounded-xl shadow-md transition duration-200 w-[250px] min-h-[250px] flex flex-col justify-between`}
                                >
                                    <h3 className="font-bold text-lg mb-2 overflow-hidden whitespace-wrap text-ellipsis">
                                        {idea.title}
                                    </h3>
                                    <p className="text-sm text-gray-700 mb-1">{idea.likesCount} Likes</p>
                                    <p className="text-sm text-gray-700 mb-3">{idea.comments.length} Comments</p>
                                    <div className="border-t border-gray-300 pt-3 text-sm text-gray-600 flex flex-col items-center">
                                        <span className="flex items-center gap-1">
                                            <img src={User} alt='icon' className='h-8 p-1' />
                                            {idea.anonymity === "Non-Anonymous" ? idea.author.username : "Anonymous"}
                                        </span>
                                        <span className="text-xs mt-1">
                                            {new Date(idea.createdAt).toLocaleDateString()}
                                        </span>
                                    </div>
                                </Link>
                            );
                        })}
                </div>
            </div>
        </main>
    );
};

export default Dashboard;