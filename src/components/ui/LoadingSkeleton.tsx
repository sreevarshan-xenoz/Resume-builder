import React from 'react';
import { motion } from 'framer-motion';

interface SkeletonProps {
  className?: string;
  width?: string | number;
  height?: string | number;
  rounded?: boolean;
}

const Skeleton: React.FC<SkeletonProps> = ({ 
  className = '', 
  width = '100%', 
  height = '1rem', 
  rounded = false 
}) => {
  return (
    <motion.div
      className={`bg-gray-200 ${rounded ? 'rounded-full' : 'rounded'} ${className}`}
      style={{ width, height }}
      animate={{
        opacity: [0.6, 1, 0.6],
      }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
  );
};

// Resume Section Skeletons
export const ResumePreviewSkeleton: React.FC = () => {
  return (
    <div className="bg-white shadow-xl rounded-lg p-8 max-w-4xl mx-auto">
      {/* Header Skeleton */}
      <div className="border-b-2 border-gray-200 pb-6 mb-8">
        <Skeleton width="60%" height="2.5rem" className="mb-2" />
        <Skeleton width="40%" height="1.5rem" className="mb-4" />
        <div className="flex gap-4">
          <Skeleton width="150px" height="1rem" />
          <Skeleton width="120px" height="1rem" />
        </div>
      </div>

      {/* Summary Skeleton */}
      <div className="mb-8">
        <Skeleton width="200px" height="1.5rem" className="mb-4" />
        <Skeleton width="100%" height="1rem" className="mb-2" />
        <Skeleton width="80%" height="1rem" />
      </div>

      {/* Experience Skeleton */}
      <div className="mb-8">
        <Skeleton width="150px" height="1.5rem" className="mb-4" />
        {[1, 2].map((item) => (
          <div key={item} className="mb-6 pl-4 border-l-2 border-gray-200">
            <div className="flex justify-between mb-2">
              <Skeleton width="200px" height="1.25rem" />
              <Skeleton width="100px" height="1rem" />
            </div>
            <Skeleton width="250px" height="1rem" className="mb-3" />
            <Skeleton width="100%" height="1rem" className="mb-1" />
            <Skeleton width="90%" height="1rem" />
          </div>
        ))}
      </div>

      {/* Skills Skeleton */}
      <div className="mb-8">
        <Skeleton width="100px" height="1.5rem" className="mb-4" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <Skeleton width="120px" height="1rem" />
              <div className="flex space-x-1">
                {[1, 2, 3, 4, 5].map((dot) => (
                  <Skeleton key={dot} width="12px" height="12px" rounded />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const FormSkeleton: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Form Section */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <Skeleton width="200px" height="1.5rem" className="mb-4" />
        <div className="space-y-4">
          <div>
            <Skeleton width="100px" height="1rem" className="mb-2" />
            <Skeleton width="100%" height="2.5rem" />
          </div>
          <div>
            <Skeleton width="80px" height="1rem" className="mb-2" />
            <Skeleton width="100%" height="2.5rem" />
          </div>
          <div>
            <Skeleton width="120px" height="1rem" className="mb-2" />
            <Skeleton width="100%" height="6rem" />
          </div>
        </div>
      </div>

      {/* Another Form Section */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <Skeleton width="150px" height="1.5rem" className="mb-4" />
        <div className="space-y-4">
          {[1, 2].map((item) => (
            <div key={item} className="border border-gray-200 rounded-lg p-4">
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <Skeleton width="100px" height="1rem" className="mb-2" />
                  <Skeleton width="100%" height="2.5rem" />
                </div>
                <div>
                  <Skeleton width="80px" height="1rem" className="mb-2" />
                  <Skeleton width="100%" height="2.5rem" />
                </div>
              </div>
              <div>
                <Skeleton width="120px" height="1rem" className="mb-2" />
                <Skeleton width="100%" height="4rem" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const CardSkeleton: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <Skeleton width="60%" height="1.5rem" className="mb-3" />
      <Skeleton width="100%" height="1rem" className="mb-2" />
      <Skeleton width="80%" height="1rem" className="mb-4" />
      <div className="flex justify-between">
        <Skeleton width="100px" height="2rem" />
        <Skeleton width="80px" height="2rem" />
      </div>
    </div>
  );
};

export const ListSkeleton: React.FC<{ items?: number }> = ({ items = 3 }) => {
  return (
    <div className="space-y-4">
      {Array.from({ length: items }).map((_, index) => (
        <div key={index} className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-sm">
          <Skeleton width="50px" height="50px" rounded />
          <div className="flex-1">
            <Skeleton width="70%" height="1.25rem" className="mb-2" />
            <Skeleton width="50%" height="1rem" />
          </div>
          <Skeleton width="80px" height="2rem" />
        </div>
      ))}
    </div>
  );
};

export default Skeleton;
