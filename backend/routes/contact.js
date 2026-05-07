const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const Contact = require('../models/Contact');

// @route   GET /api/contact
// @desc    Get all contact messages
// @access  Public (In production, add authentication)
router.get('/', async (req, res) => {
  try {
    const messages = await Contact.find().sort({ createdAt: -1 });

    res.json({
      success: true,
      count: messages.length,
      data: messages
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Server error while fetching messages'
    });
  }
});

// @route   POST /api/contact
// @desc    Submit contact form
// @access  Public
router.post('/',
  [
    body('name').trim().notEmpty().withMessage('Name is required'),
    body('email').isEmail().normalizeEmail().withMessage('Valid email is required'),
    body('subject').trim().notEmpty().withMessage('Subject is required'),
    body('message').trim().notEmpty().withMessage('Message is required')
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
      const contact = await Contact.create(req.body);
      
      res.status(201).json({
        success: true,
        message: 'Thank you for your message! I will get back to you soon.',
        data: contact
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        error: 'Server error while submitting contact form'
      });
    }
  }
);

// @route   PUT /api/contact/:id
// @desc    Update contact message (mark as read/replied)
// @access  Public (In production, add authentication)
router.put('/:id', async (req, res) => {
  try {
    const contact = await Contact.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );

    if (!contact) {
      return res.status(404).json({
        success: false,
        error: 'Message not found'
      });
    }

    res.json({
      success: true,
      data: contact
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Server error while updating message'
    });
  }
});

// @route   DELETE /api/contact/:id
// @desc    Delete contact message
// @access  Public (In production, add authentication)
router.delete('/:id', async (req, res) => {
  try {
    const contact = await Contact.findByIdAndDelete(req.params.id);

    if (!contact) {
      return res.status(404).json({
        success: false,
        error: 'Message not found'
      });
    }

    res.json({
      success: true,
      data: {}
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Server error while deleting message'
    });
  }
});

module.exports = router;
