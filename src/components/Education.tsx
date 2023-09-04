import React, { useEffect, useState } from 'react';


interface EducationProps {
  maritalStatus: string;
  setEducationPointsFSW?: React.Dispatch<React.SetStateAction<number>>;
  setEducationPointsCRS?: React.Dispatch<React.SetStateAction<number>>;
  setApplicantPastStudies: React.Dispatch<React.SetStateAction<boolean>>;
  setSpousePastStudies: React.Dispatch<React.SetStateAction<boolean>>;
}

const EducationComponent: React.FC<EducationProps> = ({ setApplicantPastStudies, setSpousePastStudies, maritalStatus, setEducationPointsFSW, setEducationPointsCRS }) => {
  const [selectedEducation, setSelectedEducation] = useState<string>('');

  useEffect(() => {
      const getEducationPointsFSW = (education: string): number => {
          switch (education) {
            case 'Secondary school/high school diploma': return 5;
            case 'One-year post-secondary degree': return 15;
            case 'Two-year post-secondary degree': return 19;
            case 'Three-year or longer post-secondary degree': return 21;
            case 'Two or more post-secondary degrees, one being three-year or longer': return 22;
            case "Master's level or professional degree": return 23;
            case 'Doctoral (PhD) level': return 25;
            default: return 0;
          }
        };

        const getEducationPointsCRS = (education: string, hasSpouse: boolean): number => {
          switch (education) {
            case 'Less than secondary school (high school)': return 0;
            case 'Secondary diploma (high school graduation)': return hasSpouse ? 28 : 30;
            case 'One-year degree, diploma or certificate': return hasSpouse ? 84 : 90;
            case 'Two-year program': return hasSpouse ? 91 : 98;
            case "Bachelor's degree OR a three or more year program": return hasSpouse ? 112 : 120;
            case 'Two or more certificates, diplomas, or degrees': return hasSpouse ? 119 : 128;
            case "Master's degree, OR professional degree": return hasSpouse ? 126 : 135;
            case 'Doctoral level university degree (Ph.D.)': return hasSpouse ? 140 : 150;
            default: return 0;
          }
        };

        const fswPoints = getEducationPointsFSW(selectedEducation);
        const crsPoints = getEducationPointsCRS(selectedEducation, maritalStatus === 'Married' || maritalStatus === 'Common-Law Partner');
        

        // Only set FSW points if setEducationPointsFSW is defined
    if (setEducationPointsFSW) {
      setEducationPointsFSW(fswPoints);
  }

  // Only set CRS points if setEducationPointsCRS is defined
  if (setEducationPointsCRS) {
      setEducationPointsCRS(crsPoints);
  }
}, [setSelectedEducation, maritalStatus]);

    return (
      <div>
          <label>
              Select your highest level of education:
              <select onChange={(e) => setSelectedEducation(e.target.value)}>
                  <option value="">Select</option>
                  <option value="Secondary school/high school diploma">Secondary school/high school diploma</option>
                  <option value="One-year post-secondary degree">One-year post-secondary degree</option>
                  <option value="Two-year post-secondary degree">Two-year post-secondary degree</option>
                  <option value="Three-year or longer post-secondary degree">Three-year or longer post-secondary degree</option>
                  <option value="Two or more post-secondary degrees, one being three-year or longer">Two or more post-secondary degrees, one being three-year or longer</option>
                  <option value="Master's level or professional degree">Master's level or professional degree</option>
                  <option value="Doctoral (PhD) level">Doctoral (PhD) level</option>
              </select>
          </label>
          <label>
              Do you have past studies in Canada?
              <input type="checkbox" onChange={(e) => setApplicantPastStudies(e.target.checked)} />
          </label>
          {maritalStatus === 'Married' || maritalStatus === 'Common-Law Partner' ? (
              <label>
                  Does your spouse have past studies in Canada?
                  <input type="checkbox" onChange={(e) => setSpousePastStudies(e.target.checked)} />
              </label>
          ) : null}
      </div>
  );
};

export default EducationComponent;