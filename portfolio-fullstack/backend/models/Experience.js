const mongoose = require('mongoose');

const experienceSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  company: {
    type: String,
    required: true,
    trim: true
  },
  location: {
    type: String,
    trim: true
  },
  startDate: {
    type: String,
    required: true
  },
  endDate: {
    type: String,
    default: 'Present'
  },
  description: [{
    type: String
  }],
  type: {
    type: String,
    enum: ['Full-time', 'Part-time', 'Internship', 'Freelance', 'Other'],
    default: 'Internship'
  },
  order: {
    type: Number,
    default: 0
  }
}, {
  timestamps: true
});

experienceSchema.index({ order: 1 });

module.exports = mongoose.model('Experience', experienceSchema);
