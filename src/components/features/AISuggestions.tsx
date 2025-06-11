import React, { useState } from 'react';
import Button from '../ui/Button';
import Textarea from '../ui/Textarea';

interface AISuggestionsProps {
  section: 'summary' | 'experience' | 'skills';
  initialContent: string;
  onApplySuggestion: (suggestion: string) => void;
}

const AISuggestions: React.FC<AISuggestionsProps> = ({
  section,
  initialContent,
  onApplySuggestion,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [suggestion, setSuggestion] = useState('');
  const [error, setError] = useState('');

  const generateSuggestion = () => {
    setIsLoading(true);
    setError('');
    
    // Simulate AI suggestion generation
    setTimeout(() => {
      setIsLoading(false);
      
      // Mock AI responses based on section
      if (section === 'summary') {
        setSuggestion(
          `Highly motivated and detail-oriented professional with ${Math.floor(Math.random() * 10) + 1} years of experience in the field. Proven track record of delivering high-quality results through effective problem-solving and team collaboration. Seeking to leverage my skills and expertise to drive innovation and growth in a challenging role.`
        );
      } else if (section === 'experience') {
        setSuggestion(
          `• Led cross-functional team of 5 members to deliver project ahead of schedule\n• Implemented process improvements resulting in 30% efficiency gain\n• Collaborated with stakeholders to define requirements and ensure alignment with business goals\n• Mentored junior team members, improving team performance by 25%`
        );
      } else if (section === 'skills') {
        setSuggestion(
          `• Project Management\n• Team Leadership\n• Strategic Planning\n• Problem Solving\n• Data Analysis\n• Communication\n• Agile Methodologies\n• Risk Management`
        );
      }
    }, 1500);
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200">
      <h3 className="text-lg font-semibold mb-2">AI Enhancement for {section.charAt(0).toUpperCase() + section.slice(1)}</h3>
      <p className="text-sm text-gray-600 mb-4">
        Get AI-powered suggestions to enhance your resume content.
      </p>
      
      <div className="space-y-4">
        <div>
          <p className="text-sm font-medium mb-1">Current Content:</p>
          <div className="bg-gray-50 p-3 rounded border border-gray-200 text-sm">
            {initialContent || <span className="text-gray-400 italic">No content provided</span>}
          </div>
        </div>
        
        <div className="flex justify-center">
          <Button 
            onClick={generateSuggestion}
            disabled={isLoading}
            variant="primary"
            className="w-full"
          >
            {isLoading ? 'Generating...' : 'Generate AI Suggestion'}
          </Button>
        </div>
        
        {error && (
          <div className="text-red-500 text-sm p-2 bg-red-50 rounded">
            {error}
          </div>
        )}
        
        {suggestion && (
          <div className="space-y-2">
            <p className="text-sm font-medium">AI Suggestion:</p>
            <Textarea
              value={suggestion}
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setSuggestion(e.target.value)}
              className="min-h-[120px]"
            />
            <div className="flex space-x-2">
              <Button
                onClick={() => onApplySuggestion(suggestion)}
                variant="secondary"
                className="w-full"
              >
                Apply Suggestion
              </Button>
              <Button
                onClick={() => setSuggestion('')}
                variant="outline"
              >
                Clear
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AISuggestions; 