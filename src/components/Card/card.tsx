import React from "react";
import { Card } from "../ui/card";


interface Product {
  label?: "BEST SELLER" | "SALE";
  image: string;
  name: string;
  price: number;
  oldPrice?: number;
}

interface CardList {
  products: Product[];
}

const CardList: React.FC<CardList> = ({ products }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
      {products.map((product, index) => (
        <Card key={index} className="overflow-hidden rounded-lg">
          <div className="relative w-full h-64">
            <img
              src={product.image}
              alt={product.name}
              className="object-cover w-full h-full rounded-t-lg"
            />
            {product.label && (
              <span className="absolute top-2 left-2 bg-gray-200 text-gray-800 text-xs font-semibold px-2 py-1 rounded">
                {product.label}
              </span>
            )}
          </div>
          <Card className="mt-4">
            <h3 className="text-sm font-semibold">{product.name}</h3>
          </Card>
          <Card className="flex items-center space-x-2">
            <span className="text-base font-bold">${product.price.toFixed(2)}</span>
            {product.oldPrice && (
              <span className="text-sm line-through text-gray-500">
                ${product.oldPrice.toFixed(2)}
              </span>
            )}
          </Card>
        </Card>
      ))}
    </div>
  );
};

export default CardList;
