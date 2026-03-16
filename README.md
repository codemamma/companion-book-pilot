# CARES Leadership Companion

An interactive web application for leaders to engage with the CARES framework and apply it to real workplace challenges.

## Features

- **Landing Page**: Professional introduction to the CARES framework with clear value proposition
- **Framework Explorer**: Interactive cards for each CARES pillar (Clarity, Alignment, Responsibility, Execution, Sustainability)
- **Reflection Tool**: Guided questionnaire that provides personalized recommendations
- **CARES Coach**: Chat-style interface for leadership guidance (ready for AI integration)
- **Toolkit Page**: Resource hub with forms for toolkit downloads, workshops, and implementation support

## Tech Stack

- React 19
- Vite 8
- Tailwind CSS 4
- React Router 7

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` folder, ready to be hosted on your website.

## Customization Guide

### 1. Update Framework Content

Edit `src/data/caresFramework.js` to customize the five CARES pillars:
- Change descriptions, challenges, and practical actions
- Modify the color schemes for each pillar
- Add or remove pillars as needed

### 2. Configure the Reflection Tool

Edit `src/pages/Reflection.jsx`:
- Modify form questions to match your framework
- Update the analysis logic in the `handleSubmit` function
- Customize the recommendations and next steps

### 3. Integrate AI for CARES Coach

Edit `src/pages/Coach.jsx`:
- Replace the placeholder `generateResponse` function with your AI API
- Supported AI services: OpenAI, Anthropic Claude, or any custom AI endpoint
- Update suggested prompts to match your leadership framework

Example integration:
```javascript
const generateResponse = async (userMessage) => {
  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer YOUR_API_KEY`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      model: 'gpt-4',
      messages: [{ role: 'user', content: userMessage }]
    })
  });
  const data = await response.json();
  return data.choices[0].message.content;
};
```

### 4. Connect Forms to Your Backend

Edit `src/pages/Toolkit.jsx`:
- Integrate form submissions with your email service (e.g., SendGrid, Mailchimp)
- Connect to your CRM or database
- Update the download links for toolkit resources

Example:
```javascript
const handleSubmit = async (e) => {
  e.preventDefault();

  await fetch('/api/submit-form', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
  });

  setShowSuccess(true);
};
```

### 5. Customize Styling

The design uses Tailwind CSS for easy customization:
- Update colors in `tailwind.config.js`
- Modify button styles and cards in `src/index.css`
- Adjust responsive breakpoints as needed

## Project Structure

```
src/
├── components/
│   └── Navigation.jsx       # Main navigation component
├── pages/
│   ├── Landing.jsx          # Home page
│   ├── Framework.jsx        # CARES framework explorer
│   ├── Reflection.jsx       # Reflection tool with form
│   ├── Coach.jsx            # AI coach chat interface
│   └── Toolkit.jsx          # Resources and forms
├── data/
│   └── caresFramework.js    # Framework content data
├── App.jsx                  # Main app with routing
├── main.jsx                 # Entry point
└── index.css                # Global styles
```

## Deployment

This app can be hosted on any static hosting service:

### Option 1: Netlify
1. Connect your GitHub repository
2. Build command: `npm run build`
3. Publish directory: `dist`

### Option 2: Vercel
1. Import your project
2. Vite will be detected automatically
3. Deploy

### Option 3: Your Existing Website
1. Run `npm run build`
2. Upload the contents of the `dist` folder to your web server
3. Configure your web server to handle client-side routing

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile responsive design
- Optimized for both desktop and tablet viewing

## License

Proprietary - All rights reserved

## Support

For questions or customization help, refer to the inline code comments which indicate where to make changes for common customization scenarios.
