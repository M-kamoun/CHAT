const chats = require("../data/data");
module.exports.test = (request, response) => {
  response.status(200).json({ success: true, data: chats });
  console.log(chats);
};
