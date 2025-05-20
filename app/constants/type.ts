import { StaticImageData } from "next/image";

type FooterSection = {
  title: string;
  content?: string;
  copyright: string;
};

export type TCommonProps = {
  title?: string;
  name?: string;
  icon?: StaticImageData;
};

export type TExperience = {
  companyName: string;
  iconBg: string;
  date: string;
  points: string[];
} & Required<Omit<TCommonProps, "name">>;

export type TTestimonial = {
  testimonial: string;
  designation: string;
  company: string;
  image: string;
} & Required<Pick<TCommonProps, "name">>;


export type TTechnology = Required<Omit<TCommonProps, "title">>;

export type TNavLink = {
  id: string;
  title: string;
  href?: string;
  dropdown?: { title: string; href: string }[]; // Add this line
  external?: boolean;
};


export type TMotion = {
  direction: "up" | "down" | "left" | "right" | "";
  type: "tween" | "spring" | "just" | "";
  delay: number;
  duration: number;
};

export type THero = {
    name: string;
    skills: string[];
    description: string;
    profileImage: {
      src: StaticImageData;
      alt: string;
    };
    backgroundImage: {
      src: StaticImageData;
      alt: string;
    };
}

export type TBlog = {
  id: string;
  title: string;
  description: string;
  image: {
    src: StaticImageData;
    alt: string;
  };
  date: string;
  link: string;
};

export type chat = {
  title: string;
  description: string;
}

export type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
  };
  contact: {
    form: {
      name: {
        span: string;
        placeholder: string;
      };
      email: {
        span: string;
        placeholder: string;
      };
      message: {
        span: string;
        placeholder: string;
      };
    };
  } & TSection;
  sections: {
    about: Required<TSection>;
    experience: Required<TSection>;
    feedbacks: TSection;
    works: Required<TSection>;
    tech: Required<TSection>;
    footer: FooterSection;
  };
};



// slice related exports

type TSection = {
  section: string;
  headline: string;
};

export type TProfile = {
  name: string;
  email: string;
  phone: string;
  image: StaticImageData;
  role: string;
  password: string;
  date: string;
};

export interface TTeamMember {
  user: TUser;
  role: TRole;
  addedAt: Date;
  addedBy: TUser | string; 
  _id?: string;
}

export interface TransformedTeamMember {
  username: string;
  email: string;
  phone: string;
  role: TRole;
  _id: string;
  teamMemberId: string;
  created_at?: string;
  addedAt: string; 
  addedBy: string; 
}


export type TUpdates = {
  user_to_project: TSection;
  user_from_project: TSection;
  user_to_organization: TSection;
  user_from_organization: TSection;
  user_to_team: TSection;
  user_from_team: TSection;
  user_to_task: TSection;
  user_from_task: TSection;
  user_to_file: TSection;
  user_from_file: TSection;
  user_to_chat: TSection;
  user_from_chat: TSection;
  user_to_message: TSection;
  user_from_message: TSection;
  project_to_organization: TSection;
  project_from_organization: TSection;
  add_to_team: TSection;
  remove_from_team: TSection;
  add_to_task: TSection;
  remove_from_task: TSection;
  add_to_file: TSection;
  remove_from_file: TSection;
  add_to_chat: TSection;
  remove_from_chat: TSection;
}

export type TLanguage = {
  country: {
    image: StaticImageData;
    language: string;
    code: string;
  };
};

export type TChatGroup = {
  _id?: string;
  name: string;
  description?: string;
  isGroupChat?: boolean;
  avatar?: string;
  organization?: string;
  participants?: TUser[];
  lastMessage?: string;
  invitationLink?: string;
  lastMessageSender?: string;
  invitationLinkExpires?: Date;
  createdAt?: Date;
  updatedAt?: Date;
  isPublic?: boolean;
  createdBy?: TUser;
}

