import { useNavigate } from 'react-router-dom';
import RotatingText from './RotatingText';
import FadeContent from './FadeContent';
import '../styles/GiftIdeas.css';

function GiftIdeas() {
  const navigate = useNavigate();
  const giftWords = ['presente especial', 'surpresa única', 'lembrança carinhosa', 'mimo especial'];
  const universeWords = ['universo feminino', 'mundo das meninas', 'estilo feminino', 'meu estilo'];

  const handleBackClick = () => {
    navigate('/party-info');
  };

  return (
    <div className="gift-ideas-container">
      <div className="gift-ideas-card">
        <div className="flowers-top"></div>
        
        <FadeContent direction="down" delay={200}>
          <div className="gift-ideas-header">
            <h1 className="gift-ideas-title">Ideias para um <RotatingText words={giftWords} className="primary slide-left" interval={4500} /></h1>
            <p className="gift-ideas-subtitle">
              Não sou exigente com presentes — adoro tudo que tem a ver com o <RotatingText words={universeWords} className="accent" interval={5200} />, 
              como maquiagens, perfumes, roupas (inclusive esportivas), cuidados com cabelo, 
              jóias e muitas outras coisas.
            </p>
          </div>
        </FadeContent>
        
        <FadeContent direction="up" delay={400}>
          <div className="gift-ideas-content">
            <h2 className="gift-section-title">Algumas Dicas:</h2>
            
            <div className="gift-items">
              <div className="gift-row">
                <FadeContent direction="left" delay={100} className="gift-fade stagger-1">
                  <div className="gift-item">
                    <div className="gift-icon">💍</div>
                    <p>Uso jóias de Prata simples</p>
                  </div>
                </FadeContent>
                
                <FadeContent direction="right" delay={200} className="gift-fade stagger-2">
                  <div className="gift-item">
                    <div className="gift-icon">👕</div>
                    <p>Visto TAM P ou M</p>
                  </div>
                </FadeContent>
              </div>
              
              <div className="gift-row">
                <FadeContent direction="left" delay={300} className="gift-fade stagger-3">
                  <div className="gift-item">
                    <div className="gift-icon">👖</div>
                    <p>Uso calça TAM 38</p>
                  </div>
                </FadeContent>
                
                <FadeContent direction="right" delay={400} className="gift-fade stagger-4">
                  <div className="gift-item">
                    <div className="gift-icon">🥿</div>
                    <p>Calço 37</p>
                  </div>
                </FadeContent>
              </div>
              
              <div className="gift-row">
                <FadeContent direction="left" delay={500} className="gift-fade stagger-5">
                  <div className="gift-item">
                    <div className="gift-icon">📚</div>
                    <p>Leio livros de romance</p>
                  </div>
                </FadeContent>
                
                <FadeContent direction="right" delay={600} className="gift-fade">
                  <div className="gift-item">
                    <div className="gift-icon">🍫</div>
                    <p>Gosto de perfumes doces ou neutros</p>
                  </div>
                </FadeContent>
              </div>
            </div>
          </div>
        </FadeContent>
        
        <div className="gift-ideas-footer">
          <p className="gift-footer-text">
            <span className="heart-icon">🩷</span>
            Essas são só algumas ideias para te ajudar, mas não se preocupe se escolher algo diferente! 
            Qualquer presente será bem-vindo, só de ter sido lembrada já me deixa muito feliz!
            <span className="heart-icon">🩷</span>
          </p>
        </div>
        
        <button className="back-button" onClick={handleBackClick}>
          Voltar para Informações do Evento
        </button>
        
        <div className="flowers-bottom"></div>
      </div>
    </div>
  );
}

export default GiftIdeas;
