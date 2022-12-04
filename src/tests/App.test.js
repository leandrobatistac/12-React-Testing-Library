import React from 'react';
import { screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('Testa se os elementos são renderizados na aplicação', () => {
  test('Testa se o topo da aplicação contém o texto Home', () => {
    const { history } = renderWithRouter(<App />);
    const linkHome = screen.getByRole('link', { name: /Home/i });
    expect(linkHome).toBeInTheDocument();
    userEvent.click(linkHome);
    const { pathname } = history.location;
    expect(pathname).toBe('/');
  });

  test('Testa se o topo da aplicação contém o texto About', () => {
    const { history } = renderWithRouter(<App />);
    const linkAbout = screen.getByRole('link', { name: /About/i });
    expect(linkAbout).toBeInTheDocument();
    userEvent.click(linkAbout);
    const { pathname } = history.location;
    expect(pathname).toBe('/about');
  });

  test('Testa se o topo da aplicação contém o texto Favorite Pokémon', () => {
    const { history } = renderWithRouter(<App />);
    const linkFavoritePkm = screen.getByRole('link', { name: /Favorite Pokémon/i });
    expect(linkFavoritePkm).toBeInTheDocument();
    userEvent.click(linkFavoritePkm);
    const { pathname } = history.location;
    expect(pathname).toBe('/favorites');
  });

  test('Testa se um caminho não existente leva a renderização do Not Found', () => {
    const { history } = renderWithRouter(<App />);

    act(() => {
      history.push('/não-existe');
    });

    const naoEncontrado = screen.getByRole('heading', {
      name: /page requested not found/i,
    });

    expect(naoEncontrado).toBeInTheDocument();
  });
});
