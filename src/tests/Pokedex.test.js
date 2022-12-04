import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('Testa se a página contém as informações corretas de Pokedex', () => {
  test('Testa se a página contém um heading h2 com o texto Encountered Pokémon;', () => {
    renderWithRouter(<App />);
    const encounteredPokemon = screen.getByRole('heading', { name: /Encountered Pokémon/i });
    expect(encounteredPokemon).toBeInTheDocument();
  });

  test('Testa se é exibido o próximo Pokémon da lista quando o botão Próximo Pokémon é clicado;', () => {
    renderWithRouter(<App />);
    const botaoPokedex = screen.getByRole('button', { name: /Próximo Pokémon/i });
    expect(botaoPokedex).toBeInTheDocument();
  });

  test('Testa se a Pokédex tem os botões de reset;', () => {
    renderWithRouter(<App />);
    const todosPokemons = screen.getByRole('button', { name: /All/i });
    expect(todosPokemons).toBeInTheDocument();
  });
});
