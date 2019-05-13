import React,{useState, createContext}  from 'react';

export const MovieContext = createContext();

export const MovieProvider = props => {
  const [movies, setMovies] = useState ([
    {
      name: 'Friday',
      price: '$20',
      id: 123
    },
    {
      name: 'How High',
      price: '$10',
      id: 456
    },
    {
      name: 'Reefer Madness',
      price: '$20',
      id: 798
    }
  ]);
  return(
      <MovieContext.Provider value={[movies, setMovies]}>
        {props.children}
      </MovieContext.Provider>
  );
}