<img width="916" height="464" alt="image" src="https://github.com/user-attachments/assets/ca8ef9ea-c470-47c9-bdc3-8355f69e63ff" />

# Workout Tracker - MERN Stack Application

A full-stack web application for tracking and managing workouts. Built with the **MERN Stack** (MongoDB, Express, React, Node.js), this application allows users to create, read, update, and delete workout entries with a clean, intuitive interface.

---

## 📋 Table of Contents

- [Project Overview](#project-overview)
- [Tech Stack](#tech-stack)
- [Architecture](#architecture)
- [Project Structure](#project-structure)
- [Installation & Setup](#installation--setup)
- [Running the Application](#running-the-application)
- [API Documentation](#api-documentation)
- [Frontend Components](#frontend-components)
- [State Management](#state-management)
- [Database Schema](#database-schema)
- [Contributing](#contributing)

---

## 🎯 Project Overview

The **Workout Tracker** is a MERN stack application designed to help users manage their workout sessions efficiently. Users can:

- ✅ Create new workout entries (title, reps, load/weight)
- ✅ View all workouts sorted by most recent first
- ✅ View individual workout details
- ✅ Update existing workout information
- ✅ Delete workouts from the database
- ✅ Real-time updates with automatic timestamps

---

## 🛠️ Tech Stack

### Backend
- **Node.js** - JavaScript runtime for server-side development
- **Express.js v5.2.1** - Web framework for building REST APIs
- **MongoDB** - NoSQL database for data persistence
- **Mongoose v9.4.1** - ODM (Object Document Mapper) for MongoDB
- **Dotenv v17.4.2** - Environment variable management
- **Nodemon** - Development tool for auto-restarting server (dev dependency)

### Frontend
- **React v19.2.5** - UI library for building interactive user interfaces
- **React Router DOM v7.14.1** - Client-side routing
- **React Scripts v5.0.1** - Build and development tools
- **date-fns v4.1.0** - Date utility library
- **Testing Library** - Components for testing React applications

---

## 🏗️ Architecture

The application follows a **three-tier architecture** with clear separation of concerns:

```
┌─────────────────────────────────────────────────────────┐
│                    FRONTEND (React)                      │
│  - UI Components (WorkoutForm, WorkoutDetails, Navbar)  │
│  - State Management (Context API + Reducer)             │
│  - Custom Hooks (useWorkoutsContext)                    │
│  - Pages (Home)                                         │
└──────────────────────┬──────────────────────────────────┘
                       │ HTTP/REST
                       ↓
┌──────────────────────────────────────────────────────────┐
│                    BACKEND (Express)                      │
│  - Routes (/api/workouts)                               │
│  - Controllers (Business Logic)                         │
│  - Models (Mongoose Schemas)                            │
│  - Middleware (JSON parsing, Logging)                   │
└──────────────────────┬──────────────────────────────────┘
                       │ Database Protocol
                       ↓
┌──────────────────────────────────────────────────────────┐
│              DATABASE (MongoDB)                           │
│  - Collections (workouts)                               │
│  - Documents (individual workout entries)               │
└──────────────────────────────────────────────────────────┘
```

---

## 📁 Project Structure

### Backend Structure

```
backend/
├── controllers/
│   └── workoutController.js      # Business logic for workout operations
├── models/
│   └── workoutModel.js           # Mongoose schema and model definition
├── routes/
│   └── workouts.js               # Express route handlers
├── server.js                      # Main server entry point
├── package.json                   # Backend dependencies
└── package-lock.json             # Lock file for dependency versions
```

#### Backend File Descriptions

**`server.js`** - Application entry point
- Initializes Express app
- Configures middleware (JSON parsing, logging)
- Connects to MongoDB
- Mounts routes
- Starts server on specified port

**`routes/workouts.js`** - API route definitions
- `GET /api/workouts` - Retrieve all workouts
- `GET /api/workouts/:id` - Retrieve a specific workout
- `POST /api/workouts` - Create a new workout
- `PATCH /api/workouts/:id` - Update a workout
- `DELETE /api/workouts/:id` - Delete a workout

**`controllers/workoutController.js`** - Request handlers and business logic
- `getWorkouts()` - Fetches all workouts sorted by creation date (newest first)
- `getWorkout()` - Fetches a single workout by ID with validation
- `createWorkout()` - Creates new workout with field validation
- `updateWorkout()` - Updates existing workout fields
- `deleteWorkout()` - Removes a workout from database

**`models/workoutModel.js`** - Mongoose schema
- Defines workout data structure
- Specifies data types and validation rules
- Adds automatic `timestamps` (createdAt, updatedAt)

### Frontend Structure

```
frontend/
├── public/
│   ├── index.html                # Main HTML file
│   └── manifest.json             # PWA manifest
├── src/
│   ├── pages/
│   │   └── Home.js              # Main page component
│   ├── components/
│   │   ├── Navbar.js            # Navigation bar
│   │   ├── WorkoutForm.js       # Form for creating/updating workouts
│   │   └── WorkoutDetails.js    # Display individual workout info
│   ├── context/
│   │   └── WorkoutsContext.js   # Global state and reducer
│   ├── hooks/
│   │   └── useWorkoutsContext.js # Custom hook for context
│   ├── App.js                    # Main App component with routing
│   ├── index.js                  # React app entry point
│   ├── index.css                 # Global styles
│   ├── package.json              # Frontend dependencies
│   └── package-lock.json
└── .gitignore                    # Git ignore rules
```

#### Frontend File Descriptions

**`pages/Home.js`** - Main page container
- Displays all workouts list
- Includes workout form and details components
- Fetches workouts on component mount

**`components/Navbar.js`** - Navigation bar component
- Application header
- Logo or title display
- Navigation links (if applicable)

**`components/WorkoutForm.js`** - Form component
- Input fields (title, reps, load)
- Form submission handler
- Validation feedback
- Clear button functionality

**`components/WorkoutDetails.js`** - Individual workout display
- Shows workout information
- Edit button
- Delete button with confirmation
- Timestamps display

**`context/WorkoutsContext.js`** - Global state management
- Creates React Context for workout state
- Implements reducer for state updates
- Actions: `SET_WORKOUTS`, `CREATE_WORKOUT`, `DELETE_WORKOUT`
- Provides context to components via Provider

**`hooks/useWorkoutsContext.js`** - Custom hook
- Wrapper around useContext
- Error handling if used outside provider
- Simplifies context consumption in components

**`App.js`** - Root component
- Sets up React Router (BrowserRouter)
- Defines application routes
- Renders Navbar and page routes
- Wraps app with context provider (likely in index.js)

---

## 🚀 Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- npm (comes with Node.js)
- MongoDB (local or cloud - Atlas recommended)

### Backend Setup

1. **Navigate to backend directory**
   ```bash
   cd backend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Create `.env` file** in the backend directory
   ```env
   MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/workout_db
   PORT=4000
   ```

4. **Verify environment variables**
   - `MONGO_URI` - Your MongoDB connection string
   - `PORT` - Server port (default: 4000)

### Frontend Setup

1. **Navigate to frontend directory**
   ```bash
   cd frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Verify proxy configuration**
   - `package.json` already has `"proxy": "http://localhost:4000/"`
   - This routes API calls to backend during development

---

## ▶️ Running the Application

### Development Mode

**Terminal 1 - Start Backend Server**
```bash
cd backend
npm run dev    # Uses nodemon for auto-reload
```
Output:
```
connected to db & listening on port 4000
```

**Terminal 2 - Start Frontend Server**
```bash
cd frontend
npm start
```
Output:
```
Compiled successfully!
Local: http://localhost:3000
```

### Production Mode

**Backend**
```bash
cd backend
npm start      # Runs node server.js (no auto-reload)
```

**Frontend**
```bash
cd frontend
npm run build  # Creates optimized production build
npm start      # Serves the build
```

---

## 🔌 API Documentation

### Base URL
```
http://localhost:4000/api/workouts
```

### Endpoints

#### 1. Get All Workouts
- **Method:** `GET`
- **URL:** `/api/workouts`
- **Response:**
  ```json
  [
    {
      "_id": "507f1f77bcf86cd799439011",
      "title": "Bench Press",
      "reps": 10,
      "load": 100,
      "createdAt": "2024-01-15T10:30:00.000Z",
      "updatedAt": "2024-01-15T10:30:00.000Z",
      "__v": 0
    }
  ]
  ```

#### 2. Get Single Workout
- **Method:** `GET`
- **URL:** `/api/workouts/:id`
- **Parameters:** `id` - MongoDB ObjectId
- **Response:**
  ```json
  {
    "_id": "507f1f77bcf86cd799439011",
    "title": "Bench Press",
    "reps": 10,
    "load": 100,
    "createdAt": "2024-01-15T10:30:00.000Z",
    "updatedAt": "2024-01-15T10:30:00.000Z",
    "__v": 0
  }
  ```

#### 3. Create Workout
- **Method:** `POST`
- **URL:** `/api/workouts`
- **Body:**
  ```json
  {
    "title": "Bench Press",
    "reps": 10,
    "load": 100
  }
  ```
- **Response:** Created workout object with `_id` and timestamps
- **Status Codes:**
  - `200` - Success
  - `400` - Missing required fields

#### 4. Update Workout
- **Method:** `PATCH`
- **URL:** `/api/workouts/:id`
- **Body:** (partial update)
  ```json
  {
    "reps": 12,
    "load": 110
  }
  ```
- **Response:** Updated workout object

#### 5. Delete Workout
- **Method:** `DELETE`
- **URL:** `/api/workouts/:id`
- **Response:** Deleted workout object
- **Status Code:** `200` - Success

---

## 🎨 Frontend Components

### Component Hierarchy
```
App (Routes)
├── Navbar
└── Home
    ├── WorkoutForm
    └── WorkoutDetails (map)
```

### Component Responsibilities

| Component | Purpose | Props | State |
|-----------|---------|-------|-------|
| `Home` | Main container, data fetching | None | Via context |
| `Navbar` | Navigation header | None | None |
| `WorkoutForm` | Create/Edit workouts | None | Form inputs |
| `WorkoutDetails` | Display single workout | `workout` | Edit mode |

---

## 💾 State Management

### Context API with useReducer

The application uses **React Context API** combined with `useReducer` for global state management. This eliminates prop drilling and provides centralized state control.

#### State Structure
```javascript
{
  workouts: [
    { _id, title, reps, load, createdAt, updatedAt },
    // ... more workouts
  ]
}
```

#### Reducer Actions

| Action | Payload | Effect |
|--------|---------|--------|
| `SET_WORKOUTS` | Array of workouts | Replace entire workouts array |
| `CREATE_WORKOUT` | New workout object | Prepend workout to array |
| `DELETE_WORKOUT` | Deleted workout object | Remove from array by `_id` |

#### Usage in Components
```javascript
import { useWorkoutsContext } from '../hooks/useWorkoutsContext'

const MyComponent = () => {
  const { workouts, dispatch } = useWorkoutsContext()
  
  // Dispatch actions
  dispatch({ type: 'SET_WORKOUTS', payload: fetchedData })
  dispatch({ type: 'CREATE_WORKOUT', payload: newWorkout })
  dispatch({ type: 'DELETE_WORKOUT', payload: deletedWorkout })
}
```

---

## 🗄️ Database Schema

### Workout Model

```javascript
{
  title: {
    type: String,
    required: true          // Must be provided
  },
  reps: {
    type: Number,
    required: true          // Must be provided
  },
  load: {
    type: Number,
    required: true          // Must be provided (weight in kg/lbs)
  },
  createdAt: {
    type: Date,
    default: Date.now       // Auto-set on creation
  },
  updatedAt: {
    type: Date,
    default: Date.now       // Auto-updated on modification
  }
}
```

### Sample Document
```json
{
  "_id": ObjectId("507f1f77bcf86cd799439011"),
  "title": "Bench Press",
  "reps": 10,
  "load": 100,
  "createdAt": "2024-01-15T10:30:00.000Z",
  "updatedAt": "2024-01-15T10:35:22.000Z",
  "__v": 0
}
```

---

## 🔒 Validation & Error Handling

### Backend Validation

**Workout Creation** - All fields are required:
- `title` - String, must be provided
- `reps` - Number, must be provided
- `load` - Number, must be provided

**Error Response:**
```json
{
  "error": "Please fill in all fields",
  "emptyFields": ["title", "load"]
}
```

### ObjectId Validation

The API validates MongoDB ObjectIds before querying:
```javascript
if (!mongoose.Types.ObjectId.isValid(id)) {
  return res.status(404).json({ error: 'No such workout' })
}
```

---

## 🔄 Data Flow

### Creating a Workout

1. **User fills form** in `WorkoutForm` component
2. **Submit button clicked** → POST request to `/api/workouts`
3. **Backend validates** required fields
4. **Mongoose creates** document in MongoDB
5. **Response sent** back to frontend
6. **Reducer updates** global state with `CREATE_WORKOUT` action
7. **Component re-renders** with new workout displayed

### Fetching Workouts

1. **Home component mounts** → useEffect triggers
2. **GET request** to `/api/workouts`
3. **Backend queries** MongoDB, sorts by `createdAt` (descending)
4. **Response sent** with array of workouts
5. **Reducer updates** state with `SET_WORKOUTS` action
6. **Components re-render** displaying all workouts

### Deleting a Workout

1. **User clicks delete** button on `WorkoutDetails`
2. **DELETE request** to `/api/workouts/:id`
3. **Backend validates** ObjectId and removes from database
4. **Response sent** with deleted workout data
5. **Reducer removes** from state with `DELETE_WORKOUT` action
6. **UI updates** immediately

---

## 📦 Dependencies Overview

### Backend Dependencies
- `express` - Web server framework
- `mongoose` - MongoDB ODM
- `dotenv` - Environment variable loader

### Frontend Dependencies
- `react` - UI library
- `react-router-dom` - Client-side routing
- `date-fns` - Date formatting utilities
- `@testing-library/react` - Component testing

---

## 🛡️ Security Considerations

1. **Environment Variables** - Sensitive data (MONGO_URI) stored in `.env`
2. **Input Validation** - Required fields validated on backend
3. **ObjectId Validation** - MongoDB IDs validated before queries
4. **CORS Ready** - Express configured for cross-origin requests
5. **Error Handling** - Generic error messages prevent information leakage

---

## 🚀 Future Improvements

- [ ] User authentication and authorization
- [ ] Multiple users with separate workout history
- [ ] Workout categories and exercises
- [ ] Progress tracking and statistics
- [ ] Search and filter functionality
- [ ] Pagination for large datasets
- [ ] Unit and integration tests
- [ ] API documentation with Swagger
- [ ] Docker containerization
- [ ] Deployment to production servers

---

## 📝 Contributing

1. Create a feature branch (`git checkout -b feature/amazing-feature`)
2. Commit changes (`git commit -m 'Add amazing feature'`)
3. Push to branch (`git push origin feature/amazing-feature`)
4. Open a Pull Request

---

## 📄 License

This project is licensed under the ISC License - see the LICENSE file for details.

---

## 📞 Support

For questions or issues, please open an issue on the GitHub repository.

---

**Happy Tracking! 💪**

