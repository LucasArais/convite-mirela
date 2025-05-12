import { useNavigate } from 'react-router-dom';
import '../styles/HomePage.css';
import envelopeImage from '../assets/images/foto1.jpeg';

function HomePage() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/video');
  };

  return (
    <div className="envelope-container" onClick={handleClick}>
      <div className="envelope-image">
        <img 
          src={envelopeImage} 
          alt="Envelope com flor e borboletas - Toque para abrir" 
          className="full-image"
        />
      </div>
    </div>
  );
}

export default HomePage;
