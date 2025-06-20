# Resume Builder

A futuristic and interactive resume builder web application that helps users create professional, modern resumes with advanced features.

## Features

- **Interactive UI**: Modern, responsive interface with animations and transitions
- **Multiple Templates**: Choose from various professionally designed resume templates
- **Step-by-Step Builder**: Easy-to-use wizard interface for creating resumes
- **Real-time Preview**: See your resume take shape as you enter information
- **Export Options**: Download your resume as PDF or share online
- **AI-Powered Suggestions**: Get intelligent content recommendations based on your field and experience
- **Interactive Elements**: Add skill bars, interactive portfolios, and more to make your resume stand out

## Tech Stack

- **Frontend**: Next.js, React, TypeScript
- **Styling**: Tailwind CSS, Framer Motion for animations
- **PDF Generation**: React-PDF, html-to-image, jspdf
- **State Management**: React Context API
- **Storage**: Local Storage (with future plans for cloud storage)

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/sreevarshan-xenoz/Resume-builder.git
cd Resume-builder
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Run the development server
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
├── public/
│   └── templates/       # Template preview images
├── src/
│   ├── app/             # Next.js App Router pages
│   ├── components/      # Reusable React components
│   ├── lib/             # Library code and third-party integrations
│   ├── styles/          # Global styles and Tailwind config
│   ├── types/           # TypeScript type definitions
│   └── utils/           # Utility functions
├── package.json
├── tailwind.config.js
└── tsconfig.json
```

## Roadmap

- [ ] Add more resume templates
- [ ] Implement AI-powered content suggestions
- [ ] Add cloud storage for saving resumes
- [ ] Enable sharing and collaboration features
- [ ] Add ATS optimization tools
- [ ] Implement analytics to track resume performance

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Design inspiration from various modern web applications
- Icons from [Heroicons](https://heroicons.com/)
