// src/pages/Projects.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Projects.css';

const projects = [
  { 
    id: 1, 
    name: '50 Projects 50 Days', 
    description: '50+ mini web projects using HTML, CSS & JS', 
    tools: 'HTML, CSS, JavaScript', 
    details: 'A series of 50+ mini web projects to improve your HTML, CSS, and JavaScript skills. Each project is designed to be built in a single day, making it a perfect daily challenge to enhance your web development knowledge. The projects cover a wide range of topics including animations, forms, games, and UI components.',
    image: '/id1.jpg',  // Updated image path
    link: 'https://github.com/bradtraversy/50projects50days'
  },
  { 
    id: 2, 
    name: 'Esprit Piazza', 
    description: 'An enterprise forum management platform.', 
    tools: 'Angular, Spring Boot', 
    details: 'Esprit Piazza is our enterprise forum management platform, designed to foster seamless collaboration between ESPRIT University and businesses. Acting as a virtual nexus, it transcends physical boundaries, facilitating efficient event coordination and mutual benefit for all stakeholders. The platform engages eight distinct user roles, each with specialized functionalities. Key features include comprehensive user management overseen by administrators, streamlined forum organization capabilities for committees, logistical support for event supplies managed by suppliers, and extensive application and offer management tools benefiting exhibitors, students, alumni, and teachers. Security and user management, central to the platform\'s operation, ensure smooth and protected interactions across all functionalities. Our team, \'Glitch Mavens\', achieved recognition by being selected among 8 groups from 10 classes in SAE and advancing to the semifinals.',
    image: '/images/esprit-piazza.jpg',
    link: 'https://www.youtube.com/watch?v=95Ub-Nd_h8s'
  },
  { 
    id: 3, 
    name: 'Hamming Code Verification and Rewriting Rules', 
    description: 'A robust implementation of Hamming code verification and optimization of boolean circuits.', 
    tools: 'Python', 
    details: 'Developed a robust implementation of Hamming code verification. Applied rewriting rules to simplify and optimize boolean circuits. Achieved significant reduction in the number of logic gates through optimization. Verified the identity property of the Hamming code encoder and decoder. Demonstrated resilience to single-bit errors. Showed potential improvements in circuit efficiency with rewriting rules. Used Python for algorithm implementation, unit tests to ensure accuracy and robustness, and visualizations to depict circuit architecture and optimization.',
    image: '/images/pythonhamming.jpg',
    link: 'https://www.linkedin.com'
  },
  { 
    id: 4, 
    name: 'Gestion Hopital', 
    description: 'A comprehensive hospital management system with multiple management functionalities.', 
    tools: 'JavaFX, Symfony, Flutter', 
    details: 'The Gestion Hopital project is a comprehensive hospital management system that includes various management functionalities such as user management, donations, localization, articles, and sponsorship. The system is built using a combination of JavaFX for desktop application, Symfony for web backend, and Flutter for mobile applications. The project ensures efficient handling of hospital operations and provides a unified platform for different management tasks.',
    image: '/images/javafx.png'
  },
  { 
    id: 5, 
    name: 'OAuth2 User Management with Next.js', 
    description: 'Web application with user authentication and address validation.', 
    tools: 'Next.js, OAuth2, API address.data.gouv.fr', 
    details: 'Developed a web application using Next.js that allows users to create and authenticate via OAuth2. Users can update personal information like name, birthdate, address, and phone number. The application validates user addresses to ensure they are within 50 km of Paris using the address.data.gouv.fr API. The project is deployed on Vercel and available for testing. The application emphasizes security and efficient user management.',
    image: '/images/authentification.png', 
    link: 'https://github.com/gocho1200/ParisConnect'
  }
];

const Projects = () => {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="project-list">
        {projects.map((project) => (
          <div key={project.id} className="project-item">
            <img src={project.image} alt={project.name} />
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <Link to={`/projects/${project.id}`}>Read more</Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
