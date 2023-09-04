export interface CRSCriteria {
    age: number;
    languageAbilityEnglish: number;
    languageAbilityFrench: number;
    canadianExperience: number;
    siblingInCanada: boolean;
    educationLevel: number;
    workExperience: number;
    additionalPoints: number;
  }
  
  export const calculateCRS = (formData: CRSCriteria) => {
    let crsScore = 0;
  
    // Age
    if (formData.age >= 18 && formData.age <= 35) {
      crsScore += 12;
    } else if (formData.age === 36) {
      crsScore += 11;
    } else if (formData.age === 37) {
      crsScore += 10;
    } else if (formData.age === 38) {
      crsScore += 9;
    } else if (formData.age === 39) {
      crsScore += 8;
    } else if (formData.age === 40) {
      crsScore += 7;
    } else if (formData.age === 41) {
      crsScore += 6;
    } else if (formData.age === 42) {
      crsScore += 5;
    } else if (formData.age === 43) {
      crsScore += 4;
    } else if (formData.age === 44) {
      crsScore += 3;
    } else if (formData.age === 45) {
      crsScore += 2;
    } else if (formData.age >= 46) {
      crsScore += 0;
    }
  
    // Language ability (English)
    crsScore += formData.languageAbilityEnglish;
  
    // Language ability (French)
    crsScore += formData.languageAbilityFrench;
  
    // Canadian work experience
    if (formData.canadianExperience === 1) {
      crsScore += 40;
    } else if (formData.canadianExperience === 2) {
      crsScore += 53;
    } else if (formData.canadianExperience === 3) {
      crsScore += 64;
    } else if (formData.canadianExperience === 4) {
      crsScore += 72;
    } else if (formData.canadianExperience === 5) {
      crsScore += 80;
    }
  
    // Sibling in Canada
    if (formData.siblingInCanada) {
      crsScore += 15;
    }
  
    // Education Level
    if (formData.educationLevel === 0) {
      crsScore += 0;
    } else if (formData.educationLevel === 1) {
      crsScore += 30;
    } else if (formData.educationLevel === 2) {
      crsScore += 90;
    } else if (formData.educationLevel === 3) {
      crsScore += 120;
    } else if (formData.educationLevel === 4) {
      crsScore += 128;
    } else if (formData.educationLevel === 5) {
      crsScore += 135;
    } else if (formData.educationLevel === 6) {
      crsScore += 150;
    }
  
    // Work Experience
    if (formData.workExperience === 1) {
      crsScore += 9;
    } else if (formData.workExperience === 2) {
      crsScore += 11;
    } else if (formData.workExperience === 3) {
      crsScore += 13;
    } else if (formData.workExperience >= 4 && formData.workExperience <= 5) {
      crsScore += 15;
    } else if (formData.workExperience >= 6) {
      crsScore += 15;
    }
  
    // Additional points (e.g., Provincial Nomination, etc.)
    crsScore += formData.additionalPoints;
  
    return crsScore;
  };
  