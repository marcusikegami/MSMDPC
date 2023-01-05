import React from 'react';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import axios from 'axios';
// import components for use with Route Components
import Home from './pages/Home';
import Login from './pages/Login';
import Header from './components/Header';
import Footer from './components/Footer';
import CreatePost from './pages/CreatePost';
import EditPost from './pages/EditPost';
import Testimonials from './pages/Testimonials';
import Approval from './pages/pendingTestimonials';
import News from './pages/News';
import PatientInfo from './pages/PatientInfo';
import PtInfo from './pages/PtInfo';
import SinglePost from './pages/SinglePost';
import Upload from './pages/Upload';

function App() {
  const [user, setUser] = useState(null);

  const getUser = async () => {
    try {
      const url = process.env.REACT_APP_BACKEND_URL + '/auth/login/success';
      const { data } = await axios.get(url, { withCredentials: true });
      setUser(data.user._json);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getUser();
  }, []);
  
  return (
     <Router>
      <div>
      
      </div>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/create-post" element={user ? <CreatePost user={user} /> : <Link to="/login" />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/pending-testimonials" element={user ? <Approval user={user} /> : <Link to="/login" />} />
          <Route path="/news-and-updates" element={<News />} />
          <Route path="/info-for-physical-therapists" element={<PtInfo />} />
          <Route path="/patient-education" element={<PatientInfo />} />
          <Route path="/edit-post/:_id" element={user ? <EditPost user={user} /> : <Link to="/login" />} />
          <Route path="/post/:_id" element={<SinglePost />} />
          <Route path="/upload" element={user ? <Upload user={user} /> : <Link to="/login" />} />
        </Routes>
        <Footer />
     </Router>
  );
}

export default App;
