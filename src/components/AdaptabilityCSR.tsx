import React, { useState, useEffect } from 'react';

interface AdaptabilityProps {
  setAdaptabilityPoints: React.Dispatch<React.SetStateAction<number>>;
}

const AdaptabilityComponent: React.FC<AdaptabilityProps> = ({ setAdaptabilityPoints }) => {
  const [selectedOptions, setSelectedOptions] = useState<{ [key: string]: boolean }>({});

  const getPointsForOption = (key: string) => {
    switch (key) {
      case 'spouseLanguageLevel':
        return 5;
      case 'pastStudiesInCanada':
        return 5;
      case 'spousePastStudiesInCanada':
        return 30;
      case 'pastWorkInCanada':
        return 10;
      case 'spousePastWorkInCanada':
        return 5;
      case 'arrangedEmployment':
        return 5;
      case 'relativesInCanada':
        return 15;
      default:
        return 0;
    }
  };

  useEffect(() => {
    let totalPoints = 0;

    for (const [key, value] of Object.entries(selectedOptions)) {
      if (value) {
        totalPoints += getPointsForOption(key);
      }
    }

    setAdaptabilityPoints(totalPoints);
  }, [selectedOptions, setAdaptabilityPoints]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;
    setSelectedOptions((prevOptions) => ({
      ...prevOptions,
      [name]: checked,
    }));
  };

  return (
    <div>
      <h2>Adaptability</h2>
      <form>
        <label>
          <input type="checkbox" name="spouseLanguageLevel" onChange={handleChange} />
          Spouse or Partner's Language Level (5 points)
        </label>
        <label>
          <input type="checkbox" name="pastStudiesInCanada" onChange={handleChange} />
          Your Past Studies in Canada (5 points)
        </label>
        <label>
          <input type="checkbox" name="spousePastStudiesInCanada" onChange={handleChange} />
          Spouse or Partner's Past Studies in Canada (5 points)
        </label>
        <label>
          <input type="checkbox" name="pastWorkInCanada" onChange={handleChange} />
          Your Past Work in Canada (10 points)
        </label>
        <label>
          <input type="checkbox" name="spousePastWorkInCanada" onChange={handleChange} />
          Spouse or Partner's Past Work in Canada (5 points)
        </label>
        <label>
          <input type="checkbox" name="arrangedEmployment" onChange={handleChange} />
          Arranged Employment (5 points)
        </label>
        <label>
          <input type="checkbox" name="relativesInCanada" onChange={handleChange} />
          Relatives in Canada (5 points)
        </label>
      </form>
    </div>
  );
};

export default AdaptabilityComponent;
