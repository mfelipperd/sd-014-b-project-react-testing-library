import React from 'react';
import { screen } from '@testing-library/react';
// import Pokedex from '../components/Pokedex';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './renderWithRouter';
import App from '../App';
// import pokemons from '../data';

describe(' Teste o componente <Pokedex.js />', () => {
  it('Teste se página contém um heading h2 com o texto Encountered pokémons',
    () => {
      renderWithRouter(<App />);
      const heading = screen.getByRole('heading', {
        level: 2,
        name: 'Encountered pokémons',
      });
      expect(heading).toBeInTheDocument();
    });

  it('Se o próximo pokemon é o Charmander', () => {
    renderWithRouter(<App />);
    const nextButton = screen.getByRole('button', {
      name: 'Próximo pokémon',
    });
    expect(nextButton).toBeInTheDocument();
    userEvent.click(nextButton);
    expect(screen.getByText(/charmander/i)).toBeInTheDocument();
  });
});
