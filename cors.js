const corsOptions = {
  origin: "http://localhost:3000", // Hardcoded for current solution
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

module.exports = corsOptions;
