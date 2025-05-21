const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const path = require('path');
const http = require('http');
const userRoute = require('./routes/userRoutes');
const passport = require('passport');
const session = require('express-session');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const Auth = require('./modal/Auth');
const app = express();
const server = http.createServer(app);

// Middleware: session should be BEFORE passport.session()
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false, // more secure; set true only if needed
}));

// Passport initialization (AFTER session)
app.use(passport.initialize());
app.use(passport.session());

// Google OAuth Strategy
passport.use(new GoogleStrategy({
  clientID: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  callbackURL: 'http://localhost:8080/auth/google/callback',
},
async(accessToken, refreshToken, profile, done) => {
  try {
    const email = profile.emails[0].value;
    const existingUser = await Auth.findOne({ googleId: profile.id });
    if (existingUser) {
      return done(null, existingUser);
    }
    
    //create new user
    const newUser = await Auth({
      googleId: profile.id,
      displayName: profile.displayName,
      email: email,
      photo: profile.photos[0].value
    })
    const savedUser = await newUser.save();
    done(null, savedUser);
  } catch (error) {
  return done(null, profile); 
  }  // Save or use profile
}));

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

// Google OAuth Routes
app.get('/auth/google',
  passport.authenticate('google', {
    scope: ['profile', 'email'],
    prompt: 'select_account',
  })
);

app.get('/auth/google/callback',
  passport.authenticate('google', {
    failureRedirect: "http://localhost:3000/"
  }),
  (req, res) => {
    res.redirect('http://localhost:5173/logging-in');
  }
);

// Check login status
app.get('/auth/check-login', (req, res) => {
  if (req.isAuthenticated()) {
    res.json({ loggedIn: true, user: req.user });
  } else {
    res.json({ loggedIn: false });
  }
});

// CORS and JSON middleware
app.use(cors({
  origin: '*',
  credentials: true
}));
app.use(express.json());

// Serve frontend
const _dirname = path.resolve();
app.use(express.static(path.join(_dirname, 'Mirror_Frontend', 'dist')));

// API routes
app.use('/users', userRoute);

// Connect to MongoDB
mongoose.connect(process.env.DATABASE_URL, {
  dbName: 'mirror_space',
}).then(() => console.log('✅ MongoDB connected'))
  .catch((err) => console.error('❌ MongoDB connection failed:', err));

// Start server
const PORT = process.env.PORT || 8080;
server.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
