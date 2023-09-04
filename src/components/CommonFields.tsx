import React from 'react';

interface CommonFieldsProps {
  formData: any;
  setFormData: (value: any) => void;
}

const CommonFields: React.FC<CommonFieldsProps> = ({ formData, setFormData }) => {
  // Function to handle input changes
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
        <label htmlFor="age" className="block text-sm font-medium text-gray-700">
          Age
        </label>
        <input
          type="number"
          name="age"
          id="age"
          value={formData.age}
          onChange={handleChange}
          className="mt-1 p-2 w-full border rounded-md"
        />
      </div>

      <div>
        <label htmlFor="languageAbilityEnglish" className="block text-sm font-medium text-gray-700">
          Language Ability (English)
        </label>
        <input
          type="number"
          name="languageAbilityEnglish"
          id="languageAbilityEnglish"
          value={formData.languageAbilityEnglish}
          onChange={handleChange}
          className="mt-1 p-2 w-full border rounded-md"
        />
      </div>

      <div>
        <label htmlFor="languageAbilityFrench" className="block text-sm font-medium text-gray-700">
          Language Ability (French)
        </label>
        <input
          type="number"
          name="languageAbilityFrench"
          id="languageAbilityFrench"
          value={formData.languageAbilityFrench}
          onChange={handleChange}
          className="mt-1 p-2 w-full border rounded-md"
        />
      </div>

      <div>
        <label htmlFor="canadianWorkExperience" className="block text-sm font-medium text-gray-700">
          Canadian Work Experience
        </label>
        <input
          type="number"
          name="canadianWorkExperience"
          id="canadianWorkExperience"
          value={formData.canadianWorkExperience}
          onChange={handleChange}
          className="mt-1 p-2 w-full border rounded-md"
        />
      </div>
    </div>
  );
};

export default CommonFields;
