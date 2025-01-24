import React from "react";
import "./Content.css"; // Assuming you want to style the content

const Content = () => {
  return (
    <div className="content-container">
      {/* New Movies Section */}
      <div className="section">
        <h2>New Movies</h2>
        <div className="image-row">
          <img
            src="/images/new-movie1.jpg"
            alt="New Movie 1"
            className="movie-image"
          />
          <img
            src="/images/new-movie2.jpg"
            alt="New Movie 2"
            className="movie-image"
          />
          <img
            src="/images/new-movie3.jpg"
            alt="New Movie 3"
            className="movie-image"
          />
          <img
            src="/images/new-movie4.jpg"
            alt="New Movie 4"
            className="movie-image"
          />
          <img
            src="/images/new-movie5.jpg"
            alt="New Movie 5"
            className="movie-image"
          />
        </div>
      </div>

      {/* Movies for Free Section */}
      <div className="section">
        <h2>Movies for Free</h2>
        <div className="image-row">
          <img
            src="/images/free-movie1.jpg"
            alt="Free Movie 1"
            className="movie-image"
          />
          <img
            src="/images/free-movie2.jpg"
            alt="Free Movie 2"
            className="movie-image"
          />
          <img
            src="/images/free-movie3.jpg"
            alt="Free Movie 3"
            className="movie-image"
          />
          <img
            src="/images/free-movie4.jpg"
            alt="Free Movie 4"
            className="movie-image"
          />
          <img
            src="/images/free-movie5.jpg"
            alt="Free Movie 5"
            className="movie-image"
          />
        </div>
      </div>
    </div>
  );
};

export default Content;
