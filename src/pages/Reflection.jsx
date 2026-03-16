import { useState } from 'react';

const Reflection = () => {
  const [formData, setFormData] = useState({
    transformation: '',
    challenge: '',
    stakeholders: '',
    stuck: '',
    weakestPillar: ''
  });
  const [showResults, setShowResults] = useState(false);
  const [results, setResults] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Placeholder logic - analyze responses and provide recommendations
    // TODO: This can be enhanced with more sophisticated analysis or AI integration
    const pillarScores = {
      clarity: 0,
      alignment: 0,
      responsibility: 0,
      execution: 0,
      sustainability: 0
    };

    // Simple keyword-based analysis
    const text = Object.values(formData).join(' ').toLowerCase();

    if (text.includes('vision') || text.includes('direction') || text.includes('purpose') || formData.weakestPillar === 'clarity') {
      pillarScores.clarity += 2;
    }
    if (text.includes('align') || text.includes('stakeholder') || text.includes('silo') || formData.weakestPillar === 'alignment') {
      pillarScores.alignment += 2;
    }
    if (text.includes('accountab') || text.includes('ownership') || text.includes('decision') || formData.weakestPillar === 'responsibility') {
      pillarScores.responsibility += 2;
    }
    if (text.includes('execut') || text.includes('deliver') || text.includes('progress') || formData.weakestPillar === 'execution') {
      pillarScores.execution += 2;
    }
    if (text.includes('sustain') || text.includes('long-term') || text.includes('capability') || formData.weakestPillar === 'sustainability') {
      pillarScores.sustainability += 2;
    }

    // Find the pillar with highest score (most mentioned/relevant)
    const focusArea = Object.keys(pillarScores).reduce((a, b) =>
      pillarScores[a] > pillarScores[b] ? a : b
    );

    const pillarDetails = {
      clarity: {
        title: 'Clarity',
        suggestion: 'Your responses suggest that establishing clear direction and shared understanding should be your priority. Without clarity, alignment and execution efforts may be wasted.',
        nextSteps: [
          'Create a one-page transformation charter defining success, scope, and outcomes',
          'Conduct stakeholder interviews to identify gaps in understanding',
          'Establish clear decision-making criteria for your transformation'
        ],
        toolkitResource: 'Transformation Charter Template'
      },
      alignment: {
        title: 'Alignment',
        suggestion: 'Your challenges indicate that stakeholder alignment is critical. Misaligned teams create friction, duplication, and slow progress even with clear goals.',
        nextSteps: [
          'Map all key stakeholders and their competing priorities',
          'Schedule alignment sessions to identify shared objectives',
          'Create a stakeholder communication plan with clear touchpoints'
        ],
        toolkitResource: 'Stakeholder Alignment Guide'
      },
      responsibility: {
        title: 'Responsibility',
        suggestion: 'Your situation points to accountability gaps. Clear ownership transforms plans into action and prevents critical tasks from falling through the cracks.',
        nextSteps: [
          'Create a RACI matrix for major workstreams and key decisions',
          'Clarify decision-making authority at each level',
          'Establish accountability checkpoints in your execution rhythm'
        ],
        toolkitResource: 'RACI Matrix Template'
      },
      execution: {
        title: 'Execution',
        suggestion: 'Your responses highlight execution challenges. Strong execution discipline bridges the gap between strategy and results through consistent rhythm and accountability.',
        nextSteps: [
          'Establish weekly execution cadence with clear metrics',
          'Identify and remove top 3 blockers slowing progress',
          'Create a decision log to prevent revisiting closed decisions'
        ],
        toolkitResource: 'Execution Cadence Framework'
      },
      sustainability: {
        title: 'Sustainability',
        suggestion: 'Your challenges suggest that building lasting change should be your focus. Without sustainability, initial wins fade and teams revert to old habits.',
        nextSteps: [
          'Identify the 3 critical behaviors that must change permanently',
          'Create reinforcement mechanisms (metrics, recognition, coaching)',
          'Build capability transfer plan to embed new ways of working'
        ],
        toolkitResource: 'Sustainability Playbook'
      }
    };

    setResults({
      focusArea,
      details: pillarDetails[focusArea]
    });
    setShowResults(true);
  };

  const resetForm = () => {
    setFormData({
      transformation: '',
      challenge: '',
      stakeholders: '',
      stuck: '',
      weakestPillar: ''
    });
    setShowResults(false);
    setResults(null);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-3xl mx-auto">
        {!showResults ? (
          <>
            {/* Form Header */}
            <div className="text-center mb-10">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Reflection Tool
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Answer these questions about your current transformation to receive personalized guidance on where to focus.
              </p>
            </div>

            {/* Reflection Form */}
            <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 space-y-6">
              <div>
                <label htmlFor="transformation" className="block text-sm font-semibold text-gray-900 mb-2">
                  What transformation are you leading?
                </label>
                <textarea
                  id="transformation"
                  name="transformation"
                  value={formData.transformation}
                  onChange={handleChange}
                  required
                  rows="3"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                  placeholder="e.g., Digital transformation, cloud migration, agile adoption, organizational restructure..."
                />
              </div>

              <div>
                <label htmlFor="challenge" className="block text-sm font-semibold text-gray-900 mb-2">
                  What is your biggest leadership challenge?
                </label>
                <textarea
                  id="challenge"
                  name="challenge"
                  value={formData.challenge}
                  onChange={handleChange}
                  required
                  rows="3"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                  placeholder="Describe the most pressing challenge you're facing right now..."
                />
              </div>

              <div>
                <label htmlFor="stakeholders" className="block text-sm font-semibold text-gray-900 mb-2">
                  Which stakeholders are hardest to align?
                </label>
                <textarea
                  id="stakeholders"
                  name="stakeholders"
                  value={formData.stakeholders}
                  onChange={handleChange}
                  required
                  rows="3"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                  placeholder="e.g., Executive leadership, business units, technical teams..."
                />
              </div>

              <div>
                <label htmlFor="stuck" className="block text-sm font-semibold text-gray-900 mb-2">
                  What feels most stuck right now?
                </label>
                <textarea
                  id="stuck"
                  name="stuck"
                  value={formData.stuck}
                  onChange={handleChange}
                  required
                  rows="3"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                  placeholder="What's preventing progress or creating the most friction?"
                />
              </div>

              <div>
                <label htmlFor="weakestPillar" className="block text-sm font-semibold text-gray-900 mb-2">
                  Which CARES pillar feels weakest?
                </label>
                <select
                  id="weakestPillar"
                  name="weakestPillar"
                  value={formData.weakestPillar}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                >
                  <option value="">Select a pillar...</option>
                  <option value="clarity">Clarity - Clear vision and direction</option>
                  <option value="alignment">Alignment - Stakeholder coordination</option>
                  <option value="responsibility">Responsibility - Accountability and ownership</option>
                  <option value="execution">Execution - Getting things done</option>
                  <option value="sustainability">Sustainability - Making change last</option>
                </select>
              </div>

              <button type="submit" className="w-full btn-primary">
                Get Your Recommendations
              </button>
            </form>
          </>
        ) : (
          <>
            {/* Results Display */}
            <div className="text-center mb-8">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Your Focus Area
              </h1>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 space-y-8">
              {/* Focus Area */}
              <div className="text-center pb-6 border-b border-gray-200">
                <div className="inline-block px-6 py-3 bg-gray-900 text-white rounded-lg text-2xl font-bold mb-4">
                  {results.details.title}
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {results.details.suggestion}
                </p>
              </div>

              {/* Next Steps */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Your Next 3 Steps
                </h3>
                <div className="space-y-3">
                  {results.details.nextSteps.map((step, index) => (
                    <div key={index} className="flex items-start">
                      <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center font-semibold mr-3">
                        {index + 1}
                      </span>
                      <p className="text-gray-700 leading-relaxed pt-1">{step}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Toolkit Resource */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Recommended Toolkit Resource
                </h3>
                <p className="text-gray-700 mb-4">{results.details.toolkitResource}</p>
                <a href="/toolkit" className="btn-primary inline-block">
                  Access Toolkit
                </a>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-200">
                <button onClick={resetForm} className="btn-secondary flex-1">
                  Take Another Reflection
                </button>
                <a href="/coach" className="btn-primary flex-1 text-center">
                  Ask CARES Coach
                </a>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Reflection;
