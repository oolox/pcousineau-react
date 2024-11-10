export type screenName = 'SKILLTREE' | 'SKILLS' | 'SAMPLES' | 'OVERVIEW';

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
  action: screenName;
  selected?: boolean;
}

export interface filterType {
  label: string;
  color: string;
  enabled: boolean;
}
