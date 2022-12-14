import React, { useState } from 'react';
import questions from './data';
import data from './data';
import SingleQuestion from './Question';

function App() {
  return (
    <main>
      <div className="container">
        <h3>questions and answers about login</h3>
        <section className="info">
          {questions?.map((item) => (
            <SingleQuestion key={item.id} {...item} />
          ))}
        </section>
      </div>
    </main>
  );
}

export default App;
