// src/pages/ProjectDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';
import './ProjectDetail.css';

const projects = [
  { 
    id: 1, 
    name: '50 Projects 50 Days', 
    description: '50+ mini web projects using HTML, CSS & JS', 
    tools: 'HTML, CSS, JavaScript', 
    details: 'A series of 50+ mini web projects to improve your HTML, CSS, and JavaScript skills. Each project is designed to be built in a single day, making it a perfect daily challenge to enhance your web development knowledge. The projects cover a wide range of topics including animations, forms, games, and UI components.',
    image: '/id1.jpg',  // Updated image path
    sourceCode: 'https://github.com/bradtraversy/50projects50days'
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
    sourceCode: 'https://github.com/gocho1200/projet-graphe-python-machine-learning'
  },
  { 
    id: 4, 
    name: 'Gestion Hopital', 
    description: 'A comprehensive hospital management system with multiple management functionalities.', 
    tools: 'JavaFX, Symfony, Flutter', 
    details: 'The Gestion Hopital project is a comprehensive hospital management system that includes various management functionalities such as user management, donations, localization, articles, and sponsorship. The system is built using a combination of JavaFX for desktop application, Symfony for web backend, and Flutter for mobile applications. The project ensures efficient handling of hospital operations and provides a unified platform for different management tasks.',
    image: '/images/javafx.png',
    sourceCode: 'https://github.com/attia12/JavaFx-project'
  },
  { 
    id: 5, 
    name: 'OAuth2 User Management with Next.js', 
    description: 'Web application with user authentication and address validation.', 
    tools: 'Next.js, OAuth2, API address.data.gouv.fr', 
    details: `This project involves building a web application using Next.js that allows users to:
    
    1. **Create and authenticate users via OAuth2**: Users can log in securely using OAuth2 authentication through services such as Google or GitHub.
    
    2. **Update user information**: Authenticated users can modify their personal details such as name, first name, date of birth, address, and phone number. The interface is user-friendly and responsive.

    3. **Address validation**: The system ensures that the user's address is within 50 km of Paris. This is achieved by integrating the API from address.data.gouv.fr, which verifies the distance based on the user's input.

    4. **Deployment**: The project is deployed on Vercel, making it easily accessible for testing and live demos.

    5. **GitHub Repository**: All code and configurations are stored in a GitHub repository, ensuring that it is version-controlled and well-organized.

    **Project Objective**: This project is a complete, secure, and user-friendly web solution that demonstrates OAuth2 integration, API handling for location-based conditions, and deployment to modern cloud platforms like Vercel.`,
    
    image: '/images/authentification.png', 
    link: 'https://github.com/yourusername/oauth2-nextjs'
}
,
{
  id: 6,
  name: 'ADC WebApp',
  description: 'CGSS Shift Management Project Web Application',
  tools: 'Full-stack (Node/Express, React, Database)',
  details: 'ADC WebApp is a full-stack web application. It includes server and client code, documentation, and a demo video showcasing the core features and installation steps.',
  image: '/cgss.png',
  sourceCode: 'https://github.com/amine-souissi0/adc_webapp',
  documentation: 'https://github.com/amine-souissi0/documentaion',
  demoVideo: 'https://drive.google.com/file/d/1_26Y8SUsOXj2JTDJoT_BaoieFT8pr4IR/view?usp=sharing'
}
,
{
  id: 7,
  name: 'Event Booking API (Laravel)',
  description: 'RESTful API for event booking built with Laravel.',
  tools: 'Laravel, PHP, MySQL, REST API',
  details: 'A RESTful Event Booking API built with Laravel. Provides endpoints for events, bookings and user authentication. Includes database migrations, validation and API documentation in the repository.',
  image: '/laravel.jpg',
  sourceCode: 'https://github.com/amine-souissi0/Event-Booking-API-Laravel/tree/master'
}
,
{
  id: 8,
  name: 'AI Agent Orchestrator',
  description: 'Orchestrator for AI agents to run coordinated workflows.',
  tools: 'Python, Node, Orchestration',
  details: 'AI Agent Orchestrator coordinates multiple AI agents to perform multi-step workflows. See repository for installation and usage.',
  image: '/ai.jpg',
  sourceCode: 'https://github.com/amine-souissi0/ai-agent-orchestrator'
}
];

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find((project) => project.id === parseInt(id));

  if (!project) {
    return <p>Project not found</p>;
  }

  return (
    <section id="project-detail">
      <h2>{project.name}</h2>
      <img src={project.image} alt={project.name} />
      <p>{project.details}</p>
      <h3>Technologies Used:</h3>
      <p>{project.tools}</p>
      {project.link && (
        <p>
          <a href={project.link} target="_blank" rel="noopener noreferrer">Watch the project video</a>
        </p>
      )}
      {project.sourceCode && (
        <p>
          <a href={project.sourceCode} target="_blank" rel="noopener noreferrer">View Source Code</a>
        </p>
      )}
      {project.documentation && (
        <p>
          <a href={project.documentation} target="_blank" rel="noopener noreferrer">Project Documentation</a>
        </p>
      )}
      {project.demoVideo && (
        <p>
          <a href={project.demoVideo} target="_blank" rel="noopener noreferrer">Demo Video</a>
        </p>
      )}
    </section>
  );
};

export default ProjectDetail;
