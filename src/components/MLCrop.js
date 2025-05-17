import React from 'react';
import ml1 from './imgs/ml1.png';

import './ProjectStyle.css';

const MLCrop = () => {
  return (
    <div className="project-page">
      <h1>ML Based Crop and Yield Prediction</h1>
      <img src={ml1} alt="Crop Prediction Dashboard" className="project-image" />
      
      <p>
        Developed a machine learning-based application that predicts the most suitable crop and estimated yield 
        based on input parameters such as soil type, rainfall, temperature, and humidity. Integrated with real-time data 
        sources and provided accurate, data-driven insights for agricultural planning.
      </p>
      
      <p>
        Tools used:
        <ul>Frontend: React.js, HTML5, CSS3 (custom CSS), JavaScript</ul>
        <ul>State Management: React Hooks (useState, useEffect)</ul>
        <ul>Routing: React Router</ul>
        <ul>Machine Learning: Python (scikit-learn, pandas)</ul>
        <ul>Data Handling: CSV Datasets, Preprocessing Pipelines</ul>
        <ul>Deployment: React with model API endpoint integration</ul>
      </p>

     
    </div>
  );
};

export default MLCrop;
