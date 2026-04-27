import React, { useState } from 'react';
import { 
  Sparkles, Check, ChevronLeft, Search, MessageSquare, ArrowRight,
  Clock, MessageCircle, MapPin, FileText, Send
} from 'lucide-react';
import { schemesData } from './data/SchemesData';

// ==========================================
// VIEW 1: AUTH (Login / Signup)
// ==========================================
const AuthView = ({ onComplete }) => {
  const [step, setStep] = useState(1);
  const [isLogin, setIsLogin] = useState(false);
  const [formData, setFormData] = useState({ age: '', income: '', category: '', state: '', password: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      // Simulate quick login
      const savedProfile = JSON.parse(localStorage.getItem('saarthiProfile'));
      if (savedProfile) {
        onComplete(savedProfile);
      } else {
        alert("No saved profile found. Please create an account.");
        setIsLogin(false);
      }
      return;
    }

    if (step < 3) {
      setStep(step + 1);
    } else {
      localStorage.setItem('saarthiProfile', JSON.stringify(formData));
      onComplete(formData);
    }
  };

  return (
    <div className="auth-view">
      <div className="auth-card">
        <div className="auth-sidebar">
          <div className="auth-logo">
            <Sparkles size={28} /> Saarthi
          </div>
          <div className="auth-steps">
            {!isLogin ? (
              <>
                <div className={`auth-step ${step >= 1 ? 'active' : ''}`} onClick={() => setStep(1)}>
                  <div className="step-circle">{step > 1 ? <Check size={16}/> : '1'}</div>
                  Personal Details
                </div>
                <div className={`auth-step ${step >= 2 ? 'active' : ''}`} onClick={() => setStep(2)}>
                  <div className="step-circle">{step > 2 ? <Check size={16}/> : '2'}</div>
                  Eligibility Criteria
                </div>
                <div className={`auth-step ${step >= 3 ? 'active' : ''}`} onClick={() => setStep(3)}>
                  <div className="step-circle">3</div>
                  Summary
                </div>
              </>
            ) : (
              <div className="auth-step active">
                <div className="step-circle"><Check size={16}/></div>
                Login Account
              </div>
            )}
          </div>
        </div>
        
        <div className="auth-content">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
            <h2>{isLogin ? 'Welcome Back' : 'Create account'}</h2>
            <button type="button" onClick={() => setIsLogin(!isLogin)} style={{ background: 'none', border: 'none', color: '#238b77', fontWeight: 600, cursor: 'pointer' }}>
              {isLogin ? 'Need an account? Sign Up' : 'Already have an account? Log In'}
            </button>
          </div>
          
          <form onSubmit={handleSubmit}>
            {isLogin && (
               <div className="auth-form-grid">
                 <div className="auth-form-group full">
                   <label>Email Address</label>
                   <input type="email" className="auth-input" placeholder="your@email.com" required />
                 </div>
                 <div className="auth-form-group full">
                   <label>Password</label>
                   <input type="password" className="auth-input" placeholder="••••••••" required />
                 </div>
               </div>
            )}

            {!isLogin && step === 1 && (
              <div className="auth-form-grid">
                <div className="auth-form-group">
                  <label>First Name</label>
                  <input type="text" className="auth-input" placeholder="First Name" required />
                </div>
                <div className="auth-form-group">
                  <label>Last Name</label>
                  <input type="text" className="auth-input" placeholder="Last Name" required />
                </div>
                <div className="auth-form-group full">
                  <label>Email Address</label>
                  <input type="email" className="auth-input" placeholder="your@email.com" required />
                </div>
                <div className="auth-form-group full">
                  <label>Create Password</label>
                  <input type="password" className="auth-input" placeholder="••••••••" required value={formData.password} onChange={e => setFormData({...formData, password: e.target.value})} />
                </div>
                <div className="auth-form-group full">
                  <label>Your State</label>
                  <select className="auth-input" required value={formData.state} onChange={e => setFormData({...formData, state: e.target.value})}>
                    <option value="">Select State</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Maharashtra">Maharashtra</option>
                  </select>
                </div>
              </div>
            )}

            {!isLogin && step === 2 && (
              <div className="auth-form-grid">
                <div className="auth-form-group">
                  <label>Your Age</label>
                  <input type="number" className="auth-input" placeholder="e.g. 22" required value={formData.age} onChange={e => setFormData({...formData, age: e.target.value})} />
                </div>
                <div className="auth-form-group">
                  <label>Category</label>
                  <select className="auth-input" required value={formData.category} onChange={e => setFormData({...formData, category: e.target.value})}>
                    <option value="">Select Category</option>
                    <option value="student">Student</option>
                    <option value="farmer">Farmer</option>
                    <option value="women">Women</option>
                  </select>
                </div>
                <div className="auth-form-group full">
                  <label>Annual Income (₹)</label>
                  <input type="number" className="auth-input" placeholder="e.g. 250000" required value={formData.income} onChange={e => setFormData({...formData, income: e.target.value})} />
                </div>
              </div>
            )}

            {!isLogin && step === 3 && (
              <div>
                <p style={{ color: '#64748b', marginBottom: '2rem' }}>Please review your details before creating your account.</p>
                <div style={{ background: '#f8fafc', padding: '1.5rem', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                  <p><strong>Age:</strong> {formData.age}</p>
                  <p><strong>Income:</strong> ₹{formData.income}</p>
                  <p><strong>Category:</strong> {formData.category}</p>
                  <p><strong>State:</strong> {formData.state}</p>
                </div>
              </div>
            )}

            <button type="submit" className="btn auth-btn">
              {isLogin ? 'Log In' : (step === 3 ? 'Create Account' : 'Next')}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

// ==========================================
// VIEW 2: HOME (Light Red Theme)
// ==========================================
const HomeView = ({ userProfile, onViewDetails, onOpenChat, onLogout }) => {
  const [formData, setFormData] = useState({ 
    category: userProfile?.category || '', 
    age: userProfile?.age || '', 
    income: userProfile?.income || '', 
    state: userProfile?.state || '' 
  });
  const [isPersonalized, setIsPersonalized] = useState(!!userProfile);
  
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setIsPersonalized(true);
  };

  const age = parseInt(formData.age) || 0;
  const income = parseInt(formData.income) || 0;
  
  let filteredSchemes = schemesData.filter(s => {
    if (!isPersonalized) return true;
    const matchAge = age >= s.eligibility.minAge && age <= s.eligibility.maxAge;
    const matchIncome = income <= s.eligibility.maxIncome;
    return matchAge && matchIncome;
  });

  if (isPersonalized) {
    filteredSchemes.sort((a, b) => a.category === formData.category ? -1 : 1);
  }
  
  const displaySchemes = filteredSchemes.slice(0, 3);

  return (
    <div className="home-view">
      <header className="home-header">
        <div className="container header-content">
          <div className="logo">
            <Sparkles size={32} color="#dc2626" />
            <div>
              SaarthiAI
              <span className="logo-sub">Your Guide to Government Schemes</span>
            </div>
          </div>
          
          <nav className="nav-links">
            <a href="#" className="active">Home</a>
            <a href="#schemes">Schemes</a>
            <a href="#how-it-works">How It Works</a>
            <a onClick={onLogout} style={{ cursor: 'pointer', color: '#dc2626' }}>Logout</a>
          </nav>
          
          <div className="header-actions">
            <button className="btn btn-outline">English</button>
            <button className="btn btn-primary" onClick={onOpenChat}>
              <MessageSquare size={18}/> Ask AI Assistant
            </button>
          </div>
        </div>
      </header>

      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-text">
            <h1>Find Government Schemes <span className="text-gradient">You Are Eligible For</span></h1>
            <p>Personalized scheme recommendations based on your profile in just a few seconds.</p>
            
            <div className="checkmarks">
              <div className="check-item"><Check className="check-icon" size={20}/> 100% Free</div>
              <div className="check-item"><Check className="check-icon" size={20}/> Official Information</div>
              <div className="check-item"><Check className="check-icon" size={20}/> Secure & Reliable</div>
            </div>
          </div>
          
          <div className="hero-image">
            <img src="https://images.unsplash.com/photo-1541888049870-1b4e3390cc63?q=80&w=2070&auto=format&fit=crop" alt="Government Building" />
          </div>
        </div>
      </section>

      <div className="container floating-form-wrapper">
        <div className="floating-form">
          <div className="form-header">
            <Sparkles size={20} color="#dc2626" /> Check Schemes For You
          </div>
          
          <form className="inline-form" onSubmit={handleSearchSubmit}>
            <div className="input-box">
              <select required value={formData.category} onChange={e => setFormData({...formData, category: e.target.value})}>
                <option value="" disabled>Select Category</option>
                <option value="student">Student</option>
                <option value="farmer">Farmer</option>
                <option value="health">Health</option>
                <option value="women">Women</option>
              </select>
            </div>
            <div className="input-box">
              <input type="number" required placeholder="Your Age" value={formData.age} onChange={e => setFormData({...formData, age: e.target.value})} />
            </div>
            <div className="input-box">
              <input type="number" required placeholder="Annual Income" value={formData.income} onChange={e => setFormData({...formData, income: e.target.value})} />
            </div>
            <div className="input-box">
              <select required value={formData.state} onChange={e => setFormData({...formData, state: e.target.value})}>
                <option value="" disabled>Your State</option>
                <option value="Delhi">Delhi</option>
                <option value="Maharashtra">Maharashtra</option>
              </select>
            </div>
            <button type="submit" className="btn btn-primary" style={{ whiteSpace: 'nowrap' }}>
              Find My Schemes →
            </button>
          </form>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <h2 className="section-title">Why Choose SaarthiAI?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon icon-green"><Sparkles size={32} /></div>
              <h4>Personalized for You</h4>
              <p>Get schemes that exactly match your profile and eligibility.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon icon-blue"><MessageSquare size={32} /></div>
              <h4>AI-Powered Assistant</h4>
              <p>Understand schemes easily with our smart AI assistant.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon icon-purple"><FileText size={32} /></div>
              <h4>Complete Guidance</h4>
              <p>Get details on benefits, eligibility, documents & how to apply.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon icon-pink"><MapPin size={32} /></div>
              <h4>Nearest Offices</h4>
              <p>Find nearest government offices and support centers.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="schemes" className="section" style={{ background: 'var(--glass-bg)' }}>
        <div className="container">
          <div className="schemes-header">
            <h2 style={{ fontSize: '2rem', fontWeight: 800 }}>Top Schemes You Might Be Eligible For</h2>
            <a href="#" className="view-all">View All Schemes →</a>
          </div>
          
          <div className="schemes-grid">
            {displaySchemes.map(scheme => {
              const tagClass = scheme.category === 'student' ? 'tag-student' : scheme.category === 'farmer' ? 'tag-farmer' : 'tag-women';
              const iconClass = scheme.category === 'student' ? 'icon-green' : scheme.category === 'farmer' ? 'icon-blue' : 'icon-purple';

              return (
                <div key={scheme.id} className="scheme-card">
                  <div className="card-top">
                    <div className={`card-icon ${iconClass}`}><scheme.icon size={24} /></div>
                    <div className={`tag ${tagClass}`}>{scheme.target}</div>
                  </div>
                  <h3 className="card-title">{scheme.title}</h3>
                  <p className="card-desc">{scheme.description}</p>
                  
                  {isPersonalized && (
                    <div style={{ background: '#fef2f2', padding: '0.75rem', borderRadius: '8px', fontSize: '0.85rem', color: '#dc2626', marginBottom: '1.5rem', borderLeft: '3px solid #dc2626' }}>
                      ⭐ <strong>Recommended:</strong> Profile Match
                    </div>
                  )}

                  <div className="card-bottom">
                    <div>
                      <div className="benefit-label">Benefit</div>
                      <div className="benefit-amount">{scheme.benefit}</div>
                    </div>
                    <button className="btn btn-primary" onClick={() => onViewDetails(scheme)}>
                      View Details →
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="how-it-works" className="section">
        <div className="container">
          <h2 className="section-title">How It Works</h2>
          <div className="timeline">
            <div className="timeline-step">
              <div className="step-icon-wrapper"><div className="step-number">1</div><div className="step-icon"><FileText size={28} /></div></div>
              <h4>Tell Us About You</h4>
              <p>Fill a quick form with basic information.</p>
            </div>
            <div className="timeline-step">
              <div className="step-icon-wrapper"><div className="step-number">2</div><div className="step-icon"><Search size={28} /></div></div>
              <h4>Get Matched Schemes</h4>
              <p>We find the best schemes you are eligible for.</p>
            </div>
            <div className="timeline-step">
              <div className="step-icon-wrapper"><div className="step-number">3</div><div className="step-icon"><Check size={28} /></div></div>
              <h4>Explore & Understand</h4>
              <p>Read details, benefits and documents required.</p>
            </div>
            <div className="timeline-step">
              <div className="step-icon-wrapper"><div className="step-number">4</div><div className="step-icon"><Send size={28} /></div></div>
              <h4>Apply with Confidence</h4>
              <p>Follow the application steps and apply easily.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="container" style={{ paddingBottom: '3rem' }}>
        <div className="ai-banner">
          <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
            <MessageSquare size={80} color="#dc2626" />
            <div className="ai-banner-text">
              <h3>Have Questions? <span className="text-gradient">Ask Our AI Assistant</span></h3>
              <p>Get instant answers about schemes, eligibility, documents and more.</p>
            </div>
          </div>
          <button className="btn btn-primary btn-large" onClick={onOpenChat}>
            <MessageSquare size={20} /> Chat with AI Assistant →
          </button>
        </div>
      </section>
      
      <footer className="footer">
        <div className="container">
          <div className="copyright">© 2026 SaarthiAI. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
};

// ==========================================
// VIEW 3: SCHEME DETAILS (Article Card + AI Modes)
// ==========================================
const SchemeDetailsView = ({ scheme, onBack }) => {
  const [aiExplanation, setAiExplanation] = useState(null);
  const [isAiLoading, setIsAiLoading] = useState(false);
  const [language, setLanguage] = useState('en');

  const handleExplain = (mode) => {
    setIsAiLoading(true);
    setAiExplanation(null);
    
    setTimeout(() => {
      if (mode === 'simple') {
        setLanguage('en');
        setAiExplanation(scheme.details.aiSummary);
      } else if (mode === 'kid') {
        setLanguage('en');
        setAiExplanation(`Imagine this is a gift from the government for your studies. They give you money every year so you don't have to worry about buying books or paying fees. All you need to do is keep studying well and pass your exams!`);
      } else if (mode === 'hindi') {
        setLanguage('hi');
        setAiExplanation(scheme.detailsHindi.aiSummary);
      }
      setIsAiLoading(false);
    }, 1000);
  };

  const schemeData = language === 'hi' ? scheme.detailsHindi : scheme.details;
  const title = language === 'hi' ? scheme.detailsHindi.title : scheme.title;
  
  return (
    <div className="details-view">
      <div className="details-card">
        <a className="details-back" onClick={onBack}>
          <ChevronLeft size={24} /> Back
        </a>
        
        <div className="details-hero">
          <div className="details-date-badge">
            <span>GOVT</span>
            <span>FUND</span>
          </div>
          <div className="details-category-tag">
            {scheme.target}
          </div>
        </div>

        <div className="details-content">
          <h1 className="details-title">{title}</h1>
          <div className="details-subtitle">{language === 'hi' ? 'वह योजना जो आपको सशक्त बनाती है।' : 'The scheme that empowers you.'}</div>
          
          <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
            <button className="btn" style={{ background: 'white', color: '#ef4444', border: '1px solid #ef4444' }} onClick={() => handleExplain('simple')} disabled={isAiLoading}>
              {isAiLoading ? 'Asking AI...' : <><Sparkles size={18} /> Explain Simply</>}
            </button>
            <button className="btn" style={{ background: '#f59e0b', color: 'white' }} onClick={() => handleExplain('kid')} disabled={isAiLoading}>
              Explain like I'm 10
            </button>
            <button className="btn" style={{ background: '#3b82f6', color: 'white' }} onClick={() => handleExplain('hindi')} disabled={isAiLoading}>
              Explain in Hindi
            </button>
          </div>

          {aiExplanation && (
            <div className="ai-box">
              <h4 style={{ color: '#ef4444', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Sparkles size={18} /> {language === 'hi' ? 'AI सरल व्याख्या' : 'AI Simple Explanation'}
              </h4>
              <p style={{ color: '#1e293b', fontSize: '1.1rem', margin: 0 }}>"{aiExplanation}"</p>
            </div>
          )}

          <div className="details-text">
            <p style={{ marginBottom: '1rem', color: '#1e293b' }}><strong>{language === 'hi' ? 'पात्रता:' : 'Eligibility:'}</strong></p>
            <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
              {schemeData.eligibility.map((item, i) => <li key={i}>{item}</li>)}
            </ul>

            <p style={{ marginBottom: '1rem', color: '#1e293b' }}><strong>{language === 'hi' ? 'लाभ:' : 'Benefits:'}</strong></p>
            <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
              {schemeData.benefits.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
          </div>

          <div className="details-meta">
            <div className="details-meta-item"><Clock size={16}/> Apply Online</div>
            <div className="details-meta-item"><MapPin size={16}/> Nearest Office</div>
          </div>
        </div>
      </div>
    </div>
  );
};

// ==========================================
// VIEW 4: CHATBOT (Base44 Gradient)
// ==========================================
const ChatbotView = ({ onBack }) => {
  return (
    <div className="chat-view">
      <header className="chat-header">
        <div className="chat-logo" style={{ cursor: 'pointer' }} onClick={onBack}>
          <Sparkles /> SaarthiAI
        </div>
        <button className="btn" style={{ background: 'rgba(255,255,255,0.5)', color: '#1e293b' }} onClick={onBack}>
          Exit Chat
        </button>
      </header>

      <div className="chat-container">
        <h1 className="chat-heading">
          Let's find your scheme.<br/>
          <span className="chat-heading-highlight">Right now.</span>
        </h1>
        
        <p style={{ fontSize: '1.25rem', color: '#475569', marginBottom: '2rem' }}>
          SaarthiAI lets you find fully-funded government schemes in minutes with just your words.<br/>
          No complex jargon necessary.
        </p>

        <div className="chat-input-wrapper">
          <div style={{ position: 'relative' }}>
            <input 
              type="text" 
              className="chat-input" 
              placeholder="What are you looking for?"
            />
            <button className="chat-submit">
              <ArrowRight size={20} />
            </button>
          </div>
          
          <div className="chat-suggestions-title">Not sure where to start? Try one of these:</div>
          <div className="chat-suggestions">
            <div className="chat-pill">Schemes for Farmers</div>
            <div className="chat-pill">Education Scholarships</div>
            <div className="chat-pill">Small Business Loans</div>
            <div className="chat-pill">Health Insurance</div>
          </div>
        </div>
      </div>
    </div>
  );
};

// ==========================================
// MAIN APP ROUTER
// ==========================================
export default function App() {
  const [currentView, setCurrentView] = useState('auth'); // 'auth', 'home', 'details', 'chat'
  const [userProfile, setUserProfile] = useState(null);
  const [selectedScheme, setSelectedScheme] = useState(null);

  React.useEffect(() => {
    // Check local storage for existing session
    const savedProfile = localStorage.getItem('saarthiProfile');
    if (savedProfile) {
      setUserProfile(JSON.parse(savedProfile));
      setCurrentView('home');
    }
  }, []);

  const handleAuthComplete = (profile) => {
    setUserProfile(profile);
    setCurrentView('home');
  };

  const handleViewDetails = (scheme) => {
    setSelectedScheme(scheme);
    setCurrentView('details');
  };

  const handleLogout = () => {
    localStorage.removeItem('saarthiProfile');
    setUserProfile(null);
    setCurrentView('auth');
  };

  return (
    <div style={{ scrollBehavior: 'smooth' }}>
      {currentView === 'auth' && <AuthView onComplete={handleAuthComplete} />}
      {currentView === 'home' && <HomeView userProfile={userProfile} onViewDetails={handleViewDetails} onOpenChat={() => setCurrentView('chat')} onLogout={handleLogout} />}
      {currentView === 'details' && <SchemeDetailsView scheme={selectedScheme} onBack={() => setCurrentView('home')} />}
      {currentView === 'chat' && <ChatbotView onBack={() => setCurrentView('home')} />}
    </div>
  );
}
