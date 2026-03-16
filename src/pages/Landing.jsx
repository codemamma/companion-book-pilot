import { Link } from 'react-router-dom';
import { authorConfig } from '../data/authorConfig';

const Landing = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section - Two Column Layout */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight">
                Bring the ideas of {authorConfig.book.title} into action
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-6 leading-relaxed">
                An interactive companion built to help leaders apply the CARES framework in transformation, communication, and team alignment.
              </p>
              <p className="text-sm text-gray-700 font-medium mb-8">
                By {authorConfig.author.name}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <Link to="/framework" className="btn-primary text-center">
                  Explore the Framework
                </Link>
                <a
                  href={authorConfig.author.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary text-center"
                >
                  Visit Author Website
                </a>
              </div>
              <p className="text-sm text-gray-600 italic">
                {authorConfig.companion.tagline}
              </p>
            </div>

            {/* Right Column - Book Cover */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-sm">
                  <div className="bg-gray-200 aspect-[3/4] rounded-lg flex items-center justify-center">
                    <div className="text-center p-8">
                      <div className="text-6xl mb-4">📖</div>
                      <p className="text-gray-600 font-semibold">{authorConfig.book.title}</p>
                      <p className="text-gray-500 text-sm mt-2">{authorConfig.book.subtitle}</p>
                      <p className="text-xs text-gray-400 mt-4">Replace with actual book cover at: {authorConfig.book.coverUrl}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Companion Relationship Section */}
      <section className="py-12 px-4 bg-white border-y border-gray-200">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-700 mb-6 leading-relaxed">
            {authorConfig.companion.description}
          </p>
          <div className="flex items-center justify-center gap-4 text-sm text-gray-600">
            <span className="font-medium">Read the Book</span>
            <span>→</span>
            <span className="font-medium">Explore the Companion</span>
            <span>→</span>
            <span className="font-medium">Apply the Framework</span>
          </div>
          <div className="mt-6">
            <a
              href={authorConfig.author.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-600 hover:text-gray-900 underline"
            >
              Back to {authorConfig.author.name}'s Website
            </a>
          </div>
        </div>
      </section>

      {/* About the Book Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="section-heading text-center">About the Book</h2>
          <div className="grid md:grid-cols-3 gap-8 items-start mt-12">
            {/* Book Cover Thumbnail */}
            <div className="flex justify-center">
              <div className="bg-white rounded-xl shadow-lg p-6 max-w-xs w-full">
                <div className="bg-gray-200 aspect-[3/4] rounded-lg flex items-center justify-center mb-4">
                  <div className="text-4xl">📖</div>
                </div>
                <h3 className="font-bold text-gray-900 mb-1">{authorConfig.book.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{authorConfig.book.subtitle}</p>
                {authorConfig.book.amazonUrl && (
                  <a
                    href={authorConfig.book.amazonUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center px-4 py-2 bg-gray-900 text-white rounded-lg text-sm font-medium hover:bg-gray-800"
                  >
                    Buy on Amazon
                  </a>
                )}
              </div>
            </div>

            {/* Book Details */}
            <div className="md:col-span-2">
              <p className="text-gray-700 leading-relaxed mb-6">
                {authorConfig.book.summary}
              </p>
              <h4 className="font-semibold text-gray-900 mb-3">What You'll Gain:</h4>
              <ul className="space-y-3">
                {authorConfig.book.keyTakeaways.map((takeaway, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="w-5 h-5 text-gray-900 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{takeaway}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Framework Preview Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-heading text-center">
            Explore the CARES Framework from {authorConfig.book.title}
          </h2>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
            Interactive tools to help you apply each pillar of the framework to your leadership challenges
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Explore the Framework',
                description: 'Deep dive into each pillar of CARES with practical examples, common challenges, and actionable steps you can implement immediately.',
                link: '/framework',
                linkText: 'View Framework'
              },
              {
                title: 'Reflect on Your Challenges',
                description: 'Use the reflection tool to analyze your current transformation, identify gaps, and receive personalized recommendations.',
                link: '/reflection',
                linkText: 'Start Reflection'
              },
              {
                title: 'Get Expert Guidance',
                description: 'Ask the CARES Coach specific questions about your leadership challenges and receive guidance rooted in the framework.',
                link: '/coach',
                linkText: 'Ask a Question'
              }
            ].map((item, index) => (
              <div key={index} className="card bg-white">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{item.description}</p>
                <Link to={item.link} className="inline-block text-gray-900 font-medium hover:underline">
                  {item.linkText} →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote/Testimonial Section */}
      <section className="py-20 px-4 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <svg className="w-12 h-12 text-gray-600 mx-auto mb-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
          <blockquote className="text-xl md:text-2xl font-medium mb-6 leading-relaxed">
            {authorConfig.testimonial.quote}
          </blockquote>
          <p className="text-gray-400">
            — {authorConfig.testimonial.attribution}
          </p>
        </div>
      </section>

      {/* About the Author Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="section-heading text-center mb-12">About the Author</h2>
          <div className="grid md:grid-cols-3 gap-8 items-center">
            {/* Author Headshot */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-64 h-64 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                  <div className="text-center p-8">
                    <div className="text-6xl mb-2">👤</div>
                    <p className="text-xs text-gray-500">Replace with headshot at: {authorConfig.author.headshotUrl}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Author Bio */}
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{authorConfig.author.name}</h3>
              <p className="text-gray-600 mb-4">{authorConfig.author.title}</p>
              <p className="text-gray-700 leading-relaxed mb-6">
                {authorConfig.author.bio}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={authorConfig.author.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-center"
                >
                  Visit Website
                </a>
                <a
                  href={authorConfig.author.linkedInUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary text-center"
                >
                  Connect on LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-heading text-center">Who this companion is for</h2>
          <p className="section-subheading text-center max-w-3xl mx-auto">
            Leaders who are driving change and need practical frameworks to navigate complexity
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {[
              {
                title: 'CIOs & Technology Leaders',
                description: 'Leading digital transformation and modernization initiatives across the enterprise'
              },
              {
                title: 'Program Managers',
                description: 'Coordinating complex programs with multiple stakeholders and competing priorities'
              },
              {
                title: 'Transformation Leaders',
                description: 'Driving organizational change and building new capabilities at scale'
              },
              {
                title: 'Senior Executives',
                description: 'Navigating strategic initiatives while building alignment across leadership teams'
              }
            ].map((item, index) => (
              <div key={index} className="card bg-white">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Toolkit Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-gray-900 rounded-xl flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Practical Resources
          </h2>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Practical tools inspired by the ideas in {authorConfig.book.title}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/toolkit" className="btn-primary">
              Access Toolkit
            </Link>
            <Link to="/framework" className="btn-secondary">
              Explore Framework
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to apply the CARES framework?
          </h2>
          <p className="text-xl text-gray-300 mb-10 leading-relaxed">
            Start with the framework or dive into the reflection tool to identify your biggest opportunity for impact.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/framework" className="px-6 py-3 bg-white text-gray-900 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200">
              Explore CARES Framework
            </Link>
            <Link to="/reflection" className="px-6 py-3 bg-transparent text-white border-2 border-white rounded-lg font-medium hover:bg-white hover:text-gray-900 transition-colors duration-200">
              Take the Reflection Tool
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;
