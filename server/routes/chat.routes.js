const ChatController = require("../controllers/chats.controllers");
module.exports = function (app) {
  app.get("/api/chats", ChatController.test);
};
