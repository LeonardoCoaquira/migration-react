import React from 'react';
import '../../styles/Footer/SocialMedia.css';

function SocialMedia() {
    return (
        <div className="social-links">
            <a href="" target="_blank" className="instagram">
            <img src="https://cdn-icons-png.flaticon.com/512/1077/1077042.png" alt="instagram"/>
            </a>
            <a href="" target="_blank" className="facebook">
            <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="facebook"/>
            </a>
            <a href="" target="_blank" className="youtube">
            <img src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png"alt="youtube"/>
            </a>
            <a href="" target="_blank" className="linkedin">
            <img src="https://cdn-icons-png.flaticon.com/512/3536/3536505.png" alt="linkedin"/>
            </a>
        </div>
    );
}

export default SocialMedia;