require('dotenv').config();
module.exports = {
    // vous pouvez modifier cette valeur
    secret: process.env.AUTH_SECRET || "darth-vader",
    jwtExpiration: 60, // 1 min
    jwtRefreshExpiration: 120, // 2 min
};
