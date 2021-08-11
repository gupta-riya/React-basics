import './App.css';
import React,{useState} from 'react';
import {BrowserRouter as Router, Switch, Link, Route} from 'react-router-dom'
import Header from './MyComponents/Header'
import Quiz from './MyComponents/Quiz'
import {quizData} from './MyComponents/quizData'

function App() {

  const[score,setScore] = useState("0");
  const totalScore = quizData.length;
  console.log(totalScore);

  return (
    <Router>
      
        <Header/>
        <Quiz/>
    </Router>
  );
}

export default App;
