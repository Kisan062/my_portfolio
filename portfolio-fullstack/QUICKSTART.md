# 🚀 Quick Start Guide

## Get Started in 5 Minutes!

### Step 1: Extract the ZIP
Unzip `portfolio-fullstack.zip` to your desired location.

### Step 2: Install MongoDB (if not already installed)

#### Option A: Local MongoDB
- Download from https://www.mongodb.com/try/download/community
- Install and run MongoDB service

#### Option B: MongoDB Atlas (Cloud - Recommended)
- Sign up at https://www.mongodb.com/cloud/atlas
- Create a free cluster
- Get your connection string
- See DEPLOYMENT.md for detailed steps

### Step 3: Backend Setup

Open terminal in the `backend` folder:

```bash
# Install dependencies
npm install

# Copy environment file
cp .env.example .env

# Edit .env file
# For local MongoDB, it's already configured
# For MongoDB Atlas, update MONGODB_URI with your connection string

# Seed database with sample data
npm run seed

# Start backend server
npm run dev
```

✅ Backend running at http://localhost:5000

### Step 4: Frontend Setup

Open NEW terminal in the `frontend` folder:

```bash
# Install dependencies
npm install

# Start frontend
npm start
```

✅ Frontend running at http://localhost:3000

### Step 5: Open in Browser

Navigate to http://localhost:3000

You should see your portfolio with:
- Hero section
- About section
- Sample projects
- Skills with progress bars
- Contact form

## 🎨 Customize Your Portfolio

### 1. Update Personal Info

**Hero Section** - `frontend/src/components/Hero.js`:
```javascript
<h1>Hi, I'm <span>Your Name</span></h1>
<h2>Full Stack Developer</h2>
// Update social media links
```

**About Section** - `frontend/src/components/About.js`:
- Edit your bio and statistics
- Update what you do list

**Contact Section** - `frontend/src/pages/Contact.js`:
- Change email, phone, location

### 2. Add Your Projects

Edit `backend/seedData.js` with your projects:
```javascript
{
  title: 'Your Project Name',
  description: 'Short description',
  technologies: ['React', 'Node.js'],
  imageUrl: 'image-url',
  liveUrl: 'project-url',
  githubUrl: 'github-url'
}
```

Then run:
```bash
npm run seed
```

### 3. Change Colors

Edit `frontend/src/styles/App.css`:
```css
:root {
  --primary-color: #your-color;
  --secondary-color: #your-color;
}
```

## 📝 Next Steps

1. ✅ Customize content
2. ✅ Add your projects
3. ✅ Update images
4. ✅ Test contact form
5. ✅ Deploy (see DEPLOYMENT.md)

## 🐛 Troubleshooting

**Backend won't start?**
- Check if MongoDB is running
- Verify .env configuration

**Frontend won't connect?**
- Make sure backend is running on port 5000
- Check browser console for errors

**Contact form not working?**
- Verify backend is running
- Check network tab in browser DevTools

## 📚 Resources

- Full documentation: README.md
- Deployment guide: DEPLOYMENT.md
- MongoDB Atlas: https://www.mongodb.com/cloud/atlas
- React docs: https://react.dev
- Express docs: https://expressjs.com

## 🆘 Need Help?

Check the README.md for:
- Detailed API documentation
- Project structure
- Advanced customization
- Deployment options

---

Happy coding! 🎉
