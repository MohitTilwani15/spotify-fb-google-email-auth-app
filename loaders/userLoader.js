const DataLoader = require('dataloader');
const getUserDetails = require('../services/spotify/userDetails').getUserDetails;

const User = new DataLoader(async (keys) => {
  return Promise.all(keys.map(async (accessToken) => {
    const response = await getUserDetails(accessToken);

    return response;
  }));
});

module.exports = User;
