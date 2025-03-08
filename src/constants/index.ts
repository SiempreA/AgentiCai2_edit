export const mockAnalysisCard = [
  {
    person: {
      image: "../../assets/images/avatar-2.png",
    },
    title: "Fraud Agent",
    assessments: [
      {
        label: "Veracity of photos",
        state: true,
      },
      {
        label: "Matching photos with the description",
        state: true,
      },
      {
        label: "Veracity and status of the license",
        state: true,
      },
    ],
  },
  {
    person: {
      image: "../../assets/images/avatar-3.png",
    },
    title: "Policy Agent",
    assessments: [
      {
        label: "Policies related to the incident",
        state: true,
      },
      {
        label: "Coverage clauses",
        state: true,
      },
      {
        label: "Policy compliance review",
        state: true,
      },
    ],
  },
  {
    person: {
      image: "../../assets/images/avatar-4.png",
    },
    title: "Procedural Agent",
    assessments: [
      {
        label: "Process Optimization",
        state: true,
      },
      {
        label: "Standard Operating Procedures (SOP) Management",
        state: true,
      },
      {
        label: "Regulatory Compliance Enforcement",
        state: true,
      },
    ],
  },
];

export const mockedAnalysisStatus = [
  {
    label: "Fraud Analysis",
    state: true,
  },
  {
    label: "Policy Analysis",
    state: true,
  },
  {
    label: "Rules Analysis",
    state: true,
  },
];

export const claimSummaryList = [
  {
    title: "Vehicle",
    description: "Toyota Sedan (Blue) – License Plate: 987654321",
  },
  {
    title: "Incident",
    description: "Location: Avenue Providencia",
  },
  {
    title: "Applicable Coverages",
    description: "Liability, Collision, Comprehensive, and PIP",
  },
  {
    title: "Estimated Claim Cost",
    description: "$500 (after deductible and coverage adjustments)",
  },
];
