import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('Testa se a página contém as informações corretas de Pokemon', () => {
  test('Testa se é renderizado um card com as informações de determinado Pokémon:', () => {
    renderWithRouter(<App />);

    // Nome
    const pokemonNome = screen.getByTestId('pokemon-name');
    expect(pokemonNome).toBeInTheDocument();

    // Tipo
    const pokemonTipo = screen.getByTestId('pokemon-type');
    expect(pokemonTipo).toBeInTheDocument();
    expect(pokemonTipo).toHaveTextContent(/Electric/i);

    // Peso
    const pokemonPeso = screen.getByText('Average weight: 6.0 kg');
    expect(pokemonPeso).toBeInTheDocument();

    // Imagem
    const imagem = screen.getByRole('img', { name: /Pikachu Sprite/i });
    expect(imagem.src).toBe('https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png');
    expect(imagem.alt).toBe('Pikachu sprite');
  });

  test('Testa se o card do Pokémon indicado na Pokédex contém um link de navegação para exibir os detalhes', () => {
    const { history } = renderWithRouter(<App />);
    const pokemonLink = screen.getByRole('link', { name: /more details/i });
    expect(pokemonLink).toBeInTheDocument();
    userEvent.click(pokemonLink);
    const { pathname } = history.location;
    expect(pathname).toBe('/pokemon/25');
  });

  test('Testa se existe um ícone de estrela nos Pokémon favoritados', () => {
    renderWithRouter(<App />);

    // Indo na página indivudal do Pokemon
    const pokemonLink = screen.getByRole('link', { name: /more details/i });
    expect(pokemonLink).toBeInTheDocument();
    userEvent.click(pokemonLink);

    // Marcando o Checkbox como Favorito
    const pokemonFavorito = screen.getByRole('checkbox', { name: /Pokémon Favoritado\?/i });
    userEvent.click(pokemonFavorito);
    expect(pokemonFavorito).toBeChecked();

    // Verificando Icone
    const pokemonMarcado = screen.getByRole('img', { name: /pikachu is marked as favorite/i });
    expect(pokemonMarcado.src).toBe('http://localhost/star-icon.svg');
    expect(pokemonMarcado.alt).toBe('Pikachu is marked as favorite');
  });
});
