import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { UserStore } from './contexts/menuContext';
import { CategoryProvider } from './contexts/searchCategories';
import { SearchProvider } from './contexts/searchContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserStore>
      <CategoryProvider>
        <SearchProvider>
          <App />
        </SearchProvider>
      </CategoryProvider>
    </UserStore>
  </React.StrictMode>
);
