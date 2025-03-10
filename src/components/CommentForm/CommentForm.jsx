import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import * as ideaService from "../../services/ideaService";

const CommentForm = (props) => {
  const { commentId, ideaId } = useParams();
  const [formData, setFormData] = useState({
    text: '',
    anonymity: 'Non-Anonymous',
  });

  const navigate = useNavigate();

  useEffect(() => {
    const fetchIdea = async () => {
      const ideaData = await ideaService.show(ideaId);
      setFormData(ideaData.comments.find((comment) => comment._id === commentId));
    };
    if (ideaId && commentId) fetchIdea();
  }, [ideaId, commentId]);

  const handleChange = (evt) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (ideaId && commentId) {
      ideaService.updateComment(ideaId, commentId, formData);
      navigate(`/ideas/${ideaId}`);
    } else {
      props.handleAddComment(formData);
      setFormData({ text: '', anonymity: 'Non-Anonymous' });
    }
  };

  return (
    <div
      className={`bg-white rounded-lg shadow-md p-6 ${commentId ? 'pt-20' : ''}`} // Conditional padding
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor='text-input' className="block text-sm font-medium text-gray-700">Your comment:</label>
          <textarea
            required
            name='text'
            id='text-input'
            value={formData.text}
            onChange={handleChange}
            rows="4"
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div>
          <label htmlFor='anonymity-input' className="block text-sm font-medium text-gray-700">Anonymity:</label>
          <select
            required
            name='anonymity'
            id='anonymity-input'
            value={formData.anonymity}
            onChange={handleChange}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          >
            <option value='Non-Anonymous'>Non-Anonymous</option>
            <option value='Anonymous'>Anonymous</option>
          </select>
        </div>
        <div className="flex justify-center">
          <button
            type='submit'
            className="bg-lime-600 hover:bg-lime-700 text-white font-bold py-2 px-4 rounded-full"
          >
            SUBMIT COMMENT
          </button>
        </div>
      </form>
    </div>
  );
};

export default CommentForm;