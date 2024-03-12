const jobTypeListObj = [
  "Full Time",
  "Part Time",
  "Intern",
  "Temporary",
  "Contractor",
  "Volunteer",
  "Freelance",
  "Cofounder",
];

export const jobTypeList = jobTypeListObj.map((item) => ({
  value: item,
  label: item,
}));

const jobRoleListObj = [
  "Frontend Developer",
  "Backend Developer",
  "Full Stack Developer",
  "DevOps Engineer",
  "Quality Assurance (QA) Engineer",
  "Business Analyst",
  "Data Engineer",
  "Machine Learning Engineer",
  "Security Engineer",
  "Embedded Systems Engineer",
  "Game Developer",
  "Software Engineer",
  "Marketing Manager",
  "Financial Analyst",
  "Graphic Designer",
  "Human Resources Specialist",
  "Sales Representative",
];

export const jobRoleList = jobRoleListObj.map((item) => ({
  value: item,
  label: item,
}));

const experienceListObj = [
  "Internship",
  "Entry-level",
  "Associate",
  "Mid-level",
  "Senior",
  "Manager",
  "Director",
  "Executive",
];
export const experienceList = experienceListObj.map((item) => ({
  value: item,
  label: item,
}));

const companyListObj = [
  "Microsoft",
  "Apple",
  "Amazon",
  "Google",
  "Facebook",
  "Alibaba",
  "Tencent",
  "Oracle",
  "IBM",
  "SAP",
  "Salesforce",
  "Intel",
  "Cisco Systems",
  "Adobe",
  "NVIDIA",
  "Netflix",
  "VMware",
  "Twitter",
  "Tesla",
  "Square",
  "ServiceNow",
  "PayPal",
  "HP Inc.",
  "Dell Technologies",
  "Uber Technologies",
  "Airbnb",
  "Snap Inc.",
  "Dropbox",
  "Reddit",
  "Slack Technologies",
];
export const companyList = companyListObj.map((item) => ({
  value: item,
  label: item,
}));

export const accept = [
  {
    id: "shortMessage",
    label: "Short Message",
  },
] as const;

export const pdfs = [
  {
    id: "resume",
    label: "Resume",
  },
  {
    id: "coverLetter",
    label: "Cover Letter",
  },
] as const;

export const links = [
  {
    id: "linkedin",
    label: "LinkedIn",
  },
  {
    id: "github",
    label: "GitHub",
  },
  {
    id: "portfolio",
    label: "Portfolio",
  },
  {
    id: "medium",
    label: "Medium",
  },
  {
    id: "twitter",
    label: "Twitter",
  },
  {
    id: "dribbble",
    label: "Dribbble",
  },
] as const;
