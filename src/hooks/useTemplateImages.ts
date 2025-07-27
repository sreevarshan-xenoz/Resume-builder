import { useState, useEffect, useCallback } from 'react';
import { getTemplateImage, preloadTemplateImages } from '../utils/templateImages';

interface UseTemplateImagesOptions {
  preload?: boolean;
  templateIds?: string[];
}

interface TemplateImageState {
  loading: boolean;
  error: string | null;
  loadedImages: Set<string>;
  failedImages: Set<string>;
}

export function useTemplateImages(options: UseTemplateImagesOptions = {}) {
  const { preload = false, templateIds = [] } = options;
  
  const [state, setState] = useState<TemplateImageState>({
    loading: false,
    error: null,
    loadedImages: new Set(),
    failedImages: new Set(),
  });

  const preloadImages = useCallback(async (ids: string[]) => {
    if (ids.length === 0) return;

    setState(prev => ({ ...prev, loading: true, error: null }));

    try {
      await preloadTemplateImages(ids);
      setState(prev => {
        const newLoadedImages = new Set(prev.loadedImages);
        ids.forEach(id => newLoadedImages.add(id));
        return {
          ...prev,
          loading: false,
          loadedImages: newLoadedImages,
        };
      });
    } catch (error) {
      setState(prev => ({
        ...prev,
        loading: false,
        error: error instanceof Error ? error.message : 'Failed to preload images',
      }));
    }
  }, []);

  const markImageLoaded = useCallback((templateId: string) => {
    setState(prev => {
      const newLoadedImages = new Set(prev.loadedImages);
      const newFailedImages = new Set(prev.failedImages);
      newLoadedImages.add(templateId);
      newFailedImages.delete(templateId);
      return {
        ...prev,
        loadedImages: newLoadedImages,
        failedImages: newFailedImages,
      };
    });
  }, []);

  const markImageFailed = useCallback((templateId: string) => {
    setState(prev => {
      const newLoadedImages = new Set(prev.loadedImages);
      const newFailedImages = new Set(prev.failedImages);
      newFailedImages.add(templateId);
      newLoadedImages.delete(templateId);
      return {
        ...prev,
        failedImages: newFailedImages,
        loadedImages: newLoadedImages,
      };
    });
  }, []);

  const getImageStatus = useCallback((templateId: string) => {
    if (state.loadedImages.has(templateId)) return 'loaded';
    if (state.failedImages.has(templateId)) return 'failed';
    return 'pending';
  }, [state.loadedImages, state.failedImages]);

  const retryFailedImages = useCallback(() => {
    const failedIds = Array.from(state.failedImages);
    setState(prev => ({
      ...prev,
      failedImages: new Set(),
      error: null,
    }));
    preloadImages(failedIds);
  }, [state.failedImages, preloadImages]);

  useEffect(() => {
    if (preload && templateIds.length > 0) {
      preloadImages(templateIds);
    }
  }, [preload, templateIds, preloadImages]);

  return {
    ...state,
    preloadImages,
    markImageLoaded,
    markImageFailed,
    getImageStatus,
    retryFailedImages,
    hasFailedImages: state.failedImages.size > 0,
    totalImages: templateIds.length,
    loadedCount: state.loadedImages.size,
    failedCount: state.failedImages.size,
  };
}