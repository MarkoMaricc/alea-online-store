import React, { useState } from "react";
import './Dropdown.css';

type Option = {
  label: string;
  value: string;
};

type DropdownProps = {
  options: Option[];
  selected: string;
  onSelect: (value: string) => void;
  placeholder?: string;
};

export const Dropdown: React.FC<DropdownProps> = ({
  options,
  selected,
  onSelect,
  placeholder = "Select an option",
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen((prev) => !prev);
  const handleSelect = (value: string) => {
    onSelect(value);
    setIsOpen(false);
  };

  const selectedLabel =
    options.find((o) => o.value === selected)?.label || placeholder;

  return (
    <div className="dropdown">
      <button className="dropdown-button" onClick={toggleDropdown}>
        {selectedLabel} ▼
      </button>
      {isOpen && (
        <ul className="dropdown-menu">
          {options.map((option) => (
            <li
              key={option.value}
              className="dropdown-item"
              onClick={() => handleSelect(option.value)}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
