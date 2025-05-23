import { Product } from "./types";





const BASE_URL = 'https://fakestoreapi.com/products';

export const fetchProducts = async (): Promise<Product[]> => {
  try {
    const response = await fetch(BASE_URL);

    if (!response.ok) {
      throw new Error('Greška pri dohvatanju proizvoda');
    }

    const data: Product[] = await response.json();
    return data;
  } catch (error) {
    console.error('Greška u fetchProducts:', error);
    throw error;
  }
};


export const fetchProductById = async (id: string | undefined): Promise<Product> => {
  try {
    const response = await fetch(`${BASE_URL}/${id}`);

    if (!response.ok) {
      throw new Error(`Greška pri dohvatanju proizvoda sa ID-jem: ${id}`);
    }

    const product: Product = await response.json();
    return product;
  } catch (error) {
    console.error(`Greška u fetchProductById (${id}):`, error);
    throw error;
  }
};