import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import FavoritePokemon from '../pages/FavoritePokemon';

describe('Testa se a página contém as informações sobre os Pokemons Favoritos', () => {
  test('Teste se é exibida na tela a mensagem caso a pessoa não tenha Pokémon favoritos;', () => {
    renderWithRouter(<FavoritePokemon />);
    const semFavorito = screen.getByText(/No favorite pokémon found/i);
    expect(semFavorito).toBeInTheDocument();
  });
});
