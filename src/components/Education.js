import React from 'react';
import './Education.css';

function Education() {
  return (
    <div className="sect">
      <h2 className="section-title">Education</h2>

      <div className="card">
        <h3>B.E. Electrical and Electronics Engineering</h3>
        <p>Sri Krishna College Of Engineering And Technology (2022-2026)</p>
        <ul>
          <li>CGPA : 8.23/10</li>
        </ul>
      </div>

      <div className="card">
        <h3>Higher Secondary (HSC)</h3>
        <p>ARB International School (2020 - 2022)</p>
        <ul>
          <li>Percentage: 93.8%</li>
          <li>Board : CBSE</li>
        </ul>
      </div>

      <div className="card">
        <h3>SSLC</h3>
        <p>ARB International School (2018 - 2020)</p>
        <ul>
          <li>Percentage: 91%</li>
          <li>Board : CBSE</li>
        </ul>
      </div>

    </div>
  );
}

export default Education;