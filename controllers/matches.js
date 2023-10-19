const Match = require('../models/match');

module.exports = {
    index,
    createNewMatch,
    showConversation,
    delete: deleteMessage
  };



  async function deleteMessage(req, res) {
    const match = await Match.findById(req.params.id)
    match.messages.remove(req.body);
    await match.save();
    res.redirect(`/matches/${match._id}`);
}



async function showConversation(req, res) {
    try {
        const match = await Match.findById(req.params.id).populate('messages');
        res.render('matches/show', { match, user: req.user });
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
}



  async function index(req, res) {
      try {
          const userId = req.user._id; 
          const matches = await Match.find({ sender: userId }).populate('messages.recipient');
          res.render('matches/index', { matches });
      } catch (error) {
          console.error(error);
          res.status(500).send('Internal Server Error');
      }
  }


  
  async function createNewMatch(req, res) {
    userId = req.user._id
    receiverId = req.body.recipient
    console.log(req.body);
    const { sender, recipient, content } = req.body;
    try {
        const match = new Match({
            users: [userId, receiverId],
            messages: [{
                content: content,
                sender: userId
            }]
        });
        await match.save();
        console.log(match)
        res.redirect(`/matches/${match._id}`);
    } catch (err) {
        console.error(err);
        res.status(500).send('How About you Send a F@#%ing Message?');
    }
}