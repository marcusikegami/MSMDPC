import React from 'react';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import aws-amplify methods
import { Amplify, Auth, Hub } from 'aws-amplify';
// import aws-amplify config from ../utils/amplify-configure.js
import { config } from './utils/amplify-configure';
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

const isLocalhost = Boolean(
  window.location.hostname === 'localhost' ||
    // [::1] is the IPv6 localhost address.
    window.location.hostname === '[::1]' ||
    // 127.0.0.1/8 is considered localhost for IPv4.
    window.location.hostname.match(
      /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
    )
);

// Assuming you have two redirect URIs, and the first is for localhost and second is for production
const [
  localRedirectSignIn,
  productionRedirectSignIn,
] = config.oauth.redirectSignIn.split(',');

const [
  localRedirectSignOut,
  productionRedirectSignOut,
] = config.oauth.redirectSignOut.split(',');

const updatedAwsConfig = {
  ...config,
  oauth: {
    ...config.oauth,
    redirectSignIn: isLocalhost ? localRedirectSignIn : productionRedirectSignIn,
    redirectSignOut: isLocalhost ? localRedirectSignOut : productionRedirectSignOut,
  }
}

Amplify.configure(updatedAwsConfig);

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    Hub.listen('auth', ({ payload: { event, data } }) => {
      switch (event) {
        case 'signIn':
        case 'cognitoHostedUI':
          getUser().then(userData => setUser(userData));
          break;
        case 'signOut':
          setUser(null);
          break;
        case 'signIn_failure':
        case 'cognitoHostedUI_failure':
          console.log('Sign in failure', data);
          break;
        default:
          // do nothing
      }
    });

    getUser().then(userData => setUser(userData));
  }, []);

  function getUser() {
    return Auth.currentAuthenticatedUser()
      .then(userData => userData)
      .catch(() => console.log('Not signed in'));
  }

  return (
     <Router>
      <div>
      <p>User: {user ? JSON.stringify(user.attributes) : 'None'}</p>
      {user ? (
        <button onClick={() => Auth.signOut()}>Sign Out</button>
      ) : (
        <button onClick={() => Auth.federatedSignIn()}>Federated Sign In</button>
      )}
    </div>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pencilquarterapple" element={<Login />} />
          <Route path="/create-post" element={<CreatePost />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/pending-testimonials" element={<Approval />} />
          <Route path="/news-and-updates" element={<News />} />
          <Route path="/info-for-physical-therapists" element={<PtInfo />} />
          <Route path="/patient-education" element={<PatientInfo />} />
          <Route path="/edit-post/:_id" element={<EditPost />} />
          <Route path="/post/:_id" element={<SinglePost />} />
          <Route path="/upload" element={<Upload />} />
        </Routes>
        <Footer />
     </Router>
  );
}

export default App;
