import RotatingText from './RotatingText';
import FadeContent from './FadeContent';
import '../styles/PartyInfo.css';

function PartyInfo() {
  const celebrationWords = ['comemoração', 'data marcante', 'ocasião única', 'passagem inesquecível'];
  const momentWords = ['momento especial', 'dia único', 'momento mágico', 'dia inesquecível'];

  return (
    <div className="party-info-container">
      <div className="invitation-card">
        {/* Content will be styled to match the image */}
        <div className="header">
          <div className="flowers-top"></div>
          <div className="age-badge">
            <span className="age-number">15</span>
            <span className="age-text">anos</span>
          </div>
        </div>
        
        <FadeContent direction="scale" delay={200}>
          <div className="name-section">
            <h1 className="name">Mirela</h1>
          </div>
        </FadeContent>
        
        <FadeContent direction="up" delay={400}>
          <div className="message-section">
            <p className="message">
              Um <RotatingText words={momentWords} className="primary" interval={4000} /> merece ser comemorado
              de forma inesquecível, e eu quero você ao
              meu lado nesse dia tão importante!
            </p>
          </div>
        </FadeContent>
        
        <FadeContent direction="up" delay={600}>
          <div className="invitation-section">
            <p className="invitation-text">
              É com muita alegria que convido você para a{' '}
              <RotatingText words={celebrationWords} className="secondary bounce-in" interval={5000} /> dos meus 15 anos.
            </p>
          </div>
        </FadeContent>
        
        <div className="date-section">
          <div className="date-badge">
            <span className="date-number">17</span>
          </div>
          <div className="date-details">
            <p className="day">DOMINGO</p>
            <p className="month">Agosto</p>
            <div className="year-container">
              <span className="year">2</span>
              <span className="year">0</span>
              <span className="year">2</span>
              <span className="year">5</span>
            </div>
            <p className="time">Às 16:00</p>
          </div>
        </div>
        
        <div className="interactive-section">
          <h3 className="section-title">Informações do Evento</h3>
          
          <div className="location-section">
            <h3>Localização</h3>
            <div className="venue-box">
              <h4>Ilha de Capri Buffet Eventos</h4>
              <p>Rodovia Anchieta, SP-150, km 28</p>
              <p>Vila Balnearia, São Bernardo do Campo - SP</p>
              <p>CEP: 09822-250</p>
              <div className="map-icon" onClick={() => window.open('https://maps.google.com/?q=Ilha de Capri Buffet Eventos, Rodovia Anchieta, SP-150, km 28, São Bernardo do Campo, SP')}>
                <span>COMO CHEGAR</span>
              </div>
            </div>
          </div>
          
          <div className="footer-icons">
            <FadeContent direction="scale" delay={800} className="bounce">
              <div className="icon confirm-presence" onClick={() => window.open('https://forms.gle/8jbyJJUMLLBwSGdU6', '_blank')}>
                <div className="icon-circle"></div>
                <p>CONFIRMAR SUA PRESENÇA</p>
              </div>
            </FadeContent>
            
            <FadeContent direction="up" delay={1000}>
              <div className="icon manual" onClick={() => window.location.href = '/guest-manual'}>
                <div className="icon-circle"></div>
                <p>MANUAL DO CONVIDADO</p>
              </div>
            </FadeContent>
            
            <FadeContent direction="up" delay={1200}>
              <div className="icon gift" onClick={() => window.location.href = '/gift-ideas'}>
                <div className="icon-circle"></div>
                <p>SUGESTÃO DE PRESENTE</p>
              </div>
            </FadeContent>
          </div>
          
          <div className="confirmation-deadline">
            <p>Confirmar presença até dia 15/07</p>
          </div>
        </div>
        
        <div className="flowers-bottom"></div>
      </div>
    </div>
  );
}

export default PartyInfo;
