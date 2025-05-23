import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const LoggingInPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
  axios.get('https://mirrorspace-39h4.onrender.com/auth/check-login', { withCredentials: true })
    .then(res => {
      if (res.data.loggedIn) {
        navigate('/');
      } else {
        setTimeout(() => {
          navigate('/');
        }, 3000);
      }
    })
    .catch(err => {
      console.error('Error checking login:', err);
      navigate('/');
    });
}, [navigate]);



  return (
    <div className="p-4 text-center">
      <h1 className="text-2xl font-bold">You are logging in...</h1>
      <p className="mt-2">Please wait while we log you in...</p>
    </div>
  );
};

export default LoggingInPage;
