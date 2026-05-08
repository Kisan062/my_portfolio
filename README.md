# 🚀 Full-Stack Personal Portfolio

A modern, responsive personal portfolio website built with React, Node.js, Express, and MongoDB. This project demonstrates full-stack development skills with a clean, professional design.

## ✨ Features

- **Modern UI/UX**: Clean, gradient-based design with smooth animations
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Full-Stack Architecture**: React frontend + Node.js/Express backend + MongoDB database
- **Dynamic Content**: Projects and skills fetched from database
- **Contact Form**: Functional contact form with validation
- **RESTful API**: Well-structured API endpoints
- **Performance Optimized**: Fast loading with code splitting and optimization

## 🛠️ Tech Stack

### Frontend
- React 18
- React Router
- Axios
- React Icons
- CSS3 (Custom styling with CSS variables)

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- Express Validator
- CORS, Helmet, Compression

### Database
- MongoDB (local or MongoDB Atlas)

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v14 or higher)
- npm or yarn
- MongoDB (local installation or MongoDB Atlas account)

## 🚀 Installation & Setup

### 1. Clone the repository
```bash
git clone <your-repo-url>
cd portfolio-fullstack
```

### 2. Backend Setup

```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Create .env file
cp .env.example .env

# Edit .env file with your MongoDB connection string
# For local MongoDB:
MONGODB_URI=mongodb://localhost:27017/portfolio

# For MongoDB Atlas:
# MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/portfolio

# Seed the database with sample data
npm run seed

# Start the backend server
npm run dev
```

The backend server will run on `http://localhost:5000`

### 3. Frontend Setup

Open a new terminal window:

```bash
# Navigate to frontend directory
cd frontend

# Install dependencies
npm install

# Start the development server
npm start
```

The frontend will run on `http://localhost:3000`

## 📁 Project Structure

```
portfolio-fullstack/
├── backend/
│   ├── config/
│   │   └── database.js
│   ├── models/
│   │   ├── Project.js
│   │   ├── Skill.js
│   │   └── Contact.js
│   ├── routes/
│   │   ├── projects.js
│   │   ├── skills.js
│   │   └── contact.js
│   ├── .env.example
│   ├── server.js
│   ├── seedData.js
│   └── package.json
├── frontend/
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.js
│   │   │   ├── Hero.js
│   │   │   ├── About.js
│   │   │   └── Footer.js
│   │   ├── pages/
│   │   │   ├── Projects.js
│   │   │   ├── Skills.js
│   │   │   └── Contact.js
│   │   ├── services/
│   │   │   └── api.js
│   │   ├── styles/
│   │   │   └── App.css
│   │   ├── App.js
│   │   └── index.js
│   └── package.json
└── README.md
```

## 🔌 API Endpoints

### Projects
- `GET /api/projects` - Get all projects
- `GET /api/projects/:id` - Get single project
- `POST /api/projects` - Create new project
- `PUT /api/projects/:id` - Update project
- `DELETE /api/projects/:id` - Delete project

### Skills
- `GET /api/skills` - Get all skills (grouped by category)
- `POST /api/skills` - Create new skill
- `PUT /api/skills/:id` - Update skill
- `DELETE /api/skills/:id` - Delete skill

### Contact
- `GET /api/contact` - Get all messages
- `POST /api/contact` - Submit contact form
- `PUT /api/contact/:id` - Update message
- `DELETE /api/contact/:id` - Delete message

## 🎨 Customization

### Update Personal Information

1. **Hero Section** (`frontend/src/components/Hero.js`):
   - Change name, title, description
   - Update social media links

2. **About Section** (`frontend/src/components/About.js`):
   - Edit bio and statistics
   - Customize skills and highlights

3. **Contact Section** (`frontend/src/pages/Contact.js`):
   - Update email, phone, location

4. **Footer** (`frontend/src/components/Footer.js`):
   - Update social media links

### Add Your Projects

Edit `backend/seedData.js` and run:
```bash
npm run seed
```

Or use the API endpoints to add projects dynamically.

### Customize Colors

Edit CSS variables in `frontend/src/styles/App.css`:
```css
:root {
  --primary-color: #6366f1;
  --secondary-color: #8b5cf6;
  --accent: #22d3ee;
  /* ... other colors */
}
```

## 🌐 Deployment

### Backend Deployment (Heroku Example)

```bash
# Install Heroku CLI and login
heroku login

# Create new app
heroku create your-portfolio-api

# Add MongoDB Atlas connection string
heroku config:set MONGODB_URI="your-mongodb-atlas-uri"

# Deploy
git push heroku main
```

### Frontend Deployment (Vercel/Netlify)

#### Vercel:
```bash
npm install -g vercel
cd frontend
vercel
```

#### Netlify:
```bash
cd frontend
npm run build
# Drag and drop the 'build' folder to Netlify
```

### Environment Variables for Production

Update `.env` in backend:
```
NODE_ENV=production
FRONTEND_URL=https://your-frontend-domain.com
```

Update API URL in frontend (`src/services/api.js`):
```javascript
const API_URL = process.env.REACT_APP_API_URL || 'https://your-backend-api.com/api';
```

## 🔒 Security Notes

⚠️ **Important**: The current setup has no authentication for admin routes (POST, PUT, DELETE). Before deploying to production:

1. Add authentication middleware
2. Implement user login system
3. Protect admin routes
4. Add rate limiting
5. Implement HTTPS

## 📝 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📧 Contact

Your Name - Sarvjeet Kumar

Project Link: https://my-portfolio-weld-three-20.vercel.app/
---


