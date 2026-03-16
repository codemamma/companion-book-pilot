// SCARE to CARES Diagnostic Data
// This file contains placeholder data for the diagnostic journey
// Future: Import from assessment-questions.json, result-profiles.json, etc.

export const scareQuestions = [
  {
    id: 'q1',
    question: 'How often do you feel overwhelmed by the pace or complexity of change initiatives?',
    dimension: 'stress',
    options: [
      { value: 1, label: 'Rarely or never' },
      { value: 2, label: 'Occasionally' },
      { value: 3, label: 'Frequently' },
      { value: 4, label: 'Almost always' }
    ]
  },
  {
    id: 'q2',
    question: 'To what extent do team members express uncertainty about priorities or direction?',
    dimension: 'confusion',
    options: [
      { value: 1, label: 'Very little' },
      { value: 2, label: 'Some uncertainty' },
      { value: 3, label: 'Considerable uncertainty' },
      { value: 4, label: 'High level of confusion' }
    ]
  },
  {
    id: 'q3',
    question: 'How much anxiety do you observe in your team about upcoming changes?',
    dimension: 'anxiety',
    options: [
      { value: 1, label: 'Minimal anxiety' },
      { value: 2, label: 'Mild concern' },
      { value: 3, label: 'Significant anxiety' },
      { value: 4, label: 'High anxiety' }
    ]
  },
  {
    id: 'q4',
    question: 'How often do you encounter pushback or resistance to new initiatives?',
    dimension: 'resistance',
    options: [
      { value: 1, label: 'Rarely' },
      { value: 2, label: 'Sometimes' },
      { value: 3, label: 'Often' },
      { value: 4, label: 'Constantly' }
    ]
  },
  {
    id: 'q5',
    question: 'How strongly do existing mindsets or identity concerns slow down transformation?',
    dimension: 'ego',
    options: [
      { value: 1, label: 'Not a factor' },
      { value: 2, label: 'Minor factor' },
      { value: 3, label: 'Moderate barrier' },
      { value: 4, label: 'Major barrier' }
    ]
  }
];

