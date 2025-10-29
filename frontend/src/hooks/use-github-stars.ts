import { useState, useEffect } from 'react';

interface GitHubRepoData {
  stargazers_count: number;
}

export function useGitHubStars(owner: string, repo: string) {
  const [stars, setStars] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchStars = async () => {
      try {
        setLoading(true);
        setError(null);

        // Use a timeout to prevent hanging requests
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 5000); // 5 second timeout

        const response = await fetch(`https://api.github.com/repos/${owner}/${repo}`, {
          headers: {
            'Accept': 'application/vnd.github.v3+json',
          },
          signal: controller.signal,
        });

        clearTimeout(timeoutId);

        if (!response.ok) {
          throw new Error(`GitHub API error: ${response.status}`);
        }

        const data: GitHubRepoData = await response.json();
        setStars(data.stargazers_count);
      } catch (err) {
        // Silently fail and use fallback - don't log to avoid console noise
        const errorMessage = err instanceof Error ? err.message : 'Failed to fetch stars';
        if (errorMessage.includes('aborted')) {
          setError('Request timeout');
        } else {
          setError(errorMessage);
        }
        // Fallback to static number if API fails
        setStars(20000); // Current approximate count
      } finally {
        setLoading(false);
      }
    };

    fetchStars();

    // Refresh every 30 minutes to reduce API calls and improve performance
    const interval = setInterval(fetchStars, 30 * 60 * 1000);
    
    return () => clearInterval(interval);
  }, [owner, repo]);

  // Format number (e.g., 17200 -> "17.2k")
  const formatStars = (count: number | null): string => {
    if (count === null) return '20.0k'; // Fallback while loading
    
    if (count >= 1000) {
      const formatted = (count / 1000).toFixed(1);
      return `${formatted}k`;
    }
    
    return count.toString();
  };

  return {
    stars,
    formattedStars: formatStars(stars),
    loading,
    error,
  };
}