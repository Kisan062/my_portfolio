const express = require('express');
const router = express.Router();
const Experience = require('../models/Experience');

// @route   GET /api/experience
// @desc    Get all experiences
// @access  Public
router.get('/', async (req, res) => {
  try {
    const experiences = await Experience.find().sort({ order: 1 });

    res.json({
      success: true,
      count: experiences.length,
      data: experiences
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Server error while fetching experiences'
    });
  }
});

// @route   POST /api/experience
// @desc    Create new experience
// @access  Public (In production, add authentication)
router.post('/', async (req, res) => {
  try {
    const experience = await Experience.create(req.body);

    res.status(201).json({
      success: true,
      data: experience
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Server error while creating experience'
    });
  }
});

// @route   PUT /api/experience/:id
// @desc    Update experience
// @access  Public (In production, add authentication)
router.put('/:id', async (req, res) => {
  try {
    const experience = await Experience.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!experience) {
      return res.status(404).json({
        success: false,
        error: 'Experience not found'
      });
    }

    res.json({
      success: true,
      data: experience
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Server error while updating experience'
    });
  }
});

// @route   DELETE /api/experience/:id
// @desc    Delete experience
// @access  Public (In production, add authentication)
router.delete('/:id', async (req, res) => {
  try {
    const experience = await Experience.findByIdAndDelete(req.params.id);

    if (!experience) {
      return res.status(404).json({
        success: false,
        error: 'Experience not found'
      });
    }

    res.json({
      success: true,
      data: {}
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Server error while deleting experience'
    });
  }
});

module.exports = router;
