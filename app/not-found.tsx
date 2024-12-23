import Link from "next/link";
import React from "react"; // Import React (optional, but considered good practice in TypeScript)
import '@/styles/error.css';

const NotFound: React.FC = () => {
  return (
    <div>
      <div id="notfound" >
        <div className="notfound" >
          <div className="notfound-404" >
            <h1>4<span></span>4</h1>
          </div>
          <h2>Oops! Page Not Be Found</h2>
          <p>Sorry but the page you are looking for does not exist, have been removed. name changed or is temporarily unavailable</p>
          <a href="#">Back to homepage</a>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
