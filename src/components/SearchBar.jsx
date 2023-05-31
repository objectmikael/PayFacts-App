import React from 'react'

export default function SearchBar({searchQuery, filteredQuestions, handleSearch, handleUIClick, handleButtonClick}) {

  return (
    <div className='SearchBar'>
        <input  type='text' 
                placeholder='Search Here'
                value={searchQuery}
                onChange={handleSearch}                
        />   
        <ul>
            {filteredQuestions.map((question) => (
                    <li onClick={handleUIClick} key={question.id}>{question.question}</li>
            ))}
        </ul>
        <br />
        <button onClick={handleButtonClick}>Search</button>        
    </div>
  )
}
