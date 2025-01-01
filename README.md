# Finance Management System

This is a Finance Management System built with Node.js, Express, and MongoDB. The system handles various financial operations such as employee salary payments, expense tracking, revenue management, and more.
This project was developed as part of a school project called Hospital Management System, and I, Feyisa Kenenisa, contributed to its development.

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

```sh
PORT=3000
database=mongodb://localhost:27017/Tina_Hospital
```
### Running the Application
### Using Docker
1. Build and run the Docker containers:
```sh
docker-compose up --build
```
2. The application will be available at ``` http://localhost:3000 ```

### Without Docker
1. Start the MongoDB server
```sh
mongdb
```
2. Start the application
```sh
node server.js
```
3. The application will be available at ``` http://localhost:3000 ```


## [API Endpoints](./router/Router.js)
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

## [Models](./models/Models.js)

#### [Employee Schema](./models/Models.js)
- name: String, required
- employeeID: String, unique
- salary: Number, default 0
- role: String
- bonus: Number, default 0
- currentMonthPenalty: Number, default 0
- outstandingDebt: Number, default 0
- bankName: String
- bankAccountNumber: Number
- onleave: Boolean, default false
- isPaid: Boolean, default false

#### [Expense Schema](./models/Models.js)
- year: Number
- month: Number
- Category: String
- Bankname: String
- transactionId: String, default null

#### [Monthly Revenue Record Schema](./models/Models.js)
- year: Number
- month: Number
- category: String
- amount: Number, default 0

### [Paid Salary Schema](./models/Models.js)
- name: String
- employeeID: String
- paidAmount: Number
- dateOfTransaction: Date
- bankName: String
- bankAccountNumber: Number
- transactionID: String

## Author
Feyisa Kenenisa

## License
This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.