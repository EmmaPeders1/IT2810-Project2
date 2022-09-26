import React from 'react';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FC } from 'react';
import Button from '../components/Button';
import Input from '../components/Input';

//import './SearchBar.css';

interface SearchBarProps {
  className?: string;
  value: string;
  placeholder: string;
  buttonText: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: React.KeyboardEvent) => void;
  onClick: (e: React.MouseEvent) => void;
}

const SearchBar: FC<SearchBarProps> = ({ className, value, placeholder, buttonText, onChange, onKeyDown, onClick }) => {
  return (
    <div className={`search-bar-wrapper ${className}`}>
      <Input
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        onKeyDown={onKeyDown}
      />
      <Button
        label={buttonText}
        className="search-button"
        icon={faSearch}
        onClick={onClick}
        onKeyDown={onKeyDown}
      />
    </div>
  );
};

export default SearchBar;