
export default function Card() {
  const products = [
    {
      label: "BEST SELLER",
      image: "https://static.wixstatic.com/media/c837a6_368addd3225e4019b4ef4d4741d451ea~mv2.jpg/v1/fill/w_446,h_594,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_368addd3225e4019b4ef4d4741d451ea~mv2.jpg",
      name: "SUSTAINABLE STRIDER",
      price: 150,
    },
    {
      label: "SALE",
      image: "https://static.wixstatic.com/media/c837a6_a679b52993ee4a8f852c812ea7deb9d9~mv2.jpg/v1/fill/w_446,h_594,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_a679b52993ee4a8f852c812ea7deb9d9~mv2.jpg",
      name: "DISTANCE ELITE",
      price: 140,
      oldPrice: 160,
    },
    {
      label: "BEST SELLER",
      image: "https://static.wixstatic.com/media/c837a6_a2c4dfe107b54c778c2826b01e24c855~mv2.jpg/v1/fill/w_446,h_594,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_a2c4dfe107b54c778c2826b01e24c855~mv2.jpg",
      name: "SPRINT CHAMP",
      price: 180,
    },
    {
      label: "SALE",
      image: "https://static.wixstatic.com/media/c837a6_22011337f6aa46b2866ec703742ac4ca~mv2.jpg/v1/fill/w_446,h_594,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_22011337f6aa46b2866ec703742ac4ca~mv2.jpg",
      name: "JUNIOR SPORT",
      price: 72,
      oldPrice: 90,
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
      {products.map((product, index) => (
        <Card key={index} {...product} />
      ))}
    </div>
  );
}
