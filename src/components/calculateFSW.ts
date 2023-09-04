export interface FSWCriteria {
    age: number;
    educationLevel: number;
    firstLanguage: number;
    secondLanguage: number;
    canadianWorkExperience: number;
    foreignWorkExperience: number;
    arrangedEmployment: number;
    adaptability: number;
  }
  
  export const calculateFSW = (formData: FSWCriteria) => {
    let fswScore = 0;
  
    // Age
    if (formData.age >= 18 && formData.age <= 35) {
      fswScore += 12;
    } else if (formData.age === 36) {
      fswScore += 11;
    }
    // ... Add conditions for other age ranges if needed
  
    // Education Level
    fswScore += formData.educationLevel;
  
    // First Language
    fswScore += formData.firstLanguage;
  
    // Second Language
    fswScore += formData.secondLanguage;
  
    // Canadian Work Experience
    fswScore += formData.canadianWorkExperience;
  
    // Foreign Work Experience
    fswScore += formData.foreignWorkExperience;
  
    // Arranged Employment
    fswScore += formData.arrangedEmployment;
  
    // Adaptability
    fswScore += formData.adaptability;
  
    return fswScore;
  };
  