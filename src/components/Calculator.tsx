import React, { useState } from 'react';

type PrincipalCanadaWork = "Working in Canada" | "LMIA Job Offer" | "No Job or LMIA";
type YesNo = "Yes" | "No";

function getAgePoints(age: number): number {
  if (age < 36 && age > 17) return 12;
  if (age === 36) return 11;
  if (age === 37) return 10;
  if (age === 39) return 9;
  if (age === 40) return 8;
  if (age === 41) return 7;
  if (age === 42) return 6;
  if (age === 43) return 5;
  if (age === 44) return 3;
  if (age === 45) return 2;
  if (age === 46) return 1;
  // ... add other conditions for age here
  return 0;
}

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
