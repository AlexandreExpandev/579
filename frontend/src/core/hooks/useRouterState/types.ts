import { Location, NavigateOptions, Params } from 'react-router-dom';

export interface UseRouterStateReturn {
  location: Location;
  params: Readonly<Params<string>>;
  queryParams: Record<string, string>;
  currentPath: string;
  navigateTo: (path: string, options?: NavigateOptions) => void;
  goBack: () => void;
  goForward: () => void;
  updateSearchParams: (updates: Record<string, string | null>) => void;
  clearSearchParams: () => void;
  isExactPath: (path: string) => boolean;
  isPathMatch: (pattern: string) => boolean;
}
