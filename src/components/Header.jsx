import React from 'react'
import SearchBar from './SearchBar'

export default function Header({searchQuery, filteredQuestions, handleSearch, handleButtonClick, handleUIClick}) {

  return (
    <div className='Header'>
      <h1>PayFacts</h1>
      <SearchBar  searchQuery={searchQuery}
                  filteredQuestions={filteredQuestions}
                  handleSearch={handleSearch}
                  handleButtonClick={handleButtonClick}
                  handleUIClick={handleUIClick} />
    </div>
  )
}
