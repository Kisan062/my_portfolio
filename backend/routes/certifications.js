const express = require('express');
const router = express.Router();
const Certification = require('../models/Certification');

// @route   GET /api/certifications
// @desc    Get all certifications
// @access  Public
router.get('/', async (req, res) => {
  try {
    const certifications = await Certification.find().sort({ order: 1 });

    res.json({
      success: true,
      count: certifications.length,
      data: certifications
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Server error while fetching certifications'
    });
  }
});

// @route   POST /api/certifications
// @desc    Create new certification
// @access  Public (In production, add authentication)
router.post('/', async (req, res) => {
  try {
    const certification = await Certification.create(req.body);

    res.status(201).json({
      success: true,
      data: certification
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Server error while creating certification'
    });
  }
});

// @route   PUT /api/certifications/:id
// @desc    Update certification
// @access  Public (In production, add authentication)
router.put('/:id', async (req, res) => {
  try {
    const certification = await Certification.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!certification) {
      return res.status(404).json({
        success: false,
        error: 'Certification not found'
      });
    }

    res.json({
      success: true,
      data: certification
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Server error while updating certification'
    });
  }
});

// @route   DELETE /api/certifications/:id
// @desc    Delete certification
// @access  Public (In production, add authentication)
router.delete('/:id', async (req, res) => {
  try {
    const certification = await Certification.findByIdAndDelete(req.params.id);

    if (!certification) {
      return res.status(404).json({
        success: false,
        error: 'Certification not found'
      });
    }

    res.json({
      success: true,
      data: {}
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Server error while deleting certification'
    });
  }
});

module.exports = router;
