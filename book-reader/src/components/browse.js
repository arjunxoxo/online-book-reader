import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './browse.css'; // Import your CSS file

function Browse() {
    const [searchKey, setSearchKey] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const handleSearch = () => {
        if (searchKey.trim() !== '') {
            fetch(`http://openlibrary.org/search.json?title=${searchKey}&limit=14`) // Open Library API URL
                .then(res => res.json())
                .then(data => {
                    if (data.docs && data.docs.length > 0) {
                        setSearchResults(data.docs);
                    } else {
                        setSearchResults([]);
                    }
                })
                .catch(error => {
                    console.error(error);
                    setSearchResults([]);
                });
        } else {
            setSearchResults([]);
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    };

    return (
        <main>
            <h1 className="app-title">Find A Book</h1>
            <section className="container">
                <p className="text">Find a book by searching for a title or author.</p>
                <form onSubmit={(e) => { e.preventDefault(); handleSearch(); }} className="search-box">
                    <input
                        type="text"
                        className="search-input"
                        placeholder="Find book by author or title"
                        aria-label="search input"
                        value={searchKey}
                        onChange={(e) => setSearchKey(e.target.value)}
                    />
                      <button type="submit" className="search-btn">
                        <FontAwesomeIcon icon={faSearch} /> {/* Font Awesome search icon */}
                    </button>
                </form>
            </section>
            <section className="search-results">
                {searchResults.length > 0 ? (
                    searchResults.map((book, index) => (
                        <div className="results" key={index}>
                            <h1>{book.title}</h1>
                            <div className="book__info">
                                <img className="book__image" src={book.cover_i ? `http://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg` : "/img/noimage.svg"} alt="Book Cover" />
                                <div className="book__details">
                                    <p className="detail">Author(s):</p>
                                    <p>{book.author_name ? book.author_name.join(', ') : "N/A"}</p>
                                    <p className="detail">Publisher:</p>
                                    <p>{book.publisher ? book.publisher.join(', ') : "N/A"}</p>
                                </div>
                            </div>
                            <div className="book__button">
                                <a href={`https://openlibrary.org${book.key}`} target="__blank" className="book__link">Learn more</a>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="placement-text">No results were found.</p>
                )}
            </section>
        </main>
    );
}

export default Browse;
