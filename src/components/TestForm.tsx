import React, { useState } from 'react';
import axios from 'axios';

const TestForm = () => {
  const [formData, setFormData] = useState({
    to: 'contact@example.com',
    subject: 'Test',
    text: 'Ceci est un test',
    fromName: 'Test',
    fromEmail: 'test@example.com',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/api/mail/send', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log('Réponse:', response.data);
    } catch (error) {
      console.error('Erreur:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="to">To:</label>
        <input
          type="text"
          id="to"
          value={formData.to}
          onChange={e => setFormData({ ...formData, to: e.target.value })}
        />
      </div>
      <div>
        <label htmlFor="subject">Subject:</label>
        <input
          type="text"
          id="subject"
          value={formData.subject}
          onChange={e => setFormData({ ...formData, subject: e.target.value })}
        />
      </div>
      <div>
        <label htmlFor="text">Text:</label>
        <textarea
          id="text"
          value={formData.text}
          onChange={e => setFormData({ ...formData, text: e.target.value })}
        />
      </div>
      <button type="submit">Envoyer</button>
    </form>
  );
};

export default TestForm;
