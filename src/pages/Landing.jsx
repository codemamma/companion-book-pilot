import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Bring the CARES framework to life
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-10 leading-relaxed">
            An interactive companion for leaders navigating transformation, communication, and team alignment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/framework" className="btn-primary text-center">
              Explore the Framework
            </Link>
            <Link to="/toolkit" className="btn-secondary text-center">
              Get the Toolkit
            </Link>
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-heading text-center">Who this is for</h2>
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
              <div key={index} className="card">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What You Can Do Here */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-heading text-center">What you can do here</h2>
          <p className="section-subheading text-center max-w-3xl mx-auto">
            Interactive tools to help you apply the CARES framework to your leadership challenges
          </p>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {[
              {
                title: 'Explore the Framework',
                description: 'Deep dive into each pillar of CARES with practical examples, common challenges, and actionable steps you can implement immediately.',
                link: '/framework',
                linkText: 'View Framework'
              },
              {
                title: 'Reflect on Your Challenges',
                description: 'Use our reflection tool to analyze your current transformation, identify gaps, and receive personalized recommendations for your situation.',
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

      {/* Why Interactive Leadership Tools Work */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-heading text-center">Why interactive leadership tools work</h2>
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            {[
              {
                title: 'Application Over Theory',
                description: 'Reading about leadership is not enough. Interactive tools help you apply concepts to your specific context, making frameworks actionable rather than abstract.'
              },
              {
                title: 'Personalized Insights',
                description: 'Generic advice rarely fits your unique situation. By reflecting on your specific challenges, you receive guidance tailored to your transformation context.'
              },
              {
                title: 'Faster Learning Cycles',
                description: 'Interactive engagement accelerates understanding. Testing ideas, receiving feedback, and iterating in real-time helps you learn and adapt more quickly.'
              },
              {
                title: 'Shared Language',
                description: 'Using a common framework creates alignment within your team. The CARES model provides a shared vocabulary for discussing and solving leadership challenges.'
              }
            ].map((item, index) => (
              <div key={index} className="space-y-3">
                <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to transform your leadership approach?
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
