import '../styles/PartyInfo.css';

function PartyInfo() {
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
        
        <div className="name-section">
          <h1 className="name">Mirela</h1>
        </div>
        
        <div className="message-section">
          <p className="message">
            Um momento especial merece ser comemorado
            de forma inesquecível, e eu quero você ao
            meu lado nesse dia tão importante!
          </p>
        </div>
        
        <div className="invitation-section">
          <p className="invitation-text">
            É com muita alegria que convido você para a
            celebração dos meus 15 anos.
          </p>
        </div>
        
        <div className="date-section">
          <div className="date-badge">
            <span className="date-number">15</span>
          </div>
          <div className="date-details">
            <p className="day">SÁBADO</p>
            <p className="month">Fevereiro</p>
            <div className="year-container">
              <span className="year">2</span>
              <span className="year">0</span>
              <span className="year">2</span>
              <span className="year">6</span>
            </div>
            <p className="time">Às 20:00</p>
          </div>
        </div>
        
        <div className="interactive-section">
          <h3 className="section-title">Informações da Festa</h3>
          
          <div className="location-section">
            <h3>Localização</h3>
            <div className="venue-box">
              <h4>Ilha de Capri Buffet Eventos</h4>
              <p>Av. das Nações Unidas, 1000</p>
              <p>São Paulo, SP</p>
              <p>CEP: 04578-000</p>
              <div className="map-icon" onClick={() => window.open('https://maps.google.com/?q=Ilha de Capri Buffet Eventos, São Paulo, SP')}>
                <span>COMO CHEGAR</span>
              </div>
            </div>
          </div>
          
          <div className="footer-icons">
            <div className="icon" onClick={() => alert('Manual do Convidado')}>
              <div className="icon-circle"></div>
              <p>MANUAL DO CONVIDADO</p>
            </div>
            <div className="icon" onClick={() => alert('Confirmar Presença')}>
              <div className="icon-circle"></div>
              <p>CONFIRMAR SUA PRESENÇA</p>
            </div>
            <div className="icon" onClick={() => alert('Sugestão de Presente')}>
              <div className="icon-circle"></div>
              <p>SUGESTÃO DE PRESENTE</p>
            </div>
          </div>
          
          <div className="confirmation-deadline">
            <p>Confirmar presença até dia 15/01/26</p>
          </div>
        </div>
        
        <div className="flowers-bottom"></div>
      </div>
    </div>
  );
}

export default PartyInfo;
