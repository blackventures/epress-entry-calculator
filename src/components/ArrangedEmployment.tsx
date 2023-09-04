import React, { useState, useEffect } from 'react';

interface ArrangedEmploymentProps {
  setArrangedEmploymentPoints: React.Dispatch<React.SetStateAction<number>>;
}

const ArrangedEmploymentComponent: React.FC<ArrangedEmploymentProps> = ({ setArrangedEmploymentPoints }) => {
  const [employmentSituation, setEmploymentSituation] = useState<string>('None');

  useEffect(() => {
    let points = 0;
    
    switch (employmentSituation) {
      case 'Situation 1':
      case 'Situation 2':
      case 'Situation 3':
      case 'Situation 4':
        points = 10;
        break;
      default:
        points = 0;
        break;
    }
    
    setArrangedEmploymentPoints(points);
  }, [employmentSituation, setArrangedEmploymentPoints]);

  return (
    <div>
      <label className="font-bold block mb-4">
        Arranged Employment in Canada:
        <select
          value={employmentSituation}
          onChange={(e) => setEmploymentSituation(e.target.value)}
          className="mt-4 w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter">
          <option value="None">None of the above</option>
          <option value="Situation 1">Situation 1: Currently working in Canada with a valid work permit</option>
          <option value="Situation 2">Situation 2: Currently working in Canada exempt from LMIA</option>
          <option value="Situation 3">Situation 3: Currently without a work permit, but have a job offer from an employer with LMIA</option>
          <option value="Situation 4">Situation 4: Have a valid work permit but a job offer from a different employer with LMIA</option>
        </select>
      </label>
      {/* Display points for Arranged Employment */}
      <div className="mt-4">
        <strong>Points:</strong> {employmentSituation ? 10 : 0}
      </div>
    </div>
  );
}

export default ArrangedEmploymentComponent;
