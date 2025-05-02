import { useState, useEffect } from 'preact/hooks';

interface ViewCounterProps {
  slug: string;
}

interface ViewCountResponse {
  slug: string;
  count: number;
  time: number;
}

export default function ViewCounter({ slug }: ViewCounterProps) {
  const [views, setViews] = useState<number | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchViews = async () => {
      try {
        setLoading(true);
        const response = await fetch(`/api/views/${encodeURIComponent(slug)}`);

        if (!response.ok) {
          throw new Error(`Failed to fetch view count: ${response.statusText}`);
        }

        const data: ViewCountResponse = await response.json();
        setViews(data.count);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
        console.error('Error fetching view count:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchViews();
  }, [slug]);

  return (
    <div class="text-gray-500 text-sm mb-3">
      {loading ? (
        <span>Views: Loading...</span>
      ) : error ? (
        <span title={error}>Views: --</span>
      ) : (
        <span>Views: {views?.toLocaleString() || '0'}</span>
      )}
    </div>
  );
}