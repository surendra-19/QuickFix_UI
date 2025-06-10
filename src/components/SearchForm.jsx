import React, { useState } from "react";
import "./SearchForm.css";

const staticOptions1 = ["Electrician", "Plumber", "Carpenter", "Painter", "Gardener"];
const staticOptions2 = ["Mumbai","Hyderabad","Vijayawada"];

export default function SearchForm() {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [filtered1, setFiltered1] = useState([]);
  const [filtered2, setFiltered2] = useState([]);
  const [selected1, setSelected1] = useState([]);
  const [selected2, setSelected2] = useState([]);

  const handleInput1 = (e) => {
  const value = e.target.value;
  setInput1(value);
  setFiltered1(
    staticOptions1.filter(item =>
      item.toLowerCase().includes(value.toLowerCase())
    )
  );
};

    const handleInput2 = (e) => {
    const value = e.target.value;
    setInput2(value);
    setFiltered2(
    staticOptions2.filter(item =>
      item.toLowerCase().includes(value.toLowerCase())
    )
  );
};


  const selectItem = (item, listSetter, selectedList, setFiltered, setInput) => {
  if (!selectedList.includes(item)) {
    listSetter([...selectedList, item]);
    setFiltered([]);
    setInput("");
  }
};

  return (
    <div className="search-form">
      <div className="input-group">
        <input
            type="text"
            value={input1}
            onChange={handleInput1}
            onFocus={() => setFiltered1(staticOptions1)}
            placeholder="Search profession..."
            className="search-input"
        />
        {filtered1.length > 0 && (
          <ul className="dropdown-list">
            {filtered1.map((item, idx) => (
              <li
                key={idx}
                className="dropdown-item"
                onClick={() => selectItem(item, setSelected1, selected1, setFiltered1, setInput1)}
              >
                {item}
              </li>
            ))}
          </ul>
        )}
        <div className="selected-container">
            {selected1.map((item, idx) => (
                <span key={idx} className="selected-item">
                {item}
                <button
                    className="remove-btn"
                    onClick={() =>
                    setSelected1(selected1.filter((i) => i !== item))
                    }
                >
                    ×
                </button>
                </span>
            ))}
        </div>
      </div>

      <div className="input-group">
        <input
            type="text"
            value={input2}
            onChange={handleInput2}
            onFocus={() => setFiltered2(staticOptions2)} // Show all on focus
            placeholder="Search services..."
            className="search-input"
        />
        {filtered2.length > 0 && (
          <ul className="dropdown-list">
            {filtered2.map((item, idx) => (
              <li
                key={idx}
                className="dropdown-item"
                onClick={() => selectItem(item, setSelected2, selected2, setFiltered2, setInput2)}
              >
                {item}
              </li>
            ))}
          </ul>
        )}
        <div className="selected-container">
            {selected2.map((item, idx) => (
                <span key={idx} className="selected-item">
                {item}
                <button
                    className="remove-btn"
                    onClick={() =>
                    setSelected2(selected2.filter((i) => i !== item))
                    }
                >
                    ×
                </button>
                </span>
            ))}
        </div>
      </div>

      <button className="submit-button">Submit</button>
    </div>
  );
}
