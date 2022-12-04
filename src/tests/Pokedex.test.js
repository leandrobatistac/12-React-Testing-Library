import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('Testa se a página contém as informações corretas da Pokedex', () => {
  test('Testa se a página contém um heading h2 com o texto Encountered Pokémon;', () => {
    renderWithRouter(<App />);
    const encounteredPokemon = screen.getByRole('heading', { name: /Encountered Pokémon/i });
    expect(encounteredPokemon).toBeInTheDocument();
  });

  test('Testa se é exibido o próximo Pokémon da lista quando o botão Próximo Pokémon é clicado;', () => {
    renderWithRouter(<App />);

    const botaoProximo = screen.getByRole('button', { name: /Próximo Pokémon/i });
    expect(botaoProximo).toBeInTheDocument();

    const pikachu = screen.getByRole('img', { name: /Pikachu sprite/i });
    expect(pikachu).toBeInTheDocument();

    userEvent.click(botaoProximo);

    const charmander = screen.getByRole('img', { name: /Charmander sprite/i });
    expect(charmander).toBeInTheDocument();

    for (let i = 0; i <= 6; i += 1) {
      userEvent.click(botaoProximo);
    }

    const dragonair = screen.getByRole('img', { name: /Dragonair sprite/i });
    expect(dragonair).toBeInTheDocument();

    userEvent.click(botaoProximo);

    const pikachuDois = screen.getByRole('img', { name: /Pikachu sprite/i });
    expect(pikachuDois).toBeInTheDocument();
  });

  test('Testa se é mostrado 1 pokemon por vez', () => {
    renderWithRouter(<App />);
    const imagemPokemon = screen.getAllByRole('img');
    expect(imagemPokemon.length).toBe(1);
  });

  test('Testa se os botões de filtragem por tipo tem o nome correto', () => {
    renderWithRouter(<App />);

    const botaoEletric = screen.getByRole('button', { name: /Electric/i });
    expect(botaoEletric).toBeInTheDocument();

    const botaoFire = screen.getByRole('button', { name: /Fire/i });
    expect(botaoFire).toBeInTheDocument();

    const botaoBug = screen.getByRole('button', { name: /Bug/i });
    expect(botaoBug).toBeInTheDocument();

    const botaoPoison = screen.getByRole('button', { name: /Poison/i });
    expect(botaoPoison).toBeInTheDocument();

    const botaoPsychic = screen.getByRole('button', { name: /Psychic/i });
    expect(botaoPsychic).toBeInTheDocument();

    const botaoNormal = screen.getByRole('button', { name: /Normal/i });
    expect(botaoNormal).toBeInTheDocument();

    const botaoDragon = screen.getByRole('button', { name: /Dragon/i });
    expect(botaoDragon).toBeInTheDocument();
  });

  test('Os botões de filtragem por tipo possuem o data-testid correto', () => {
    renderWithRouter(<App />);

    const dataTesteID = screen.getAllByTestId('pokemon-type-button');
    expect(dataTesteID.length).toBe(7);
  });

  it('Testa o botão de reset do filtro', () => {
    renderWithRouter(<App />);
    const botaoAll = screen.getByRole('button', { name: /all/i });
    expect(botaoAll).toBeInTheDocument();
    userEvent.click(botaoAll);
  });
});
