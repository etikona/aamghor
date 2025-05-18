"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const products = [
  {
    name: "Himsagar",
    quantity: "10 KG",
    price: 500,
    image:
      "https://i.pinimg.com/736x/63/ce/80/63ce804d391a2ae24cdeecb11d755b07.jpg",
  },
  {
    name: "Langra",
    quantity: "8 KG",
    price: 450,
    image:
      "https://i.pinimg.com/736x/3b/08/c3/3b08c3dfcdd87c5f345e19f7b58e354e.jpg",
  },
  {
    name: "Gopalbhog",
    quantity: "5 KG",
    price: 400,
    image:
      "https://i.pinimg.com/736x/61/60/8b/61608b0ae4ff424d40be8629d54d48fa.jpg",
  },
  {
    name: "Fazli",
    quantity: "12 KG",
    price: 600,
    image:
      "https://i.pinimg.com/736x/9f/de/2f/9fde2f0c5805a3fc926709e4115f234c.jpg",
  },
  {
    name: "Amrapali",
    quantity: "7 KG",
    price: 420,
    image:
      "https://i.pinimg.com/736x/ff/29/09/ff29090184e670ef50044766daf8e8f9.jpg",
  },
  {
    name: "Khirsapat",
    quantity: "9 KG",
    price: 480,
    image:
      "https://i.pinimg.com/736x/ae/91/f5/ae91f576a76f5432a84927b708a8fec6.jpg",
  },
  {
    name: "Ashwina",
    quantity: "6 KG",
    price: 430,
    image:
      "https://i.pinimg.com/736x/46/af/ec/46afec126ab72f4af162dfbc939ac851.jpg",
  },
  {
    name: "Lakhna",
    quantity: "10 KG",
    price: 500,
    image:
      "https://i.pinimg.com/736x/c1/c0/30/c1c0302551ea28764d5bba416ab7ffc7.jpg",
  },
  {
    name: "Surma Fazli",
    quantity: "8 KG",
    price: 460,
    image:
      "https://i.pinimg.com/736x/14/39/ed/1439ed579aac90908b8d8741bcfe4818.jpg",
  },
  {
    name: "Haribhanga",
    quantity: "10 KG",
    price: 550,
    image:
      "https://i.pinimg.com/736x/3c/bd/f9/3cbdf9ab154dac0097c28cb0c293a29b.jpg",
  },
  {
    name: "Khirsha",
    quantity: "6 KG",
    price: 410,
    image:
      "https://i.pinimg.com/736x/b5/7e/54/b57e54a4d2302a8daf587bb985a8ea20.jpg",
  },
  {
    name: "Banganapalli",
    quantity: "7 KG",
    price: 470,
    image:
      "https://i.pinimg.com/736x/a8/b6/9b/a8b69b02c44c169b99c7dd857783960e.jpg",
  },
  {
    name: "Guti",
    quantity: "5 KG",
    price: 390,
    image:
      "https://i.pinimg.com/736x/74/ff/24/74ff2408adc3c1063751a8e809cd20fb.jpg",
  },
  {
    name: "Neelumbari",
    quantity: "6 KG",
    price: 430,
    image:
      "https://i.pinimg.com/736x/9e/3a/b6/9e3ab618ae779872ab99cd62af9990c8.jpg",
  },
  {
    name: "Rani Pasand",
    quantity: "9 KG",
    price: 490,
    image:
      "https://i.pinimg.com/736x/bb/07/33/bb0733912c1b0a42b4922b5f0ed42193.jpg",
  },
];

const ProductsPage = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-10 bg-gradient-to-br from-yellow-100 via-white to-green-50">
      <h2 className="text-3xl font-bold mb-8 text-center text-green-800">
        Our Mango Products
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product, index) => (
          <Card
            key={index}
            className="flex flex-col justify-between rounded-xl shadow-md hover:shadow-lg h-full"
          >
            <CardContent className="p-4 flex flex-col h-full">
              <div>
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <h3 className="text-lg font-semibold text-gray-800 mb-1">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-600 mb-1">
                  Quantity: {product.quantity}
                </p>
                <p className="text-sm text-gray-800 font-medium mb-4">
                  Price: ৳{product.price}
                </p>
              </div>
              <div className="mt-auto">
                <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                  Add to Cart
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default ProductsPage;
