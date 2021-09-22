import React, { useState } from 'react';
import { categories } from '../util/consts';
import { useTriviaContext } from '../util/context';

const Settings = () => {
  const { params, setParams } = useTriviaContext();
  const [amount, setAmount] = useState(10);
  const [category, setCategory] = useState('');
  const [difficulty, setDifficulty] = useState('mixed');


  const updateParams = (e) => {
    e.preventDefault();
    setParams(
      `amount=${amount}&` +
        (difficulty !== 'mixed' ? `difficulty=${difficulty}&` : '') +
        (category !== 1 ? `category=${category}&` : '') +
        'type=multiple'
    );
  };

  return (
    <div className="settings">
      <h2 className="title">Settings</h2>
      <form onSubmit={updateParams} className="settings-form">
        <div className="setting">
          <label htmlFor="amount" className = "amount-label">Number of Questions: </label>
          <input
            className="amount-input"
            type="number"
            name="amount"
            value={amount}
            onChange={(e) =>
              setAmount(
                e.target.value > 0 && e.target.value < 31
                  ? e.target.value
                  : amount
              )
            }
          />
        </div>
        <div className="setting">
          <label htmlFor="difficulty">Difficulty: </label>
          <select
            name="difficulty"
            className="difficulty"
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
          >
            <option value="mixed">Mixed</option>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </div>
        <div className="setting">
          <label htmlFor="category">Category: </label>
          <select
            name="category"
            className="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            {categories.map((category) => {
              return (
                <option value={category.id} key={category.id}>
                  {category.name}
                </option>
              );
            })}
          </select>
        </div>
        <div className="button-container">
          <button type="submit">Save Settings</button>
        </div>
      </form>
    </div>
  );
};

export default Settings;
