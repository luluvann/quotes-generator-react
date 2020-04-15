import React from 'react';
import './App.css';

var list = require('./quotes.json')
// Pour voir le contenu des citations
// console.log(list)

function App() {
    return (
        <div className="App">
            <header className="App-header">
                Les citations vont ici.
            </header>
        </div>
    );
}

export default App;
