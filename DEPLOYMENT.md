# 🚀 Deployment Guide

## MongoDB Atlas Setup (Cloud Database)

1. **Create MongoDB Atlas Account**
   - Go to https://www.mongodb.com/cloud/atlas
   - Sign up for free account

2. **Create a Cluster**
   - Click "Build a Database"
   - Choose FREE tier (M0)
   - Select your preferred region
   - Click "Create Cluster"

3. **Create Database User**
   - Go to "Database Access"
   - Click "Add New Database User"
   - Create username and password
   - Set permissions to "Read and write to any database"

4. **Whitelist IP Address**
   - Go to "Network Access"
   - Click "Add IP Address"
   - Click "Allow Access from Anywhere" (0.0.0.0/0)
   - Or add your specific IP

5. **Get Connection String**
   - Click "Connect" on your cluster
   - Choose "Connect your application"
   - Copy the connection string
   - Replace `<password>` with your database user password
   - Update `MONGODB_URI` in your `.env` file

Example:
```
MONGODB_URI=mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/portfolio?retryWrites=true&w=majority
```

## Backend Deployment Options

### Option 1: Heroku

1. **Install Heroku CLI**
```bash
npm install -g heroku
```

2. **Login to Heroku**
```bash
heroku login
```

3. **Deploy Backend**
```bash
cd backend
git init
heroku create your-portfolio-api
heroku config:set MONGODB_URI="your-mongodb-atlas-uri"
heroku config:set NODE_ENV=production
heroku config:set FRONTEND_URL="https://your-frontend-url.com"
git add .
git commit -m "Initial commit"
git push heroku main
```

4. **Seed Database** (optional)
```bash
heroku run npm run seed
```

### Option 2: Railway

1. Go to https://railway.app
2. Sign up with GitHub
3. Click "New Project" > "Deploy from GitHub repo"
4. Select your repository
5. Add environment variables in Railway dashboard
6. Deploy automatically on push

### Option 3: Render

1. Go to https://render.com
2. Sign up and create new Web Service
3. Connect GitHub repository
4. Add environment variables
5. Deploy

## Frontend Deployment Options

### Option 1: Vercel (Recommended)

1. **Install Vercel CLI**
```bash
npm install -g vercel
```

2. **Deploy**
```bash
cd frontend
vercel
```

3. **Add Environment Variable**
   - Go to Vercel dashboard
   - Settings > Environment Variables
   - Add `REACT_APP_API_URL` with your backend URL

### Option 2: Netlify

1. **Build the app**
```bash
cd frontend
npm run build
```

2. **Deploy**
   - Go to https://netlify.com
   - Drag and drop the `build` folder
   - Or connect GitHub for automatic deployments

3. **Add Environment Variable**
   - Site settings > Build & deploy > Environment
   - Add `REACT_APP_API_URL`

### Option 3: GitHub Pages

1. **Install gh-pages**
```bash
npm install --save-dev gh-pages
```

2. **Add to package.json**
```json
{
  "homepage": "https://yourusername.github.io/portfolio",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
  }
}
```

3. **Deploy**
```bash
npm run deploy
```

## Environment Variables

### Backend (.env)
```
MONGODB_URI=mongodb+srv://user:pass@cluster.mongodb.net/portfolio
PORT=5000
NODE_ENV=production
FRONTEND_URL=https://your-frontend-url.com
```

### Frontend (.env)
```
REACT_APP_API_URL=https://your-backend-api.com/api
```

## Post-Deployment Checklist

- [ ] Database connected successfully
- [ ] Backend API accessible
- [ ] Frontend connects to backend
- [ ] Contact form works
- [ ] Projects load correctly
- [ ] Skills display properly
- [ ] Mobile responsive
- [ ] HTTPS enabled
- [ ] Custom domain configured (optional)

## Custom Domain Setup

### Vercel
1. Go to Project Settings > Domains
2. Add your custom domain
3. Update DNS records with your domain provider

### Netlify
1. Go to Domain Settings
2. Add custom domain
3. Configure DNS

## Troubleshooting

### CORS Issues
Add your frontend URL to backend CORS configuration in `server.js`:
```javascript
app.use(cors({
  origin: 'https://your-frontend-url.com',
  credentials: true
}));
```

### MongoDB Connection Issues
- Check if IP is whitelisted
- Verify connection string format
- Ensure username/password are correct
- Check if cluster is active

### Build Errors
- Clear node_modules and reinstall: `rm -rf node_modules && npm install`
- Check Node.js version compatibility
- Review error logs in deployment platform

## Performance Optimization

1. **Enable Compression** (already included)
2. **Use CDN** for static assets
3. **Enable Caching** headers
4. **Minify** CSS/JS (automatic in production build)
5. **Optimize Images** before uploading
6. **Use Environment-specific** builds

## Security Best Practices

1. Never commit `.env` files
2. Use environment variables for sensitive data
3. Enable HTTPS
4. Add rate limiting
5. Implement authentication for admin routes
6. Validate all inputs
7. Keep dependencies updated

## Monitoring

### Recommended Tools
- **Backend**: Heroku Logs, Railway Logs
- **Frontend**: Vercel Analytics, Google Analytics
- **Database**: MongoDB Atlas Monitoring
- **Errors**: Sentry
- **Uptime**: UptimeRobot

---

Good luck with your deployment! 🎉
