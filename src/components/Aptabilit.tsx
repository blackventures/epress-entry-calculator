import React, { useState, useEffect } from 'react';
import LanguageComponent from './Language';
import EducationComponent from './Education';
import WorkExperienceComponent from './Work';
import ArrangedEmploymentComponent from './ArrangedEmployment';

const Aptabilit: React.FC = () => {
  // Existing state variables
  const [agePoints, setAgePoints] = useState<number>(0);
  const [education, setEducation] = useState<string>("");
  const [maritalStatus, setMaritalStatus] = useState<string>("");
  
  // Adaptability state variables
  const [spouseLanguageAdaptabilityPoints, setSpouseLanguageAdaptability] = useState<number>(0);
  const [applicantPastStudies, setApplicantPastStudies] = useState<boolean>(false);
  const [spousePastStudies, setSpousePastStudies] = useState<boolean>(false);
  const [applicantPastWork, setApplicantPastWork] = useState<boolean>(false);
  const [spousePastWork, setSpousePastWork] = useState<boolean>(false);
  const [arrangedEmployment, setArrangedEmployment] = useState<boolean>(false);
  const [relativesInCanada, setRelativesInCanada] = useState<boolean>(false);
  const [totalAdaptabilityPoints, setTotalAdaptabilityPoints] = useState<number>(0);

  useEffect(() => {
    let points = 0;

    if (spouseLanguageAdaptabilityPoints === 5) points += 5;
    if (applicantPastStudies) points += 5;
    if (spousePastStudies) points += 5;
    if (applicantPastWork) points += 10;
    if (spousePastWork) points += 5;
    if (arrangedEmployment) points += 5;
    if (relativesInCanada) points += 5;

    // Ensure that the maximum points do not exceed 10
    points = Math.min(points, 10);
    
    setTotalAdaptabilityPoints(points);
  }, [
    spouseLanguageAdaptabilityPoints,
    applicantPastStudies,
    spousePastStudies,
    applicantPastWork,
    spousePastWork,
    arrangedEmployment,
    relativesInCanada
  ]);

  return (
    <div>
      <h1>Express Entry Point Calculator</h1>
      <LanguageComponent 
        setSpouseLanguageAdaptability={setSpouseLanguageAdaptability}
      />
      <EducationComponent 
        setApplicantPastStudies={setApplicantPastStudies}
        setSpousePastStudies={setSpousePastStudies}
        maritalStatus={maritalStatus}
      />
      <WorkExperienceComponent 
        setApplicantPastWork={setApplicantPastWork}
        setSpousePastWork={setSpousePastWork}
      />
      <h2>Total Adaptability Points: {totalAdaptabilityPoints}</h2>
    </div>
  );
};

export default Aptabilit;
