import { useState, useEffect } from 'react';
import { searchGithub, searchGithubUser } from '../api/API';

const CandidateSearch = () => {
  const [candidates, setCandidates] = useState<any[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const [noCandidates, setNoCandidates] = useState<boolean>(false);

  const token = process.env.VITE_GITHUB_TOKEN
  const apiUrl = 'https://api.github.com/search/users?q=language:javascript&per_page=10';

  useEffect(() => {
    setLoading(true);
    fetch(apiUrl, {
      headers: {
        Authorization: `token ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.items && data.items.length > 0) {
          setCandidates(data.items);
        } else {
          setNoCandidates(true);
        }
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [token]);

  const handleSaveCandidate = () => {
    const currentCandidate = candidates[currentIndex];
    let savedCandidates = JSON.parse(localStorage.getItem('savedCandidates') || '[]');
    savedCandidates.push(currentCandidate);
    localStorage.setItem('savedCandidates', JSON.stringify(savedCandidates));
    setCurrentIndex(currentIndex + 1);
  };

  const handleSkipCandidate = () => {
    setCurrentIndex(currentIndex + 1);
  };

  const currentCandidate = candidates[currentIndex];

const CandidateSearch: React.FC = () => {
  return( <><h1>CandidateSearch</h1>
  <div>
    {loading ? (
      <p>Loading candidates...</p>
    ) : noCandidates ? (
      <p>No more candidates available.</p>
    ) : currentCandidate ? (
      <div>
        <div>
          <strong>Name:</strong> {currentCandidate.login}
        </div>
        <div>
          <strong>Location:</strong> {currentCandidate.location || 'N/A'}
        </div>
        <div>
          <img src={currentCandidate.avatar_url} alt={currentCandidate.login} width="50" />
        </div>
        <button onClick={handleSaveCandidate}>+</button>
        <button onClick={handleSkipCandidate}>-</button>
      </div>
    ) : (
      <p>No more candidates to display.</p>
    )}
  </div></>
    
  )
};
}
export default CandidateSearch;
