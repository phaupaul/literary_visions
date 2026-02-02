'use client';

import { useState } from 'react';
import { fal } from '@fal-ai/client';
import { BOOK_LIBRARY, Book, BookQuote } from '@/lib/quotes';
import { AVAILABLE_MODELS, RESOLUTION_PRESETS, DEFAULT_MODEL, DEFAULT_RESOLUTION, ART_STYLES, DEFAULT_ART_STYLE, ModelConfig, ResolutionPreset, ArtStyle } from '@/lib/models';
import { enhancePromptWithBookContext, enhanceCustomPrompt, EnhancedPrompt } from '@/lib/promptEnhancer';

fal.config({
  proxyUrl: '/api/fal/proxy',
});

export default function Home() {
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const [selectedQuote, setSelectedQuote] = useState<BookQuote | null>(null);
  const [customQuote, setCustomQuote] = useState('');
  const [selectedModel, setSelectedModel] = useState<ModelConfig>(DEFAULT_MODEL);
  const [selectedResolution, setSelectedResolution] = useState<ResolutionPreset>(DEFAULT_RESOLUTION);
  const [selectedArtStyle, setSelectedArtStyle] = useState<ArtStyle>(DEFAULT_ART_STYLE);
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [lastEnhancedPrompt, setLastEnhancedPrompt] = useState<EnhancedPrompt | null>(null);
  const [showAdvanced, setShowAdvanced] = useState(false);

  const handleGenerate = async () => {
    let enhancedPrompt: EnhancedPrompt;
    
    // Determine and enhance the prompt
    if (selectedQuote && selectedBook) {
      enhancedPrompt = enhancePromptWithBookContext(selectedQuote, selectedBook, selectedArtStyle.promptModifier);
    } else if (customQuote) {
      enhancedPrompt = enhanceCustomPrompt(customQuote, selectedArtStyle.promptModifier, selectedBook || undefined);
    } else {
      return;
    }

    setLoading(true);
    setError(null);
    setImage(null);
    setLastEnhancedPrompt(enhancedPrompt);

    try {
      const result: any = await fal.subscribe(selectedModel.id, {
        input: {
          prompt: enhancedPrompt.enhancedPrompt,
          image_size: { 
            width: selectedResolution.width, 
            height: selectedResolution.height 
          },
          num_inference_steps: selectedModel.quality === 'ultra' ? 50 : selectedModel.quality === 'high' ? 30 : 20,
          enable_safety_checker: true,
        },
        logs: true,
        onQueueUpdate: (update) => {
          if (update.status === 'IN_PROGRESS') {
            update.logs.map((log) => log.message).forEach(console.log);
          }
        },
      });

      if (result.data.images && result.data.images.length > 0) {
        setImage(result.data.images[0].url);
      } else if (result.data.image && result.data.image.url) {
        setImage(result.data.image.url);
      } else {
        console.warn("Unexpected result structure:", result);
        setError("No image URL returned from API");
      }

    } catch (err: any) {
      setError(err.message || 'An error occurred while generating your vision.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleBookSelect = (book: Book) => {
    // Toggle selection - if clicking the same book, unselect it
    if (selectedBook === book) {
      setSelectedBook(null);
      setSelectedQuote(null);
      setCustomQuote('');
    } else {
      setSelectedBook(book);
      setSelectedQuote(null); // Reset quote selection when changing books
      setCustomQuote(''); // Clear custom input
      
      // Smooth scroll to the next step
      setTimeout(() => {
        const nextStep = document.querySelector('.workflow-step:nth-child(2)');
        if (nextStep) {
          nextStep.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  };

  const handleQuoteSelect = (quote: BookQuote) => {
    // Toggle selection - if clicking the same quote, unselect it
    if (selectedQuote === quote) {
      setSelectedQuote(null);
    } else {
      setSelectedQuote(quote);
      setCustomQuote(''); // Clear custom input when selecting a preset
    }
  };

  const handleCustomInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCustomQuote(e.target.value);
    setSelectedQuote(null); // Deselect preset when typing custom
  };

  const canGenerate = (selectedQuote && selectedBook) || customQuote.trim();

  return (
    <main className="container">
      {/* Background Ambience */}
      <div className="bg-ambience">
        {/* Floating orbs */}
        <div className="floating-orb orb-1"></div>
        <div className="floating-orb orb-2"></div>
        <div className="floating-orb orb-3"></div>
        <div className="floating-orb orb-4"></div>
        <div className="floating-orb orb-5"></div>
      </div>

      <div className="glass-panel">
        <div className="header-section">
          <h1 className="title-glow">
            Literary Visions
          </h1>
          <p className="subtitle">
            Transform epic book scenes into stunning desktop wallpapers with <span className="highlight">fal.ai</span>
          </p>
        </div>

        <div className="workflow-container">

          {/* Step 1: Book Selection */}
          <div className="workflow-step">
            <div className="step-header">
              <div className="step-number">1</div>
              <h2 className="step-title">Choose Your Literary World</h2>
            </div>
            
            <div className="book-grid">
              {BOOK_LIBRARY.map((book, idx) => (
                <div
                  key={idx}
                  onClick={() => handleBookSelect(book)}
                  className={`book-card ${selectedBook === book ? 'active' : ''}`}
                >
                  <div className="book-info">
                    <h3 className="book-title">{book.title}</h3>
                    <p className="book-author">by {book.author}</p>
                    {book.series && <p className="book-series">{book.series}</p>}
                    <span className="book-genre">{book.genre}</span>
                  </div>
                  <div className="quote-count">{book.quotes.length} scenes</div>
                </div>
              ))}
            </div>
          </div>

          {/* Step 2: Scene Selection - only show if book is selected */}
          {selectedBook && (
            <div className="workflow-step">
              <div className="step-header">
                <div className="step-number">2</div>
                <h2 className="step-title">Pick an Epic Scene from {selectedBook.title}</h2>
                <p className="step-description">Or describe your own scene below</p>
              </div>
              
              <div className="quote-grid">
                {selectedBook.quotes.map((quote, idx) => (
                  <div
                    key={idx}
                    onClick={() => handleQuoteSelect(quote)}
                    className={`quote-card ${selectedQuote === quote ? 'active' : ''}`}
                  >
                    <div className="quote-content">
                      <p className="quote-text">"{quote.quote}"</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Step 3: Custom Input & Generation */}
          <div className="workflow-step">
            <div className="step-header">
              <div className="step-number">{selectedBook ? '3' : '1'}</div>
              <h2 className="step-title">
                {selectedBook ? 'Customize & Generate' : 'Describe Your Vision'}
              </h2>
              {selectedBook ? (
                <p className="step-description">
                  {selectedQuote ? 'Modify the scene or generate as-is' : 'Describe your own scene from this world'}
                </p>
              ) : (
                <p className="step-description">
                  Start by selecting a book above, or describe any scene you'd like to visualize
                </p>
              )}
            </div>

            <div className="generation-section">
              <textarea
                className="glass-input"
                placeholder={selectedBook 
                  ? `Describe a scene from ${selectedBook.title} or modify the selected scene...`
                  : "Describe a scene from your favorite book or imagination..."
                }
                value={customQuote}
                onChange={handleCustomInput}
              />
              
              {/* Art Style Selection */}
              <div className="art-style-section">
                <label className="style-label">Art Style:</label>
                <div className="art-style-grid">
                  {ART_STYLES.map((style) => (
                    <button
                      key={style.id}
                      onClick={() => setSelectedArtStyle(style)}
                      className={`art-style-btn ${selectedArtStyle.id === style.id ? 'active' : ''}`}
                      title={style.description}
                    >
                      <span className="style-icon">{style.icon}</span>
                      <span className="style-name">{style.name}</span>
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Quick Settings */}
              <div className="quick-settings">
                <div className="setting-row">
                  <label className="setting-label">Size:</label>
                  <select 
                    className="setting-select"
                    value={selectedResolution.name}
                    onChange={(e) => setSelectedResolution(RESOLUTION_PRESETS.find(r => r.name === e.target.value) || DEFAULT_RESOLUTION)}
                  >
                    {RESOLUTION_PRESETS.filter(r => r.category === 'desktop').map(resolution => (
                      <option key={resolution.name} value={resolution.name}>
                        {resolution.name} ({resolution.width}×{resolution.height})
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Advanced Settings Toggle */}
              <button 
                className="advanced-toggle"
                onClick={() => setShowAdvanced(!showAdvanced)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                More Options
                <svg 
                  className={`chevron ${showAdvanced ? 'rotated' : ''}`}
                  xmlns="http://www.w3.org/2000/svg" 
                  width="16" 
                  height="16" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Advanced Settings Panel */}
              {showAdvanced && (
                <div className="advanced-panel">
                  {/* All Resolution Categories */}
                  <div className="setting-group">
                    <label className="setting-label">All Resolution Options</label>
                    <div className="resolution-categories">
                      {['desktop', 'mobile', 'social', 'print'].map((category) => (
                        <div key={category} className="resolution-category">
                          <h4 className="category-title">{category.charAt(0).toUpperCase() + category.slice(1)}</h4>
                          <div className="resolution-options">
                            {RESOLUTION_PRESETS.filter(r => r.category === category).map((resolution) => (
                              <div
                                key={resolution.name}
                                onClick={() => setSelectedResolution(resolution)}
                                className={`resolution-option ${selectedResolution.name === resolution.name ? 'active' : ''}`}
                              >
                                <div className="resolution-name">{resolution.name}</div>
                                <div className="resolution-specs">{resolution.width}×{resolution.height}</div>
                                <div className="resolution-description">{resolution.description}</div>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Model Details */}
                  <div className="setting-group">
                    <label className="setting-label">Model Comparison</label>
                    <div className="model-grid">
                      {AVAILABLE_MODELS.map((model) => (
                        <div
                          key={model.id}
                          onClick={() => setSelectedModel(model)}
                          className={`model-card ${selectedModel.id === model.id ? 'active' : ''}`}
                        >
                          <div className="model-name">{model.name}</div>
                          <div className="model-description">{model.description}</div>
                          <div className="model-badges">
                            <span className={`badge speed-${model.speed}`}>{model.speed}</span>
                            <span className={`badge quality-${model.quality}`}>{model.quality}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
              
              <div className="btn-container">
                <button
                  onClick={handleGenerate}
                  disabled={loading || !canGenerate}
                  className="btn-magic"
                >
                  {loading ? (
                    <>
                      <div className="loader"></div>
                      <span className="loading-text">Generating Vision...</span>
                    </>
                  ) : (
                    <>
                      <svg className="magic-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3l14 9-14 9V3z" />
                      </svg>
                      Generate Wallpaper
                    </>
                  )}
                </button>
              </div>
              
              {error && (
                <div className="error-msg">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                  {error}
                </div>
              )}
            </div>
          </div>
        </div>

      </div>

      {/* Subtle Footer */}
      <footer className="app-footer">
        <p>Powered by <a href="https://fal.ai" target="_blank" rel="noopener noreferrer" className="fal-link">fal.ai</a> • Transform literary worlds into visual art</p>
      </footer>

      {/* Result Section */}
      {(image) && (
        <div className="modal-overlay" onClick={() => setImage(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>

            <button
              onClick={() => setImage(null)}
              className="close-btn"
              aria-label="Close"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="image-container">
              <img
                src={image}
                alt="Generated Vision"
                className="generated-image"
              />
            </div>

            <div className="modal-footer">
              <div className="generation-details">
                <span className="detail-item">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {selectedResolution.width}×{selectedResolution.height}
                </span>
                <span className="detail-item">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  {selectedModel.name}
                </span>
                <span className="detail-item">
                  <span className="style-icon-small">{selectedArtStyle.icon}</span>
                  {selectedArtStyle.name}
                </span>
                {lastEnhancedPrompt && (
                  <span className="detail-item enhancement-info" title={`Enhancements applied:\n${lastEnhancedPrompt.contextAdded.map((item, i) => `${i + 1}. ${item}`).join('\n')}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                    <span className="enhancement-text">
                      Enhanced with {lastEnhancedPrompt.contextAdded.length} improvements
                      <span className="enhancement-tooltip">
                        <span className="tooltip-title">Enhancements Applied:</span>
                        {lastEnhancedPrompt.contextAdded.map((item, i) => (
                          <span key={i} className="tooltip-item">
                            {i + 1}. {item}
                          </span>
                        ))}
                      </span>
                    </span>
                  </span>
                )}
              </div>
              <div className="download-actions">
                <a
                  href={image}
                  download={`literary-vision-${selectedResolution.name.toLowerCase().replace(/ /g, '-')}.png`}
                  target="_blank"
                  rel="noreferrer"
                  className="download-btn"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  Download Wallpaper
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

    </main>
  );
}
