# Product API

A simple REST API for managing products, built with **Node.js**, **Express**, and **MongoDB**.

## Features

- CRUD operations for products
- JSON-based API responses
- MongoDB connection using Mongoose

## Tech Stack

- Node.js
- Express
- MongoDB + Mongoose

## Installation

```zsh
# 1. Clone the repository
git clone https://github.com/bitna-dev/crash.git
cd crash

# 2. Install dependencies
npm install

# 3. Create `.env` file in the root directory and add:
# (replace with your actual MongoDB connection string)
echo "MONGO_URI=your_mongodb_connection_string" > .env
echo "PORT=3000" >> .env

# 4. Run the server
npm start

# Server will run at:
# http://localhost:3000
```
