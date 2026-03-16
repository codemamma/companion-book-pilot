import { Link } from 'react-router-dom';
import { authorConfig } from '../data/authorConfig';

const Landing = () => {
  return (
    <div className="min-h-screen bg-gray-950">
      {/* Hero Section - Two Column Layout */}
      <section className="bg-gradient-to-b from-gray-900 to-gray-950 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Official Companion Badge */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center px-4 py-2 bg-blue-600/10 border border-blue-600/30 rounded-full">
              <svg className="w-4 h-4 text-blue-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-medium text-blue-400">{authorConfig.companion.badge}</span>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
                Bring the ideas of {authorConfig.book.title} into action
              </h1>
              <p className="text-lg md:text-xl text-gray-300 mb-6 leading-relaxed">
                An interactive leadership companion for applying the CARES framework in digital transformation, communication, and team alignment.
              </p>
              <p className="text-sm text-gray-400 font-medium mb-8">
                By {authorConfig.author.name}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <Link to="/framework" className="btn-primary text-center">
                  Explore the CARES Framework
                </Link>
                <a
                  href={authorConfig.author.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary text-center"
                >
                  Visit Saby's Website
                </a>
              </div>
              <p className="text-sm text-gray-500 italic">
                Built for CIOs, transformation leaders, and teams navigating change.
              </p>
            </div>

            {/* Right Column - Book Cover */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="bg-gray-800 rounded-2xl shadow-2xl p-8 max-w-sm border border-gray-700">
                  <div className="bg-gray-700 aspect-[3/4] rounded-lg flex items-center justify-center">
                    <div className="text-center p-8">
                      <div className="text-6xl mb-4">📖</div>
                      <p className="text-white font-semibold text-lg">{authorConfig.book.title}</p>
                      <p className="text-gray-300 text-sm mt-2">{authorConfig.book.subtitle}</p>
                      <p className="text-xs text-gray-500 mt-4">Replace with actual book cover at: {authorConfig.book.coverUrl}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Companion Relationship Section */}
      <section className="py-12 px-4 bg-gray-900 border-y border-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-300 mb-6 leading-relaxed">
            {authorConfig.companion.description}
          </p>
          <div className="flex items-center justify-center gap-4 text-sm text-gray-400">
            <span className="font-medium">Read the Book</span>
            <span>→</span>
            <span className="font-medium">Explore the Companion</span>
            <span>→</span>
            <span className="font-medium">Apply the Framework</span>
          </div>
          <div className="mt-6 flex justify-center gap-4">
            <a
              href={authorConfig.author.bookPageUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-blue-400 hover:text-blue-300 underline"
            >
              View the Book Page
            </a>
            <span className="text-gray-600">|</span>
            <a
              href={authorConfig.author.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-blue-400 hover:text-blue-300 underline"
            >
              Back to {authorConfig.author.name}'s Website
            </a>
          </div>
        </div>
      </section>

      {/* From SCARE to CARES Section */}
      <section className="py-20 px-4 bg-gray-950">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="section-heading mb-4">From SCARE to CARES</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              The shift from reactive chaos to intentional, people-first leadership
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* SCARE Column */}
            <div className="bg-red-950/20 border border-red-900/30 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-red-400 mb-6 text-center">SCARE</h3>
              <div className="space-y-4">
                {[
                  { term: 'Stress', description: 'Overwhelmed by constant pressure and change' },
                  { term: 'Confusion', description: 'Unclear priorities and mixed messages' },
                  { term: 'Anxiety', description: 'Fear of failure and unknown outcomes' },
                  { term: 'Resistance', description: 'Pushback and lack of buy-in' },
                  { term: 'Ego', description: 'Defensive reactions and blame' }
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>
                      <p className="font-semibold text-red-300">{item.term}</p>
                      <p className="text-sm text-gray-400">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CARES Column */}
            <div className="bg-blue-950/20 border border-blue-900/30 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-blue-400 mb-6 text-center">CARES</h3>
              <div className="space-y-4">
                {[
                  { term: 'Communicate', description: 'Clearly and consistently share context' },
                  { term: 'Adjust', description: 'Adapt when conditions change' },
                  { term: 'Relate', description: 'Build strong working relationships' },
                  { term: 'Empower', description: 'Give people ownership and trust' },
                  { term: 'Stay calm', description: 'Lead with composure under pressure' }
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>
                      <p className="font-semibold text-blue-300">{item.term}</p>
                      <p className="text-sm text-gray-400">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link to="/framework" className="btn-primary inline-block">
              Explore the CARES Framework
            </Link>
          </div>
        </div>
      </section>

      {/* Why This Book Matters Section */}
      <section className="py-20 px-4 bg-gray-900">
        <div className="max-w-5xl mx-auto">
          <h2 className="section-heading text-center mb-12">{authorConfig.whyItMatters.title}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {authorConfig.whyItMatters.points.map((point, index) => (
              <div key={index} className="card">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-white">{index + 1}</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{point.title}</h3>
                <p className="text-gray-400 leading-relaxed">{point.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About the Book Section */}
      <section className="py-20 px-4 bg-gray-950">
        <div className="max-w-5xl mx-auto">
          <h2 className="section-heading text-center mb-12">About the Book</h2>
          <div className="grid md:grid-cols-3 gap-8 items-start">
            {/* Book Cover Thumbnail */}
            <div className="flex justify-center">
              <div className="bg-gray-800 rounded-xl shadow-lg p-6 max-w-xs w-full border border-gray-700">
                <div className="bg-gray-700 aspect-[3/4] rounded-lg flex items-center justify-center mb-4">
                  <div className="text-4xl">📖</div>
                </div>
                <h3 className="font-bold text-white mb-1">{authorConfig.book.title}</h3>
                <p className="text-sm text-gray-400 mb-4">{authorConfig.book.subtitle}</p>
                {authorConfig.book.amazonUrl && (
                  <a
                    href={authorConfig.book.amazonUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700"
                  >
                    Buy on Amazon
                  </a>
                )}
              </div>
            </div>

            {/* Book Details */}
            <div className="md:col-span-2">
              <p className="text-gray-300 leading-relaxed mb-6 text-lg">
                {authorConfig.book.summary}
              </p>
              <h4 className="font-semibold text-white mb-4">What Readers Will Gain:</h4>
              <ul className="space-y-3">
                {authorConfig.book.keyTakeaways.map((takeaway, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-300">{takeaway}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* About the Author Section */}
      <section className="py-20 px-4 bg-gray-900">
        <div className="max-w-5xl mx-auto">
          <h2 className="section-heading text-center mb-12">About {authorConfig.author.name}</h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-gray-300 leading-relaxed mb-6 text-lg">
              {authorConfig.author.bio}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
      </section>

      {/* Early Praise Section */}
      <section className="py-20 px-4 bg-gray-950">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-heading text-center mb-12">Early Praise</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {authorConfig.testimonials.map((testimonial, index) => (
              <div key={index} className="card">
                <svg className="w-8 h-8 text-gray-700 mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <blockquote className="text-gray-300 leading-relaxed mb-4">
                  "{testimonial.quote}"
                </blockquote>
                <div className="text-sm">
                  <p className="font-semibold text-white">{testimonial.attribution}</p>
                  <p className="text-gray-500">{testimonial.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Framework Preview Section */}
      <section className="py-20 px-4 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-heading text-center">
            Explore the CARES Framework from {authorConfig.book.title}
          </h2>
          <p className="text-center text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed">
            Interactive tools to help you apply each pillar of the framework to your leadership challenges
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Explore the Framework',
                description: 'Deep dive into each pillar of CARES with practical examples, common challenges, and actionable steps.',
                link: '/framework',
                linkText: 'View Framework'
              },
              {
                title: 'Reflect on Your Challenges',
                description: 'Use the reflection tool to analyze your transformation, identify gaps, and receive personalized guidance.',
                link: '/reflection',
                linkText: 'Start Reflection'
              },
              {
                title: 'Get Expert Guidance',
                description: 'Ask the CARES Coach specific questions about your leadership challenges rooted in the framework.',
                link: '/coach',
                linkText: 'Ask a Question'
              }
            ].map((item, index) => (
              <div key={index} className="card">
                <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
                <p className="text-gray-400 mb-6 leading-relaxed">{item.description}</p>
                <Link to={item.link} className="inline-block text-blue-400 font-medium hover:text-blue-300">
                  {item.linkText} →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="py-20 px-4 bg-gray-950">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-heading text-center">Who this companion is for</h2>
          <p className="section-subheading text-center max-w-3xl mx-auto">
            CIOs, CISOs, program leaders, executives, and professionals in public sector and higher education navigating digital transformation
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {[
              {
                title: 'CIOs & CISOs',
                description: 'Leading enterprise-wide digital transformation and security initiatives'
              },
              {
                title: 'Program Managers',
                description: 'Coordinating complex programs with multiple stakeholders'
              },
              {
                title: 'Public Sector Leaders',
                description: 'Navigating digital transformation in government organizations'
              },
              {
                title: 'Higher Education Executives',
                description: 'Driving change in colleges and universities'
              }
            ].map((item, index) => (
              <div key={index} className="card">
                <h3 className="text-lg font-semibold text-white mb-3">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Toolkit Section */}
      <section className="py-20 px-4 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Practical Resources
          </h2>
          <p className="text-lg text-gray-400 mb-8 leading-relaxed">
            Practical tools inspired by the ideas in {authorConfig.book.title}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/toolkit" className="btn-primary">
              Access Toolkit
            </Link>
            <a
              href={authorConfig.author.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              Visit Website
            </a>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 bg-gray-950">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Ready to lead transformation with clarity and calm?
          </h2>
          <p className="text-xl text-gray-400 mb-10 leading-relaxed">
            Start with the framework or dive into the reflection tool to identify your biggest opportunity for impact.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/framework" className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200">
              Explore CARES Framework
            </Link>
            <Link to="/reflection" className="px-6 py-3 bg-transparent text-white border-2 border-gray-700 rounded-lg font-medium hover:bg-gray-800 transition-colors duration-200">
              Take the Reflection Tool
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;
