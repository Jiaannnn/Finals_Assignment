import React from 'react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
  return (
    <div className="page notfound-page">
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <Link to="/" className="btn btn-primary" style={{ display: 'inline-block', marginTop: '20px' }}>
        Return Home
      </Link>
    </div>
  );
};

export default NotFound;
