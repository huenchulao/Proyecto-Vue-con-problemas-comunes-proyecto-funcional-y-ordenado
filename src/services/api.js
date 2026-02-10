const mockProducts = [
  {
    id: 1,
    title: 'Teclado mecánico',
    description: 'Switches rojos, formato 75%.',
    price: 89.99
  },
  {
    id: 2,
    title: 'Mouse ergonómico',
    description: 'Diseñado para jornadas largas de trabajo.',
    price: 49.5
  },
  {
    id: 3,
    title: 'Monitor 27"',
    description: 'Resolución QHD y 144Hz.',
    price: 299
  }
]

export const getProducts = async () => {
  await new Promise((resolve) => setTimeout(resolve, 350))
  return mockProducts
}
