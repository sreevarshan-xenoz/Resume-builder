import React from 'react';
import Button from '../ui/Button';

interface PDFExportProps {
  onExport: () => void;
  isLoading?: boolean;
}

const PDFExport: React.FC<PDFExportProps> = ({ onExport, isLoading = false }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200 mb-6">
      <h3 className="text-lg font-semibold mb-2">Export Your Resume</h3>
      <p className="text-sm text-gray-600 mb-4">
        Download your resume in PDF format for sharing with potential employers.
      </p>
      
      <div className="space-y-4">
        <div className="flex justify-center">
          <Button 
            onClick={onExport}
            disabled={isLoading}
            variant="primary"
            className="w-full"
          >
            {isLoading ? 'Generating PDF...' : 'Download as PDF'}
          </Button>
        </div>
        
        <div className="text-xs text-gray-500 text-center">
          <p>Your resume will be downloaded in high-quality PDF format.</p>
          <p>All formatting and styling will be preserved.</p>
        </div>
      </div>
    </div>
  );
};

export default PDFExport;
