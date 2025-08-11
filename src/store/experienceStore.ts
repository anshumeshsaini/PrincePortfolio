import { create } from 'zustand';
import { Experience } from '../types';
import cyberonites from './cyberonites.png';


interface ExperienceState {
  experiences: Experience[];
}

const experienceData: Experience[] = [
  
  {
    "id": "4",
    "company": "Siyaram Singh High School, Patna",
    "position": "10th Grade",
    "duration": "Completed",
    "description": "Successfully completed secondary education with a strong academic foundation and active participation in extracurricular activities.",
    "technologies": [],
    "logo": "" // Add logo if available
  },
  {
    "id": "5",
    "company": "R.P.S College, Patna",
    "position": "12th Grade",
    "duration": "Completed",
    "description": "Completed higher secondary education with a focus on academic excellence and skill development.",
    "technologies": [],
    "logo": "" // Add logo if available
  },
  {
    "id": "6",
    "company": "Patliputra University",
    "position": "Bachelor of Computer Applications (BCA)",
    "duration": "Graduated",
    "description": "Completed undergraduate degree in Computer Applications, gaining expertise in programming, databases, and software development.",
    "technologies": ["Python", "Java", "MySQL", "JavaScript", "HTML", "CSS"],
    "logo": "" // Add logo if available
  },
  {
    "id": "7",
    "company": "GLA University",
    "position": "Master of Computer Applications (MCA)",
    "duration": "Currently Pursuing",
    "description": "Pursuing a postgraduate degree in Computer Applications to deepen technical knowledge and specialize in software engineering.",
    "technologies": ["Full Stack Development", "Cloud Computing", "Data Structures", "React", "Node.js"],
    "logo": "" // Add logo if available
  }
];


export const useExperienceStore = create<ExperienceState>(() => ({
  experiences: experienceData,
}));