export const focusedAssessments = {
  communicate: [
    {
      id: 'comm1',
      question: 'How clearly do you articulate the "why" behind change initiatives?',
      options: [
        { value: 1, label: 'Very clearly' },
        { value: 2, label: 'Somewhat clearly' },
        { value: 3, label: 'Not very clearly' },
        { value: 4, label: 'Rarely explain the why' }
      ]
    },
    {
      id: 'comm2',
      question: 'How often do you check for understanding after communicating key messages?',
      options: [
        { value: 1, label: 'Always' },
        { value: 2, label: 'Usually' },
        { value: 3, label: 'Occasionally' },
        { value: 4, label: 'Rarely' }
      ]
    },
    {
      id: 'comm3',
      question: 'How consistent are your messages across different communication channels?',
      options: [
        { value: 1, label: 'Very consistent' },
        { value: 2, label: 'Mostly consistent' },
        { value: 3, label: 'Sometimes inconsistent' },
        { value: 4, label: 'Often inconsistent' }
      ]
    },
    {
      id: 'comm4',
      question: 'How well do you tailor messages to different stakeholder groups?',
      options: [
        { value: 1, label: 'Very well' },
        { value: 2, label: 'Adequately' },
        { value: 3, label: 'Not very well' },
        { value: 4, label: 'Use same message for all' }
      ]
    },
    {
      id: 'comm5',
      question: 'How transparent are you about challenges and uncertainties?',
      options: [
        { value: 1, label: 'Very transparent' },
        { value: 2, label: 'Moderately transparent' },
        { value: 3, label: 'Somewhat guarded' },
        { value: 4, label: 'Minimize sharing challenges' }
      ]
    }
  ],
  adjust: [
    {
      id: 'adj1',
      question: 'How quickly do you recognize when conditions have changed?',
      options: [
        { value: 1, label: 'Very quickly' },
        { value: 2, label: 'Reasonably quickly' },
        { value: 3, label: 'Slowly' },
        { value: 4, label: 'Often miss signals' }
      ]
    },
    {
      id: 'adj2',
      question: 'How willing are you to pivot plans when new information emerges?',
      options: [
        { value: 1, label: 'Very willing' },
        { value: 2, label: 'Somewhat willing' },
        { value: 3, label: 'Reluctant' },
        { value: 4, label: 'Stick to original plan' }
      ]
    },
    {
      id: 'adj3',
      question: 'How effectively do you balance stability with flexibility?',
      options: [
        { value: 1, label: 'Very effectively' },
        { value: 2, label: 'Adequately' },
        { value: 3, label: 'Struggle to balance' },
        { value: 4, label: 'Lean heavily to one side' }
      ]
    },
    {
      id: 'adj4',
      question: 'How well do you communicate the reasons for course corrections?',
      options: [
        { value: 1, label: 'Very well' },
        { value: 2, label: 'Adequately' },
        { value: 3, label: 'Not very well' },
        { value: 4, label: 'Make changes without explanation' }
      ]
    },
    {
      id: 'adj5',
      question: 'How often do you review and reassess transformation progress?',
      options: [
        { value: 1, label: 'Regularly and systematically' },
        { value: 2, label: 'Periodically' },
        { value: 3, label: 'Infrequently' },
        { value: 4, label: 'Rarely review' }
      ]
    }
  ],
  relationships: [
    {
      id: 'rel1',
      question: 'How much time do you invest in building trust with your team?',
      options: [
        { value: 1, label: 'Significant time' },
        { value: 2, label: 'Moderate time' },
        { value: 3, label: 'Limited time' },
        { value: 4, label: 'Minimal time' }
      ]
    },
    {
      id: 'rel2',
      question: 'How well do you listen to concerns and perspectives different from your own?',
      options: [
        { value: 1, label: 'Very well' },
        { value: 2, label: 'Adequately' },
        { value: 3, label: 'Not very well' },
        { value: 4, label: 'Rarely listen deeply' }
      ]
    },
    {
      id: 'rel3',
      question: 'How actively do you create opportunities for team connection and collaboration?',
      options: [
        { value: 1, label: 'Very actively' },
        { value: 2, label: 'Moderately' },
        { value: 3, label: 'Occasionally' },
        { value: 4, label: 'Rarely' }
      ]
    },
    {
      id: 'rel4',
      question: 'How effectively do you navigate conflict within your team?',
      options: [
        { value: 1, label: 'Very effectively' },
        { value: 2, label: 'Adequately' },
        { value: 3, label: 'With difficulty' },
        { value: 4, label: 'Avoid or escalate conflict' }
      ]
    },
    {
      id: 'rel5',
      question: 'How accessible are you when team members need support?',
      options: [
        { value: 1, label: 'Very accessible' },
        { value: 2, label: 'Reasonably accessible' },
        { value: 3, label: 'Limited accessibility' },
        { value: 4, label: 'Hard to reach' }
      ]
    }
  ],
  empowerment: [
    {
      id: 'emp1',
      question: 'How often do you delegate meaningful decision-making authority?',
      options: [
        { value: 1, label: 'Frequently' },
        { value: 2, label: 'Sometimes' },
        { value: 3, label: 'Rarely' },
        { value: 4, label: 'Almost never' }
      ]
    },
    {
      id: 'emp2',
      question: 'How comfortable are you letting others own outcomes, including mistakes?',
      options: [
        { value: 1, label: 'Very comfortable' },
        { value: 2, label: 'Moderately comfortable' },
        { value: 3, label: 'Uncomfortable' },
        { value: 4, label: 'Need to control outcomes' }
      ]
    },
    {
      id: 'emp3',
      question: 'How clearly do you define decision-making boundaries and authority?',
      options: [
        { value: 1, label: 'Very clearly' },
        { value: 2, label: 'Adequately' },
        { value: 3, label: 'Vaguely' },
        { value: 4, label: 'Boundaries are unclear' }
      ]
    },
    {
      id: 'emp4',
      question: 'How well do you support team members to develop their capabilities?',
      options: [
        { value: 1, label: 'Very well' },
        { value: 2, label: 'Adequately' },
        { value: 3, label: 'Not very well' },
        { value: 4, label: 'Minimal support' }
      ]
    },
    {
      id: 'emp5',
      question: 'How often do you recognize and celebrate team achievements?',
      options: [
        { value: 1, label: 'Regularly' },
        { value: 2, label: 'Occasionally' },
        { value: 3, label: 'Rarely' },
        { value: 4, label: 'Almost never' }
      ]
    }
  ],
  composure: [
    {
      id: 'comp1',
      question: 'How well do you maintain calm during high-pressure situations?',
      options: [
        { value: 1, label: 'Very well' },
        { value: 2, label: 'Reasonably well' },
        { value: 3, label: 'With difficulty' },
        { value: 4, label: 'Often lose composure' }
      ]
    },
    {
      id: 'comp2',
      question: 'How effectively do you manage your stress and emotional responses?',
      options: [
        { value: 1, label: 'Very effectively' },
        { value: 2, label: 'Adequately' },
        { value: 3, label: 'Struggle to manage' },
        { value: 4, label: 'Emotions often overwhelm' }
      ]
    },
    {
      id: 'comp3',
      question: 'How consistent is your demeanor across different situations?',
      options: [
        { value: 1, label: 'Very consistent' },
        { value: 2, label: 'Mostly consistent' },
        { value: 3, label: 'Somewhat variable' },
        { value: 4, label: 'Highly variable' }
      ]
    },
    {
      id: 'comp4',
      question: 'How well do you help others stay grounded during uncertainty?',
      options: [
        { value: 1, label: 'Very well' },
        { value: 2, label: 'Adequately' },
        { value: 3, label: 'Not very well' },
        { value: 4, label: 'Add to anxiety' }
      ]
    },
    {
      id: 'comp5',
      question: 'How proactive are you about managing your own wellbeing?',
      options: [
        { value: 1, label: 'Very proactive' },
        { value: 2, label: 'Moderately proactive' },
        { value: 3, label: 'Reactive' },
        { value: 4, label: 'Neglect wellbeing' }
      ]
    }
  ]
};

