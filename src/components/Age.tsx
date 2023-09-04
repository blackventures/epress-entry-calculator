import React, { useEffect } from 'react';

interface AgeProps {
  age: number;
  setAge: React.Dispatch<React.SetStateAction<number>>;
  maritalStatus: string;
  setAgePointsFSW: React.Dispatch<React.SetStateAction<number>>;
  setAgePointsCRS: React.Dispatch<React.SetStateAction<number>>;
}

const getAgePointsMethod1 = (age: number): number => {
    if (age < 18) return 0;
    if (age >= 18 && age <= 35) return 12;
    if (age === 36) return 11;
    if (age === 37) return 10;
    if (age === 38) return 9;
    if (age === 39) return 8;
    if (age === 40) return 7;
    if (age === 41) return 6;
    if (age === 42) return 5;
    if (age === 43) return 4;
    if (age === 44) return 3;
    if (age === 45) return 2;
    if (age === 46) return 1;
    return 0;
  };
  
  const getAgePointsMethod2 = (age: number, hasSpouse: boolean): number => {
    if (age <= 17) return 0;
    if (age === 18) return hasSpouse ? 90 : 99;
    if (age === 19) return hasSpouse ? 95 : 105;
    if (age >= 20 && age <= 29) return hasSpouse ? 100 : 110;
    if (age === 30) return hasSpouse ? 95 : 105;
    if (age === 31) return hasSpouse ? 90 : 99;
    if (age === 32) return hasSpouse ? 85 : 94;
    if (age === 33) return hasSpouse ? 80 : 88;
    if (age === 34) return hasSpouse ? 75 : 83;
    if (age === 35) return hasSpouse ? 70 : 77;
    if (age === 36) return hasSpouse ? 65 : 72;
    if (age === 37) return hasSpouse ? 60 : 66;
    if (age === 38) return hasSpouse ? 55 : 61;
    if (age === 39) return hasSpouse ? 50 : 55;
    if (age === 40) return hasSpouse ? 45 : 50;
    if (age === 41) return hasSpouse ? 35 : 39;
    if (age === 42) return hasSpouse ? 25 : 28;
    if (age === 43) return hasSpouse ? 15 : 17;
    if (age === 44) return hasSpouse ? 5 : 6;
    if (age >= 45) return 0;
    return 0;  // Default
  };

const AgeComponent: React.FC<AgeProps> = ({ age, setAge, maritalStatus, setAgePointsFSW, setAgePointsCRS }) => {
  const hasSpouse = maritalStatus === 'Married' || maritalStatus === 'Common-Law Partner';

  useEffect(() => {
    const pointsFSW = getAgePointsMethod1(age);
    const pointsCRS = getAgePointsMethod2(age, hasSpouse);
    setAgePointsFSW(pointsFSW);
    setAgePointsCRS(pointsCRS);
  }, [age, maritalStatus, setAgePointsFSW, setAgePointsCRS]);

  return (
        <div>
            <label className="font-bold block mb-4">
                Age:
                <input
                    type="number"
                    value={age <= 0 ? "" : age.toString()}
                    onChange={(e) => setAge(Number(e.target.value))}
                    placeholder=""
                    className="mt-4 w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter" />
            </label>
            {/* Display age points for each method */}
            <div className="mt-4">
                <strong>Method 1 Points:</strong> {getAgePointsMethod1(age)}
            </div>
            <div className="mt-4">
                <strong>Method 2 Points:</strong> {getAgePointsMethod2(age, hasSpouse)}
            </div>
        </div>
    );
}


export default AgeComponent;