import React from 'react';
import './master.css';

function BannerImage() {
  return (
    <div className="banner-container">
      <img className="banner" src="/images/banner.jpg" alt="Banner" />
      <div className="banner-text">
        <h2>My Photojournal</h2>
        <h4>Leslie Fernando</h4>
      </div>
    </div>
  );
}

export default BannerImage;
