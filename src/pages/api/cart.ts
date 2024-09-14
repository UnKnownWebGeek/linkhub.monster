import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // Example cart data response
  const cartData = {
    success: true,
    items: [
      { id: 1, name: 'Item A', price: 10 },
      { id: 2, name: 'Item B', price: 20 }
    ],
    total: 30
  };

  res.status(200).json(cartData);
}
