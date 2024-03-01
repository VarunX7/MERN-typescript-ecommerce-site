import bcrypt from 'bcryptjs'
import { Product } from "./models/productModel";
import { User } from './models/userModel'

export const sampleProducts: Product[]=[
    {
        name: 'Nike slim shirt',
        slug: "nike-slim-shirt",
        category: 'Shirts',
        image: '../images/p1.jpg',
        price: 120,
        brand: "nike",
        countInStock: 100,
        description: "A beautiful shirt",
        rating: 4.5,
        numReviews: 10,
    },
    {
        name: 'Nike shirt',
        slug: "nike-shirt",
        category: 'Shirts',
        image: '../images/p4.jpg',
        price: 120,
        brand: "nike",
        countInStock: 100,
        description: "A beautiful shirt",
        rating: 4,
        numReviews: 10,
    },
    {
        name: 'Nike slim ',
        slug: "shirt",
        category: 'Shirts',
        image: '../images/p3.jpg',
        price: 120,
        brand: "nike",
        countInStock: 0,
        description: "A beautiful shirt",
        rating: 4,
        numReviews: 10,
    },
    {
        name: 'slim shirt',
        slug: "slim-shirt",
        category: 'Shirts',
        image: '../images/p2.jpg',
        price: 120,
        brand: "nike",
        countInStock: 100,
        description: "A beautiful shirt",
        rating: 4.5,
        numReviews: 10,
    },
]

export const sampleUsers: User[] = [
    {
      name: 'Joe',
      email: 'admin@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'John',
      email: 'user@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ]