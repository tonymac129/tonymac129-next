export interface SkillType {
  id: number;
  name: string;
  description: string;
  icon: React.ReactNode;
  progress: number;
  tags: string[];
}
