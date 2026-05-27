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
      // Load MobileNet - lightweight model that runs in browser
      const loadedModel = await mobilenet.load();
      setModel(loadedModel);
      setIsModelReady(true);
      alert('✅ AI Model loaded! Upload an image to classify.');
    } catch (error) {
      console.error('Failed to load model:', error);
      alert('❌ Failed to load AI model. Check console for details.');
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
      alert('Failed to classify image. Make sure it\'s loaded correctly.');
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
    // Sample image URL (placeholder - replace with your own)
    const sampleUrl = 'https://via.placeholder.com/224x224.png?text=Upload+Your+Image';
    setImageUrl(sampleUrl);
    setPredictions([]);
  };

  return (
    <div className="ai-demo-container">
      <h3>🤖 Interactive AI Demo: Image Classification</h3>
      <p className="demo-description">
        This uses <strong>MobileNet</strong> — a lightweight neural network that runs entirely in your browser.
        No data is sent to any server. {isModelReady && '✅ Model is ready!'}
      </p>

      {!isModelReady ? (
        <button 
          onClick={loadModel} 
          disabled={isLoading}
          className="load-model-btn"
        >
          {isLoading ? 'Loading Model... (3-5 seconds)' : '🚀 Load AI Model'}
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
                {isLoading ? 'Analyzing...' : '🔍 Classify Image'}
              </button>

              {predictions.length > 0 && (
                <div className="predictions">
                  <h4>Predictions:</h4>
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
                    💡 This demo uses the same transfer learning principles as my DinoV2 project!
                    The model was pre-trained on ImageNet and fine-tuned for real-time inference.
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      )}

      <div className="ai-explanation">
        <h4>How This Works</h4>
        <ul>
          <li><strong>Model:</strong> MobileNet (lightweight CNN, 4MB)</li>
          <li><strong>Training:</strong> Pre-trained on ImageNet (1.2M images, 1000 classes)</li>
          <li><strong>Inference:</strong> Runs in your browser using TensorFlow.js</li>
          <li><strong>Privacy:</strong> Your images never leave your device</li>
        </ul>
        <p className="tech-note">
          This demonstrates the same principles I used in my <strong>Acne-AI project</strong> 
          (99.9% accuracy with DinoV2), but optimized for browser-based deployment.
        </p>
      </div>
    </div>
  );
};

export default AIDemo;