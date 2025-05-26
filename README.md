# MERN Social Media Application

A full-stack social media application built with the MERN stack (MongoDB, Express.js, React.js, Node.js).

## Technologies Used

- Frontend:

  - React.js
  - Redux Toolkit
  - Material-UI
  - Axios

- Backend:
  - Node.js
  - Express.js
  - MongoDB
  - Mongoose
  - JWT Authentication


## Features

 User Authentication– Implemented secure login signup using JWT-based authentication.
 Like Interaction System– Developed a real-time like feature with MongoDB Express.
 State Management– Used Redux Toolkit for efficient state handling.
 RESTful API– Built scalable REST APIs with Express MongoDB for handling users posts.
 Implemented dark mode and light mode with context api

## Prerequisites

- Node.js (v14 or higher)
- MongoDB
- npm or yarn

## Setup Instructions

### 1. Clone the repository

```bash
git clone <repository-url>
cd mern-social-media-master
```

### 2. Backend Setup

```bash
cd server
npm install --legacy-peer-deps
```

Create a `.env` file in the server directory with the following variables:

```
PORT=3001
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

### 3. Database Seeding

To populate the database with initial data, run:

```bash
node seed.js
```

### 4. Frontend Setup

```bash
cd ../client
npm install
```

### 5. Running the Application

1. Start the backend server:

```bash
cd server
npm start
```

2. In a new terminal, start the frontend:

```bash
cd client
npm start
```

The application will be available at `http://localhost:3000`



### Demo

[![Watch the demo]](https://drive.google.com/file/d/1hsF-tmuw5-L8DRtK9Ci1rQaahNxS9n2R/view?usp=sharing)





## Contributing

Feel free to submit issues and enhancement requests!
