const storedJobData = localStorage.getItem('JobData');

let JobData = storedJobData
  ? JSON.parse(storedJobData)
: [
    {
      Title: "Relationship Manager",
      location: "India",
      Department: "Retail Banking",
      jobDescription:
        "As a Relationship Manager at YourBank, you will be responsible for developing and maintaining relationships with our valued customers. You will proactively identify their financial needs and offer tailored solutions to help them achieve their goals. We are seeking individuals with excellent communication skills, a strong sales acumen, and a passion for delivering exceptional customer service.",
      Requirements: [
        "Bachelor's degree in Business, Finance, or a related field",
        "Minimum of 3 years of experience in sales or relationship management in the banking industry",
        "Proven track record of meeting and exceeding sales targets",
        "Excellent interpersonal and negotiation skills",
        "Strong knowledge of banking products and services"
      ]
    },
    {
      Title: "Risk Analyst",
      location: "India",
      Department: "Risk Management",
      jobDescription:
        "As a Risk Analyst at YourBank, you will play a vital role in identifying and assessing potential risks to our organization. You will analyze data, conduct risk assessments, and develop strategies to mitigate risks. We are looking for detail-oriented individuals with strong analytical skills and a solid understanding of risk management principles.",
  
      Requirements: [
        "Bachelor's degree in Finance, Economics, or a related field",
        "Minimum of 2 years of experience in risk management or a similar role",
        "Proficiency in risk analysis tools and techniques",
        "Strong analytical and problem-solving skills",
        "Knowledge of regulatory requirements and industry best practices"
      ]
    },
    {
      Title: "IT Security Specialist",
      location: "India",
      Department: "Information Technology",
      jobDescription:
        "As an IT Security Specialist at YourBank, you will be responsible for ensuring the security and integrity of our information systems. You will develop and implement security protocols, conduct vulnerability assessments, and respond to security incidents. We are seeking individuals with a strong technical background, knowledge of cybersecurity best practices, and a commitment to maintaining the confidentiality of customer data.",
  
      Requirements: [
        "Bachelor's degree in Computer Science, Information Security, or a related field",
        "Minimum of 5 years of experience in IT security or a similar role",
        "In-depth knowledge of network security protocols and technologies",
        "Familiarity with regulatory frameworks such as PCI DSS and GDPR",
        "Professional certifications such as CISSP or CISM are preferred"
      ]
    },
  ];

  if (!storedJobData) {
    localStorage.setItem("JobData", JSON.stringify(JobData));
  }
  export const exportedJobData = JobData;