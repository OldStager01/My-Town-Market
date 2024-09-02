const businessList = [
  {
    businessName: "Chaiwala's Tea Corner",
    category: "Food",
    address: "123, Masala Street, Mumbai",
    description: "Authentic Indian tea and snacks",
    rating: 4.5,
    businessImage:
      "https://www.shutterstock.com/image-photo/grocery-kirana-store-shopkeeper-packing-260nw-2095760410.jpg",
    images: [
      "https://www.shutterstock.com/image-photo/kolkata-india-march-04-2017-260nw-594218129.jpg",
      "https://st2.depositphotos.com/33041278/46537/i/450/depositphotos_465379820-stock-photo-haridwar-uttarakhand-india-february-2021.jpg",
    ],
    owner: "John Doe",
    phone: "+911234567890",
    email: "abc@xyz.com",
    website: "website.com",
    products: [
      {
        name: "Masala Chai",
        details: "Spiced tea",
        img: "https://t4.ftcdn.net/jpg/02/67/53/99/360_F_267539917_feCahdMMeJTXbmRJzMIbUOBWKD8ifm3A.jpg",
      },
      {
        name: "Samosas",
        details: "Deep-fried savory pastries",
        img: "https://t4.ftcdn.net/jpg/02/67/53/99/360_F_267539917_feCahdMMeJTXbmRJzMIbUOBWKD8ifm3A.jpg",
      },
      {
        name: "Vada Pav",
        details: "Spicy potato burger",
        img: "https://t4.ftcdn.net/jpg/02/67/53/99/360_F_267539917_feCahdMMeJTXbmRJzMIbUOBWKD8ifm3A.jpg",
      },
    ],
  },
  {
    businessName: "Ayurvedic Beauty Haven",
    category: "Skincare",
    address: "456, Herbal Lane, Jaipur",
    description: "Natural skincare products",
    rating: 4.8,
    businessImage:
      "https://www.shutterstock.com/image-photo/grocery-kirana-store-shopkeeper-packing-260nw-2095760410.jpg",
    images: [
      "https://www.shutterstock.com/image-photo/kolkata-india-march-04-2017-260nw-594218129.jpg",
      "https://st2.depositphotos.com/33041278/46537/i/450/depositphotos_465379820-stock-photo-haridwar-uttarakhand-india-february-2021.jpg",
    ],
    owner: "Alice Smith",
    phone: "+911234567891",
    email: "alice@example.com",
    website: "alicewebsite.com",
    products: [
      {
        name: "Turmeric Face Mask",
        details: "Brightening mask",
        img: "https://t4.ftcdn.net/jpg/02/67/53/99/360_F_267539917_feCahdMMeJTXbmRJzMIbUOBWKD8ifm3A.jpg",
      },
      {
        name: "Neem Soap",
        details: "Antibacterial soap",
        img: "https://t4.ftcdn.net/jpg/02/67/53/99/360_F_267539917_feCahdMMeJTXbmRJzMIbUOBWKD8ifm3A.jpg",
      },
      {
        name: "Sandalwood Cream",
        details: "Moisturizing cream",
        img: "https://t4.ftcdn.net/jpg/02/67/53/99/360_F_267539917_feCahdMMeJTXbmRJzMIbUOBWKD8ifm3A.jpg",
      },
    ],
  },
  {
    businessName: "Silk Saree Emporium",
    category: "TBD",
    address: "101, Silk Road, Varanasi",
    description: "Exquisite silk sarees",
    rating: 4.9,
    businessImage:
      "https://www.shutterstock.com/image-photo/grocery-kirana-store-shopkeeper-packing-260nw-2095760410.jpg",
    images: [
      "https://www.shutterstock.com/image-photo/kolkata-india-march-04-2017-260nw-594218129.jpg",
      "https://st2.depositphotos.com/33041278/46537/i/450/depositphotos_465379820-stock-photo-haridwar-uttarakhand-india-february-2021.jpg",
    ],
    owner: "Bob Johnson",
    phone: "+911234567892",
    email: "bob@example.com",
    website: "bobwebsite.com",
    products: [
      {
        name: "Banarasi Silk Saree",
        details: "Traditional handwoven saree",
        img: "https://t4.ftcdn.net/jpg/02/67/53/99/360_F_267539917_feCahdMMeJTXbmRJzMIbUOBWKD8ifm3A.jpg",
      },
      {
        name: "Kanchipuram Silk Saree",
        details: "Rich silk saree",
        img: "https://t4.ftcdn.net/jpg/02/67/53/99/360_F_267539917_feCahdMMeJTXbmRJzMIbUOBWKD8ifm3A.jpg",
      },
      {
        name: "Tussar Silk Saree",
        details: "Natural silk saree",
        img: "https://t4.ftcdn.net/jpg/02/67/53/99/360_F_267539917_feCahdMMeJTXbmRJzMIbUOBWKD8ifm3A.jpg",
      },
    ],
  },
  {
    businessName: "Spices Galore",
    category: "Food",
    address: "567, Spice Market, Kochi",
    description: "Aromatic Indian spices",
    rating: 4.6,
    businessImage:
      "https://www.shutterstock.com/image-photo/grocery-kirana-store-shopkeeper-packing-260nw-2095760410.jpg",
    images: [
      "https://www.shutterstock.com/image-photo/kolkata-india-march-04-2017-260nw-594218129.jpg",
      "https://st2.depositphotos.com/33041278/46537/i/450/depositphotos_465379820-stock-photo-haridwar-uttarakhand-india-february-2021.jpg",
    ],
    owner: "Charlie Brown",
    phone: "+911234567893",
    email: "charlie@example.com",
    website: "charliewebsite.com",
    products: [
      {
        name: "Garam Masala",
        details: "Spice blend",
        img: "https://t4.ftcdn.net/jpg/02/67/53/99/360_F_267539917_feCahdMMeJTXbmRJzMIbUOBWKD8ifm3A.jpg",
      },
      {
        name: "Turmeric Powder",
        details: "Golden spice",
        img: "https://t4.ftcdn.net/jpg/02/67/53/99/360_F_267539917_feCahdMMeJTXbmRJzMIbUOBWKD8ifm3A.jpg",
      },
      {
        name: "Cinnamon Sticks",
        details: "Aromatic spice",
        img: "https://t4.ftcdn.net/jpg/02/67/53/99/360_F_267539917_feCahdMMeJTXbmRJzMIbUOBWKD8ifm3A.jpg",
      },
    ],
  },
  {
    businessName: "Pani Puri Paradise",
    category: "Food",
    address: "234, Golgappa Lane, Kolkata",
    description: "Street-style pani puri",
    rating: 4.4,
    businessImage:
      "https://www.shutterstock.com/image-photo/grocery-kirana-store-shopkeeper-packing-260nw-2095760410.jpg",
    images: [
      "https://www.shutterstock.com/image-photo/kolkata-india-march-04-2017-260nw-594218129.jpg",
      "https://st2.depositphotos.com/33041278/46537/i/450/depositphotos_465379820-stock-photo-haridwar-uttarakhand-india-february-2021.jpg",
    ],
    owner: "Diana Lee",
    phone: "+911234567894",
    email: "diana@example.com",
    website: "dianawebsite.com",
    products: [
      {
        name: "Pani Puri",
        details: "Tangy snack",
        img: "https://t4.ftcdn.net/jpg/02/67/53/99/360_F_267539917_feCahdMMeJTXbmRJzMIbUOBWKD8ifm3A.jpg",
      },
      {
        name: "Bhel Puri",
        details: "Crispy chaat",
        img: "https://t4.ftcdn.net/jpg/02/67/53/99/360_F_267539917_feCahdMMeJTXbmRJzMIbUOBWKD8ifm3A.jpg",
      },
      {
        name: "Dahi Puri",
        details: "Yogurt-filled snack",
        img: "https://t4.ftcdn.net/jpg/02/67/53/99/360_F_267539917_feCahdMMeJTXbmRJzMIbUOBWKD8ifm3A.jpg",
      },
    ],
  },
  {
    businessName: "Handloom Treasures",
    category: "TBD",
    address: "789, Weaving Lane, Hyderabad",
    description: "Artisanal handwoven textiles",
    rating: 4.7,
    businessImage:
      "https://www.shutterstock.com/image-photo/grocery-kirana-store-shopkeeper-packing-260nw-2095760410.jpg",
    images: [
      "https://www.shutterstock.com/image-photo/kolkata-india-march-04-2017-260nw-594218129.jpg",
      "https://st2.depositphotos.com/33041278/46537/i/450/depositphotos_465379820-stock-photo-haridwar-uttarakhand-india-february-2021.jpg",
    ],
    owner: "Eleanor Davis",
    phone: "+911234567895",
    email: "eleanor@example.com",
    website: "eleanorwebsite.com",
    products: [
      {
        name: "Kalamkari Saree",
        details: "Block-printed saree",
        img: "https://t4.ftcdn.net/jpg/02/67/53/99/360_F_267539917_feCahdMMeJTXbmRJzMIbUOBWKD8ifm3A.jpg",
      },
      {
        name: "Ikat Dupatta",
        details: "Tie-dye scarf",
        img: "https://t4.ftcdn.net/jpg/02/67/53/99/360_F_267539917_feCahdMMeJTXbmRJzMIbUOBWKD8ifm3A.jpg",
      },
      {
        name: "Khadi Kurta",
        details: "Handspun cotton shirt",
        img: "https://t4.ftcdn.net/jpg/02/67/53/99/360_F_267539917_feCahdMMeJTXbmRJzMIbUOBWKD8ifm3A.jpg",
      },
    ],
  },
];
module.exports = businessList;
