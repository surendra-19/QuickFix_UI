import React, { useState, useRef, useEffect } from 'react';
import '../styles/MultiSelectSearchForm.css';

const citiesList = ['Hyderabad', 'Vijayawada', 'Chennai', 'Mumbai'];

export default function MultiSelectSearchForm() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCities, setSelectedCities] = useState([]);
  const dropdownRef = useRef();

  const toggleDropdown = () => setDropdownOpen(prev => !prev);

  const filteredCities = citiesList.filter(city =>
    city.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const isAllSelected = selectedCities.length === citiesList.length;

  const handleSelectAllToggle = () => {
    if (isAllSelected) {
      setSelectedCities([]);
    } else {
      setSelectedCities([...citiesList]);
    }
  };

  const handleCheckboxChange = (city) => {
    setSelectedCities((prev) =>
      prev.includes(city)
        ? prev.filter((item) => item !== city)
        : [...prev, city]
    );
  };

  const displaySelected = () => {
    if (selectedCities.length === 0) return 'Search city';
    if (selectedCities.length === citiesList.length) {
      return `${citiesList[0]} +${citiesList.length - 1}`;
    }
    if (selectedCities.length <= 2) return selectedCities.join(', ');
    return `${selectedCities[0]} +${selectedCities.length - 1}`;
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="multi-select-container" ref={dropdownRef}>
      <div className="dropdown-box" onClick={toggleDropdown}>
        {displaySelected()}
      </div>

      {dropdownOpen && (
        <div className="dropdown-list">
          <div className="select-all">
            <input
              type="checkbox"
              checked={isAllSelected}
              onChange={handleSelectAllToggle}
            />
            <label onClick={handleSelectAllToggle}>
              {isAllSelected ? 'Unselect all' : 'Select all'}
            </label>
          </div>

          <div className="search-bar">
            <input
              type="text"
              placeholder="Search city"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="checkbox-list">
            {filteredCities.map((city) => (
              <div key={city} className="checkbox-item">
                <input
                  type="checkbox"
                  checked={selectedCities.includes(city)}
                  onChange={() => handleCheckboxChange(city)}
                />
                <label onClick={() => handleCheckboxChange(city)}>
                  {city}
                </label>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
