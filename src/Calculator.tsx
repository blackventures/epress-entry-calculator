import React, { useState } from 'react';

const Calculator: React.FC = () => {
  const [englishScore, setEnglishScore] = useState<number>(0);
  const [eligibilityResult, setEligibilityResult] = useState<string | null>(null);

  const handleSubmit = async () => {
    // Mocked response logic for now
    const MINIMUM_SCORE = 5;

    if (englishScore >= MINIMUM_SCORE) {
        setEligibilityResult('You are eligible!');
    } else {
        setEligibilityResult('You are not eligible.');
    }
  };

  return (
    <div className="flex flex-col items-center mt-12">
      <label className="mb-4">
        English Score:
        <input
          type="number"
          value={englishScore}
          onChange={(e) => setEnglishScore(Number(e.target.value))}
          className="ml-2 p-1 border border-gray-300 rounded"
        />
      </label>
      <button onClick={handleSubmit} className="bg-blue-500 text-white px-4 py-2 rounded">Check Eligibility</button>
      {eligibilityResult && <p className="mt-4">{eligibilityResult}</p>}
    </div>
  );
}

export default Calculator;
