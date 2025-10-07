import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: 'fas fa-envelope',
      title: 'Email',
      content: 'devangawasthi82@gmail.com'
    },
    {
      icon: 'fas fa-phone',
      title: 'Phone',
      content: '+91 8176900770'
    },
    {
      icon: 'fas fa-map-marker-alt',
      title: 'Location',
      content: 'Kanpur, India'
    }
  ];

  const socialLinks = [
    { icon: 'fab fa-github', url: 'https://github.com/devang12890' },
    { icon: 'fab fa-linkedin', url: 'https://www.linkedin.com/in/devang-awasthi-981ab1308/' },
    { icon: 'fab fa-instagram', url: 'https://www.instagram.com/imdevang_awasthi/' }
  ];

  return (
    <section className="section contact">
      <div className="container">
        <div className="section-header">
          <h2>Get In Touch</h2>
          <p className="section-subtitle">
            Let's discuss your project and how I can help bring your ideas to life.
          </p>
        </div>
        <div className="contact-main">
          <div className="contact-info">
            <h3>Let's discuss your Project</h3>
            <p>
              I'm available for freelance work. Drop me a line if you have a project 
              you think I'd be a good fit for.
            </p>
            <div className="contact-details">
              {contactInfo.map((item, index) => (
                <div key={index} className="contact-item">
                  <span className="icon"><i className={item.icon}></i></span>
                  <div>
                    <h4>{item.title}</h4>
                    <p>{item.content}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="social-links">
              {socialLinks.map((social, index) => (
                <a 
                  key={index} 
                  href={social.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label={social.icon.replace('fab fa-', '')}
                >
                  <i className={social.icon}></i>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;