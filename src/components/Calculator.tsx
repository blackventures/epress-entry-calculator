import React, { useState } from 'react';

type PrincipalCanadaWork = "Working in Canada" | "LMIA Job Offer" | "No Job or LMIA";
type Education = 
    "Secondary school/high school diploma" |
    "One-year post-secondary degree" |
    "Two-year post-secondary degree" |
    "Three-year or longer post-secondary degree" |
    "Two or more post-secondary degree with one being three-year or longer" |
    "Master's level or professional degree (Medicine Veterinary Medicine Dentistry Podiatry Optometry Law Chiropractic Medicine or Pharmacy)" |
    "Doctoral (PhD) level";
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

function getEducationPoints(education: Education): number {
  switch (education) {
      case "Secondary school/high school diploma": return 5;
      case "One-year post-secondary degree": return 15;
      case "Two-year post-secondary degree": return 19;
      case "Three-year or longer post-secondary degree": return 21;
      case "Two or more post-secondary degree with one being three-year or longer": return 22;
      case "Master's level or professional degree (Medicine Veterinary Medicine Dentistry Podiatry Optometry Law Chiropractic Medicine or Pharmacy)": return 23;
      case "Doctoral (PhD) level": return 25;
      default: return 0;
  }
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
  const [age, setAge] = useState<number>(0);
  const [workYears, setWorkYears] = useState<number>(0);
  const [education, setEducation] = useState<Education>("Secondary school/high school diploma")
  const [principalCanadaWork, setPrincipalCanadaWork] = useState<PrincipalCanadaWork>("No Job or LMIA");
  const [principalPreviousStudy, setPrincipalPreviousStudy] = useState<YesNo>("No");
  const [spousePreviousStudy, setSpousePreviousStudy] = useState<YesNo>("No");
  const [spouseCanadaWork, setSpouseCanadaWork] = useState<YesNo>("No");
  const [spouseLanguage, setSpouseLanguage] = useState<YesNo>("No");
  const [canadianRelative, setCanadianRelative] = useState<YesNo>("No");
  const [eligibilityMessage, setEligibilityMessage] = useState<string>("");


  const handleSubmit = () => {
    const totalPoints = getAgePoints(age) + getWorkYearsPoints(workYears) + getWorkExperiencePoints(principalCanadaWork) + getEducationPoints(education);
    const adaptabilityPoints = getAdaptabilityPoints(principalCanadaWork, principalPreviousStudy, spousePreviousStudy, spouseCanadaWork, spouseLanguage, canadianRelative);
    const finalPoints = totalPoints + adaptabilityPoints;

    if (finalPoints < 67) {
      setEligibilityMessage("They are not eligible.");
    } else {
      setEligibilityMessage("They are eligible.");
    }
    // Use finalPoints to determine eligibility...
  };

  return (
    <div className="p-8">
      {/* Age Input */}
      <label className=" text-red-900 font-bold block mb-4">
        Age:
        <input type="number" value={age} onChange={(e) => setAge(Number(e.target.value))} className="  bg-blue mx-auto ml-2 p-1 border border-gray-300 rounded w-full" />
      </label>

      {/* Work Years Input */}
      <label className="block mb-4">
        Work Years:
        <input type="number" value={workYears} onChange={(e) => setWorkYears(Number(e.target.value))} className="ml-2 p-1 border border-gray-300 rounded w-full" />
      </label>

      {/* Dropdowns */}

      <label className="block mb-4">
        Education:
        <select value={education} onChange={(e) => setEducation(e.target.value as Education)} className="ml-2 p-1 border border-gray-300 rounded w-full">
          <option value="Secondary school/high school diploma">Secondary school/high school diploma</option>
          <option value="One-year post-secondary degree">One-year post-secondary degree</option>
          <option value="Two-year post-secondary degree">Two-year post-secondary degree</option>
          <option value="Three-year or longer post-secondary degree">Three-year or longer post-secondary degree</option>
          <option value="Two or more post-secondary degree with one being three-year or longer">Two or more post-secondary degree with one being three-year or longer</option>
          <option value="Master's level or professional degree (Medicine Veterinary Medicine Dentistry Podiatry Optometry Law Chiropractic Medicine or Pharmacy)">Master's level or professional degree (Medicine Veterinary Medicine Dentistry Podiatry Optometry Law Chiropractic Medicine or Pharmacy)</option>
          <option value="Doctoral (PhD) level">Doctoral (PhD) level</option>
        </select>
      </label>

      <label className="block mb-4">
        Principal Canada Work:
        <select value={principalCanadaWork} onChange={(e) => setPrincipalCanadaWork(e.target.value as PrincipalCanadaWork)} className="ml-2 p-1 border border-gray-300 rounded w-full">
          <option value="Working in Canada">Working in Canada</option>
          <option value="LMIA Job Offer">LMIA Job Offer</option>
          <option value="No Job or LMIA">No Job or LMIA</option>
        </select>
      </label>

      <label className="block mb-4">
        Principal Previous Study in Canada:
        <select value={principalPreviousStudy} onChange={(e) => setPrincipalPreviousStudy(e.target.value as YesNo)} className="ml-2 p-1 border border-gray-300 rounded w-full">
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      </label>

      <label className="block mb-4">
        Spouse Previous Study in Canada:
        <select value={spousePreviousStudy} onChange={(e) => setSpousePreviousStudy(e.target.value as YesNo)} className="ml-2 p-1 border border-gray-300 rounded w-full">
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      </label>

      <label className="block mb-4">
        Spouse Canada Work:
        <select value={spouseCanadaWork} onChange={(e) => setSpouseCanadaWork(e.target.value as YesNo)} className="ml-2 p-1 border border-gray-300 rounded w-full">
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      </label>

      <label className="block mb-4">
        Spouse Language :
        <select value={spouseLanguage} onChange={(e) => setSpouseLanguage(e.target.value as YesNo)} className="ml-2 p-1 border border-gray-300 rounded w-full">
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      </label>

      <label className="block mb-4">
        Canadian Relative:
        <select value={canadianRelative} onChange={(e) => setCanadianRelative(e.target.value as YesNo)} className="ml-2 p-1 border border-gray-300 rounded w-full">
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      </label>

      {/* ... Add similar dropdowns for other factors here... */}

      <button onClick={handleSubmit} className="bg-blue-500 text-white px-4 py-2 rounded mt-4">Calculate</button>
      
      {/* Display the eligibility message */}
      {eligibilityMessage && (
        <div className="mt-4">
          {eligibilityMessage}
        </div>
      )}
    </div>

  );
};
export default Calculator;
