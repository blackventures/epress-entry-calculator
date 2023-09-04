import React, { useState, useEffect } from 'react';
import { levelMapping } from './LevelMapping';

interface LanguageProps {
  setSpouseLanguageAdaptability: (points: number) => void;
  setApplicantPointsFSW?: (points: number) => void;
  setApplicantPointsCRS?: (points: number) => void;
  setSpousePointsCRS?: (points: number) => void;
}

const LanguageComponent: React.FC<LanguageProps> = ({ setApplicantPointsFSW, setApplicantPointsCRS, setSpousePointsCRS, setSpouseLanguageAdaptability }) => {
  // For applicant
  const [speaking, setSpeaking] = useState<string>("");
  const [reading, setReading] = useState<string>("");
  const [writing, setWriting] = useState<string>("");
  const [listening, setListening] = useState<string>("");
  const [secondLanguage, setSecondLanguage] = useState(false);
  const [languageTest, setLanguageTest] = useState<string>(""); // Added this line

  // For spouse
  const [spouseSpeaking, setSpouseSpeaking] = useState<string>("");
  const [spouseReading, setSpouseReading] = useState<string>("");
  const [spouseWriting, setSpouseWriting] = useState<string>("");
  const [spouseListening, setSpouseListening] = useState<string>("");

// Helper function to get dropdown options based on the selected language test
const getDropdownOptions = (test: string, skill: string) => {
  if (!test || !skill || !levelMapping[test] || !levelMapping[test][skill]) return [];
  return Object.keys(levelMapping[test][skill]).map(level => (
    <option key={level} value={level}>
      {`${level} (Test: ${test}, Skill: ${skill}, CLB: ${levelMapping[test][skill][level].CLB})`}
    </option>
  ));
};

  // Method 1: FSW Calculation for Applicant
useEffect(() => {
    let pointsFSW = 0;
  
    const getFSWPoints = (level: string) => {
      if (level === "Outstanding" || level === "Excellent") return 6;
      if (level === "Very Good") return 5;
      if (level === "Good") return 4;
      return 0; // Not eligible for points if below CLB level 7
    };
    
  
    pointsFSW += getFSWPoints(speaking) + getFSWPoints(listening) + getFSWPoints(reading) + getFSWPoints(writing);
  
    // Second Language Bonus Calculation
    if (secondLanguage) {
      if (getFSWPoints(speaking) >= 5 && getFSWPoints(listening) >= 5 && getFSWPoints(reading) >= 5 && getFSWPoints(writing) >= 5) {
        pointsFSW += 4; // Add 4 points for the second language
      }
    }

    if (setApplicantPointsFSW) {
      setApplicantPointsFSW(pointsFSW);
    }
  }, [speaking, reading, writing, listening, secondLanguage]);
  
  
 // Method 2: CRS Calculation for Applicant
 useEffect(() => {
    let pointsCRS = 0;
  
    // CRS calculation logic for the applicant's speaking ability
    if (speaking === "Poor") pointsCRS += 0;
    else if (speaking === "Below Average") pointsCRS += 6;
    else if (speaking === "Average") pointsCRS += 8;
    else if (speaking === "Good") pointsCRS += 16;
    else if (speaking === "Very Good") pointsCRS += 22;
    else if (speaking === "Excellent") pointsCRS += 29;
    else if (speaking === "Outstanding") pointsCRS += 32;
  
    // CRS calculation logic for the applicant's reading ability
    if (reading === "Poor") pointsCRS += 0;
    else if (reading === "Below Average") pointsCRS += 6;
    else if (reading === "Average") pointsCRS += 8;
    else if (reading === "Good") pointsCRS += 16;
    else if (reading === "Very Good") pointsCRS += 22;
    else if (reading === "Excellent") pointsCRS += 29;
    else if (reading === "Outstanding") pointsCRS += 32;
  
    // CRS calculation logic for the applicant's writing ability
    if (writing === "Poor") pointsCRS += 0;
    else if (writing === "Below Average") pointsCRS += 6;
    else if (writing === "Average") pointsCRS += 8;
    else if (writing === "Good") pointsCRS += 16;
    else if (writing === "Very Good") pointsCRS += 22;
    else if (writing === "Excellent") pointsCRS += 29;
    else if (writing === "Outstanding") pointsCRS += 32;
  
    // CRS calculation logic for the applicant's listening ability
    if (listening === "Poor") pointsCRS += 0;
    else if (listening === "Below Average") pointsCRS += 6;
    else if (listening === "Average") pointsCRS += 8;
    else if (listening === "Good") pointsCRS += 16;
    else if (listening === "Very Good") pointsCRS += 22;
    else if (listening === "Excellent") pointsCRS += 29;
    else if (listening === "Outstanding") pointsCRS += 32;
  
    if (setApplicantPointsCRS) {
      setApplicantPointsCRS(pointsCRS);
    }
  }, [speaking, reading, writing, listening, secondLanguage]);

    // Method 2: CRS Calculation for Spouse
    useEffect(() => {
    const getSpouseCRSPoints = (level: string) => {
        if (level === "Outstanding" || level === "Excellent") return 5;
        if (level === "Very Good" || level === "Good") return 3;
        if (level === "Average" || level === "Below Average") return 1;
        return 0; // Not eligible for points if below CLB level 4
        };
  
    const spousePoints = getSpouseCRSPoints(spouseSpeaking) + getSpouseCRSPoints(spouseReading) + getSpouseCRSPoints(spouseWriting) + getSpouseCRSPoints(spouseListening);

    // Ensure the spousePoints do not exceed the maximum limit of 20 points for the section
    const finalSpousePoints = Math.min(spousePoints, 20);
  
    if (setSpousePointsCRS) {
      setSpousePointsCRS(finalSpousePoints);
    }
  }, [spouseSpeaking, spouseReading, spouseWriting, spouseListening]);

// Adaptability Calculation for Spouse
useEffect(() => {
  let adaptabilityPoints = 0;

  const isSpouseEligibleForAdaptability = (
    spouseSpeaking !== 'CLB 4 or less' &&
    spouseReading !== 'CLB 4 or less' &&
    spouseWriting !== 'CLB 4 or less' &&
    spouseListening !== 'CLB 4 or less'
  );

  if (isSpouseEligibleForAdaptability) {
    adaptabilityPoints = 5;
  }

  setSpouseLanguageAdaptability(adaptabilityPoints);
}, [spouseSpeaking, spouseReading, spouseWriting, spouseListening]);
  


  return (
    <div>
      {/* Dropdown for selecting language test */}
      <h4>Select Language Test</h4>
      <label>
        <select onChange={(e) => setLanguageTest(e.target.value)}>
          <option value="">Select</option>
          <option value="IELTS">IELTS</option>
          <option value="CELPIP">CELPIP</option>
          <option value="TEF Canada">TEF Canada</option>
          <option value="TCF Canada">TCF Canada</option>
        </select>
      </label>

      {/* Dropdowns for applicant */}
      <h4>Applicant's Language Scores</h4>
      <label>
        Speaking:
        <select onChange={(e) => setSpeaking(e.target.value)}>
          {getDropdownOptions(languageTest, 'Speaking')}
        </select>
      </label>
      <label>
        Reading:
        <select onChange={(e) => setReading(e.target.value)}>
          {getDropdownOptions(languageTest, 'Reading')}
        </select>
      </label>
      <label>
        Writing:
        <select onChange={(e) => setWriting(e.target.value)}>
          {getDropdownOptions(languageTest, 'Writing')}
        </select>
      </label>
      <label>
        Listening:
        <select onChange={(e) => setListening(e.target.value)}>
          {getDropdownOptions(languageTest, 'Listening')}
        </select>
      </label>

      {/* Second Language Applicant Toggle */}
      <label>
        Second Language Bonus:
        <input type="checkbox" onChange={(e) => setSecondLanguage(e.target.checked)} />
      </label>

      {/* Dropdowns for spouse */}
      <h4>Spouse's Language Scores</h4>
      <label>
        Speaking:
        <select onChange={(e) => setSpouseSpeaking(e.target.value)}>
          {getDropdownOptions(languageTest, 'Speaking')}
        </select>
      </label>
      <label>
        Reading:
        <select onChange={(e) => setSpouseReading(e.target.value)}>
          {getDropdownOptions(languageTest, 'Reading')}
        </select>
      </label>
      <label>
        Writing:
        <select onChange={(e) => setSpouseWriting(e.target.value)}>
          {getDropdownOptions(languageTest, 'Writing')}
        </select>
      </label>
      <label>
        Listening:
        <select onChange={(e) => setSpouseListening(e.target.value)}>
          {getDropdownOptions(languageTest, 'Listening')}
        </select>
      </label>
    </div>
  );
};

export default LanguageComponent;