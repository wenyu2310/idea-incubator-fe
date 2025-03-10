import { Link } from "react-router-dom";
import User from '../../assets/user.svg';
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

const IdeaList = ({ ideas }) => {
    const { user } = useContext(UserContext);

    const bgColors = [
        "bg-violet-100 hover:violet-400",
        "bg-lime-100 hover:bg-lime-300",
        "bg-yellow-100 hover:bg-amber-200",
        "bg-purple-50 hover:bg-purple-300",
    ];

    return (
        <main className="bg-white">
            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="fixed top-27 left-1/2 -translate-x-1/2 z-40">
                    {user && (
                 
                        <Link
                            to="/ideas/new"
                            className="py-3 px-6 text-lg rounded-full text-white text-bold bg-gradient-to-b from-violet-200 to-lime-300 hover:from-violet-400 hover:to-lime-600"
                        >
                            + Share a new idea
                        </Link>
                    )}
                </div>
                
                <hr className="w-full mx-auto border-lime-400 border-2 my-6" />
                <div className="pt-32">
                  <div className="w-3/3 mx-auto h-0.5 bg-gradient-to-r from-transparent via-lime-400 to-transparent my-6"></div>
                    <h1 className="text-3xl font-bold mb-6 text-center">All Ideas</h1>
                    <div className="grid grid-cols-5 gap-8"> {/* Changed gap-5 to gap-8 */}
                        {ideas?.map((idea, index) => {
                            const likesCount = idea?.reactions?.filter((reaction) => reaction.type === "Like").length || 0;
                            const dislikesCount = idea?.reactions?.filter((reaction) => reaction.type === "Dislike").length || 0;
                            const bgColor = bgColors[index % bgColors.length];

                            return (
                                <Link
                                    to={`/ideas/${idea?._id}`}
                                    key={idea?._id}
                                    className={`block ${bgColor} text-black p-6 rounded-xl shadow-md transition duration-200 w-[250px] min-h-[250px] flex flex-col justify-between`}
                                >
                                    <h3 className="font-bold text-lg mb-2 overflow-hidden whitespace-wrap text-ellipsis">{idea?.title}</h3>
                                    <p className="text-sm text-gray-700 mb-1">
                                        {likesCount} Likes • {dislikesCount} Dislikes
                                    </p>
                                    <p className="text-sm text-gray-700 mb-3">
                                        {idea?.comments?.length || 0} Comments
                                    </p>
                                    <div className="border-t border-gray-300 pt-3 text-sm text-gray-600 flex flex-col items-center">
                                        <span className="flex items-center gap-1">
                                            <img src={User} alt='icon' className='h-8 p-1' />
                                            {idea?.anonymity === "Non-Anonymous" ? idea?.author?.username : "Anonymous"}
                                        </span>
                                        <span className="text-xs mt-1">
                                            {new Date(idea?.createdAt).toLocaleDateString()}
                                        </span>
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </div>
        </main>
    );
};

export default IdeaList;