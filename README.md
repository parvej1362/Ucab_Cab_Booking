🚖 UCAB – Cab Booking Platform

UCAB is a full-stack cab booking web application built using the MERN Stack (MongoDB, Express.js, React.js, Node.js).
It allows users to book rides easily, track drivers in real time, and manage ride history, while drivers and admins have dedicated dashboards for managing rides and operations.

The platform focuses on simplicity, real-time interaction, and secure role-based access.

📌 Features
👤 User Features
- User registration and login
- Book cabs instantly
- View available cab types
- Fare estimation before booking
- Real-time ride tracking
- Secure online payment
- View booking history and receipts

🚗 Driver Features
- Login to view ride requests
- Accept or reject ride bookings
- Update ride status (Started / Completed)
- Track ride history
- View earnings

🛠 Admin Features
- Manage users and drivers
- Add / Edit / Remove cab categories
- Monitor bookings and payments
- View reports and analytics
- Manage platform operations

🏗 Tech Stack
Frontend
- React.js
- React Router
- Axios
- Bootstrap

Backend
- Node.js
- Express.js

Database
- MongoDB
- Mongoose ODM

Authentication & Security
- JWT Authentication
- bcryptjs password encryption

Tools
- Postman (API testing)
- Git & GitHub (version control)

⚙️ Environment Setup
1️⃣ Install Required Software
- Node.js (v16+)
- npm
- MongoDB

2️⃣ Clone the Repository
```bash
git clone https://github.com/yourusername/ucab-cab-booking.git
cd ucab-cab-booking
```

3️⃣ Install Dependencies
Backend
```bash
cd server
npm install
```
Frontend
```bash
cd client/Cab_Booking_System
npm install
```

4️⃣ Setup Environment Variables
Create a .env file in the server folder.
Example:
```env
PORT=8000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

5️⃣ Run the Project
Backend
```bash
npm run dev
```
Frontend
```bash
npm start
```

🏛 System Architecture
The system follows a layered architecture.

1️⃣ Client Layer (React.js)
Handles the user interface and user interactions.
Includes:
- Login / Signup pages
- Booking interface
- Cab selection
- Ride tracking screen

2️⃣ API Layer (Express.js)
Acts as middleware between frontend and backend logic.
Example APIs:
- POST /api/rides/book
- GET /api/users/:id
- PUT /api/rides/:id
- DELETE /api/rides/:id

3️⃣ Service Layer
Contains core business logic such as:
- Fare calculation
- Driver matching
- Ride status management
- Real-time ride tracking

4️⃣ Data Access Layer (MongoDB + Mongoose)
Responsible for:
- Database queries
- Data validation
- Schema modeling

🔄 Data Flow (Ride Booking)
1️⃣ User selects pickup and drop location.
2️⃣ React frontend sends request: POST /api/rides/book
3️⃣ Backend processes request.
4️⃣ System finds nearby drivers.
5️⃣ Ride details are stored in MongoDB.
6️⃣ Driver receives ride request.
7️⃣ Ride status updates in real time.

👥 Roles and Responsibilities
User (Rider)
- Register/Login
- Book rides
- Track cab in real time
- View ride history
- View receipts

Driver
- Accept or reject ride requests
- Start and complete rides
- View ride history
- Track earnings

Admin
- Manage users and drivers
- Monitor bookings
- Manage cab inventory
- Generate reports

🗂 Backend Folder Structure
```
server
│
├── controllers
│   ├── adminController.js
│   ├── bookingController.js
│   ├── carController.js
│   └── userController.js
│
├── db
│   └── config.js
│
├── middlewares
│   ├── authMiddleware.js
│   └── multer.js
│
├── models
│   ├── AdminSchema.js
│   ├── UserSchema.js
│   ├── CarSchema.js
│   └── MyBookingSchema.js
│
├── routes
│   ├── adminRoutes.js
│   ├── userRoutes.js
│   ├── carRoutes.js
│   └── bookingRoutes.js
│
├── uploads
│
└── server.js
```

🗄 Database Design
MongoDB collections:
- Users
- Drivers
- Cars
- Bookings
- Payments

Relationships:
- User → Books → Ride
- Ride → Assigned to → Driver
- Ride → Linked with → Payment

📊 Database Schemas
User Schema
Stores:
- Name
- Email
- Password
- Phone
- Role

Admin Schema
Stores:
- Admin credentials
- Platform access rights

Car Schema
Stores:
- Car name
- Model
- Image
- Seat capacity
- Price per km

Booking Schema
Stores:
- User ID
- Car ID
- Pickup location
- Drop location
- Ride status
- Payment details

🎨 Frontend Components
User Side
- Home
- Login
- Register
- Uhome
- Cabs
- BookCab
- MyBookings
- Unav

Admin Side
- Alogin
- Aregister
- Ahome
- Anav
- Users
- UserEdit
- Bookings
- Acabs
- Acabedit
- Addcar

🧪 Testing & Validation
The application was tested for:
- CRUD operations
- Authentication flows
- Booking workflows
- Payment validation
- Responsive UI

Tools used:
- Postman
- Browser developer tools

📈 Monitoring & Optimization
- MongoDB query optimization
- Express middleware logging
- Improved route modularization
- Better error handling

🎯 Project Outcome
This project demonstrates:
✔ MERN stack full-stack development
✔ Role-based authentication
✔ Real-time ride booking workflow
✔ RESTful API development
✔ Secure backend architecture
✔ Responsive frontend design

🚀 Future Enhancements
- Real-time GPS tracking using Maps API
- AI-based driver matching
- In-app chat between driver and user
- Ride scheduling
- Push notifications
- Mobile app integration