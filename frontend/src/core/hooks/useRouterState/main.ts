import { useLocation, useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { useCallback, useMemo } from 'react';
import type { UseRouterStateReturn } from './types';

/**
 * @hook useRouterState
 * @summary Utility hook for managing router-based state
 * with React Router DOM.
 * @domain core
 * @type utility-hook
 * @category navigation
 */
export const useRouterState = (): UseRouterStateReturn => {
  // #region Router Hooks
  const location = useLocation();
  const navigate = useNavigate();
  const params = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  // #endregion

  // #region Handlers
  const navigateTo = useCallback((path: string, options?: { replace?: boolean; state?: any }) => {
    navigate(path, options);
  }, [navigate]);

  const goBack = useCallback(() => {
    navigate(-1);
  }, [navigate]);

  const goForward = useCallback(() => {
    navigate(1);
  }, [navigate]);

  const updateSearchParams = useCallback((updates: Record<string, string | null>) => {
    setSearchParams(prev => {
      const newParams = new URLSearchParams(prev);
      
      Object.entries(updates).forEach(([key, value]) => {
        if (value === null) {
          newParams.delete(key);
        } else {
          newParams.set(key, value);
        }
      });
      
      return newParams;
    });
  }, [setSearchParams]);

  const clearSearchParams = useCallback(() => {
    setSearchParams({});
  }, [setSearchParams]);
  // #endregion

  // #region Computed Values
  const currentPath = useMemo(() => location.pathname, [location.pathname]);
  
  const queryParams = useMemo(() => {
    const params: Record<string, string> = {};
    searchParams.forEach((value, key) => {
      params[key] = value;
    });
    return params;
  }, [searchParams]);

  const isExactPath = useCallback((path: string) => {
    return currentPath === path;
  }, [currentPath]);

  const isPathMatch = useCallback((pattern: string) => {
    const regex = new RegExp(pattern.replace(/:\w+/g, '\\w+'));
    return regex.test(currentPath);
  }, [currentPath]);
  // #endregion

  return {
    // Current state
    location,
    params,
    queryParams,
    currentPath,
    
    // Navigation
    navigateTo,
    goBack,
    goForward,
    
    // Search params
    updateSearchParams,
    clearSearchParams,
    
    // Utilities
    isExactPath,
    isPathMatch
  };
};
