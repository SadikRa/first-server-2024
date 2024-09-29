const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

const fakeUsers = [
  {
    id: 1,
    name: "John Doe",
    email: "johndoe@example.com",
    phone: "555-123-4567",
    address: {
      street: "123 Main St",
      city: "New York",
      state: "NY",
      zip: "10001",
    },
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "janesmith@example.com",
    phone: "555-987-6543",
    address: {
      street: "456 Oak Ave",
      city: "Los Angeles",
      state: "CA",
      zip: "90001",
    },
  },
  {
    id: 3,
    name: "Samuel Johnson",
    email: "samjohnson@example.com",
    phone: "555-321-7654",
    address: {
      street: "789 Pine Rd",
      city: "Chicago",
      state: "IL",
      zip: "60601",
    },
  },
  {
    id: 4,
    name: "Alice Brown",
    email: "alicebrown@example.com",
    phone: "555-654-0987",
    address: {
      street: "321 Cedar St",
      city: "Miami",
      state: "FL",
      zip: "33101",
    },
  },
  {
    id: 5,
    name: "Michael Davis",
    email: "michaeldavis@example.com",
    phone: "555-876-5432",
    address: {
      street: "654 Maple Dr",
      city: "Houston",
      state: "TX",
      zip: "77001",
    },
  },
  {
    id: 6,
    name: "Emily Wilson",
    email: "emilywilson@example.com",
    phone: "555-789-1234",
    address: {
      street: "987 Birch Blvd",
      city: "Seattle",
      state: "WA",
      zip: "98101",
    },
  },
  {
    id: 7,
    name: "Daniel White",
    email: "danielwhite@example.com",
    phone: "555-456-7890",
    address: {
      street: "246 Aspen Ln",
      city: "Denver",
      state: "CO",
      zip: "80201",
    },
  },
  {
    id: 8,
    name: "Sophia Martinez",
    email: "sophiamartinez@example.com",
    phone: "555-543-2109",
    address: {
      street: "135 Elm St",
      city: "Phoenix",
      state: "AZ",
      zip: "85001",
    },
  },
  {
    id: 9,
    name: "Matthew Garcia",
    email: "matthewgarcia@example.com",
    phone: "555-210-9876",
    address: {
      street: "369 Spruce Dr",
      city: "Austin",
      state: "TX",
      zip: "73301",
    },
  },
  {
    id: 10,
    name: "Isabella Clark",
    email: "isabellaclark@example.com",
    phone: "555-098-7654",
    address: {
      street: "159 Willow Rd",
      city: "San Francisco",
      state: "CA",
      zip: "94101",
    },
  },
];

app.get("/", (req, res) => {
  res.send("send the data to client");
});


app.get('/users', (req, res) => {
    res.send(fakeUsers)
})

app.listen(port, () => {
  console.log(`server running on PORT: ${port}`);
});
