const { Post } = require("../models");

const techPostData = [
  {
    title: "Getting Started with Python Programming",
    content:
      "Python is a versatile and beginner-friendly programming language that is widely used for web development, data analysis, artificial intelligence, and more.",
    user_id: 1,
  },
  {
    title: "Securing Your Online Privacy with VPNs",
    content:
      "Virtual Private Networks (VPNs) can help you protect your online privacy and data by encrypting your internet connection and masking your IP address.",
    user_id: 2,
  },
  {
    title: "The Rise of Blockchain Technology",
    content:
      "Blockchain technology is the foundation of cryptocurrencies like Bitcoin and Ethereum, and it's also being explored for various other applications such as supply chain management and digital identity.",
    user_id: 3,
  },
  {
    title: "Responsive Design Best Practices for Mobile Apps",
    content:
      "Designing mobile apps with a focus on responsive layouts, intuitive navigation, and optimal user experience is crucial in today's mobile-driven world.",
    user_id: 4,
  },
  {
    title: "Artificial Intelligence in Healthcare",
    content:
      "AI is revolutionizing healthcare by enabling advanced diagnostics, personalized treatment plans, drug discovery, and predictive analytics.",
    user_id: 5,
  },
];

const seedTechPosts = () => Post.bulkCreate(techPostData);

module.exports = seedTechPosts;
