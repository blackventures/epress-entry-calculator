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
  return 0;
}

function getWorkExperiencePoints(type: PrincipalCanadaWork): number {
  if (type === "Working in Canada" || type === "LMIA Job Offer") return 10;
  return 0;
}

function getWorkYearsPoints(years: number): number {
  if (years === 1) return 9;
  if (years === 2 || years === 3) return 11;
  if (years === 4 || years === 5) return 13;
  if (years > 5) return 15;
  return 0;
}

function getAdaptabilityPoints(
  principalCanadaWork: PrincipalCanadaWork,
  principalPreviousStudy: YesNo,
  spousePreviousStudy: YesNo,
  spouseCanadaWork: YesNo,
  spouseLanguage: YesNo,
  canadianRelative: YesNo
): number {
  let points = 0;

  // Principal Canada Work Points
  if (principalCanadaWork === "Working in Canada") points += 10;

  // Principal Previous Study Points
  if (principalPreviousStudy === "Yes") points += 5;

  // LMIA Job Offer Points
  if (principalCanadaWork === "LMIA Job Offer") points += 5;

  // Spouse Previous Study Points
  if (spousePreviousStudy === "Yes") points += 5;

  // Spouse Canada Work Points
  if (spouseCanadaWork === "Yes") points += 5;

  // Spouse Language Points
  if (spouseLanguage === "Yes") points += 5;

  // Canadian Relative Points
  if (canadianRelative === "Yes") points += 5;

  // Return the minimum between the calculated points and 10 (as per the provided formula)
  return Math.min(10, points);
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
