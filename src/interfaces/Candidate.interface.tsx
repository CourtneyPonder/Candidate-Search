// TODO: Create an interface for the Candidate objects returned by the API
// Candidate.ts

export interface Candidate {
    login: string; // GitHub username
    avatar_url: string; // URL to the avatar image
    location: string | null; // Location of the user
    email?: string | null; // Email (optional)
    html_url: string; // GitHub profile URL
    company?: string | null; // Company (optional)
  }
  