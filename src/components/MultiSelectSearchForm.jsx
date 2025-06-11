import { useState, useRef, useEffect } from 'react';
import './MultiSelectSearchForm.css';

const CITIES = ['Hyderabad', 'Chennai', 'Mumbai'];

const MultiSelectSearchForm = () => {
  const [selectedCities, setSelectedCities] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const filteredCities = CITIES.filter((city) =>
    city.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const areAllFilteredCitiesSelected =
    filteredCities.length > 0 &&
    filteredCities.every((city) => selectedCities.includes(city));

  const toggleCity = (city) => {
    setSelectedCities((prev) =>
      prev.includes(city) ? prev.filter((c) => c !== city) : [...prev, city]
    );
  };

  const selectAll = () => {
    const newSelections = [
      ...new Set([...selectedCities, ...filteredCities])
    ];
    setSelectedCities(newSelections);
  };

  const unselectAll = () => {
    setSelectedCities((prev) =>
      prev.filter((city) => !filteredCities.includes(city))
    );
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () =>
      document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="city-selector">
      <input
        type="text"
        className="search-input"
        placeholder="Search cities..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onFocus={() => setIsDropdownOpen(true)}
      />

      <div className="selected-chips">
        {selectedCities.map((city) => (
          <span className="chip" key={city}>
            {city}
            <button
              className="remove-btn"
              onMouseDown={(e) => e.stopPropagation()}
              onClick={() => toggleCity(city)}
            >
              &times;
            </button>
          </span>
        ))}
      </div>

      {isDropdownOpen && (
        <div className="dropdown" ref={dropdownRef}>
          {filteredCities.length > 0 && (
            <div className="actions">
              {!areAllFilteredCitiesSelected && (
                <button className='btn-select' onClick={selectAll}>Select All</button>
              )}
              {areAllFilteredCitiesSelected && (
                <button className='btn-select' onClick={unselectAll}>Unselect All</button>
              )}
            </div>
          )}
          <ul className="city-list">
            {filteredCities.map((city) => (
              <li key={city}>
                <label>
                  <input
                    className='checkbox'
                    type="checkbox"
                    checked={selectedCities.includes(city)}
                    onChange={() => toggleCity(city)}
                  />
                  {city}
                </label>
              </li>
            ))}
            {filteredCities.length === 0 && (
              <li className="no-match">No cities found</li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default MultiSelectSearchForm;
