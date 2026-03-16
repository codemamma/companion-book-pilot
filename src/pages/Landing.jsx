import { Link } from 'react-router-dom';
import { authorConfig } from '../data/authorConfig';

const Landing = () => {
  return (
    <div className="min-h-screen bg-gray-950">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-900 to-gray-950 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            {authorConfig.book.title}
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-8">
            {authorConfig.book.subtitle}
          </p>
          <p className="text-gray-300 mb-12 text-lg max-w-2xl mx-auto leading-relaxed">
            An interactive companion to apply the CARES framework to your leadership challenges
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link to="/framework" className="btn-primary text-center">
              Explore the Framework
            </Link>
            <a
              href={authorConfig.author.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary text-center"
            >
              Back to Website
            </a>
          </div>
        </div>
      </section>

      {/* SCARE vs CARES Comparison */}
      <section className="py-16 px-4 bg-gray-950">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* SCARE Column */}
            <div className="border border-gray-800 rounded-lg p-8 bg-gray-900/30">
              <h2 className="text-3xl font-bold text-gray-600 mb-8 tracking-wider">SCARE</h2>
              <div className="space-y-5">
                {[
                  { letter: 'S', term: 'Stress', description: 'Overwhelmed by constant pressure and change' },
                  { letter: 'C', term: 'Confusion', description: 'Unclear priorities and mixed messages' },
                  { letter: 'A', term: 'Anxiety', description: 'Fear of failure and unknown outcomes' },
                  { letter: 'R', term: 'Resistance', description: 'Pushback and lack of buy-in' },
                  { letter: 'E', term: 'Ego', description: 'Defensive reactions and blame' }
                ].map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <span className="text-2xl font-bold text-gray-600 w-8 flex-shrink-0">{item.letter}</span>
                    <div>
                      <h3 className="text-base font-semibold text-gray-400 mb-1">{item.term}</h3>
                      <p className="text-sm text-gray-500 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CARES Column */}
            <div className="border border-blue-900/50 rounded-lg p-8 bg-blue-950/20">
              <h2 className="text-3xl font-bold text-blue-400 mb-8 tracking-wider">CARES</h2>
              <div className="space-y-5">
                {[
                  { letter: 'C', term: 'Communicate', description: 'Clearly and consistently share context' },
                  { letter: 'A', term: 'Adjust', description: 'Adapt when conditions change' },
                  { letter: 'R', term: 'Relate', description: 'Build strong working relationships' },
                  { letter: 'E', term: 'Empower', description: 'Give people ownership and trust' },
                  { letter: 'S', term: 'Stay calm', description: 'Lead with composure under pressure' }
                ].map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <span className="text-2xl font-bold text-blue-400 w-8 flex-shrink-0">{item.letter}</span>
                    <div>
                      <h3 className="text-base font-semibold text-gray-200 mb-1">{item.term}</h3>
                      <p className="text-sm text-gray-400 leading-relaxed">{item.description}</p>
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

      {/* Framework Tools */}
      <section className="py-20 px-4 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-heading text-center mb-12">
            Interactive Tools
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'SCARE to CARES Diagnostic',
                description: 'Identify your transformation friction and discover your focus area',
                link: '/diagnostic',
                linkText: 'Start Diagnostic'
              },
              {
                title: 'CARES Framework',
                description: 'Explore each pillar with examples and actionable steps',
                link: '/framework',
                linkText: 'View Framework'
              },
              {
                title: 'Ask the Coach',
                description: 'Get expert guidance on your leadership questions',
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

      {/* Back to Website CTA */}
      <section className="py-16 px-4 bg-gray-950 border-y border-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-400 mb-6">
            Learn more about {authorConfig.book.title}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={authorConfig.author.bookPageUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 underline"
            >
              View the Book Page
            </a>
            <span className="text-gray-600 hidden sm:inline">|</span>
            <a
              href={authorConfig.author.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 underline"
            >
              Visit {authorConfig.author.name}'s Website
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;
