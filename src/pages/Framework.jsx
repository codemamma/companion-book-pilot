import { useState } from 'react';
import { caresData } from '../data/caresFramework';

const Framework = () => {
  const [expandedPillar, setExpandedPillar] = useState(null);

  const togglePillar = (id) => {
    setExpandedPillar(expandedPillar === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            The CARES Framework
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Five interconnected pillars that drive successful leadership and transformation.
            Click on each pillar to explore practical guidance and actionable steps.
          </p>
        </div>

        {/* CARES Pillars */}
        <div className="space-y-4">
          {caresData.map((pillar) => (
            <div
              key={pillar.id}
              className={`border-2 rounded-xl overflow-hidden transition-all duration-300 ${
                expandedPillar === pillar.id
                  ? pillar.color
                  : 'bg-white border-gray-200 hover:border-gray-300'
              }`}
            >
              {/* Pillar Header - Always Visible */}
              <button
                onClick={() => togglePillar(pillar.id)}
                className="w-full text-left p-6 flex items-center justify-between hover:bg-opacity-50 transition-colors"
              >
                <div className="flex-1">
                  <h2 className={`text-2xl font-bold mb-2 ${
                    expandedPillar === pillar.id ? pillar.accentColor : 'text-gray-900'
                  }`}>
                    {pillar.title}
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    {pillar.shortDescription}
                  </p>
                </div>
                <div className={`ml-4 transition-transform duration-300 ${
                  expandedPillar === pillar.id ? 'rotate-180' : ''
                }`}>
                  <svg className="w-6 h-6 text-gray-600" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>

              {/* Expanded Content */}
              {expandedPillar === pillar.id && (
                <div className="px-6 pb-6 space-y-6 animate-fadeIn">
                  {/* Why It Matters */}
                  <div className="bg-white bg-opacity-50 rounded-lg p-5 border border-gray-200">
                    <h3 className="font-semibold text-gray-900 mb-2 flex items-center">
                      <span className="mr-2">💡</span>
                      Why It Matters
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {pillar.whyItMatters}
                    </p>
                  </div>

                  {/* Common Challenge */}
                  <div className="bg-white bg-opacity-50 rounded-lg p-5 border border-gray-200">
                    <h3 className="font-semibold text-gray-900 mb-2 flex items-center">
                      <span className="mr-2">⚠️</span>
                      Common Challenge
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {pillar.commonChallenge}
                    </p>
                  </div>

                  {/* Practical Action */}
                  <div className="bg-white bg-opacity-50 rounded-lg p-5 border border-gray-200">
                    <h3 className="font-semibold text-gray-900 mb-2 flex items-center">
                      <span className="mr-2">✓</span>
                      Practical Action
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {pillar.practicalAction}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="mt-12 text-center card bg-white">
          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            Ready to apply the framework?
          </h3>
          <p className="text-gray-600 mb-6">
            Use the Reflection Tool to identify which pillar needs your attention most.
          </p>
          <a href="/reflection" className="btn-primary inline-block">
            Start Your Reflection
          </a>
        </div>
      </div>
    </div>
  );
};

export default Framework;