export type TUser = {
  _id?: string;
  username: string;
  email: string;
  password?: string;
  phone?: string;
  role?: string;
  organization?: string;
  isPremium?: boolean;
  profileImage?: string;
  services?: TService[];
  chatGroups?: TChatGroup[];
  file?: TFile[];
  projects?: TProject[];
  tasks?: TTask[];
  created_at?: string;
  status?: "active" | "inactive" | "banned" | "pending";
};

export type TRole =
  | "Admin"
  | "Super Admin"
  | "Project Manager"
  | "Developer"
  | "Team Member"
  | "User";

export type TService = {
  id: number;
  _id?: string;
  name: string;
  description: string;
  category: string;
  features: string[];
  price: number;
  duration: number;
  type: string;
  status?: "active" | "inactive";
  createdAt?: Date;
  updatedAt?: Date;

};

export type TOrganization = {
  _id?: string;
  name: string;
  description: string;
  address: string;
  phone: string;
  email: string;
  website: string;
  logo: string;
  superAdmin?: TUser;
  users?: TUser[];
  projects?: TProject[];
  createdAt?: Date;
  updatedAt?: Date;
};

export type TFile = {
  _id?: string;
  name: string;
  type?: string; 
  path: string; 
  extension?: string;
  size?: number; 

  children?: TFile[];
  
  createdBy?: TUser;
  project?: TProject;
  organization?: TOrganization;

  sharedWith?: TUser[];

  isVerssionControlled?: boolean;
  gitRepository?: string;
  currentbranch?: string;
  lastCommitHash?: string;
  collaborators?: String[];

  created_at?: Date;
  updated_at?: Date;
  isDeleted?: boolean;
  deletedBy?: TUser;
  deletedAt?: Date;

  history?: string[]; 

  tags?: string[];
  labels?: string[];
  
  comments?: string[];
};
export type TProject = {
  _id?: string;
  name: string;
  description?: string;
  status?: "active" | "inactive" | "completed" | "archived";
  createdBy: TUser;
  organization: TOrganization;
  teamMembers?: TTeamMember[];
  files?: TFile[];
  tasks?: TTask[];
  createdAt?: Date;
  updatedAt?: Date;
  startDate?: Date;
  endDate?: Date;
  tags?: string[];
  labels?: string[];
  isPublic?: boolean;
  allowExternalContributors?: boolean;
};
export type TTask = {
  _id?: string;
  name: string;
  description?: string;
  status?: "pending" | "in-progress" | "completed" | "blocked";
  priority?: "low" | "medium" | "high";

  createdBy: TUser;
  assignedTo: TUser[];
  project: TProject;
  organization: TOrganization;

  tags?: string[];
  estimatedTime?: number; // in hours (Estimated time to complete the task)
  actualTime?: number; // in hours (Actual time spent on the task)

  comments?: string[];
  attachments?: string[];
  history?: string[];

  createdAt?: Date;
  updatedAt?: Date;

  percentage?: string;
};

export type TSections = {
  dashboard: TSection;
  users: TSection;
  premium_users: TSection;
  organizations: TSection;
  projects: TSection;
  services: TSection;
  chat_group: TSection;
  tasks: TSection;
  files: TSection;
  notifications: TSection;
  messages: TSection;
  photo_review: TSection;
  reports_bans: TSection;
  sales_agents: TSection;
  manage_admins: TSection;
};

export type TInsights = {
  notifications: {
    count: number;
    messages: string[];
  };
  logs: {
    count: number;
    entries: string[];
  };
  errors: {
    count: number;
    details: string[];
  };
  warnings: {
    count: number;
    details: string[];
  };
  userActivity: {
    activeUsers: number;
    newSignups: number;
    topActions: string[];
  };
  revenue: {
    totalRevenue: number;
    monthlyRevenue: number;
    topProducts: string[];
  };
  supportTickets: {
    openTickets: number;
    resolvedTickets: number;
    recentTickets: string[];
  };
  systemPerformance: {
    uptime: string;
    cpuUsage: number;
    memoryUsage: number;
  };
};
