import React from "react";
import { Card } from "../ui/card";

interface Product {
  label?: "NEW" | "HIGHLIGHT";
  image: string;
  name: string;
  description?: string;
  price?: number;
}

interface CardListProps {
  products: Product[];
}

const CardList: React.FC<CardListProps> = ({ products }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      {products.map((product, index) => (
        <Card
          key={index}
          className="group overflow-hidden border border-gray-200 shadow-sm bg-white"
        >
          {/* Image */}
          <div className="relative w-full h-72 overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
            />
            {product.label && (
              <span className="absolute top-4 left-4 bg-black text-white text-xs tracking-wide px-3 py-1">
                {product.label}
              </span>
            )}
          </div>

          {/* Content */}
          <div className="p-5">
            <h3 className="text-lg font-semibold tracking-tight">
              {product.name}
            </h3>
            {product.description && (
              <p className="text-sm text-gray-600 mt-1">
                {product.description}
              </p>
            )}

            {product.price && (
              <p className="mt-4 text-base font-medium text-gray-900">
                From ${product.price.toFixed(2)}
              </p>
            )}
          </div>
        </Card>
      ))}
    </div>
  );
};

export default CardList;
