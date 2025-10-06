# 🌾 AgriSaral - Smart Agriculture Companion

![AgriSaral Banner](https://source.unsplash.com/1200x400/?agriculture,technology)

AgriSaral is a comprehensive smart agriculture platform that empowers farmers with AI-powered crop disease diagnosis, weather information, agricultural shop locator, and community-driven farming insights. Built with modern web technologies to make farming smarter and more efficient.

## ✨ Features

### 🔬 **AI-Powered Crop Disease Diagnosis**
- Upload crop images for instant disease identification
- Get detailed disease descriptions and treatment recommendations
- Powered by Plant.id API for accurate plant health analysis
- Prevention tips and management solutions

### 🌤️ **Weather Information**
- Real-time weather data integration
- Location-based weather forecasting
- Climate insights for better farming decisions

### 🏪 **Agricultural Shop Locator**
- Find nearby agricultural supply stores
- Location-based shop recommendations
- Product availability information
- Interactive map integration

### 👥 **Farmer Community**
- Share and read farmer success stories
- Community-driven knowledge sharing
- Learn from experienced farmers

### 📊 **Admin Dashboard**
- Manage crop disease database
- Monitor platform usage
- Content management system

## 🛠️ Tech Stack

### Frontend
- **React 19.1.1** - Modern UI library
- **React Router DOM 7.7.1** - Client-side routing
- **Vite 7.0.6** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework (implied from Home component)
- **Axios** - HTTP client for API requests

### Backend
- **Node.js** - Runtime environment
- **Express.js 5.1.0** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose 8.0.0** - MongoDB object modeling
- **JWT** - Authentication and authorization
- **Cloudinary** - Image storage and management
- **Multer** - File upload handling

### External APIs
- **Plant.id API** - Plant disease identification
- **OpenWeatherMap API** - Weather data
- **MongoDB Atlas** - Cloud database

## 📁 Project Structure

```
agrisaral/
├── client/                 # React frontend application
│   ├── public/            # Static assets
│   ├── src/
│   │   ├── components/    # Reusable UI components
│   │   │   ├── CropResultCard.jsx
│   │   │   ├── CropUploadForm.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── Navbar.jsx
│   │   │   ├── ShopMap.jsx
│   │   │   └── WeatherInfo.jsx
│   │   ├── pages/         # Application pages
│   │   │   ├── Home.jsx
│   │   │   ├── Upload.jsx
│   │   │   ├── Diagnosis.jsx
│   │   │   ├── FarmerStories.jsx
│   │   │   ├── AdminDashboard.jsx
│   │   │   └── ...
│   │   ├── services/      # API service functions
│   │   └── utils/         # Utility functions
│   └── package.json
├── server/                # Node.js backend application
│   ├── config/           # Configuration files
│   │   ├── db.js         # Database connection
│   │   └── cloudinary.js # Cloudinary setup
│   ├── controllers/      # Route controllers
│   │   ├── authController.js
│   │   ├── diagnosisController.js
│   │   └── ...
│   ├── models/           # Database models
│   │   ├── User.js
│   │   ├── CropDisease.js
│   │   ├── AgriShop.js
│   │   └── Upload.js
│   ├── routes/           # API routes
│   ├── middleware/       # Custom middleware
│   ├── utils/            # Utility functions
│   │   ├── plantIdAPI.js
│   │   └── weatherAPI.js
│   └── package.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local or Atlas)
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/agrisaral.git
   cd agrisaral
   ```

2. **Install root dependencies**
   ```bash
   npm install
   ```

3. **Install client dependencies**
   ```bash
   cd client
   npm install
   cd ..
   ```

4. **Install server dependencies**
   ```bash
   cd server
   npm install
   cd ..
   ```

### Environment Setup

Create a `.env` file in the `server` directory with the following variables:

```env
# Database
MONGODB_URI=mongodb://localhost:27017/agrisaral
# or for MongoDB Atlas:
# MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/agrisaral

# JWT
JWT_SECRET=your_jwt_secret_key_here

# External APIs
PLANT_ID_API_KEY=your_plant_id_api_key
OPENWEATHER_API_KEY=your_openweather_api_key

# Cloudinary (for image storage)
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret

# Server
PORT=5000
NODE_ENV=development
```

### API Keys Setup

1. **Plant.id API**: Sign up at [Plant.id](https://plant.id/) for plant identification
2. **OpenWeatherMap**: Get API key from [OpenWeatherMap](https://openweathermap.org/api)
3. **Cloudinary**: Sign up at [Cloudinary](https://cloudinary.com/) for image storage

## 🏃‍♂️ Running the Application

### Development Mode

1. **Start the backend server**
   ```bash
   cd server
   npm run dev
   ```
   Server will run on `http://localhost:5000`

2. **Start the frontend (in a new terminal)**
   ```bash
   cd client
   npm run dev
   # or
   npm start
   ```
   Client will run on `http://localhost:3000`

### Production Mode

1. **Build the client**
   ```bash
   cd client
   npm run build
   ```

2. **Start the server**
   ```bash
   cd server
   npm start
   ```

## 📚 API Documentation

### Authentication Endpoints
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `GET /api/auth/profile` - Get user profile

### Diagnosis Endpoints
- `POST /api/upload` - Upload crop image
- `GET /api/diagnose/:uploadId` - Get diagnosis results

### Shop Endpoints
- `GET /api/shops` - Get nearby agricultural shops
- `POST /api/shops` - Add new shop (admin)

### Plant Identification
- `POST /api/plant/identify` - Identify plant from image

## 🔧 Available Scripts

### Root Directory
```bash
npm install        # Install all dependencies
```

### Client Directory
```bash
npm start         # Start development server
npm run dev       # Start Vite dev server
npm run build     # Build for production
npm test          # Run tests
```

### Server Directory
```bash
npm start         # Start production server
npm run dev       # Start with nodemon (development)
```

## 🌐 Deployment

### Client Deployment (Vercel/Netlify)
1. Build the client: `npm run build`
2. Deploy the `build` folder to your hosting service

### Server Deployment (Heroku/Railway/DigitalOcean)
1. Set environment variables
2. Deploy the `server` directory
3. Ensure MongoDB connection is properly configured

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Development Guidelines
- Follow the existing code style
- Add comments for complex logic
- Test your changes thoroughly
- Update documentation if needed



## 👥 Authors

- **Your Name** - *Initial work* - [YourGitHub](https://github.com/ArmanSunasara)

## 🙏 Acknowledgments

- Plant.id for providing plant identification API
- OpenWeatherMap for weather data
- React and Node.js communities
- All farmers who inspire this project


## 🔄 Changelog

### v1.0.0 (Current)
- Initial release
- AI-powered crop disease diagnosis
- Weather information integration
- Agricultural shop locator
- Farmer community features
- Admin dashboard

---

**Made with ❤️ for farmers around the world** 🌍🚜