import { useNavigate } from 'react-router-dom';
import RotatingText from './RotatingText';
import FadeContent from './FadeContent';
import '../styles/GuestManual.css';

function GuestManual() {
  const navigate = useNavigate();
  const manualWords = ['Manual do Convidado', 'Guia do Convidado', 'Dicas Importantes', 'Orientações Especiais'];
  const preparationWords = ['prepararem', 'organizarem', 'arrumarem', 'planejarem'];

  const handleBackClick = () => {
    navigate('/party-info');
  };

  return (
    <div className="guest-manual-container">
      <div className="guest-manual-card">
        <div className="flowers-top"></div>
        
        <FadeContent direction="scale" delay={200}>
          <div className="guest-manual-header">
            <h1 className="guest-manual-title"><RotatingText words={manualWords} className="primary fade-down" interval={5500} /></h1>
            <p className="guest-manual-subtitle">
              Informações importantes que ajudam os convidados a se <RotatingText words={preparationWords} className="secondary" interval={4700} /> para o grande dia.
            </p>
          </div>
        </FadeContent>
        
        <FadeContent direction="up" delay={400}>
          <div className="guest-manual-content">
            <div className="manual-items">
              <FadeContent direction="up" delay={100} className="stagger-1">
                <div className="manual-item">
                  <div className="manual-icon">
                    <span className="icon-circle">👤</span>
                  </div>
                  <div className="manual-text">
                    <h3>Confirme presença até o dia 15/07</h3>
                    <p>Sua confirmação é muito importante para nós!</p>
                  </div>
                </div>
              </FadeContent>
              
              <FadeContent direction="up" delay={200} className="stagger-2">
                <div className="manual-item">
                  <div className="manual-icon">
                    <span className="icon-circle">🍽️</span>
                  </div>
                  <div className="manual-text">
                    <h3>Convidado não convida</h3>
                    <p>Por favor, respeite o número de pessoas no convite.</p>
                  </div>
                </div>
              </FadeContent>
              
              <FadeContent direction="up" delay={300} className="stagger-3">
                <div className="manual-item">
                  <div className="manual-icon">
                    <span className="icon-circle">✉️</span>
                  </div>
                  <div className="manual-text">
                    <h3>Convite intransferível</h3>
                    <p>O convite é pessoal e não pode ser transferido.</p>
                  </div>
                </div>
              </FadeContent>
              
              <FadeContent direction="up" delay={400} className="stagger-4">
                <div className="manual-item">
                  <div className="manual-icon">
                    <span className="icon-circle">👗</span>
                  </div>
                  <div className="manual-text">
                    <h3>Traje Esporte Fino</h3>
                    <p>Vista-se elegantemente para esta ocasião especial.</p>
                  </div>
                </div>
              </FadeContent>
              
              <FadeContent direction="up" delay={500} className="stagger-5">
                <div className="manual-item">
                  <div className="manual-icon">
                    <span className="icon-circle">😊</span>
                  </div>
                  <div className="manual-text">
                    <h3>Vibrações positivas</h3>
                    <p>Traga sua energia positiva para celebrar este momento!</p>
                  </div>
                </div>
              </FadeContent>
              
              <FadeContent direction="up" delay={600}>
                <div className="manual-item">
                  <div className="manual-icon">
                    <span className="icon-circle">⏰</span>
                  </div>
                  <div className="manual-text">
                    <h3>Seja pontual</h3>
                    <p>Sua presença no horário marcado é muito importante.</p>
                  </div>
                </div>
              </FadeContent>
              
              <FadeContent direction="up" delay={700}>
                <div className="manual-item">
                  <div className="manual-icon">
                    <span className="icon-circle">📸</span>
                  </div>
                  <div className="manual-text">
                    <h3>Divirta-se bastante, tire muitas fotos</h3>
                    <p>Aproveite e registre todos os momentos especiais!</p>
                  </div>
                </div>
              </FadeContent>
            </div>
          </div>
        </FadeContent>
        
        <button className="back-button" onClick={handleBackClick}>
          Voltar para Informações do Evento
        </button>
        
        <div className="flowers-bottom"></div>
      </div>
    </div>
  );
}

export default GuestManual;
