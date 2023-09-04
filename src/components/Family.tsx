import React, { useState, useEffect } from 'react';

interface FamilyProps {
  setMaritalStatus?: (status: string) => void;
}

const FamilyComponent: React.FC<FamilyProps> = ({ setMaritalStatus }) => {
  const [maritalStatus, setMarital] = useState('');
  const [hasRelative, setRelative] = useState(false);

  useEffect(() => {
    if (setMaritalStatus) {
      setMaritalStatus(maritalStatus);
    }
  }, [maritalStatus, setMaritalStatus]);


  return (
    <div>
      <label>
        Marital Status:
      </label>
      <select value={maritalStatus} onChange={e => setMarital(e.target.value)} className='w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary'>
          <option value="">Select</option>
          <option value="Single">Single</option>
          <option value="Married">Married</option>
          <option value="Common-Law Partner">Common-Law Partner</option>
        </select>
    </div>
  );
};

export default FamilyComponent;
