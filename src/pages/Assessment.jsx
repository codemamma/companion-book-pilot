import { useState } from 'react';
import { Link } from 'react-router-dom';

// Future data imports - to be replaced with JSON files:
// import assessmentQuestions from '../data/assessment-questions.json';
// import resultProfiles from '../data/result-profiles.json';
// import chapterSummaries from '../data/chapter-summaries.json';

// Placeholder questions - structured for future knowledge base connection
const QUESTIONS = [
  {
    id: 1,
    text: "My team clearly understands why this transformation is happening.",
    pillar: "C",
    reverseScored: false,
    chapterRefs: ["chapter-1"]
  },
  {
    id: 2,
    text: "I regularly share context about how our work connects to organizational goals.",
    pillar: "C",
    reverseScored: false,
    chapterRefs: ["chapter-1"]
  },
  {
    id: 3,
    text: "When priorities shift, I adjust plans and communicate the change quickly.",
    pillar: "A",
    reverseScored: false,
    chapterRefs: ["chapter-2"]
  },
  {
    id: 4,
    text: "I struggle to keep pace with the speed of change in my organization.",
    pillar: "A",
    reverseScored: true,
    chapterRefs: ["chapter-2"]
  },
  {
    id: 5,
    text: "I invest time in building trust with key stakeholders.",
    pillar: "R",
    reverseScored: false,
    chapterRefs: ["chapter-3"]
  },
  {
    id: 6,
    text: "My working relationships help me navigate organizational challenges.",
    pillar: "R",
    reverseScored: false,
    chapterRefs: ["chapter-3"]
  },
  {
    id: 7,
    text: "I give my team ownership over key decisions.",
    pillar: "E",
    reverseScored: false,
    chapterRefs: ["chapter-2"]
  },
  {
    id: 8,
    text: "People on my team feel accountable for outcomes, not just tasks.",
    pillar: "E",
    reverseScored: false,
    chapterRefs: ["chapter-2"]
  },
  {
    id: 9,
    text: "I maintain composure when facing unexpected setbacks.",
    pillar: "S",
    reverseScored: false,
    chapterRefs: ["chapter-3"]
  },
  {
    id: 10,
    text: "Constant pressure and change make it hard for me to stay centered.",
    pillar: "S",
    reverseScored: true,
    chapterRefs: ["chapter-3"]
  }
];

// Placeholder chapter recommendations - to be replaced with knowledge base content
const CHAPTER_RECOMMENDATIONS = [
  {
    id: "chapter-1",
    label: "Chapter 1",
    title: "Why change feels chaotic",
    description: "This chapter helps clarify the root causes of confusion during transformation."
  },
  {
    id: "chapter-2",
    label: "Chapter 2",
    title: "Building adaptive capacity",
    description: "Learn how to adjust strategies while maintaining team confidence and momentum."
  },
  {
    id: "chapter-3",
    label: "Chapter 3",
    title: "Leading with steady presence",
    description: "Discover how to build trust and stay calm when pressure intensifies."
  }
];

const LIKERT_OPTIONS = [
  { value: 1, label: "Strongly Disagree" },
  { value: 2, label: "Disagree" },
  { value: 3, label: "Neutral" },
  { value: 4, label: "Agree" },
  { value: 5, label: "Strongly Agree" }
];

