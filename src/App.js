import React from "react";
import "./App.css";

const list = require("./quotes.json");
// Pour voir le contenu des citations
//console.log(list.quotes[70]);

function Quote({ quote, author }) {
  return (
    <div>
      <p>{quote}</p>
      <p>-{author}</p>
    </div>
  );
}

let lengthList = list.quotes.length;

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

const quoteNumber1 = getRandomInt(lengthList);
const quoteNumber2 = getRandomInt(lengthList);
const quoteNumber3 = getRandomInt(lengthList);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Quote
          quote={list.quotes[quoteNumber1].quote}
          author={list.quotes[quoteNumber1].author}
        />
        <Quote
          quote={list.quotes[quoteNumber2].quote}
          author={list.quotes[quoteNumber2].author}
        />
        <Quote
          quote={list.quotes[quoteNumber3].quote}
          author={list.quotes[quoteNumber3].author}
        />
      </header>
    </div>
  );
}

export default App;
