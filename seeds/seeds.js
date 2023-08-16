const seedTechUsers = require("./user-seeds");
const seedTechPosts = require("./post-seeds");
const seedTechPostComments = require("./comments-seeds");

const sequelize = require("../config/connection");

const seedAllDatabases = async () => {
  try {
    await sequelize.sync({ force: true });
    console.log("Database synced");

    await seedTechUsers();
    console.log("Users seeded");

    await seedTechPosts();
    console.log("Posts seeded");

    await seedTechPostComments();
    console.log("Comments seeded");

    console.log("All seeding completed successfully.");
  } catch (error) {
    console.error("Seeding error:", error);
  } finally {
    process.exit(0);
  }
};

seedAllDatabases();
