import CardList from "../Card/card";

const products = [
  {
    label: "HIGHLIGHT",
    image:
      "https://static.wixstatic.com/media/c837a6_368addd3225e4019b4ef4d4741d451ea~mv2.jpg",
    name: "SUSTAINABLE STRIDER",
    description: "Luxury comfort with modern design",
    price: 150,
  },
  {
    label: "NEW",
    image:
      "https://static.wixstatic.com/media/c837a6_a679b52993ee4a8f852c812ea7deb9d9~mv2.jpg",
    name: "DISTANCE ELITE",
    description: "Performance and style combined",
    price: 140,
  },
  {
    label: "HIGHLIGHT",
    image:
      "https://static.wixstatic.com/media/c837a6_a2c4dfe107b54c778c2826b01e24c855~mv2.jpg",
    name: "SPRINT CHAMP",
    description: "Elegance redefined in motion",
    price: 180,
  },
  {
    label: "NEW",
    image:
      "https://static.wixstatic.com/media/c837a6_22011337f6aa46b2866ec703742ac4ca~mv2.jpg",
    name: "JUNIOR SPORT",
    description: "Sporty spirit with premium build",
    price: 72,
  },
];

export default function Home() {
  return (
    <section className="px-4 sm:px-6 lg:px-12 py-10 sm:py-12 bg-white">
      {/* Section Title */}
      <div className="mb-10 sm:mb-12 text-center">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight">
          Our Highlights
        </h2>
        <p className="text-gray-600 mt-2 sm:mt-3 max-w-xl sm:max-w-2xl mx-auto text-sm sm:text-base">
          Discover premium models that blend performance, innovation and design.
        </p>
      </div>

      {/* Product Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
        <CardList products={products} />
      </div>
    </section>
  );
}
