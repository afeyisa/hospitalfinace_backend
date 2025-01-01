# Finance Management System

This is a Finance Management System built with Node.js, Express, and MongoDB. The system handles various financial operations such as employee salary payments, expense tracking, revenue management, and more.

## Project Structure
. ├── .dockerignore ├── .env ├── .gitignore ├── controllers/ │ └── controllers.js ├── docker.compose.yml ├── Dockerfile ├── Finance/ │ └── finance.js ├── models/ │ └── Models.js ├── package.json ├── router/ │ └── Router.js ├── server.js

## Getting Started

### Prerequisites

- Node.js
- Docker
- MongoDB

### Installation

1. Clone the repository:

```sh
git clone https://github.com/afeyisa/hospitalfinace_backend
```
```sh
cd hospitalfinace_backend
```
2. Install the dependencies:
```sh
npm install
```
3. Create a ```.env ``` file in the root directory and add the following environment variables:

- PORT=3000
- database=mongodb://localhost:27017/Tina_Hospital

### Running the Application
### Using Docker
1. Build and run the Docker containers:
```sh
docker-compose up --build
```
2. The application will be available at ``` http://localhost:3000 ```

### Without Docker
1. Start the MongoDB server
2. Start the application
```sh
node server.js
```
3. The application will be available at ``` http://localhost:3000 ```


## API Endpoints
### Employee Management
- GET /api/v1/salary - Get all employees
- POST /api/v1/salary - Record  employee payment salary
- PATCH /api/v1/salary - Update employee information
- GET /api/v1/paidsalary - Get all paid salaries

### Expense Management
- GET /api/v1/expenses - Get all expenses
- POST /api/v1/expenses - Add a new expense

### Revenue Management
- GET /api/v1/revenue - Get all revenue records

### Product Management
- GET /api/v1/soldproduct - Get all sold products

### Service Management
- GET /api/v1/services - Get all given services

### Models
#### Employee Schema
- [name: String, required](./models/Models.js)
employeeID: String, unique
salary: Number, default 0
role: String
bonus: Number, default 0
currentMonthPenalty: Number, default 0
outstandingDebt: Number, default 0
bankName: String
bankAccountNumber: Number
onleave: Boolean, default false
isPaid: Boolean, default false