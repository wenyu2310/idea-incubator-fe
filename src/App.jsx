import { useContext, useState, useEffect } from 'react';
import IdeaList from './components/IdeaList/IdeaList'
import NavBar from './components/NavBar/NavBar'
import './App.css'
import * as ideaService from './services/ideaService';
import IdeaDetails from './components/IdeaDetails/IdeaDetails';
import IdeaForm from './components/IdeaForm/IdeaForm';
import { Routes, Route, useNavigate } from 'react-router';
import Landing from './components/Landing/Landing';
import SignInForm from './components/SignInForm/SigninForm';
import { UserContext } from './contexts/UserContext';
import SignUpForm from './components/SignUpForm/SignUpForm';
import Dashboard from './components/Dashboard/Dashboard';
import CommentForm from './components/CommentForm/CommentForm';
import YourIdeaList from './components/YourIdeaList/YourIdeaList';
import Idea from './assets/green-bulb1.svg'

const App =()=> {
  const [ideas,setIdeas] = useState([]);
  const navigate = useNavigate();
  const { user } = useContext(UserContext);

  useEffect(()=> {
    const fetchAllIdeas = async () => {
      const ideasData = await ideaService.index();
      setIdeas(ideasData);
    }
    if (user) fetchAllIdeas();
  },[user]);

  const handleAddIdea = async (ideaFormData) => {
    const newIdea = await ideaService.create(ideaFormData);
    setIdeas([newIdea, ...ideas]);
    const ideasData = await ideaService.index();
    setIdeas(ideasData);
    navigate('/ideas');
  };

  const handleDeleteIdea = async (ideaId) => {
    const deletedIdea = await ideaService.deleteIdea(ideaId);
    setIdeas(ideas.filter((idea) => idea._id !== deletedIdea._id));
    navigate('/ideas');
  };

  const handleUpdateIdea = async (ideaId, ideaFormData) => {
    const updatedIdea = await ideaService.update(ideaId, ideaFormData);
    setIdeas(ideas.map((idea) => (ideaId === idea._id ? updatedIdea : idea)));
    navigate(`/ideas/${ideaId}`);
  };

  

  
  return(
    <>
      <NavBar />
      <title>NParks Wishes</title>
      <Routes>
        <Route path='/' element= {user ? <Dashboard ideas={ideas}/> :<Landing />}/>
        {user? ( 
          <>
          {/* protected routes */}
            <Route path='/ideas' element ={<IdeaList ideas={ideas} />}/>
            <Route path='/yourideas' element ={<YourIdeaList ideas={ideas} />}/>
            <Route path='ideas/:ideaId' element ={<IdeaDetails handleDeleteIdea = {handleDeleteIdea} />}/>
            <Route path='/ideas/new' element = {<IdeaForm handleAddIdea ={handleAddIdea} />}/>
            <Route
              path='/ideas/:ideaId/edit'
              element={<IdeaForm handleUpdateIdea={handleUpdateIdea}/>}
              />
            <Route 
              path='/ideas/:ideaId/comments'
              element={<CommentForm />}
             /> 
             <Route 
              path='/ideas/:ideaId/comments/:commentId/edit'
              element={<CommentForm />}
             /> 
          </>
        ) : (
          <>
            <Route path ='/sign-in' element = {<SignInForm />}/>
            <Route path ='/sign-up' element = {<SignUpForm />}/>
          </>
        )}
      </Routes>
    </>
  )};
export default App;