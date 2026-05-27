import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isLoading, setIsLoading] = useState(false);

  // 👇 YOUR ACTUAL KEYS - Fix the Public Key (remove 'user_' prefix)
  const SERVICE_ID = 'service_jibhxbp';
  const TEMPLATE_ID = 'template_y3wimd7';
  const PUBLIC_KEY = 'KeGmbgQndUo_XHFLY';  // ← REMOVED 'user_' prefix

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const getCurrentTime = () => {
    return new Date().toLocaleString('en-US', {
      dateStyle: 'full',
      timeStyle: 'long'
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus({ type: '', message: '' });

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        time: getCurrentTime()
      };

      const result = await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        templateParams,
        PUBLIC_KEY
      );
      
      if (result.status === 200) {
        setStatus({ 
          type: 'success', 
          message: '✅ Message sent successfully! I\'ll get back to you within 24-48 hours.' 
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      }
    } catch (error) {
      console.error('EmailJS error details:', error);
      setStatus({ 
        type: 'error', 
        message: '❌ Failed to send. Please email me directly at carlosfr.mgmt@gmail.com'
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="contact-form-container">
      <h3>📧 Get in Touch</h3>
      <p>Fill out the form below and I'll respond within 24-48 hours.</p>
      
      {status.message && (
        <div className={`status-message ${status.type}`}>
          {status.message}
        </div>
      )}
      
      <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name *</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Your name"
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="email">Email *</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="your.email@example.com"
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="subject">Subject *</label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            placeholder="What's this about?"
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="message">Message *</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="5"
            placeholder="Your message here..."
          />
        </div>
        
        <button type="submit" disabled={isLoading} className="submit-btn">
          {isLoading ? 'Sending...' : 'Send Message'}
        </button>
      </form>
      
      <div className="alternative-contact">
        <p>Or reach me directly:</p>
        <p>✉️ carlosfr.mgmt@gmail.com</p>
      </div>
    </div>
  );
};

export default ContactForm;