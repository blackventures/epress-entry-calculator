import React from 'react';

interface FSWFieldsProps {
  formData: any;
  setFormData: (value: any) => void;
}

const FSWFields: React.FC<FSWFieldsProps> = ({ formData, setFormData }) => {
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
        <label htmlFor="firstLanguage" className="block text-sm font-medium text-gray-700">
          First Language
        </label>
        <input
          type="number"
          name="firstLanguage"
          id="firstLanguage"
          value={formData.firstLanguage}
          onChange={handleChange}
          className="mt-1 p-2 w-full border rounded-md"
        />
      </div>

      <div>
        <label htmlFor="secondLanguage" className="block text-sm font-medium text-gray-700">
          Second Language
        </label>
        <input
          type="number"
          name="secondLanguage"
          id="secondLanguage"
          value={formData.secondLanguage}
          onChange={handleChange}
          className="mt-1 p-2 w-full border rounded-md"
        />
      </div>

      <div>
        <label htmlFor="foreignWorkExperience" className="block text-sm font-medium text-gray-700">
          Foreign Work Experience
        </label>
        <input
          type="number"
          name="foreignWorkExperience"
          id="foreignWorkExperience"
          value={formData.foreignWorkExperience}
          onChange={handleChange}
          className="mt-1 p-2 w-full border rounded-md"
        />
      </div>

      <div>
        <label htmlFor="arrangedEmployment" className="block text-sm font-medium text-gray-700">
          Arranged Employment
        </label>
        <input
          type="number"
          name="arrangedEmployment"
          id="arrangedEmployment"
          value={formData.arrangedEmployment}
          onChange={handleChange}
          className="mt-1 p-2 w-full border rounded-md"
        />
      </div>

      <div>
        <label htmlFor="adaptability" className="block text-sm font-medium text-gray-700">
          Adaptability
        </label>
        <input
          type="number"
          name="adaptability"
          id="adaptability"
          value={formData.adaptability}
          onChange={handleChange}
          className="mt-1 p-2 w-full border rounded-md"
        />
      </div>
    </div>
  );
};

export default FSWFields;
