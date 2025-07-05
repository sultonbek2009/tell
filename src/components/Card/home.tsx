import React from "react";
import CardList from "@/components/CardList";

const products = [
  {
    label: "BEST SELLER",
    image:
      "https://static.wixstatic.com/media/c837a6_368addd3225e4019b4ef4d4741d451ea~mv2.jpg",
    name: "SUSTAINABLE STRIDER",
    price: 150,
  },
  {
    label: "SALE",
    image:
      "https://static.wixstatic.com/media/c837a6_a679b52993ee4a8f852c812ea7deb9d9~mv2.jpg",
    name: "DISTANCE ELITE",
    price: 140,
    oldPrice: 160,
  },
  {
    label: "BEST SELLER",
    image:
      "https://static.wixstatic.com/media/c837a6_a2c4dfe107b54c778c2826b01e24c855~mv2.jpg",
    name: "SPRINT CHAMP",
    price: 180,
  },
  {
    label: "SALE",
    image:
      "https://static.wixstatic.com/media/c837a6_22011337f6aa46b2866ec703742ac4ca~mv2.jpg",
    name: "JUNIOR SPORT",
    price: 72,
    oldPrice: 90,
  },
];

export default function Home() {
  return (
    <section className="px-4 py-8">
      <h2 className="text-2xl font-semibold mb-6">Best Sellers</h2>
      <CardList products={products} />
    </section>
  );
}
