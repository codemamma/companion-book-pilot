import { useState } from 'react';

const Coach = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Suggested prompts for users to click
  const suggestedPrompts = [
    'My team is not aligned on priorities',
    'How do I communicate change without resistance?',
    'What should I do when accountability is unclear?'
  ];

  // Placeholder AI response logic
  // TODO: Replace this with actual AI API integration (OpenAI, Anthropic, etc.)
  const generateResponse = async (userMessage) => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Placeholder responses based on keywords
    const lowerMessage = userMessage.toLowerCase();

    if (lowerMessage.includes('align') || lowerMessage.includes('priorities')) {
      return "Alignment challenges often stem from unclear priorities or competing goals. Start by mapping stakeholder objectives and identifying where they conflict. Then facilitate a session to establish shared success criteria. Create a one-page document that everyone agrees defines 'done' for this transformation. Regular alignment checkpoints prevent drift.";
    }

    if (lowerMessage.includes('communicat') || lowerMessage.includes('resistance')) {
      return "Resistance to change is often about fear of loss - status, competence, or control. Address this by: 1) Clearly articulating what stays the same, 2) Involving people in shaping the how, not just announcing the what, 3) Creating early wins that build confidence. Frame change as evolution, not revolution. People support what they help create.";
    }

    if (lowerMessage.includes('accountab') || lowerMessage.includes('ownership')) {
      return "Unclear accountability creates delays and finger-pointing. Use a RACI matrix to explicitly define who is Responsible (does the work), Accountable (owns the outcome), Consulted (provides input), and Informed (stays updated). Make decisions visible and create a decision log. When everyone knows who owns what, execution accelerates.";
    }

    if (lowerMessage.includes('sustain') || lowerMessage.includes('stick')) {
      return "Making change stick requires three elements: 1) Capability building (training, coaching, documentation), 2) Reinforcement mechanisms (updated metrics, recognition, consequences), and 3) System embedding (new processes, tools, governance). Identify the 3 behaviors that must change permanently and design your sustainability plan around those.";
    }

    if (lowerMessage.includes('execution') || lowerMessage.includes('progress')) {
      return "Strong execution requires rhythm and discipline. Establish a weekly cadence focused on: 1) Progress against goals (not activity reports), 2) Blockers that need removal, 3) Decisions that need to be made. Keep meetings action-oriented. Track commitments and follow through. Execution is about doing, not discussing.";
    }

    // Default response
    return "That's an important leadership challenge. The CARES framework can help you navigate this. Consider which pillar is most relevant: Is this a Clarity issue (unclear direction)? An Alignment challenge (stakeholder conflicts)? A Responsibility gap (unclear ownership)? An Execution problem (plans not translating to action)? Or a Sustainability concern (changes not sticking)? Once you identify the pillar, you can apply targeted strategies from the framework.";
  };

  const handleSendMessage = async (messageText) => {
    if (!messageText.trim()) return;

    const userMessage = {
      id: Date.now(),
      text: messageText,
      sender: 'user',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    // Generate AI response
    // TODO: Replace with actual API call
    const responseText = await generateResponse(messageText);

    const aiMessage = {
      id: Date.now() + 1,
      text: responseText,
      sender: 'ai',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, aiMessage]);
    setIsLoading(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSendMessage(inputValue);
  };

  const handlePromptClick = (prompt) => {
    handleSendMessage(prompt);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Ask CARES Coach
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Get personalized guidance on your leadership challenges rooted in the CARES framework.
          </p>
        </div>

        {/* Chat Interface */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          {/* Messages Area */}
          <div className="h-[500px] overflow-y-auto p-6 space-y-4">
            {messages.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center">
                <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Welcome to CARES Coach
                </h3>
                <p className="text-gray-600 mb-6 max-w-md">
                  Ask me about your leadership challenges, and I'll provide guidance based on the CARES framework.
                </p>

                {/* Suggested Prompts */}
                <div className="space-y-2 w-full max-w-md">
                  <p className="text-sm font-medium text-gray-700 mb-3">Try asking:</p>
                  {suggestedPrompts.map((prompt, index) => (
                    <button
                      key={index}
                      onClick={() => handlePromptClick(prompt)}
                      className="w-full text-left px-4 py-3 bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-lg text-sm text-gray-700 transition-colors"
                    >
                      {prompt}
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <>
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[80%] rounded-lg p-4 ${
                        message.sender === 'user'
                          ? 'bg-gray-900 text-white'
                          : 'bg-gray-100 text-gray-900'
                      }`}
                    >
                      <p className="text-sm leading-relaxed">{message.text}</p>
                      <p
                        className={`text-xs mt-2 ${
                          message.sender === 'user' ? 'text-gray-300' : 'text-gray-500'
                        }`}
                      >
                        {message.timestamp}
                      </p>
                    </div>
                  </div>
                ))}

                {isLoading && (
                  <div className="flex justify-start">
                    <div className="bg-gray-100 rounded-lg p-4">
                      <div className="flex space-x-2">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                      </div>
                    </div>
                  </div>
                )}
              </>
            )}
          </div>

          {/* Input Area */}
          <div className="border-t border-gray-200 p-4 bg-gray-50">
            <form onSubmit={handleSubmit} className="flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask about your leadership challenge..."
                disabled={isLoading}
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed"
              />
              <button
                type="submit"
                disabled={isLoading || !inputValue.trim()}
                className="px-6 py-3 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition-colors duration-200 disabled:bg-gray-400 disabled:cursor-not-allowed"
              >
                Send
              </button>
            </form>
          </div>
        </div>

        {/* Integration Notice */}
        <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <p className="text-sm text-blue-900">
            <strong>Note for developers:</strong> This currently uses placeholder responses.
            To integrate with an AI API (OpenAI, Anthropic, etc.), update the <code className="bg-blue-100 px-1 rounded">generateResponse</code> function
            in <code className="bg-blue-100 px-1 rounded">src/pages/Coach.jsx</code> to call your preferred AI service.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Coach;
