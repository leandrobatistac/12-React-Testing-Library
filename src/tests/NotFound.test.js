import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import NotFound from '../pages/NotFound';

describe('Testa se a página contém as informações corretas de Not Found', () => {
  test('Testa se a página contém a messagem correta de Not Found', () => {
    renderWithRouter(<NotFound />);
    const notFound = screen.getByRole('heading', { name: /Page requested not found/i });
    expect(notFound).toBeInTheDocument();
  });

  test('Teste se a página contém a imagem correta', () => {
    renderWithRouter(<NotFound />);
    const imagem = screen.getByRole('img', { name: /Pikachu crying because the page requested was not found/i });
    expect(imagem.src).toBe('https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif');
  });
});
