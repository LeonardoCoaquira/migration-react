import React from 'react';

function LanguageSwitcher({ toggleLanguage }) {
  const handleClick = (e) => {
    e.preventDefault();
    toggleLanguage();
  };
  return (
    <div className="language-switcher">
      <button onClick={handleClick}>Toggle Language</button>
    </div>
  );
}

export default LanguageSwitcher;
