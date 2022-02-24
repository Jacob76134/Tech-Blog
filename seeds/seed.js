const sequelize = require("../config/connection");
const { Quote , User } = require("../models");

const quoteData = require("./quoteData.json");
const userData = require("./userData.json");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });
  for (const quote of quoteData) {
    await Quote.create({
      ...quote,
    });
  }
  for (const user of userData) {
    await User.create({
      ...user,
    });
  }
  process.exit(0);
};

seedDatabase();
