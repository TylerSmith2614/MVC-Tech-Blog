const { User } = require("../models");

const techPostUsers = [
  {
    username: "john_doe",
    password: "password123",
    email: "john@example.com",
  },
  {
    username: "tech_guru",
    password: "securepass",
    email: "tech@example.com",
  },
  {
    username: "coding_ninja",
    password: "mysecretword",
    email: "ninja@example.com",
  },
  {
    username: "designer123",
    password: "mypassword",
    email: "designer@example.com",
  },
  {
    username: "data_analyst",
    password: "supersecretpass",
    email: "data@example.com",
  },
  {
    username: "cybergeek",
    password: "cyberpass123",
    email: "cyber@example.com",
  },
  {
    username: "gaming_master",
    password: "gamerpass",
    email: "gamer@example.com",
  },
  {
    username: "startup_enthusiast",
    password: "startup123",
    email: "startup@example.com",
  },
  {
    username: "code_enthusiast",
    password: "codepass",
    email: "code@example.com",
  },
  {
    username: "robotics_wizard",
    password: "robotpass",
    email: "robot@example.com",
  },
];

const seedTechUsers = () => User.bulkCreate(techPostUsers);

module.exports = seedTechUsers;
