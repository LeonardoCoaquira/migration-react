import React, { useState } from 'react';
import { IntlProvider, FormattedMessage } from 'react-intl';
import './App.css';
import LanguageSwitcher from './components/LanguageSwitcher';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

import enMessages from './locales/en.json';
import esMessages from './locales/es.json';

function App() {
  const [locale, setLocale] = useState(navigator.language || 'en');

  const toggleLanguage = () => {
    const newLocale = locale === 'en' ? 'es' : 'en';
    setLocale(newLocale);
  };

  const messages = locale === 'en' ? enMessages : esMessages;

  return (
    <IntlProvider locale={locale} messages={messages}>
      <div className="App">
        <LanguageSwitcher toggleLanguage={toggleLanguage} />
        <Header locale={locale} />
        <footer className="App-header">
          <h1>
            <FormattedMessage id="hello" />!
          </h1>
          <p>
            <FormattedMessage id="welcomeMessage" />
          </p>
        </footer>
      </div>
      <Footer />
    </IntlProvider>
  );
}

export default App;
