import React from 'react';

interface CRSFieldsProps {
  formData: any;
  setFormData: (value: any) => void;
}

const CRSFields: React.FC<CRSFieldsProps> = ({ formData, setFormData }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="space-y-4">
      <div>
        <label htmlFor="educationLevel" className="block text-sm font-medium text-gray-700">
          Education Level
        </label>
        <input
          type="number"
          name="educationLevel"
          id="educationLevel"
          value={formData.educationLevel}
          onChange={handleChange}
          className="mt-1 p-2 w-full border rounded-md"
        />
      </div>

      <div>
        <label htmlFor="workExperience" className="block text-sm font-medium text-gray-700">
          Work Experience
        </label>
        <input
          type="number"
          name="workExperience"
          id="workExperience"
          value={formData.workExperience}
          onChange={handleChange}
          className="mt-1 p-2 w-full border rounded-md"
        />
      </div>

      <div>
        <label htmlFor="additionalPoints" className="block text-sm font-medium text-gray-700">
          Additional Points
        </label>
        <input
          type="number"
          name="additionalPoints"
          id="additionalPoints"
          value={formData.additionalPoints}
          onChange={handleChange}
          className="mt-1 p-2 w-full border rounded-md"
        />
      </div>
    </div>
  );
};

export default CRSFields;
