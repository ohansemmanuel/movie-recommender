if (process.env.REACT_APP_NODE_ENV === "production") {
  module.exports = require("./Root.prod");
} else {
  module.exports = require("./Root.dev");
}
