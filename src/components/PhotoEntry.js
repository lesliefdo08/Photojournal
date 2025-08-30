import React from 'react';
import './master.css';

class PhotoEntry extends React.Component {
  render() {
    const image_path = "/images/" + this.props.src;

    return (
      <div className="photo-entry-block">
        <a href={image_path} target="_blank" rel="noreferrer">
          <img className="photo-img" src={image_path} alt={this.props.caption} />
        </a>
        <h5>{this.props.caption}</h5>
        <h6>{this.props.location}</h6>
      </div>
    );
  }
}

export default PhotoEntry;