// Future: Import from result-profiles.json
export const resultProfiles = {
  low: {
    range: [5, 10],
    indexRange: [0, 40],
    label: 'Minimal Friction',
    summary: 'Your environment shows relatively low transformation friction. This is a good foundation for change leadership.',
    recommendation: 'Focus on maintaining momentum and proactively addressing emerging challenges before they escalate.'
  },
  moderate: {
    range: [11, 15],
    indexRange: [41, 70],
    label: 'Moderate Friction',
    summary: 'You are experiencing moderate transformation friction. This is common in active change environments.',
    recommendation: 'Targeted interventions in your growth areas will help reduce friction and improve transformation outcomes.'
  },
  high: {
    range: [16, 20],
    indexRange: [71, 100],
    label: 'Significant Friction',
    summary: 'Your environment shows significant transformation friction. This requires immediate attention and strategic intervention.',
    recommendation: 'Prioritize the CARES practices that address your specific friction points. Consider engaging external support for breakthrough results.'
  }
};

// Future: Import from chapter-summaries.json
export const chapterRecommendations = {
  communicate: [
    {
      chapter: 'Chapter 3',
      title: 'The Communication Imperative',
      summary: 'Learn why clarity and consistency matter more than frequency, and how to craft messages that stick.',
      reason: 'This chapter provides frameworks for cutting through noise and building shared understanding.'
    },
    {
      chapter: 'Chapter 7',
      title: 'Storytelling for Change',
      summary: 'Discover how to make change personal and compelling through authentic narrative.',
      reason: 'Great communication connects rational plans to emotional commitment.'
    },
    {
      chapter: 'Chapter 12',
      title: 'Leading Without All the Answers',
      summary: 'Build credibility by being transparent about what you know and what you are learning.',
      reason: 'Honest communication builds trust, especially during uncertainty.'
    }
  ],
  adjust: [
    {
      chapter: 'Chapter 5',
      title: 'Sensing and Responding',
      summary: 'Develop the discipline of reading signals and adjusting course without losing direction.',
      reason: 'Adaptive leadership requires both awareness and decisive action.'
    },
    {
      chapter: 'Chapter 9',
      title: 'Planning in Uncertainty',
      summary: 'Learn to build plans that hold together while remaining open to new information.',
      reason: 'Flexibility is not chaos; it is disciplined responsiveness.'
    },
    {
      chapter: 'Chapter 14',
      title: 'When to Pivot and When to Persist',
      summary: 'Make better decisions about when to hold steady and when to change direction.',
      reason: 'Not every signal requires a shift, but missing the right one can be costly.'
    }
  ],
  relationships: [
    {
      chapter: 'Chapter 4',
      title: 'Building Trust at Speed',
      summary: 'Create the conditions for trust even when timelines are tight and stakes are high.',
      reason: 'Trust is the foundation of all effective change leadership.'
    },
    {
      chapter: 'Chapter 8',
      title: 'The Art of Listening',
      summary: 'Master the discipline of listening to understand, not just to respond.',
      reason: 'Strong relationships start with deep listening and genuine curiosity.'
    },
    {
      chapter: 'Chapter 11',
      title: 'Coalition Building',
      summary: 'Identify and engage the stakeholders who can accelerate or block your progress.',
      reason: 'Change moves through relationships, not org charts.'
    }
  ],
  empowerment: [
    {
      chapter: 'Chapter 6',
      title: 'Letting Go to Lead',
      summary: 'Understand why giving ownership creates better outcomes and stronger teams.',
      reason: 'Empowerment is not abdication; it is strategic delegation with support.'
    },
    {
      chapter: 'Chapter 10',
      title: 'Decision Rights and Guardrails',
      summary: 'Define clarity about who decides what, and create safe boundaries for autonomy.',
      reason: 'People need both freedom and structure to own their work effectively.'
    },
    {
      chapter: 'Chapter 13',
      title: 'Growing Capability During Change',
      summary: 'Build skills and confidence in your team while delivering transformation.',
      reason: 'Empowerment requires investment in people, not just processes.'
    }
  ],
  composure: [
    {
      chapter: 'Chapter 2',
      title: 'The Leader as Stabilizer',
      summary: 'Recognize how your presence and energy shape team confidence and resilience.',
      reason: 'Your composure becomes the team\'s compass during turbulence.'
    },
    {
      chapter: 'Chapter 15',
      title: 'Managing Your Inner State',
      summary: 'Develop practices for self-regulation and sustainable performance under pressure.',
      reason: 'You cannot lead others through change if you are overwhelmed yourself.'
    },
    {
      chapter: 'Chapter 16',
      title: 'Creating Calm Systems',
      summary: 'Design routines and structures that reduce chaos and create predictability.',
      reason: 'Composure is not just personal; it can be built into how teams operate.'
    }
  ]
};

