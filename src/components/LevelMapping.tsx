// LevelMapping.tsx

type LevelDescription = {
    description: string;
    CLB: number;
  };
  
  export const levelMapping: { [testType: string]: { [skill: string]: { [score: string]: LevelDescription } } } = {
    "CELPIP": {
      "Speaking": {
        "10": { description: "Outstanding", CLB: 10 },
        "9": { description: "Excellent", CLB: 9 },
        "8": { description: "Very Good", CLB: 8 },
        "7": { description: "Good", CLB: 7 },
        "6": { description: "Average", CLB: 6 },
        "5": { description: "Below Average", CLB: 5 },
        "4": { description: "Poor", CLB: 4 }
      },
      "Reading": {
        "10": { description: "Outstanding", CLB: 10 },
        "9": { description: "Excellent", CLB: 9 },
        "8": { description: "Very Good", CLB: 8 },
        "7": { description: "Good", CLB: 7 },
        "6": { description: "Average", CLB: 6 },
        "5": { description: "Below Average", CLB: 5 },
        "4": { description: "Poor", CLB: 4 }
      },
      "Writing": {
        "10": { description: "Outstanding", CLB: 10 },
        "9": { description: "Excellent", CLB: 9 },
        "8": { description: "Very Good", CLB: 8 },
        "7": { description: "Good", CLB: 7 },
        "6": { description: "Average", CLB: 6 },
        "5": { description: "Below Average", CLB: 5 },
        "4": { description: "Poor", CLB: 4 }
      },
      "Listening": {
        "10": { description: "Outstanding", CLB: 10 },
        "9": { description: "Excellent", CLB: 9 },
        "8": { description: "Very Good", CLB: 8 },
        "7": { description: "Good", CLB: 7 },
        "6": { description: "Average", CLB: 6 },
        "5": { description: "Below Average", CLB: 5 },
        "4": { description: "Poor", CLB: 4 }
      }
    },
    "IELTS": {
      "Speaking": {
        "7.5": { description: "Outstanding", CLB: 10 },
        "7.0": { description: "Excellent", CLB: 9 },
        "6.5": { description: "Very Good", CLB: 8 },
        "6.0": { description: "Good", CLB: 7 },
        "5.5": { description: "Average", CLB: 6 },
        "5.0": { description: "Below Average", CLB: 5 },
        "4.0": { description: "Poor", CLB: 4 }
      },
      "Reading": {
        "8.0": { description: "Outstanding", CLB: 10 },
        "7.0": { description: "Excellent", CLB: 9 },
        "6.5": { description: "Very Good", CLB: 8 },
        "6.0": { description: "Good", CLB: 7 },
        "5.0": { description: "Average", CLB: 6 },
        "4.0": { description: "Below Average", CLB: 5 },
        "3.5": { description: "Poor", CLB: 4 }
      },
      "Writing": {
        "7.5": { description: "Outstanding", CLB: 10 },
        "7.0": { description: "Excellent", CLB: 9 },
        "6.5": { description: "Very Good", CLB: 8 },
        "6.0": { description: "Good", CLB: 7 },
        "5.5": { description: "Average", CLB: 6 },
        "5.0": { description: "Below Average", CLB: 5 },
        "4.0": { description: "Poor", CLB: 4 }
      },
      "Listening": {
        "8.5": { description: "Outstanding", CLB: 10 },
        "8.0": { description: "Excellent", CLB: 9 },
        "7.5": { description: "Very Good", CLB: 8 },
        "6.0": { description: "Good", CLB: 7 },
        "5.5": { description: "Average", CLB: 6 },
        "5.0": { description: "Below Average", CLB: 5 },
        "4.5": { description: "Poor", CLB: 4 }
      }
    },
    "TEF Canada": {
        "Speaking": {
          "393-450": { description: "Outstanding", CLB: 10 },
          "371-392": { description: "Excellent", CLB: 9 },
          "349-370": { description: "Very Good", CLB: 8 },
          "310-348": { description: "Very Good", CLB: 8 },
          "271-309": { description: "Average", CLB: 6 },
          "226-270": { description: "Below Average", CLB: 5 },
          "181-225": { description: "Poor", CLB: 4 }
        },
        "Reading": {
          "263-300": { description: "Outstanding", CLB: 10 },
          "248-262": { description: "Excellent", CLB: 9 },
          "233-247": { description: "Very Good", CLB: 8 },
          "207-232": { description: "Good", CLB: 7 },
          "181-206": { description: "Average", CLB: 6 },
          "151-180": { description: "Below Average", CLB: 5 },
          "121-150": { description: "Poor", CLB: 4 }
        },
      "Writing": {
        "393-450": { description: "Outstanding", CLB: 10 },
        "371-392": { description: "Excellent", CLB: 9 },
        "349-370": { description: "Very Good", CLB: 8 },
        "310-348": { description: "Good", CLB: 7 },
        "271-309": { description: "Average", CLB: 6 },
        "226-270": { description: "Below Average", CLB: 5 },
        "181-225": { description: "Poor", CLB: 4 }
      },
      "Listening": {
        "316-360": { description: "Outstanding", CLB: 10 },
        "298-315": { description: "Excellent", CLB: 9 },
        "280-297": { description: "Very Good", CLB: 8 },
        "249-279": { description: "Good", CLB: 7 },
        "217-248": { description: "Average", CLB: 6 },
        "181-216": { description: "Below Average", CLB: 5 },
        "145-180": { description: "Poor", CLB: 4 }
      }
    },
    "TCF Canada": {
        "Speaking": {
          "16-20": { description: "Outstanding", CLB: 10 },
          "14-15": { description: "Excellent", CLB: 9 },
          "12-13": { description: "Very Good", CLB: 8 },
          "10-11": { description: "Good", CLB: 7 },
          "7-9": { description: "Average", CLB: 6 },
          "6": { description: "Below Average", CLB: 5 },
          "4-5": { description: "Poor", CLB: 4 }
        },
        "Reading": {
          "549-699": { description: "Outstanding", CLB: 10 },
          "524-548": { description: "Excellent", CLB: 9 },
          "499-523": { description: "Very Good", CLB: 8 },
          "453-498": { description: "Good", CLB: 7 },
          "406-452": { description: "Average", CLB: 6 },
          "375-405": { description: "Below Average", CLB: 5 },
          "342-374": { description: "Poor", CLB: 4 }
        },
        "Writing": {
            "16-20": { description: "Outstanding", CLB: 10 },
            "14-15": { description: "Excellent", CLB: 9 },
            "12-13": { description: "Very Good", CLB: 8 },
            "10-11": { description: "Good", CLB: 7 },
            "7-9": { description: "Average", CLB: 6 },
            "6": { description: "Below Average", CLB: 5 },
            "4-5": { description: "Poor", CLB: 4 }
        },
        "Listening": {
            "549-699": { description: "Outstanding", CLB: 10 },
            "523-548": { description: "Excellent", CLB: 9 },
            "503-522": { description: "Very Good", CLB: 8 },
            "458-502": { description: "Good", CLB: 7 },
            "398-457": { description: "Average", CLB: 6 },
            "369-397": { description: "Below Average", CLB: 5 },
            "331-368": { description: "Poor", CLB: 4 }
        }
    }
  };
  
  export default levelMapping;
  