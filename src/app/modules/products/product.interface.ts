export interface IVariant {
  type: string;
  value: string;
}

export interface IInventory {
  quantity: number;
  inStock: boolean;
}
export interface IProduct {
  name: string;
  description: string;
  price: number;
  category: string;
  tags: string[];
  variants: IVariant[];
  inventory: IInventory;
}
/*
{
    "name": "Wireless Mouse",
    "description": "Ergonomic wireless mouse with adjustable DPI settings.",
    "price": 29.99,
    "category": "Electronics",
    "tags": ["computer", "peripherals", "wireless", "ergonomic"],
    "variants": [
      {
        "type": "color",
        "value": "Black"
      },
      {
        "type": "color",
        "value": "White"
      }
    ],
    "inventory": {
      "quantity": 150,
      "inStock": true
    }
  },
  */
