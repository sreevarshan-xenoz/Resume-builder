import React from 'react';

interface TextareaProps {
  id: string;
  label?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  error?: string;
  required?: boolean;
  disabled?: boolean;
  className?: string;
  helperText?: string;
  rows?: number;
  maxLength?: number;
  onBlur?: (e: React.FocusEvent<HTMLTextAreaElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLTextAreaElement>) => void;
  name?: string;
}

const Textarea: React.FC<TextareaProps> = ({
  id,
  label,
  placeholder,
  value,
  onChange,
  error,
  required = false,
  disabled = false,
  className = '',
  helperText,
  rows = 4,
  maxLength,
  onBlur,
  onFocus,
  name,
}) => {
  const textareaClasses = `
    w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 transition-colors
    ${error ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-primary-500 focus:border-primary-500'}
    ${disabled ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-white'}
    ${className}
  `;

  return (
    <div className="mb-4">
      {label && (
        <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      
      <textarea
        id={id}
        name={name || id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
        disabled={disabled}
        required={required}
        className={textareaClasses}
        rows={rows}
        maxLength={maxLength}
      />
      
      {maxLength && value && (
        <div className="mt-1 text-xs text-gray-500 text-right">
          {value.length}/{maxLength}
        </div>
      )}
      
      {error && (
        <p className="mt-1 text-sm text-red-600">{error}</p>
      )}
      
      {helperText && !error && (
        <p className="mt-1 text-sm text-gray-500">{helperText}</p>
      )}
    </div>
  );
};

export default Textarea; 