require('dotenv').config();
const mongoose = require('mongoose');
const Project = require('./models/Project');
const Skill = require('./models/Skill');
const Experience = require('./models/Experience');
const Certification = require('./models/Certification');

const connectDB = async () => {
  try {
    // ── TEMPORARY: Auto-copy local screenshot ──
    try {
      const fs = require('fs');
      const source = "C:\\Users\\sk776\\OneDrive\\Pictures\\Screenshots\\Screenshot 2026-05-07 084329.png";
      const dest = "C:\\Users\\sk776\\Downloads\\portfolio-fullstack\\frontend\\public\\images\\packetscope_screenshot.png";
      if (fs.existsSync(source)) {
        fs.copyFileSync(source, dest);
        console.log('📸 Screenshot copied successfully!');
      }
    } catch (e) {
      console.log('⚠️ Could not auto-copy screenshot, please move it manually.');
    }
    // ──────────────────────────────────────────

    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/portfolio');
    console.log('✅ MongoDB Connected');
  } catch (error) {
    console.error('❌ MongoDB Connection Error:', error.message);
    process.exit(1);
  }
};

const sampleProjects = [
  {
    title: 'SkillBridge: AI-Powered Placement Readiness Platform',
    description: 'Full-stack AI-powered platform to improve placement readiness using personalized roadmaps and automated evaluation.',
    longDescription: 'Built a full-stack AI-powered platform to improve placement readiness using personalized roadmaps and automated evaluation. Developed features including mock interviews, resume analyzer, and DSA tracker using React.js and Node.js. Integrated Gemini API, implemented JWT authentication, and deployed scalable backend using MongoDB, Vercel, and Railway.',
    technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Gemini API', 'JWT', 'Vercel', 'Railway'],
    category: 'Full Stack',
    imageUrl: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800',
    githubUrl: 'https://github.com/Kisan062',
    featured: true,
    order: 1
  },
  {
    title: 'PacketScope:Network Traffic Analyzer',
    description: 'Java-based system to process and analyze network traffic from PCAP files for security insights.',
    longDescription: 'Designed and developed a Java-based system to process and analyze network traffic from PCAP files. Implemented packet parsing, flow grouping, traffic classification, and anomaly detection for security insights. Built a real-time GUI dashboard with alert system for monitoring network activity.',
    technologies: ['Java', 'Swing', 'Pcap4J', 'Network Security', 'Packet Analysis'],
    category: 'Other',
    imageUrl: '/images/packetscope_screenshot.png', 

    githubUrl: 'https://github.com/Kisan062',
    featured: true,
    order: 2
  }
];

const sampleSkills = [
  // Frontend
  { name: 'React.js', category: 'Frontend', proficiency: 88, order: 1 },
  { name: 'JavaScript', category: 'Frontend', proficiency: 88, order: 2 },
  { name: 'HTML5', category: 'Frontend', proficiency: 92, order: 3 },
  { name: 'CSS3', category: 'Frontend', proficiency: 88, order: 4 },
  { name: 'Tailwind CSS', category: 'Frontend', proficiency: 85, order: 5 },
  { name: 'React Router', category: 'Frontend', proficiency: 82, order: 6 },

  // Backend
  { name: 'Java', category: 'Backend', proficiency: 90, order: 1 },
  { name: 'Node.js', category: 'Backend', proficiency: 85, order: 2 },
  { name: 'Express.js', category: 'Backend', proficiency: 83, order: 3 },
  { name: 'Spring Boot', category: 'Backend', proficiency: 70, order: 4 },
  { name: 'REST API Design', category: 'Backend', proficiency: 85, order: 5 },
  { name: 'Gemini API', category: 'Backend', proficiency: 80, order: 6 },

  // Database
  { name: 'MongoDB', category: 'Database', proficiency: 85, order: 1 },
  { name: 'MongoDB Atlas', category: 'Database', proficiency: 82, order: 2 },
  { name: 'Mongoose ODM', category: 'Database', proficiency: 80, order: 3 },
  { name: 'MySQL', category: 'Database', proficiency: 75, order: 4 },
  { name: 'SQL', category: 'Database', proficiency: 80, order: 5 },

  // DevOps
  { name: 'Git & GitHub', category: 'DevOps', proficiency: 88, order: 1 },
  { name: 'Vercel', category: 'DevOps', proficiency: 80, order: 2 },

  // Tools
  { name: 'VS Code', category: 'Tools', proficiency: 92, order: 1 },
  { name: 'Postman', category: 'Tools', proficiency: 85, order: 2 },

  // Other (CS Fundamentals)
  { name: 'DSA', category: 'Other', proficiency: 82, order: 1 },
  { name: 'OOP', category: 'Other', proficiency: 85, order: 2 },
  { name: 'DBMS', category: 'Other', proficiency: 80, order: 3 },
  { name: 'Operating Systems', category: 'Other', proficiency: 78, order: 4 },
  { name: 'Computer Networks', category: 'Other', proficiency: 80, order: 5 }
];

const sampleExperiences = [
  {
    title: 'Cyber Security Intern',
    company: 'My Job Grow x IIT Hyderabad',
    location: 'Remote',
    startDate: 'Nov 2025',
    endDate: 'Dec 2025',
    description: [
      'Worked on cybersecurity fundamentals including threat identification, risk assessment, and mitigation strategies.',
      'Performed penetration testing simulations and implemented network security monitoring.',
      'Completed 2-month internship with IIT Hyderabad Entrepreneurship & Innovation Cell.'
    ],
    type: 'Internship',
    order: 1
  }
];

const sampleCertifications = [
  {
    title: 'GenAI Powered Data Analytics',
    issuer: 'TATA x Forage',
    year: '2025',
    order: 1
  },
  {
    title: 'Data Analytics',
    issuer: 'Deloitte x Forage',
    year: '2025',
    order: 2
  },
  {
    title: 'Cyber Security Internship',
    issuer: 'IIT Hyderabad',
    year: '2025',
    order: 3
  },
  {
    title: 'Web Development',
    issuer: 'IIT Bombay',
    year: '2024',
    order: 4
  },
  {
    title: 'Database Fundamentals',
    issuer: 'Infosys Springboard',
    year: '2023',
    order: 5
  },
  {
    title: 'IP Awareness',
    issuer: 'Govt. of India',
    year: '2025',
    order: 6
  }
];

const seedDatabase = async () => {
  try {
    await connectDB();

    // Clear existing data
    await Project.deleteMany({});
    await Skill.deleteMany({});
    await Experience.deleteMany({});
    await Certification.deleteMany({});
    console.log('🗑️  Cleared existing data');

    // Insert sample data
    await Project.insertMany(sampleProjects);
    console.log('✅ Projects seeded');

    await Skill.insertMany(sampleSkills);
    console.log('✅ Skills seeded');

    await Experience.insertMany(sampleExperiences);
    console.log('✅ Experience seeded');

    await Certification.insertMany(sampleCertifications);
    console.log('✅ Certifications seeded');

    console.log('\n🎉 Database seeded successfully!');
    process.exit(0);
  } catch (error) {
    console.error('❌ Seed error:', error);
    process.exit(1);
  }
};

seedDatabase();
