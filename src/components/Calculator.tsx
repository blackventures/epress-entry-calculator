import React, { useState } from 'react';

type PrincipalCanadaWork = "Working in Canada" | "LMIA Job Offer" | "No Job or LMIA";
type Education = 
    "None" |
    "Secondary school/high school diploma" |
    "One-year post-secondary degree" |
    "Two-year post-secondary degree" |
    "Three-year or longer post-secondary degree" |
    "Two or more post-secondary degree with one being three-year or longer" |
    "Master's level or professional degree (Medicine Veterinary Medicine Dentistry Podiatry Optometry Law Chiropractic Medicine or Pharmacy)" |
    "Doctoral (PhD) level";
type YesNo = "Yes" | "No";
type LanguageScore = "Below Average" | "Average" | "Above Average" | "Excellent";
type LanguageProficiency = "Less than high basic (CLB3-, IELTS 2.5-3)" | "High basic (CLB4, IELTS 3.5)" | "Initial intermediate (CLB5, IELTS 4-4.5)" | "Developing intermediate (CLB6, IELTS 5-5.5)" | "Adequate intermediate (CLB7, IELTS 6)" | "High intermediate (CLB8, IELTS 6.5)" | "Initial Advanced (CLB9, IELTS 7)" | "Advanced (CLB10+, IELTS 8+)";
type SecondLanguage = "Yes" | "No";

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

function getLanguagePoints(score: LanguageProficiency): number {
  switch (score) {
    case "Less than high basic (CLB3-, IELTS 2.5-3)": return 0;
    case "High basic (CLB4, IELTS 3.5)": return 16;
    case "Initial intermediate (CLB5, IELTS 4-4.5)": return 20;
    case "Developing intermediate (CLB6, IELTS 5-5.5)": return 24;
    case "Adequate intermediate (CLB7, IELTS 6)": return 24;
    case "High intermediate (CLB8, IELTS 6.5)": return 24;
    case "Initial Advanced (CLB9, IELTS 7)": return 24;
    case "Advanced (CLB10+, IELTS 8+)": return 24;
      default: return 0;
  }
}

function getSecondLanguagePoints(hasSecondLanguage: SecondLanguage): number {
  return hasSecondLanguage === "Yes" ? 4 : 0;
}

