import React, { useEffect } from 'react';

interface WorkExperienceProps {
  setApplicantWorkPointFSW?: (points: number) => void;
  years?: number;
  maritalStatus?: string;
  setYears?: (years: number) => void;
  setApplicantWorkPointCRS?: (points: number) => void;
  setApplicantPastWork?: (hasPastWork: boolean) => void;
  setArrangedEmployment?: (hasArrangedEmployment: boolean) => void;
  setSpousePastWork?: (hasSpousePastWork: boolean) => void;
}


const getApplicantWorkPointFSW = (years: number): number => {
  if (years === 1) return 40;
  if (years === 2) return 50;
  if (years === 3) return 60;
  if (years === 4) return 70;
  if (years >= 5) return 80;
  return 0;
};

const getApplicantWorkPointCRS = (years: number, hasSpouse: boolean): number => {
  if (years === 1) return hasSpouse ? 35 : 40;
  if (years === 2) return hasSpouse ? 46 : 53;
  if (years === 3) return hasSpouse ? 56 : 64;
  if (years === 4) return hasSpouse ? 63 : 72;
  if (years >= 5) return hasSpouse ? 70 : 80;
  return 0;
};

const WorkExperienceComponent: React.FC<WorkExperienceProps> = ({
  years,
  setYears,
  maritalStatus,
  setApplicantWorkPointFSW, 
  setApplicantWorkPointCRS, 
  setApplicantPastWork, 
  setArrangedEmployment, 
  setSpousePastWork 
}) => {
  const hasSpouse = maritalStatus === 'Married' || maritalStatus === 'Common-Law Partner';

  useEffect(() => {
    const points1 = getApplicantWorkPointFSW(years ?? 0);
const points2 = getApplicantWorkPointCRS(years ?? 0, hasSpouse);
    // you should set these points somewhere, I am just logging them
    console.log('FSW Points: ', points1);
    console.log('CRS Points: ', points2);
  }, [years, maritalStatus]);

  return (
    <div>
      <label className="font-bold block mb-4">
        Work Experience (Years):
        <input
          type="number"
          value={years !== undefined ? (years <= 0 ? "" : years.toString()) : ""}
          onChange={(e) => setYears?.(Number(e.target.value))}
          placeholder=""
          className="mt-4 w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter"
        />
      </label>
      <label>
        Do you have past work experience in Canada?
        <input 
          type="checkbox" 
          onChange={(e) => setApplicantPastWork ? setApplicantPastWork(e.target.checked) : null} 
        />
      </label>
      <label>
        Do you have LMIA arranged employment in Canada?
        <input type="checkbox" onChange={(e) => setArrangedEmployment?.(e.target.checked)} />
      </label>
      <label>
        Does your spouse have past work experience?
        <input type="checkbox" onChange={(e) => setSpousePastWork?.(e.target.checked)} />
      </label>
      <div className="mt-4">
        <strong>FSW Points:</strong> {getApplicantWorkPointFSW(years ?? 0)}
      </div>
      <div className="mt-4">
        <strong>CRS Points:</strong> {getApplicantWorkPointCRS((years ?? 0), hasSpouse)}
      </div>
    </div>
  );
};

export default WorkExperienceComponent;
