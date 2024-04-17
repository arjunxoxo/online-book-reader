import React, { useState, useEffect } from 'react';

function BrowsePage() {
  const [authors, setAuthors] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://openlibrary.org/people/mekBot/books/want-to-read.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        return response.json();
      })
      .then(data => {
        setAuthors(data);
        setIsLoading(false);
      })
      .catch(error => {
        setError(error);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1>Authors</h1>
      <ul>
        {authors.map(author => (
          <li key={author.key}>{author.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default BrowsePage;
