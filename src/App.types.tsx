export type screenName = 'SKILLTREE' | 'SKILLS' | 'SAMPLES' | 'OVERVIEW' | 'CATS';

export interface colorLutType {
  lowlight:string[];
  color:string[];
  highlight:string[];
}

export interface skillTreeType {
  name: string;
  children?: skillTreeType[];
}

export interface timelineItemType {
  company: string;
  link?: string;
  jobTitle: string;
  start: string;
  end: string;
  location?: string;
  selected?: boolean;
  screenshots?: screenshotType[];
  details?: string[];
}

export interface skillsItemType {
    label: string;
    type: string;
    rating: number;
    years: number;
}

export interface screenshotType {
  fileName?: string;
  description?: string;
  company?: string;
}

export interface menuItem {
  label: string;
  id?: string;
  selected?: boolean;
}

export interface filterType {
  id: string;
  label: string;
  enabled: boolean;
}
