let initialItems = [
  {
    description: "A quality Car!",
    price: 100000,
    image: "/car.jpg",
    id: "car",
    sellerId: "abcd",
    details: 10,
    counter: 0
  },
  {
    description: "A quality Boat!",
    price: 90000,
    image: "/boat.jpg",
    id: "boat",
    sellerId: "dcba",
    details: 9,
    counter: 0
  },
  {
    description: "A quality Watch!",
    price: 20000,
    image: "/watch.jpg",
    id: "watch",
    sellerId: "1234",
    details: 5,
    counter: 0
  },
  {
    description: "A quality Bag!",
    price: 200,
    image: "/bag.jpg",
    id: "bag",
    sellerId: "1234",
    details: 3,
    counter: 0
  },
  {
    description: "A quality Bike!",
    price: 2000,
    image: "/bike.jpg",
    id: "bike",
    sellerId: "1234",
    details: 1,
    counter: 0
  }
];

let initialSellers = [
  { id: "abcd", name: "Charles", rating: "5 stars" },
  { id: "dcba", name: "David", rating: "2 stars" },
  { id: "1234", name: "Nirojan", rating: "10 stars" }
];

let reviews = [
  { review: "A great bike", itemId: "bike", reviewerId: "Billy" },
  { review: "A great watch", itemId: "watch", reviewerId: "Billy" },
  { review: "A great bag", itemId: "bag", reviewerId: "Bobby" },
  { review: "A horrid boat", itemId: "boat", reviewerId: "Bobby" },
  { review: "An okay car", itemId: "car", reviewerId: "Sam" },
  { review: "This watch I like.", itemId: "watch", reviewerId: "Sam" }
];

let reviewers = [
  { id: "Billy", name: "Billy" },
  { id: "Bobby", name: "Bobby" },
  { id: "Sam", name: "Sam" }
];

export { initialItems, initialSellers, reviews, reviewers };
