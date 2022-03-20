const getConversation_GET = async (req, res) => {
  res.send("got the convo");
};

const startConversation_POST = async (req, res) => {
  res.send("started convo");
};

const getConversationMessages_GET = async (req, res) => {
  res.send("get convo messages");
};

module.exports = {
  getConversation_GET,
  startConversation_POST,
  getConversationMessages_GET,
};
