import React, { useState, useEffect } from 'react';
import { Candidate } from '../interfaces/Candidate.interface'; // Import the Candidate interface

const SavedCandidates: React.FC = () => {
  const [savedCandidates, setSavedCandidates] = useState<Candidate[]>([]); // Using the Candidate interface

  useEffect(() => {
    const candidatesFromStorage = JSON.parse(localStorage.getItem('savedCandidates') || '[]');
    setSavedCandidates(candidatesFromStorage);
  }, []);

  return (
    <><h1>Potential Candidates</h1><div>
      {savedCandidates.length === 0 ? (
        <p>No candidates have been accepted yet.</p>
      ) : (
        savedCandidates.map((candidate, index) => (
          <div key={index}>
            <div>
              <strong>Name:</strong> {candidate.login}
            </div>
            <div>
              <strong>Location:</strong> {candidate.location || 'N/A'}
            </div>
            <div>
              <img src={candidate.avatar_url} alt={candidate.login} width="50" />
            </div>
            <div>
              <a href={candidate.html_url} target="_blank" rel="noopener noreferrer">
                View Profile
              </a>
            </div>
          </div>
        ))
      )}
    </div></>
  );
};

export default SavedCandidates;