export const caresAreas = {
  communicate: {
    key: 'communicate',
    label: 'Communicate Clearly',
    shortLabel: 'Communication',
    description: 'Building shared understanding through clarity, consistency, and transparency.',
    icon: 'message',
    color: 'blue'
  },
  adjust: {
    key: 'adjust',
    label: 'Adjust When Conditions Change',
    shortLabel: 'Adaptability',
    description: 'Reading signals and responding with flexibility while maintaining direction.',
    icon: 'refresh',
    color: 'green'
  },
  relationships: {
    key: 'relationships',
    label: 'Build Strong Working Relationships',
    shortLabel: 'Relationships',
    description: 'Creating trust, connection, and collaboration across diverse stakeholders.',
    icon: 'users',
    color: 'purple'
  },
  empowerment: {
    key: 'empowerment',
    label: 'Give People Ownership',
    shortLabel: 'Empowerment',
    description: 'Delegating authority and enabling others to lead with confidence.',
    icon: 'award',
    color: 'orange'
  },
  composure: {
    key: 'composure',
    label: 'Stay Calm Under Pressure',
    shortLabel: 'Composure',
    description: 'Maintaining steadiness and creating stability during uncertainty.',
    icon: 'shield',
    color: 'teal'
  }
};

export const nextStepResources = [
  {
    id: 'toolkit',
    title: 'Download the Toolkit',
    description: 'Practical templates, worksheets, and guides to implement CARES practices in your organization.',
    icon: 'download',
    type: 'resource',
    cta: 'Get the Toolkit'
  },
  {
    id: 'workshop',
    title: 'Join a Workshop',
    description: 'Participate in facilitated sessions to deepen your understanding and connect with fellow transformation leaders.',
    icon: 'calendar',
    type: 'event',
    cta: 'View Workshops'
  },
  {
    id: 'coaching',
    title: 'Request a 1:1 with Saby',
    description: 'Work directly with Saby to navigate your specific transformation challenges and accelerate results.',
    icon: 'user',
    type: 'premium',
    cta: 'Schedule a Call'
  }
];
