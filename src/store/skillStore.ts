import { create } from 'zustand';
import { Skill } from '../types';

interface SkillState {
  skills: Skill[];
  filteredSkills: Skill[];
  activeFilter: string;
  setFilter: (filter: string) => void;
}

const skillData: Skill[] = [
  // Frontend
  { id: '1', name: 'HTML', icon: 'HTML', category: 'frontend', proficiency: 95 },
  { id: '2', name: 'CSS', icon: 'CSS', category: 'frontend', proficiency: 90 },
  { id: '3', name: 'JavaScript', icon: 'Java', category: 'frontend', proficiency: 85 },
  { id: '4', name: 'Tailwind CSS', icon: 'tailwind', category: 'frontend', proficiency: 90 },
  { id: '7', name: 'Framer Motion', icon: 'framer', category: 'frontend', proficiency: 80 },

  {id:'9',name:'Styled Components', icon:'styled-components', category:'frontend', proficiency: 80},


  {id:'12',name:'Java', icon:'Java', category:'backend', proficiency: 80},
  {id:'13', name:'Three.js', icon:'threejs', category:'frontend', proficiency: 80},
  

  




  { id: '20', name: 'SQL', icon: 'sql', category: 'backend', proficiency: 85 },


  // Database
  { id: '22', name: 'Mysql', icon: 'postgresql', category: 'database', proficiency: 85 },

  {id:'24', name:'MongoDB', icon:'MongoDB', category:'database', proficiency: 80 },



  // DevOps
  // AI/ML



  // Mobile


  
];

export const useSkillStore = create<SkillState>((set) => ({
  skills: skillData,
  filteredSkills: skillData,
  activeFilter: 'all',
  setFilter: (filter) => 
    set((state) => ({
      activeFilter: filter,
      filteredSkills: filter === 'all' 
        ? state.skills 
        : state.skills.filter(skill => skill.category === filter)
    })),
}));