const Calculator: React.FC = () => {
  const [age, setAge] = useState<number>(0);
  const [workYears, setWorkYears] = useState<number>(0);
  const [education, setEducation] = useState<Education>("None");
  const [principalCanadaWork, setPrincipalCanadaWork] = useState<PrincipalCanadaWork>("No Job or LMIA");
  const [principalPreviousStudy, setPrincipalPreviousStudy] = useState<YesNo>("No");
  const [spousePreviousStudy, setSpousePreviousStudy] = useState<YesNo>("No");
  const [spouseCanadaWork, setSpouseCanadaWork] = useState<YesNo>("No");
  const [spouseLanguage, setSpouseLanguage] = useState<YesNo>("No");
  const [canadianRelative, setCanadianRelative] = useState<YesNo>("No");
  const [languageScore, setLanguageScore] = useState<LanguageProficiency>("Less than high basic (CLB3-, IELTS 2.5-3)");

  // Testing Features
  const [readingScore, setReadingScore] = useState<LanguageProficiency>("Less than high basic (CLB3-, IELTS 2.5-3)");
  const [writingScore, setWritingScore] = useState<LanguageProficiency>("Less than high basic (CLB3-, IELTS 2.5-3)");
  const [listeningScore, setListeningScore] = useState<LanguageProficiency>("Less than high basic (CLB3-, IELTS 2.5-3)");
  const [speakingScore, setSpeakingScore] = useState<LanguageProficiency>("Less than high basic (CLB3-, IELTS 2.5-3)");

  const [secondLanguage, setSecondLanguage] = useState<SecondLanguage>("No");
  const [eligibilityMessage, setEligibilityMessage] = useState<string>("");

  const handleSubmit = () => {
    const totalPoints = getAgePoints(age) + getWorkYearsPoints(workYears) + getWorkExperiencePoints(principalCanadaWork) + getEducationPoints(education);
    const adaptabilityPoints = getAdaptabilityPoints(principalCanadaWork, principalPreviousStudy, spousePreviousStudy, spouseCanadaWork, spouseLanguage, canadianRelative);
    // const languagePoints = getLanguagePoints(languageScore);
    
    // Testing Feature
    const languagePoints = getLanguagePoints(readingScore) +getLanguagePoints(writingScore) + getLanguagePoints(listeningScore) + getLanguagePoints(speakingScore);

    const secondLangPoints = getSecondLanguagePoints(secondLanguage);
    const finalPoints = totalPoints + adaptabilityPoints + languagePoints + secondLangPoints;

    if (finalPoints < 67) {
        setEligibilityMessage(`You do not have enough points to be eligible. You currently have ${finalPoints} points and you need 67 points.`);
    } else {
        setEligibilityMessage(`You have ${finalPoints} points so you are eligible.`);
    }
  };

  return (
    <div className="p-4 grid grid-cols-3 gap-x-4">
      {/* Column 1 */}
      <div className="">
        {/* Age Input */}
        <label className="font-bold block mb-4">
          Age:
          <input type="number" value={age <= 0 ? "" : age.toString()} onChange={(e) => setAge(Number(e.target.value))} placeholder="" className="mt-4 w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter" />
        </label>

        {/* Education Dropdown */}
        <label className="font-bold block mb-4">
          Education:
          <select value={education} onChange={(e) => setEducation(e.target.value as Education)} className="mt-4  w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter">
            <option value="None">None</option>
            <option value="Secondary school/high school diploma">Secondary school/high school diploma</option>
            <option value="One-year post-secondary degree">One-year post-secondary degree</option>
            <option value="Two-year post-secondary degree">Two-year post-secondary degree</option>
            <option value="Three-year or longer post-secondary degree">Three-year or longer post-secondary degree</option>
            <option value="Two or more post-secondary degree with one being three-year or longer">Two or more post-secondary degree with one being three-year or longer</option>
            <option value="Master's level or professional degree (Medicine Veterinary Medicine Dentistry Podiatry Optometry Law Chiropractic Medicine or Pharmacy)">Master's level or professional degree (Medicine Veterinary Medicine Dentistry Podiatry Optometry Law Chiropractic Medicine or Pharmacy)</option>
            <option value="Doctoral (PhD) level">Doctoral (PhD) level</option>
          </select>
        </label>

        {/* Work Years Input */}
        <label className="font-bold block mb-4">
          Work Years:
          <input type="number" value={workYears <=0 ? "" :workYears} onChange={(e) => setWorkYears(Number(e.target.value))} className=" mt-4  w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter" />
        </label>

        



        
        </div>

        {/* Column 2 */}
        {/*... [Rest of the column 2 content]*/}
        <div>
        {/* Principal Canada Work Dropdown */}
        <label className="font-bold block mb-4">
          Principal Canada Work:
          <select value={principalCanadaWork} onChange={(e) => setPrincipalCanadaWork(e.target.value as PrincipalCanadaWork)} className="mt-4  w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter">
            <option value="Working in Canada">Working in Canada</option>
            <option value="LMIA Job Offer">LMIA Job Offer</option>
            <option value="No Job or LMIA">No Job or LMIA</option>
          </select>
        </label>

        {/* Writing Score Dropdown */}
        <label className="font-bold block mb-4">
          Writing Score:
          <select value={writingScore} onChange={(e) => setWritingScore(e.target.value as LanguageProficiency)} className="mt-4 w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter">
          <option value="Less than high basic (CLB3-, IELTS 2.5-3)">Less than high basic (CLB3-, IELTS 2.5-3)</option>
            <option value="High basic (CLB4, IELTS 3.5)">High basic (CLB4, IELTS 3.5)</option>
            <option value="Initial intermediate (CLB5, IELTS 4-4.5)">Initial intermediate (CLB5, IELTS 4-4.5)</option>
            <option value="Developing intermediate (CLB6, IELTS 5-5.5)">Developing intermediate (CLB6, IELTS 5-5.5)</option>
            <option value="Adequate intermediate (CLB7, IELTS 6)">Adequate intermediate (CLB7, IELTS 6)</option>
            <option value="High intermediate (CLB8, IELTS 6.5)">High intermediate (CLB8, IELTS 6.5)</option>
            <option value="Initial Advanced (CLB9, IELTS 7)">Initial Advanced (CLB9, IELTS 7)</option>
            <option value="Advanced (CLB10+, IELTS 8+)">Advanced (CLB10+, IELTS 8+)</option>
          </select>
        </label>

        {/* Reading Score Dropdown */}
        <label className="font-bold block mb-4">
          Reading Score:
          <select value={readingScore} onChange={(e) => setReadingScore(e.target.value as LanguageProficiency)} className="mt-4 w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter">
          <option value="Less than high basic (CLB3-, IELTS 2.5-3)">Less than high basic (CLB3-, IELTS 2.5-3)</option>
            <option value="High basic (CLB4, IELTS 3.5)">High basic (CLB4, IELTS 3.5)</option>
            <option value="Initial intermediate (CLB5, IELTS 4-4.5)">Initial intermediate (CLB5, IELTS 4-4.5)</option>
            <option value="Developing intermediate (CLB6, IELTS 5-5.5)">Developing intermediate (CLB6, IELTS 5-5.5)</option>
            <option value="Adequate intermediate (CLB7, IELTS 6)">Adequate intermediate (CLB7, IELTS 6)</option>
            <option value="High intermediate (CLB8, IELTS 6.5)">High intermediate (CLB8, IELTS 6.5)</option>
            <option value="Initial Advanced (CLB9, IELTS 7)">Initial Advanced (CLB9, IELTS 7)</option>
            <option value="Advanced (CLB10+, IELTS 8+)">Advanced (CLB10+, IELTS 8+)</option>
          </select>
        </label>

        {/* Writing Score Dropdown */}
        <label className="font-bold block mb-4">
          Speaking Score:
          <select value={speakingScore} onChange={(e) => setSpeakingScore(e.target.value as LanguageProficiency)} className="mt-4 w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter">
          <option value="Less than high basic (CLB3-, IELTS 2.5-3)">Less than high basic (CLB3-, IELTS 2.5-3)</option>
            <option value="High basic (CLB4, IELTS 3.5)">High basic (CLB4, IELTS 3.5)</option>
            <option value="Initial intermediate (CLB5, IELTS 4-4.5)">Initial intermediate (CLB5, IELTS 4-4.5)</option>
            <option value="Developing intermediate (CLB6, IELTS 5-5.5)">Developing intermediate (CLB6, IELTS 5-5.5)</option>
            <option value="Adequate intermediate (CLB7, IELTS 6)">Adequate intermediate (CLB7, IELTS 6)</option>
            <option value="High intermediate (CLB8, IELTS 6.5)">High intermediate (CLB8, IELTS 6.5)</option>
            <option value="Initial Advanced (CLB9, IELTS 7)">Initial Advanced (CLB9, IELTS 7)</option>
            <option value="Advanced (CLB10+, IELTS 8+)">Advanced (CLB10+, IELTS 8+)</option>
          </select>
        </label>

        {/* Reading Score Dropdown */}
        <label className="font-bold block mb-4">
          Listening Score:
          <select value={listeningScore} onChange={(e) => setListeningScore(e.target.value as LanguageProficiency)} className="mt-4 w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter">
          <option value="Less than high basic (CLB3-, IELTS 2.5-3)">Less than high basic (CLB3-, IELTS 2.5-3)</option>
            <option value="High basic (CLB4, IELTS 3.5)">High basic (CLB4, IELTS 3.5)</option>
            <option value="Initial intermediate (CLB5, IELTS 4-4.5)">Initial intermediate (CLB5, IELTS 4-4.5)</option>
            <option value="Developing intermediate (CLB6, IELTS 5-5.5)">Developing intermediate (CLB6, IELTS 5-5.5)</option>
            <option value="Adequate intermediate (CLB7, IELTS 6)">Adequate intermediate (CLB7, IELTS 6)</option>
            <option value="High intermediate (CLB8, IELTS 6.5)">High intermediate (CLB8, IELTS 6.5)</option>
            <option value="Initial Advanced (CLB9, IELTS 7)">Initial Advanced (CLB9, IELTS 7)</option>
            <option value="Advanced (CLB10+, IELTS 8+)">Advanced (CLB10+, IELTS 8+)</option>
          </select>
        </label>

        {/* Second Language Dropdown and Note */}
        <label className="font-bold block mb-4">
            Second Language Ability:
            <select value={secondLanguage} onChange={(e) => setSecondLanguage(e.target.value as SecondLanguage)} className="mt-4 w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter">
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </label>

          </div>

          {/* Column 3 */}
          <div>
            {/* Principal Previous Study in Canada Dropdown */}
            <label className="font-bold block mb-4">
            Principal Previous Study in Canada:
            <select value={principalPreviousStudy} onChange={(e) => setPrincipalPreviousStudy(e.target.value as YesNo)} className="mt-4  w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter">
                <option value="Yes">Yes</option>
                <option value="No">No</option>
            </select>
            </label>

            {/* Spouse Previous Study in Canada Dropdown */}
            <label className="font-bold block mb-4">
            Spouse Previous Study in Canada:
            <select value={spousePreviousStudy} onChange={(e) => setSpousePreviousStudy(e.target.value as YesNo)} className="mt-4  w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter">
                <option value="Yes">Yes</option>
                <option value="No">No</option>
            </select>
            </label>

            {/* Spouse Canada Work Dropdown */}
            <label className="font-bold block mb-4">
            Spouse Canada Work:
            <select value={spouseCanadaWork} onChange={(e) => setSpouseCanadaWork(e.target.value as YesNo)} className="mt-4  w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter">
                <option value="Yes">Yes</option>
                <option value="No">No</option>
            </select>
            </label>

            {/* Spouse Language Dropdown */}
            <label className="font-bold block mb-4">
            Spouse Language :
            <select value={spouseLanguage} onChange={(e) => setSpouseLanguage(e.target.value as YesNo)} className="mt-4  w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter">
                <option value="Yes">Yes</option>
                <option value="No">No</option>
            </select>
            </label>

            {/* Canadian Relative Dropdown */}
            <label className="font-bold block mb-4">
            Canadian Relative:
            <select value={canadianRelative} onChange={(e) => setCanadianRelative(e.target.value as YesNo)} className="mt-4  w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter">
                <option value="Yes">Yes</option>
                <option value="No">No</option>
            </select>
            </label>
          
        </div>

        <button onClick={handleSubmit} className="px-8 font-bold bg-blue-500 text-white px-4 py-2 rounded-full mt-4 col-span-3 justify-self-center">Calculate</button>

{/* Display Eligibility Message */}
{eligibilityMessage && (
    <div className="mt-4 col-span-3 text-center">
        {eligibilityMessage}
    </div>
)}

{/* Display Required Language Score based on Selection */}
{languageScore && (
    <div className="mt-4 col-span-3 text-center">
        {languageScore === "Below Average" && "Required Language Score: IELTS (Speaking - 5.0, Reading - 5.5, Writing - 5.5, Listening - 5.5), CELPIP (Speaking - 6, Reading - 6, Writing - 6, Listening - 6)"}
        {languageScore === "Average" && "Required Language Score: IELTS (Speaking - 6.0, Reading - 6.0, Writing - 6.0, Listening - 6.0), CELPIP (Speaking - 7, Reading - 7, Writing - 7, Listening - 7)"}
        {languageScore === "Above Average" && "Required Language Score: IELTS (Speaking - 6.5, Reading - 6.5, Writing - 6.5, Listening - 6.5), CELPIP (Speaking - 8, Reading - 8, Writing - 8, Listening - 8)"}
        {languageScore === "Excellent" && "Required Language Score: IELTS (Speaking - 7.0, Reading - 7.0, Writing - 8.0, Listening - 7.0), CELPIP (Speaking - 9, Reading - 9, Writing - 9, Listening - 9)"}
    </div>
)}

{/* Display Required Second Language Score if Second Language is Yes */}
{secondLanguage === "Yes" && (
    <div className="mt-4 col-span-3 text-center">
        Required Second Language Scores: 
        <br />
        CELPIP: CLB Level 5 and above (Speaking 5–12, Listening 5–12, Reading 5–12, Writing 5–12)
        <br />
        IELTS: CLB Level 5 and above (Speaking 5.0–9.0, Listening 5.0–9.0, Reading 4.0–9.0, Writing 5.0–9.0)
        <br />
        TEF Canada: (Speaking 226–371+, Listening 181–298+, Reading 151–248+, Writing 226–371+)
        <br />
        TCF Canada: (Speaking 6+, Listening 369–397+, Reading 375–405+, Writing 6+)
    </div>
)}

{/* Note for Second Language */}
{secondLanguage === "Yes" && (
    <div className="col-span-3 text-center mt-2">
        <strong>Note:</strong> At least CLB 5 in all of the 4 abilities
    </div>
)}
</div>
  );
};

export default Calculator;
