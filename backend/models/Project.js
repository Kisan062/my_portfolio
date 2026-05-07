const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true
  },
  longDescription: {
    type: String
  },
  technologies: [{
    type: String,
    required: true
  }],
  category: {
    type: String,
    enum: ['Web Development', 'Mobile App', 'Data Science', 'Machine Learning', 'Full Stack', 'Other'],
    default: 'Other'
  },
  imageUrl: {
    type: String
  },
  liveUrl: {
    type: String
  },
  githubUrl: {
    type: String
  },
  featured: {
    type: Boolean,
    default: false
  },
  order: {
    type: Number,
    default: 0
  }
}, {
  timestamps: true
});

projectSchema.index({ featured: -1, order: 1, createdAt: -1 });

module.exports = mongoose.model('Project', projectSchema);
