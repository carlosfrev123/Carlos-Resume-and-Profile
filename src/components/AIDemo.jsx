import { useState, useRef } from 'react';
import * as tf from '@tensorflow/tfjs';
import * as mobilenet from '@tensorflow-models/mobilenet';

const AIDemo = () => {
  const [model, setModel] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [predictions, setPredictions] = useState([]);
  const [imageUrl, setImageUrl] = useState('');
  const [isModelReady, setIsModelReady] = useState(false);
  const imageRef = useRef(null);
  const fileInputRef = useRef(null);

  // Load MobileNet model
  const loadModel = async () => {
    setIsLoading(true);
    try {
      const loadedModel = await mobilenet.load();
      setModel(loadedModel);
      setIsModelReady(true);
    } catch (error) {
      console.error('Failed to load model:', error);
      alert('Failed to load AI model. Please check the console for details.');
    } finally {
      setIsLoading(false);
    }
  };

  // Classify image
  const classifyImage = async () => {
    if (!model || !imageRef.current) return;
    
    setIsLoading(true);
    try {
      const results = await model.classify(imageRef.current);
      setPredictions(results);
    } catch (error) {
      console.error('Classification error:', error);
      alert('Failed to classify image. Please ensure it is loaded correctly.');
    } finally {
      setIsLoading(false);
    }
  };

  // Handle image upload
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setImageUrl(url);
      setPredictions([]); // Clear previous predictions
    }
  };

  // Use sample image
  const useSampleImage = () => {
    const sampleUrl = 'https://via.placeholder.com/224x224.png?text=Upload+Your+Image';
    setImageUrl(sampleUrl);
    setPredictions([]);
  };

  return (
    <div className="ai-demo-container">
      <h3>Interactive AI Demo: Image Classification</h3>
      
      {/* Professional Transparency Notice */}
      <div className="demo-transparency-notice">
        <h4>About This Live Demo</h4>
        <p>
          This interactive demo runs <strong>MobileNet</strong>, a lightweight neural network (approximately 4MB) 
          optimized for web browsers. It performs all inference locally on your device—no images are ever sent to a server. 
          While this model is pre-trained on ImageNet for general classification, it demonstrates the same 
          transfer learning and browser-based deployment principles used in my <strong>Acne-AI project</strong>, 
          where a larger DinoV2 model was fine-tuned to achieve 99.9% accuracy for medical diagnosis.
        </p>
      </div>

      <p className="demo-status">
        Model Status: {isModelReady ? 'Ready' : 'Not Loaded'}
      </p>

      {!isModelReady ? (
        <button 
          onClick={loadModel} 
          disabled={isLoading}
          className="load-model-btn"
        >
          {isLoading ? 'Loading Model... (approximately 3-5 seconds)' : 'Load AI Model'}
        </button>
      ) : (
        <div className="demo-active">
          <div className="upload-section">
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              ref={fileInputRef}
              className="file-input"
            />
            <button onClick={useSampleImage} className="sample-btn">
              Use Sample Image
            </button>
          </div>

          {imageUrl && (
            <div className="classification-section">
              <div className="image-container">
                <img 
                  ref={imageRef}
                  src={imageUrl} 
                  alt="To classify" 
                  crossOrigin="anonymous"
                  onLoad={() => console.log('Image loaded')}
                />
              </div>
              
              <button 
                onClick={classifyImage} 
                disabled={isLoading}
                className="classify-btn"
              >
                {isLoading ? 'Analyzing...' : 'Classify Image'}
              </button>

              {predictions.length > 0 && (
                <div className="predictions">
                  <h4>Predictions</h4>
                  <ul>
                    {predictions.map((pred, idx) => (
                      <li key={idx}>
                        <strong>{pred.className}</strong>
                        <div className="confidence-bar">
                          <div 
                            className="confidence-fill"
                            style={{ width: `${pred.probability * 100}%` }}
                          />
                          <span>{(pred.probability * 100).toFixed(1)}%</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                  <p className="ai-note">
                    This demonstration uses a lightweight, browser-based model to showcase core 
                    machine learning concepts. For my full-scale work, see the Acne-AI project 
                    which utilized a fine-tuned DinoV2 model on dedicated GPU hardware.
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      )}

      <div className="ai-explanation">
        <h4>Technical Details</h4>
        <ul>
          <li><strong>Model:</strong> MobileNet (Lightweight CNN, ~4MB)</li>
          <li><strong>Training:</strong> Pre-trained on ImageNet (1.2M images, 1000 classes)</li>
          <li><strong>Inference:</strong> Runs entirely in your browser using TensorFlow.js</li>
          <li><strong>Privacy:</strong> Your images never leave your device</li>
        </ul>
        <p className="tech-note">
          This architecture demonstrates the core principles behind my <strong>Acne-AI project</strong> 
          (which achieved 99.9% accuracy with DinoV2), optimized here for real-time, client-side deployment.
        </p>
      </div>
    </div>
  );
};

export default AIDemo;