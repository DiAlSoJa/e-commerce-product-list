
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Home from '@/app/page'; 
import { SortEnum } from "@/types";

jest.mock('@/actions/get-products', () => ({
  __esModule: true,
  default: jest.fn(),
}));

import getProductsByPage from '@/actions/get-products';

describe('Home component', () => {
  it('renders the product list when products are available', async () => {
    
    (getProductsByPage as jest.Mock).mockResolvedValue({
      products: [{ id: 1, name: 'Product 1' }],
      totalPages: 2,
    });

    render(
      <Home searchParams={{ page: '1', sort: SortEnum.None, search: '' }} params={undefined} />
    );

    
    const productElement = await screen.findByText('Product 1');
    expect(productElement).toBeInTheDocument();
  });

  it('renders the no products available message when there are no products', async () => {
    // Simula el retorno de ningún producto
    (getProductsByPage as jest.Mock).mockResolvedValue({
      products: [],
      totalPages: 0,
    });

    // Renderiza el componente
    render(
      <Home searchParams={{ page: '1', sort: SortEnum.None, search: '' }} params={undefined} />
    );

    // Verifica que se muestra el mensaje de "no products available"
    const noProductsMessage = await screen.findByText('There are no products available.');
    expect(noProductsMessage).toBeInTheDocument();
  });
});