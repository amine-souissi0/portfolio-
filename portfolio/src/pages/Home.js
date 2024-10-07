// src/pages/Home.js
import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <section id="home">
      <div className="content">
        <img src="/amine.jpg" alt="Amine Souissi" className="profile-img" />
        <h1>Hi, I am <span>Amine Souissi</span></h1>
        <h2>I Love Building Things</h2>
        <h2>Mobile and Web Developer</h2>
        <h2>Life Long Learner</h2>
        <p>I am a skilled and passionate web developer with experience in creating visually appealing and user-friendly websites.</p>
        <button className="hire-me">Hire me</button>


        
      </div>
    </section>
  );
};

export default Home;
