import { environment } from '@env';

/**
 * Appends the specified endpoint to the base URL and
 * returns the full URL.
 * 
 * @param endpoint to append to the base URL
 * @returns complete API URL
 */
export function buildApiUrl(endpoint: string): string {
    return `${environment.apiBaseUrl}/${endpoint}`;
}
