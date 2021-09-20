import React, { useState } from 'react';
import { categories } from '../util/consts';

const Settings = () => {
  const [amount, setAmount] = useState(10);
  const [category, setCategory] = useState('');
  const [difficulty, setDifficulty] = useState('mixed');

  const updateParams = (e) => {
    e.preventDefault();
  };

  return (
    <div className="settings">
      <h2 className="title">Settings</h2>
      <form onSubmit={updateParams} className="settings-form">
        <div className="setting">
          <label htmlFor="amount">Number of Questions: </label>
          <input
            className="amount-input"
            type="number"
            name="amount"
            value={amount}
            onChange={(e) => setAmount( (e.target.value > 0 && e.target.value < 31) ? e.target.value : amount)}
          />
        </div>
        <div className="setting">
          <label htmlFor="difficulty">Difficulty: </label>
          <select name = "difficulty" className ="difficulty">
            <option value="mixed">Mixed</option>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select> 
        </div>
        <div className="setting">
          <label htmlFor="category">Category: </label>
          <select name="category" className ="category">
            {categories.map ( (category) => {
              <option value={category.id} key = {category.id}>{category.name}</option>
            })}
          </select> 
        </div>
      </form>
    </div>
  );
};

export default Settings;
