import { Link } from 'react-router-dom';
import { authorConfig } from '../data/authorConfig';

const Landing = () => {
  return (
    <div className="min-h-screen bg-gray-950">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-900 to-gray-950 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 bg-blue-600/10 border border-blue-600/30 rounded-full mb-8">
            <svg className="w-4 h-4 text-blue-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-sm font-medium text-blue-400">{authorConfig.companion.badge}</span>
          </div>

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

      {/* Framework Tools */}
      <section className="py-20 px-4 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-heading text-center mb-12">
            Interactive Tools
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'CARES Framework',
                description: 'Explore each pillar with examples and actionable steps',
                link: '/framework',
                linkText: 'View Framework'
              },
              {
                title: 'Reflection Tool',
                description: 'Analyze your challenges and receive personalized guidance',
                link: '/reflection',
                linkText: 'Start Reflection'
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
