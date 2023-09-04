import React, { useState } from 'react';
import AgeComponent from './Age';
import WorkExperienceComponent from './Work';
import EducationComponent from './Education';

const Calculator2: React.FC = () => {
    const [age, setAge] = useState(0);
    const [education, setEducation] = useState('');
    const [maritalStatus, setMaritalStatus] = useState('');
    const [agePointsMethod1, setAgePointsMethod1] = useState(0);
    const [agePointsMethod2, setAgePointsMethod2] = useState(0);
    const [educationPointsMethod1, setEducationPointsMethod1] = useState(0);
    const [educationPointsMethod2, setEducationPointsMethod2] = useState(0);
    const [applicantWorkPointFSW, setApplicantWorkPointFSW] = useState(0);
    const [applicantWorkPointCRS, setApplicantWorkPointCRS] = useState(0);

    return (
        <div>
            <div className="mb-4">
                <label className="font-bold block mb-2">
                    Marital Status:
                </label>
                <select
                    value={maritalStatus}
                    onChange={(e) => setMaritalStatus(e.target.value)}
                    className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary">
                    <option value="">Select Marital Status</option>
                    <option value="Single">Single</option>
                    <option value="Married">Married</option>
                    <option value="Common-Law Partner">Common-Law Partner</option>
                </select>
            </div>

            <AgeComponent 
                age={age} 
                setAge={setAge} 
                maritalStatus={maritalStatus}
                setAgePointsFSW={setAgePointsMethod1}
                setAgePointsCRS={setAgePointsMethod2}
            />

            <WorkExperienceComponent 
                setApplicantWorkPointFSW={setApplicantWorkPointFSW}
                setApplicantWorkPointCRS={setApplicantWorkPointCRS}
            />

            <div className="mt-6">
                <h2 className="text-2xl font-bold mb-4">Total Points:</h2>
                <div>
                    <strong>Method 1 Total Points:</strong> {agePointsMethod1 + educationPointsMethod1}
                </div>
                <div className="mt-4">
                    <strong>Method 2 Total Points:</strong> {agePointsMethod2 + educationPointsMethod2}
                </div>
            </div>
        </div>
    );
}

export default Calculator2;
