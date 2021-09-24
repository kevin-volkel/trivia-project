import React, { useState, useEffect } from 'react';
import { useTriviaContext } from '../util/context';

const Settings = () => {
  const url = 'https://opentdb.com/api_category.php'
  const { params, setParams } = useTriviaContext();
  const [categories, setCategories] = useState([])

  useEffect( async () => {
    try{
      const response = await fetch(url)
      const data = await response.json()
      setCategories(data.trivia_categories)
    } catch (error) {
      console.error(error);
    }
  }, [])

  

  return (
    <div className="settings">
      <h2 className="title">SETTINGS</h2>
      <form className="settings-form" onSubmit = { (e) => e.preventDefault()}>
        <div className="setting">
          <label htmlFor="amount" className="amount-label">
            Number of Questions:{' '}
          </label>
          <input
            className="amount-input"
            type="number"
            name="amount"
            value={params.amount}
            onChange={(e) =>
              setParams({
                ...params,
                amount: e.target.value > 30 ? 30 : e.target.value < 0 ? 0 : e.target.value
              })
            }
          />
        </div>
        <div className="setting">
          <label htmlFor="difficulty">Difficulty: </label>
          <select
            name="difficulty"
            className="difficulty"
            value={params.difficulty}
            onChange={(e) => setParams({...params, difficulty: e.target.value})}
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
            value={params.category}
            onChange={(e) => setParams({...params, category: e.target.value})}
          >
            <option value={1}>
                  Any Category
                </option>
            {categories.map((category) => {
              return (
                <option value={category.id} key={category.id}>
                  {category.name}
                </option>
              );
            })}
          </select>
        </div>
        {/* <div className="button-container">
          <button type="submit">Save Settings</button>
        </div> */}
      </form>
    </div>
  );
};

export default Settings;
