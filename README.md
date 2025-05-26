# MERN Social Media Application

A full-stack social media application built with the MERN stack (MongoDB, Express.js, React.js, Node.js).

## Features

- User authentication and authorization
- Create, read, update, and delete posts
- Like and comment on posts
- User profiles
- Follow/unfollow users
- Real-time updates

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

## Demo Video

<div align="center">
  <video width="800" height="450" controls autoplay>
    <source src="recording.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>
</div>

This video demonstrates the following features:

- User registration and login
- Creating and managing posts
- Social interactions (likes, comments)
- User profile management
- Following/unfollowing users

## Project Structure

```
mern-social-media-master/
├── client/                 # React frontend
│   ├── public/
│   └── src/
├── server/                 # Node.js backend
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   └── data/
└── recording.mkv          # Demo video
```

## Contributing

Feel free to submit issues and enhancement requests!
