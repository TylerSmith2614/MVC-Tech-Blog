const Comment = require("../models/comment");

const techPostComments = [
  // Comments for "Getting Started with Python Programming"
  {
    comment_text:
      "Python is indeed a great language to start with! Its readability and vast library support make it a favorite among beginners.",
    user_id: 1,
    post_id: 1,
  },
  {
    comment_text:
      "I totally agree! I started my coding journey with Python, and it's been an amazing experience so far.",
    user_id: 2,
    post_id: 1,
  },

  // Comments for "Securing Your Online Privacy with VPNs"
  {
    comment_text:
      "VPNs are essential these days. I've been using one for a while now, and it really adds a layer of security to my online activities.",
    user_id: 3,
    post_id: 2,
  },
  {
    comment_text:
      "Absolutely! Especially when using public Wi-Fi, a VPN helps keep our sensitive information safe from potential threats.",
    user_id: 4,
    post_id: 2,
  },

  // Comments for "The Rise of Blockchain Technology"
  {
    comment_text:
      "The potential applications of blockchain are mind-boggling. It's exciting to see how it's reshaping industries beyond just cryptocurrencies.",
    user_id: 5,
    post_id: 3,
  },
  {
    comment_text:
      "Indeed! The transparency and security features of blockchain are changing the way we think about data management.",
    user_id: 1,
    post_id: 3,
  },

  // Comments for "Responsive Design Best Practices for Mobile Apps"
  {
    comment_text:
      "Mobile-first design is the way to go. Ensuring a smooth user experience on various devices is crucial for app success.",
    user_id: 2,
    post_id: 4,
  },
  {
    comment_text:
      "User engagement can significantly increase with responsive design. Nobody wants to struggle with an app that doesn't work well on their device.",
    user_id: 3,
    post_id: 4,
  },

  // Comments for "Artificial Intelligence in Healthcare"
  {
    comment_text:
      "The potential impact of AI in healthcare is immense. It's fascinating to see how machine learning algorithms can assist doctors in diagnosis.",
    user_id: 4,
    post_id: 5,
  },
  {
    comment_text:
      "AI's ability to analyze vast amounts of medical data quickly can lead to more accurate treatment options for patients.",
    user_id: 5,
    post_id: 5,
  },
];

const seedTechPostComments = () => Comment.bulkCreate(techPostComments);

module.exports = seedTechPostComments;
