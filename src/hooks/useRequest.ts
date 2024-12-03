import { useState, useCallback } from 'react';

interface RequestOptions {
  onSuccess?: (data: any) => void;
  onError?: (error: Error) => void;
  manual?: boolean;
}

export function useRequest<TData, TParams extends any[]>(
  service: (...args: TParams) => Promise<TData>,
  options: RequestOptions = {}
) {
  const [data, setData] = useState<TData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const run = useCallback(async (...args: TParams) => {
    setLoading(true);
    setError(null);
    
    try {
      const result = await service(...args);
      setData(result);
      options.onSuccess?.(result);
      return result;
    } catch (e) {
      const err = e instanceof Error ? e : new Error(String(e));
      setError(err);
      options.onError?.(err);
      throw err;
    } finally {
      setLoading(false);
    }
  }, [service]);

  return {
    data,
    loading,
    error,
    run,
  };
} 