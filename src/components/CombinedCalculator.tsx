import React, { useState } from 'react';
import CommonFields from './CommonFields';
import CRSFields from './CRSFields';
import FSWFields from './FSWFields';
import { calculateCRS } from './calculateCRS';
import { calculateFSW } from './calculateFSW';

const CombinedCalculator = () => {
  const [formData, setFormData] = useState<any>({});

  const handleCalculateScores = () => {
    const crsScore = calculateCRS(formData);
    const fswScore = calculateFSW(formData);
    alert(`Your CRS Score is ${crsScore} and FSW Score is ${fswScore}`);
  };

  return (
    <div>
      <h2>Canadian Immigration Score Calculator</h2>
      <form>
        <CommonFields formData={formData} setFormData={setFormData} />
        <CRSFields formData={formData} setFormData={setFormData} />
        <FSWFields formData={formData} setFormData={setFormData} />
        <button type="button" onClick={handleCalculateScores}>Calculate Both Scores</button>
      </form>
    </div>
  );
};

export default CombinedCalculator;
