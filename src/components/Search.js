import React from 'react';

function Search({ setSearch }) {
  return (
    <div>
      {/* Input field for the search functionality */}
      <input
        type="text"
        placeholder="Search by plant name"  // Placeholder text for the input
        // Event handler to update the 'search' state in the parent component
        onChange={(e) => setSearch(e.target.value)}  
      />
    </div>
  );
}

export default Search;
