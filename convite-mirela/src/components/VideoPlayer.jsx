import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/VideoPlayer.css';
import videoSource from '../assets/video/video.mp4';

function VideoPlayer() {
  const videoRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const videoElement = videoRef.current;
    
    if (videoElement) {
      // Play the video when component mounts
      videoElement.play().catch(error => {
        console.error("Error playing video:", error);
        // If autoplay fails (common on mobile), show a play button
        const container = document.querySelector('.video-wrapper');
        if (container) {
          const playButton = document.createElement('button');
          playButton.className = 'play-button';
          playButton.innerHTML = '▶';
          playButton.addEventListener('click', () => {
            videoElement.play();
            playButton.remove();
          });
          container.appendChild(playButton);
        }
      });

      // Navigate to party info when video ends
      const handleVideoEnd = () => {
        navigate('/party-info');
      };
      
      videoElement.addEventListener('ended', handleVideoEnd);

      // Cleanup event listener
      return () => {
        videoElement.removeEventListener('ended', handleVideoEnd);
      };
    }
  }, [navigate]);

  return (
    <div className="video-container">
      <div className="video-wrapper">
        <video 
          ref={videoRef}
          className="full-video"
          autoPlay
          playsInline
          muted={false}
          controls={false}
          src={videoSource}
        >
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}

export default VideoPlayer;
