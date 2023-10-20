const Match = require('../models/match');

module.exports = {
    create
  };



  async function create(req, res) {
    const senderId = req.user._id
    const match = await Match.findById(req.params.id)
    const content = req.body.content
    match.messages.push({
        content,
        sender: senderId
    })
    match.save()
    res.redirect(`/matches/${match._id}`)
  }



