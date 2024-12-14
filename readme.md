# **Dealers and Cars Management API (REST API)**

This project is a REST API built with **Node.js** and the **Express** framework, designed to manage car dealerships and the cars they own. The application allows performing CRUD operations on both models and is structured modularly for easy maintenance and scalability.

---

## **Main Features**

- **Dealers**: Manages dealers with information such as name, address, and a list of cars.
- **Cars**: Each dealer can have multiple cars, each with attributes such as model, horsepower (CV), and price.
- **REST API**: Separate endpoints for dealers and cars.
- **Modular structure**: Each endpoint and model is in its own separate file.
- **Configuration and server separation**: `app.js` and `server.js` files.

---

## **Prerequisites**

1. **Node.js** (version 14 or higher): Download and install from [Node.js](https://nodejs.org/).

---

## **Getting Started**

### 1. **Clone the repository**

Clone this project to your local machine:

```bash
git clone https://github.com/lruizap/dealer-car-management-api.git
```

### 2. **Install dependencies**

Navigate to the project directory and install the required dependencies:

```bash
cd dealer-car-management-api
npm install
```

### 3. **Running the application**

Start the server:

```bash
node ./src/server.js
```

The server will start and be accessible at `http://localhost:8080`.

---

## **API Endpoints**

### **Dealers**

- **GET /concesionarios**  
  Returns a list of all dealers.

- **POST /concesionarios**  
  Creates a new dealer.  
  Example request body:

  ```json
  {
    "nombre": "Dealer Name",
    "direccion": "Dealer Address"
  }
  ```

- **GET /concesionarios/:id**  
  Retrieves a specific dealer by ID.

- **PUT /concesionarios/:id**  
  Updates an existing dealer by ID.  
  Example request body:

  ```json
  {
    "nombre": "Updated Dealer Name",
    "direccion": "Updated Address"
  }
  ```

- **DELETE /concesionarios/:id**  
  Deletes a specific dealer by ID.

### **Cars**

- **GET /concesionarios/:id/coches**  
  Retrieves all cars from a specific dealer.

- **POST /concesionarios/:id/coches**  
  Adds a new car to a specific dealer.  
  Example request body:

  ```json
  {
    "modelo": "Car Model",
    "cv": 120,
    "precio": 25000
  }
  ```

- **GET /concesionarios/:id/coches/:cocheId**  
  Retrieves a specific car from a dealer by car ID.

- **PUT /concesionarios/:id/coches/:cocheId**  
  Updates a specific car from a dealer by car ID.  
  Example request body:

  ```json
  {
    "modelo": "Updated Car Model",
    "cv": 130,
    "precio": 27000
  }
  ```

- **DELETE /concesionarios/:id/coches/:cocheId**  
  Deletes a specific car from a dealer by car ID.

---

## **Project Structure**

```plaintext
/src
  ├── app.js             # Main Express app configuration
  ├── server.js          # Starts the server
  ├── models
  │   ├── concesionarios.js  # Data model for dealers
  │   └── coches.js          # Data model for cars
  ├── routes
  │   ├── concesionarios
  │   │   ├── getConcesionarios.js
  │   │   ├── postConcesionarios.js
  │   │   ├── getConcesionarioById.js
  │   │   ├── putConcesionarioById.js
  │   │   └── deleteConcesionarioById.js
  │   └── coches
  │       ├── getCoches.js
  │       ├── postCoches.js
  │       ├── getCocheById.js
  │       ├── putCocheById.js
  │       └── deleteCocheById.js
  ├── index.js           # Routes and routing configuration
```
