import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import About from '../pages/About';

describe('Testa se a página contém as informações sobre a Pokédex', () => {
  test('Testa se a página contém um heading h2 com o texto About Pokédex', () => {
    renderWithRouter(<About />);
    const aboutPokedex = screen.getByRole('heading', { name: /About Pokédex/i });
    expect(aboutPokedex).toBeInTheDocument();
  });

  test('Teste se a página contém o primeiro parágrafo com texto sobre a Pokédex', () => {
    renderWithRouter(<About />);
    const paragrafoUm = screen.getByText(
      /This application simulates a Pokédex, a digital encyclopedia containing all Pokémon/i,
    );
    expect(paragrafoUm).toBeInTheDocument();
  });

  test('Teste se a página contém o segundo parágrafo com texto sobre a Pokédex', () => {
    renderWithRouter(<About />);
    const paragrafoDois = screen.getByText(
      /This application simulates a Pokédex, a digital encyclopedia containing all Pokémon/i,
    );
    expect(paragrafoDois).toBeInTheDocument();
  });

  test('Teste se a página contém a imagem', () => {
    renderWithRouter(<About />);
    const imagem = screen.getByRole('img', { name: /Pokédex/i });
    expect(imagem.src).toBe('https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png');
  });
});
