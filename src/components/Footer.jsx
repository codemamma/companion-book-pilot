import { authorConfig } from '../data/authorConfig';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-bold mb-2">CARES Leadership Companion</h3>
            <p className="text-gray-400 text-sm mb-4">
              Official companion experience for {authorConfig.book.title}
            </p>
            <p className="text-gray-400 text-sm">
              By {authorConfig.author.name}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Explore</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/" className="text-gray-400 hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="/framework" className="text-gray-400 hover:text-white transition-colors">CARES Framework</a>
              </li>
              <li>
                <a href="/reflection" className="text-gray-400 hover:text-white transition-colors">Reflection Tool</a>
              </li>
              <li>
                <a href="/coach" className="text-gray-400 hover:text-white transition-colors">Ask CARES Coach</a>
              </li>
              <li>
                <a href="/toolkit" className="text-gray-400 hover:text-white transition-colors">Toolkit</a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href={authorConfig.author.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Visit {authorConfig.author.name}'s Website
                </a>
              </li>
              <li>
                <a
                  href={authorConfig.author.linkedInUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Connect on LinkedIn
                </a>
              </li>
              {authorConfig.book.amazonUrl && (
                <li>
                  <a
                    href={authorConfig.book.amazonUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Buy the Book
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
          <p>
            © {authorConfig.companion.copyrightYear} {authorConfig.author.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
