import React from 'react';

function LanguageSwitcher({ toggleLanguage }) {
  return (
    <div className="language-switcher">
      <button onClick={toggleLanguage}>Toggle Language</button>
    </div>
  );
}

export default LanguageSwitcher;
