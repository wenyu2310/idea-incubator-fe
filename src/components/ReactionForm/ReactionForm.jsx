import { useState } from 'react';
import * as ideaService from '../../services/ideaService';
import { useParams, useNavigate } from 'react-router';

const ReactionForm = (props) => {
    const [formData, setFormData] = useState({
        type: "Like", //default setting
    });
    const [voted,setVoted] = useState(false)

    const navigate = useNavigate();

    const handleChange = (evt) => {
        setFormData({ ...formData, [evt.target.name]: evt.target.value });
    };

    const { ideaId, likeId } = useParams();

    const handleSubmit = (evt) => {
        evt.preventDefault();
        props.handleAddReaction(formData);
        navigate(`/ideas/${ideaId}`);
        setVoted(true)
    };

    return (
        // <form onSubmit={handleSubmit} className="flex flex-col items-center">
        //     <div className="flex items-center space-x-2 mb-2">
        //         <label htmlFor='reaction-input'>Like / Dislike: </label>
        //         <select
        //             required
        //             name='type'
        //             id='reaction-input'
        //             value={formData.type}
        //             onChange={handleChange}
        //             className="border border-gray-400 p-2 rounded-md focus:outline-none focus:ring focus:border-blue-300" // Solid border
        //         >
        //             <p>{voted?'you have voted, cant voted again' : ``}</p>
        //                 <option value='Like'>Like ❤️️</option>
        //             <option value='Dislike'>Dislike👎</option>          
        //         </select>
        //     </div>
        //     <button type='submit' className="bg-lime-600 hover:bg-lime-700 text-white font-bold py-2 px-4 rounded-full border border-lime-600"> {/* Solid button border */}
        //         SUBMIT
        //     </button>
        // </form>
        
        <form onSubmit={handleSubmit} className="flex flex-col items-center">
        <div className="flex items-center space-x-2 mb-2">
            <label htmlFor='reaction-input'>Like / Dislike: </label>
            <select
                required
                name='type'
                id='reaction-input'
                value={formData.type}
                onChange={handleChange}
                className="border border-gray-400 p-2 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                disabled={voted}
            >
                <option value='Like'>Like ❤️️</option>
                <option value='Dislike'>Dislike 👎</option>          
            </select>
        </div>
        {voted ? <p className='font-bold mt-2'>You have voted, can't vote again</p> : null}
        <button 
            type='submit' 
            className="bg-lime-600 hover:bg-lime-700 text-white font-bold py-2 px-4 rounded-full border border-lime-600 mt-4"
            disabled={voted}
        > 
            SUBMIT
        </button>
    </form>
    );
};

export default ReactionForm;