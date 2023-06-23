import { createServer, Model } from "miragejs";

createServer({
  models: {
    item: Model,
    product: Model,
  },

  seeds(server) {
    const itemData = [
      [
        { name: "week1", users: 200, guests: 250 },
        { name: "week2", users: 200, guests: 150 },
        { name: "week3", users: 800, guests: 250 },
        { name: "week4", users: 100, guests: 50 },
      ],
      [
        { name: "week5", users: 600, guests: 100 },
        { name: "week6", users: 300, guests: 350 },
        { name: "week7", users: 400, guests: 450 },
        { name: "week8", users: 900, guests: 550 },
      ],
      [
        { name: "week9", users: 150, guests: 200 },
        { name: "week10", users: 400, guests: 300 },
        { name: "week11", users: 700, guests: 350 },
        { name: "week12", users: 250, guests: 100 },
      ],
    ];

    const productData = [
      [
        { name: "Basic Tees", value: 400, percentage: 33.33 },
        { name: "Custom Short Pants", value: 300, percentage: 33.33 },
        { name: "Super Hoodies", value: 300, percentage: 33.34 },
      ],
      [
        { name: "Awesome Socks", value: 200, percentage: 25 },
        { name: "Cool Caps", value: 250, percentage: 25 },
        { name: "Stylish Shoes", value: 350, percentage: 50 },
      ],
      [
        { name: "Trendy Bags", value: 150, percentage: 20.67 },
        { name: "Fancy Belts", value: 200, percentage: 22.22 },
        { name: "Chic Sunglasses", value: 150, percentage: 23.78 },
      ],
    ];

    itemData.forEach((weekArray, index) => {
      server.create("item", { id: `week${index + 1}`, items: weekArray });
    });

    server.create("product", { id: "1", items: productData[0] });
    server.create("product", { id: "2", items: productData[1] });
    server.create("product", { id: "3", items: productData[2] });
  },

  routes() {
    this.namespace = "api";

    this.get("/items", (schema, request) => {
      return schema.items.all();
    });

    this.get("/products", (schema, request) => {
      return schema.products.all();
    });
  },
});
