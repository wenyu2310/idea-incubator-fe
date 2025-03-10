const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/ideas`;

const index = async () => {
    try {
        const res = await fetch (BASE_URL, {
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}`}
        })
        return res.json();
    } catch (error) {
        console.log(error);
    }
};

const show = async(ideaId) => {
    try {
        const res = await fetch(`${BASE_URL}/${ideaId}`, {
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}`},
        });
        return res.json();
    } catch (error) {
        console.log(error);
    }
};

const create = async(ideaFormData) => {
try {

  console.log("BASE_URL in create:", BASE_URL); // Log BASE_URL
  console.log("ideaFormData in create:", ideaFormData); // Log ideaFormData
    const res = await fetch(BASE_URL, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
            'Content-Type': 'application/json',
          },
        body: JSON.stringify(ideaFormData),
    });
    return res.json();
} catch (error) {
    console.log(error);
    }
};

const createComment = async (ideaId, commentFormData) => {
  try {
    const res = await fetch(`${BASE_URL}/${ideaId}/comments`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(commentFormData),
    });
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

const deleteComment = async (ideaId, commentId) => {
  try {
      const res = await fetch(`${BASE_URL}/${ideaId}/comments/${commentId}`, {
          method: 'DELETE',
          headers: {
              Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
      });
      return res.json();
  } catch (error) {
      console.error('Error deleting comment:', error);
      throw error;
  }
};


const deleteIdea = async (ideaId) => {
  try {
    const res = await fetch(`${BASE_URL}/${ideaId}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    });
    return res.json();
  } catch (error) {
    console.log(error);
  }

};

async function update(ideaId, ideaFormData) {
    try {
      const res = await fetch(`${BASE_URL}/${ideaId}`, {
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(ideaFormData),
      });
      return res.json();
    } catch (error) {
      console.log(error);
    }
  }
  
const createReaction = async(ideaId, reactionFormData )=> {
  try {
    const res = await fetch(`${BASE_URL}/${ideaId}/reactions`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(reactionFormData),
  });
  return res.json();
  } catch (error) {
    console.log(error);
  }
};

const updateComment = async (ideaId, commentId, commentFormData) => {
  try {
    const res = await fetch(`${BASE_URL}/${ideaId}/comments/${commentId}`, {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(commentFormData),
    });
    return res.json();
  } catch (error) {
    console.log(error);
  }
};


export {
    index,
    show,
    create,
    createComment,
    deleteComment,
    deleteIdea,
    update,
    createReaction,
    updateComment
}