const Assessment = () => {
  const [stage, setStage] = useState('intro'); // 'intro', 'questions', 'results'
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [responses, setResponses] = useState({});
  const [results, setResults] = useState(null);

  const handleStart = () => {
    setStage('questions');
    setCurrentQuestion(0);
    setResponses({});
  };

  const handleResponse = (questionId, value) => {
    setResponses({ ...responses, [questionId]: value });
  };

  const handleNext = () => {
    if (currentQuestion < QUESTIONS.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleSubmit = () => {
    // Calculate results - placeholder logic to be enhanced with knowledge base
    const calculatedResults = calculateResults(responses);
    setResults(calculatedResults);
    setStage('results');
  };

  // Placeholder scoring logic - to be replaced with more sophisticated analysis
  const calculateResults = (responses) => {
    const pillarScores = { C: 0, A: 0, R: 0, E: 0, S: 0 };
    const pillarCounts = { C: 0, A: 0, R: 0, E: 0, S: 0 };

    QUESTIONS.forEach(question => {
      const response = responses[question.id];
      if (response) {
        const score = question.reverseScored ? (6 - response) : response;
        pillarScores[question.pillar] += score;
        pillarCounts[question.pillar] += 1;
      }
    });

    // Calculate averages
    const pillarAverages = {};
    Object.keys(pillarScores).forEach(pillar => {
      pillarAverages[pillar] = pillarCounts[pillar] > 0
        ? pillarScores[pillar] / pillarCounts[pillar]
        : 0;
    });

    // Identify strongest and growth areas
    const sortedPillars = Object.entries(pillarAverages).sort((a, b) => b[1] - a[1]);
    const strongestArea = sortedPillars[0];
    const growthArea = sortedPillars[sortedPillars.length - 1];

    // Map chapters based on growth area - this is where chapterRefs will be used
    const recommendedChapters = getRecommendedChapters(growthArea[0], pillarAverages);

    return {
      pillarScores: pillarAverages,
      strongestArea: {
        pillar: strongestArea[0],
        score: strongestArea[1]
      },
      growthArea: {
        pillar: growthArea[0],
        score: growthArea[1]
      },
      recommendedChapters
    };
  };

  // Placeholder recommendation logic - to be enhanced with knowledge base mapping
  const getRecommendedChapters = (growthPillar, scores) => {
    // This function will later use chapterRefs from questions and result-profiles.json
    // For now, return relevant chapters based on growth area
    const chapterMapping = {
      'C': ['chapter-1'],
      'A': ['chapter-2'],
      'R': ['chapter-3'],
      'E': ['chapter-2'],
      'S': ['chapter-3']
    };

    const primaryChapters = chapterMapping[growthPillar] || [];

    // Return all recommended chapters for now
    return CHAPTER_RECOMMENDATIONS.filter(chapter =>
      primaryChapters.includes(chapter.id)
    );
  };

  const getPillarName = (pillar) => {
    const names = {
      'C': 'Communicate',
      'A': 'Adjust',
      'R': 'Relate',
      'E': 'Empower',
      'S': 'Stay Calm'
    };
    return names[pillar] || pillar;
  };

  const currentQuestionData = QUESTIONS[currentQuestion];
  const progress = ((currentQuestion + 1) / QUESTIONS.length) * 100;
  const isLastQuestion = currentQuestion === QUESTIONS.length - 1;
  const hasResponse = responses[currentQuestionData?.id];

  return (
    <div className="min-h-screen bg-gray-950">
      {stage === 'intro' && (
        <section className="py-20 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 bg-blue-600/10 border border-blue-600/30 rounded-full mb-8">
              <svg className="w-4 h-4 text-blue-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
              </svg>
              <span className="text-sm font-medium text-blue-400">2 minutes</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              SCARE to CARES Leadership Assessment
            </h1>
            <p className="text-xl text-gray-400 mb-4">
              Reflect on how you are leading through change and identify which CARES area needs the most attention.
            </p>
            <p className="text-sm text-gray-500 mb-12">
              Based on key ideas from the companion experience
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button onClick={handleStart} className="btn-primary">
                Start Assessment
              </button>
              <Link to="/framework" className="btn-secondary">
                Explore the Framework
              </Link>
            </div>

            <div className="mt-16 p-6 bg-gray-900 border border-gray-800 rounded-lg text-left">
              <p className="text-sm text-gray-400 leading-relaxed">
                This assessment is designed to connect reflection with practical chapter-based guidance from the companion. Your responses will help identify which areas of the CARES framework may need the most attention right now.
              </p>
            </div>
          </div>
        </section>
      )}

      {stage === 'questions' && currentQuestionData && (
        <section className="py-20 px-4">
          <div className="max-w-3xl mx-auto">
            <div className="bg-gray-900 border border-gray-800 rounded-lg p-8 md:p-12">
              {/* Progress bar */}
              <div className="mb-8">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-400">
                    Question {currentQuestion + 1} of {QUESTIONS.length}
                  </span>
                  <span className="text-sm text-gray-400">
                    {Math.round(progress)}%
                  </span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-2">
                  <div
                    className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>

              {/* Question */}
              <div className="mb-12">
                <h2 className="text-2xl font-semibold text-white mb-8">
                  {currentQuestionData.text}
                </h2>

                {/* Likert scale */}
                <div className="space-y-3">
                  {LIKERT_OPTIONS.map(option => (
                    <button
                      key={option.value}
                      onClick={() => handleResponse(currentQuestionData.id, option.value)}
                      className={`w-full p-4 rounded-lg border-2 transition-all text-left ${
                        responses[currentQuestionData.id] === option.value
                          ? 'border-blue-600 bg-blue-600/10 text-white'
                          : 'border-gray-700 bg-gray-800/50 text-gray-300 hover:border-gray-600'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-medium">{option.label}</span>
                        <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                          responses[currentQuestionData.id] === option.value
                            ? 'border-blue-600'
                            : 'border-gray-600'
                        }`}>
                          {responses[currentQuestionData.id] === option.value && (
                            <div className="w-3 h-3 rounded-full bg-blue-600" />
                          )}
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Navigation */}
              <div className="flex justify-between">
                <button
                  onClick={handlePrevious}
                  disabled={currentQuestion === 0}
                  className="btn-secondary disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Previous
                </button>
                {isLastQuestion ? (
                  <button
                    onClick={handleSubmit}
                    disabled={!hasResponse}
                    className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Submit Assessment
                  </button>
                ) : (
                  <button
                    onClick={handleNext}
                    disabled={!hasResponse}
                    className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Next
                  </button>
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      {stage === 'results' && results && (
        <section className="py-20 px-4">
          <div className="max-w-5xl mx-auto">
            {/* Results header */}
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-white mb-4">
                Your CARES Leadership Profile
              </h1>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Based on your responses, here's how you're showing up across the five dimensions of change leadership.
              </p>
            </div>

            {/* CARES Profile Scores */}
            <div className="mb-12">
              <h2 className="text-2xl font-semibold text-white mb-6">Your Profile</h2>
              <div className="grid gap-4">
                {Object.entries(results.pillarScores).map(([pillar, score]) => {
                  const percentage = (score / 5) * 100;
                  const isStrongest = pillar === results.strongestArea.pillar;
                  const isGrowth = pillar === results.growthArea.pillar;

                  return (
                    <div key={pillar} className="bg-gray-900 border border-gray-800 rounded-lg p-6">
                      <div className="flex justify-between items-center mb-3">
                        <div className="flex items-center gap-3">
                          <span className="text-2xl font-bold text-blue-400">{pillar}</span>
                          <h3 className="text-lg font-semibold text-white">{getPillarName(pillar)}</h3>
                          {isStrongest && (
                            <span className="px-2 py-1 bg-green-600/20 border border-green-600/30 rounded text-xs text-green-400 font-medium">
                              Strongest
                            </span>
                          )}
                          {isGrowth && (
                            <span className="px-2 py-1 bg-amber-600/20 border border-amber-600/30 rounded text-xs text-amber-400 font-medium">
                              Growth Area
                            </span>
                          )}
                        </div>
                        <span className="text-lg font-semibold text-gray-400">{score.toFixed(1)}/5.0</span>
                      </div>
                      <div className="w-full bg-gray-800 rounded-full h-3">
                        <div
                          className={`h-3 rounded-full transition-all ${
                            isStrongest ? 'bg-green-600' : isGrowth ? 'bg-amber-600' : 'bg-blue-600'
                          }`}
                          style={{ width: `${percentage}%` }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Interpretation */}
            <div className="bg-gray-900 border border-gray-800 rounded-lg p-8 mb-12">
              <h2 className="text-2xl font-semibold text-white mb-4">What This Means</h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  Your strongest area is <strong className="text-blue-400">{getPillarName(results.strongestArea.pillar)}</strong>.
                  This suggests you're already demonstrating strength in this dimension of change leadership.
                </p>
                <p>
                  Your growth area is <strong className="text-amber-400">{getPillarName(results.growthArea.pillar)}</strong>.
                  Focusing here may help you navigate transformation challenges with greater confidence and impact.
                </p>
                {results.growthArea.score < 3 && (
                  <div className="mt-6 p-4 bg-amber-600/10 border border-amber-600/30 rounded-lg">
                    <h3 className="text-sm font-semibold text-amber-400 mb-2">Potential SCARE Signals</h3>
                    <p className="text-sm text-gray-400">
                      Lower scores in {getPillarName(results.growthArea.pillar)} may indicate signs of stress, confusion,
                      or resistance. The recommended chapters below can help address these challenges.
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Recommended Chapter Insights */}
            <div className="mb-12">
              <h2 className="text-2xl font-semibold text-white mb-3">Recommended Chapter Insights</h2>
              <p className="text-gray-400 mb-6">
                Based on your responses, these companion chapters may help you most right now.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                {/* Map recommended chapters based on results.recommendedChapters */}
                {/* This section will later use chapterRefs and chapter-summaries.json */}
                {CHAPTER_RECOMMENDATIONS.map(chapter => (
                  <div key={chapter.id} className="bg-gray-900 border border-gray-800 rounded-lg p-6 flex flex-col">
                    <div className="mb-4">
                      <span className="text-sm font-semibold text-blue-400 uppercase tracking-wide">
                        {chapter.label}
                      </span>
                      <h3 className="text-lg font-semibold text-white mt-2 mb-3">
                        {chapter.title}
                      </h3>
                      <p className="text-sm text-gray-400 leading-relaxed">
                        <strong className="text-gray-300">Why it matters:</strong> {chapter.description}
                      </p>
                    </div>
                    <button className="btn-secondary mt-auto">
                      Explore Chapter Insight
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Next Steps CTAs */}
            <div className="bg-gray-900 border border-gray-800 rounded-lg p-8">
              <p className="text-sm text-gray-400 mb-6 text-center">
                Want more guided support? Continue with the companion tools below.
              </p>
              <div className="grid sm:grid-cols-3 gap-4">
                <Link to="/coach" className="btn-primary text-center">
                  Ask CARES Coach About My Result
                </Link>
                <Link to="/framework" className="btn-secondary text-center">
                  Explore the Framework
                </Link>
                <Link to="/toolkit" className="btn-secondary text-center">
                  Download the Toolkit
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default Assessment;
