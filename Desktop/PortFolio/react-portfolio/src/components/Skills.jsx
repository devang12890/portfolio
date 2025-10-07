const Skills = () => {
  const categories = [
    {
      title: 'Languages',
      items: [
        { name: 'Java', icon: 'fab fa-java' },
        { name: 'Python', icon: 'fab fa-python' },
        { name: 'JavaScript', icon: 'fab fa-js' },
        { name: 'MySQL', icon: 'fas fa-database' }
      ]
    },
    {
      title: 'Frameworks',
      items: [
        { name: 'Spring Boot', icon: 'fas fa-leaf' },
        { name: 'React', icon: 'fab fa-react' }
      ]
    },
    {
      title: 'Concepts',
      items: [
        { name: 'OOP', icon: 'fas fa-cubes' },
        { name: 'DSA', icon: 'fas fa-project-diagram' },
        { name: 'System Design', icon: 'fas fa-network-wired' }
      ]
    },
    {
      title: 'Tools',
      items: [
        { name: 'Git & GitHub', icon: 'fab fa-github' },
        { name: 'Postman', icon: 'fas fa-plug' },
        { name: 'DevOps Basics', icon: 'fas fa-tools' }
      ]
    }
  ];

  return (
    <section className="section skills">
      <div className="container">
        <div className="section-header">
          <h2>My Skills</h2>
          <p className="section-subtitle">
            A snapshot of the technologies, frameworks, concepts and tools I use
          </p>
        </div>

        <div className="skills-grid">
          {categories.map((category, idx) => (
            <div key={idx} className="skill-card">
              <h3>{category.title}</h3>
              <div className="category-items">
                {category.items.map((item, i) => (
                  <div key={i} className="category-item">
                    <i className={item.icon}></i>
                    <span>{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
