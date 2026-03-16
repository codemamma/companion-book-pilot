import { useState } from 'react';

const Toolkit = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    role: '',
    interestType: ''
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // TODO: Integrate with email service, CRM, or database
    // This is a placeholder that shows success state
    console.log('Form submitted:', formData);

    setShowSuccess(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        company: '',
        role: '',
        interestType: ''
      });
      setShowSuccess(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Toolkit & Next Steps
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Take your CARES leadership practice further with resources, workshops, and implementation support.
          </p>
        </div>

        {/* Toolkit Options */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {/* Download Toolkit */}
          <div className="card bg-white">
            <div className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Download Toolkit
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Get practical templates, worksheets, and frameworks to implement CARES in your organization.
            </p>
            <ul className="space-y-2 mb-6 text-sm text-gray-700">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                Transformation Charter Template
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                Stakeholder Alignment Guide
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                RACI Matrix Worksheet
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                Execution Cadence Framework
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                Sustainability Playbook
              </li>
            </ul>
            <div className="text-sm text-gray-500 italic">
              Interest: Download Toolkit
            </div>
          </div>

          {/* Join Workshop */}
          <div className="card bg-white">
            <div className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Join Workshop Waitlist
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Interactive workshops to practice applying the CARES framework to real transformation challenges.
            </p>
            <ul className="space-y-2 mb-6 text-sm text-gray-700">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                Virtual and in-person options
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                Cohort-based learning
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                Case study deep dives
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                Peer learning sessions
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                Expert facilitation
              </li>
            </ul>
            <div className="text-sm text-gray-500 italic">
              Interest: Workshop Waitlist
            </div>
          </div>

          {/* Team Implementation */}
          <div className="card bg-white">
            <div className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Team Implementation Support
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Custom guidance to embed the CARES framework across your leadership team and organization.
            </p>
            <ul className="space-y-2 mb-6 text-sm text-gray-700">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                Leadership team workshops
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                Framework customization
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                Transformation coaching
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                Stakeholder facilitation
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                Ongoing advisory support
              </li>
            </ul>
            <div className="text-sm text-gray-500 italic">
              Interest: Team Implementation
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Get Started
          </h2>

          {showSuccess ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Thank you for your interest!
              </h3>
              <p className="text-gray-600">
                We'll be in touch shortly with next steps.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                  placeholder="John Smith"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                  placeholder="john.smith@company.com"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-semibold text-gray-900 mb-2">
                  Company *
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                  placeholder="Acme Corporation"
                />
              </div>

              <div>
                <label htmlFor="role" className="block text-sm font-semibold text-gray-900 mb-2">
                  Role / Title *
                </label>
                <input
                  type="text"
                  id="role"
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                  placeholder="Chief Information Officer"
                />
              </div>

              <div>
                <label htmlFor="interestType" className="block text-sm font-semibold text-gray-900 mb-2">
                  What are you interested in? *
                </label>
                <select
                  id="interestType"
                  name="interestType"
                  value={formData.interestType}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                >
                  <option value="">Select an option...</option>
                  <option value="toolkit">Download Toolkit</option>
                  <option value="workshop">Join Workshop Waitlist</option>
                  <option value="implementation">Team Implementation Support</option>
                  <option value="all">All of the above</option>
                </select>
              </div>

              <button type="submit" className="w-full btn-primary">
                Submit Request
              </button>

              <p className="text-sm text-gray-500 text-center">
                By submitting this form, you agree to receive communications about CARES Leadership resources.
              </p>
            </form>
          )}

          {/* Integration Note */}
          <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <p className="text-xs text-blue-900">
              <strong>Developer Note:</strong> Form submissions are currently shown as placeholder success states.
              Integrate with your email service provider (e.g., SendGrid, Mailchimp), CRM, or database by updating
              the <code className="bg-blue-100 px-1 rounded">handleSubmit</code> function in <code className="bg-blue-100 px-1 rounded">src/pages/Toolkit.jsx</code>.
            </p>
          </div>
        </div>

        {/* Additional Resources */}
        <div className="mt-12 text-center card bg-white max-w-2xl mx-auto">
          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            Have Questions?
          </h3>
          <p className="text-gray-600 mb-6">
            Not sure which option is right for you? Ask the CARES Coach for personalized guidance.
          </p>
          <a href="/coach" className="btn-secondary inline-block">
            Ask CARES Coach
          </a>
        </div>
      </div>
    </div>
  );
};

export default Toolkit;
