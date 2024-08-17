## Project: Step 1 & Step 2 Solutions

### Overview

This repository contains two solutions:

1. **Step 1:** A solution to the algorithm problem "Median of Two Sorted Arrays".
2. **Step 2:** A RESTful API for user authentication using **JSON Web Tokens (JWT)** with **Express** and **MongoDB**.

### Table of Contents

- [Step 1: Median of Two Sorted Arrays](#step-1-median-of-two-sorted-arrays)
- [Step 2: JWT Authentication System](#step-2-jwt-authentication-system)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)

---

### Step 1: Median of Two Sorted Arrays

#### Problem Description

Given two sorted arrays, the task is to find the median of the combined sorted array. The algorithm should have a time complexity of O(log(m + n)).

#### Solution Files

- **`median.js`**

#### Running the Solution

You can run the `median.js` file to execute the median solution for various input arrays.

```bash
node median.js
```

#### Example Usage

```bash
Input: nums1 = [1, 2], nums2 = [3, 4]
Output: 2.5
```

---

### Step 2: JWT Authentication System

#### Project Structure

This is a simple RESTful API built with **Express.js** and **MongoDB** to demonstrate JWT-based user authentication. Users can register, log in, and access protected routes. The API supports role-based access control.

#### Features

- User registration with hashed passwords
- User login with JWT token generation
- Protected routes accessible only with valid tokens
- Admin-only routes for role-based access control

#### Endpoints

- **POST `/api/auth/register`**: Register a new user.
- **POST `/api/auth/login`**: Login a user and return a JWT token.
- **GET `/api/auth/admin`**: Access a protected admin-only route.

---

### Prerequisites

- **Node.js** installed on your machine.
- **MongoDB** setup. You can use a local instance or a cloud service
- **Git** to clone the repository.

---

### Installation

1. Clone the repository:

```bash
git clone https://github.com/Arome8240/blockfuse-test.git
cd project-repo
```

2. Install dependencies:

```bash
npm install
```

3. Set up environment variables:

Create a `.env` file in the root of the project with the following content:

```bash
MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_jwt_secret_key
PORT=5000 # Optional: You can choose a different port if needed
```

Ensure you replace `your_mongo_connection_string` with the URI of your MongoDB instance and `your_jwt_secret_key` with a secure secret key for JWT token generation.

---

### Usage

#### Step 1: Running Median of Two Sorted Arrays Solution

To run the algorithm:

1. Open the terminal and navigate to the project directory.
2. Run the following command:

```bash
node median.js
```

This will execute the solution for the "Median of Two Sorted Arrays" problem. Modify the inputs in the `median.js` file to test different cases.

#### Step 2: Running JWT Authentication API

To run the API:

1. Ensure MongoDB is running either locally or in the cloud.
2. Start the API server:

```bash
node auth.js
```

3. The API should now be running on `http://localhost:5000`.

---

### API Endpoints

- **POST `/api/auth/register`**

  - Register a new user by sending a `POST` request with a JSON body containing `username`, `email`, `password`, and `role`.

  Example request:

  ```json
  {
    "username": "john",
    "email": "john@example.com",
    "password": "password123",
    "role": "admin"
  }
  ```

- **POST `/api/auth/login`**

  - Log in a user by sending a `POST` request with `email` and `password` in the request body. A valid JWT token is returned upon success.

  Example request:

  ```json
  {
    "email": "john@example.com",
    "password": "password123"
  }
  ```

- **GET `/api/auth/admin`**
  - Access a protected route by including the JWT token in the `Authorization` header as `Bearer <token>`. Only accessible to users with the role of `admin`.
