const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const Skill = require('../models/Skill');

// @route   GET /api/skills
// @desc    Get all skills
// @access  Public
router.get('/', async (req, res) => {
  try {
    const { category } = req.query;
    
    let query = {};
    if (category) query.category = category;

    const skills = await Skill.find(query).sort({ category: 1, order: 1 });

    // Group by category
    const groupedSkills = skills.reduce((acc, skill) => {
      if (!acc[skill.category]) {
        acc[skill.category] = [];
      }
      acc[skill.category].push(skill);
      return acc;
    }, {});

    res.json({
      success: true,
      count: skills.length,
      data: groupedSkills
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Server error while fetching skills'
    });
  }
});

// @route   POST /api/skills
// @desc    Create new skill
// @access  Public (In production, add authentication)
router.post('/',
  [
    body('name').trim().notEmpty().withMessage('Skill name is required'),
    body('category').isIn(['Frontend', 'Backend', 'Database', 'DevOps', 'Tools', 'Other']).withMessage('Invalid category')
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        errors: errors.array()
      });
    }

    try {
      const skill = await Skill.create(req.body);
      
      res.status(201).json({
        success: true,
        data: skill
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        error: 'Server error while creating skill'
      });
    }
  }
);

// @route   PUT /api/skills/:id
// @desc    Update skill
// @access  Public (In production, add authentication)
router.put('/:id', async (req, res) => {
  try {
    const skill = await Skill.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!skill) {
      return res.status(404).json({
        success: false,
        error: 'Skill not found'
      });
    }

    res.json({
      success: true,
      data: skill
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Server error while updating skill'
    });
  }
});

// @route   DELETE /api/skills/:id
// @desc    Delete skill
// @access  Public (In production, add authentication)
router.delete('/:id', async (req, res) => {
  try {
    const skill = await Skill.findByIdAndDelete(req.params.id);

    if (!skill) {
      return res.status(404).json({
        success: false,
        error: 'Skill not found'
      });
    }

    res.json({
      success: true,
      data: {}
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Server error while deleting skill'
    });
  }
});

module.exports = router;
