import React from 'react';
import './App.css';
import Header from './components/Header'
import Main from './components/Main';
import Footer from './components/Footer';
import { useState } from 'react';
import qNAData from './components/QNAData';


function App() {

  const [searchQuery, setSearchQuery] = useState(" ")
  const [filteredQuestions, setFilteredQuestions] = useState([])
  const [selectedQuestion, setSelectedQuestion] = useState("");

  const handleSearch = (e) => {
    const query = e.target.value
    console.log(query)
    if (query === ""){
      setSearchQuery("")
      setFilteredQuestions([])

    }else {
      setSearchQuery(query)
      const filteredResults = qNAData.filter((question) => question.question.toLowerCase().includes(query.toLowerCase()))
      console.log(query)
      console.log(filteredResults)
      setFilteredQuestions(filteredResults)
    }
  }

  const handleButtonClick = () => {
    const question = qNAData.find((q) => q.question.toLowerCase() === searchQuery.toLowerCase());
    setSelectedQuestion(question);
    setFilteredQuestions([])

  };

  const handleUIClick = (e)=> {
    const value = e.target.innerHTML
    const query = e.target.innerHTML
    const question = qNAData.find((q) => q.question.toLowerCase() === value.toLowerCase());
    setSelectedQuestion(question)
    setFilteredQuestions([])
    setSearchQuery(query)
  }
  

  return (
    <div className="App">
      <Header searchQuery={searchQuery}
              filteredQuestions={filteredQuestions}
              handleSearch={handleSearch}
              handleButtonClick={handleButtonClick}
              handleUIClick={handleUIClick}

              />
      <Main selectedQuestion={selectedQuestion} />
      <Footer />
    </div>
  );
}

export default App;