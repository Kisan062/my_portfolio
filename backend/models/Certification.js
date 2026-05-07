const mongoose = require('mongoose');

const certificationSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  issuer: {
    type: String,
    required: true,
    trim: true
  },
  year: {
    type: String,
    required: true
  },
  credentialUrl: {
    type: String
  },
  description: {
    type: String
  },
  order: {
    type: Number,
    default: 0
  }
}, {
  timestamps: true
});

certificationSchema.index({ order: 1 });

module.exports = mongoose.model('Certification', certificationSchema);
