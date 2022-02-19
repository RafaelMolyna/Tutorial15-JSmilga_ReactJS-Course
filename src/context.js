import React, { useState, useContext, useEffect } from 'react'
import { useCallback } from 'react';
import fetchUrl from './functions/fetchUrl';
import dataTreatDrink from './functions/dataTreatContext';

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
const AppContext = React.createContext()

function AppProvider({ children }) {
  const [loading, set_loading] = useState(true);
  const [searchTerm, set_searchTerm] = useState('');
  const [cocktails, set_cocktails] = useState([]);

  const fetchDrinks = useCallback(fetchUrl, [searchTerm]);

  useEffect(() => {
    set_loading(true);
    fetchDrinks(url, searchTerm)
      .then((resp) => {
        set_cocktails(dataTreatDrink(resp))
        set_loading(false);
      });
  }, [searchTerm, fetchDrinks])

  return (
    <AppContext.Provider 
      value={{
        loading,
        cocktails,
        set_searchTerm,
      }}>
      {children}
    </AppContext.Provider>
  )
}

// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
