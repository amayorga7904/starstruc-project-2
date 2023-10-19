const Match = require('../models/match');

module.exports = {
    create,
    delete: deleteMessage
  };

async function deleteMessage() {
        const match = await Match.findById(req.params.id)
        match.messages.remove(req.params.id);
        await match.save();
        res.redirect(`/accounts/${match._id}`);
}

  async function create(req, res) {
    const senderId = req.user._id
    console.log(senderId)
    const match = await Match.findById(req.params.id)
    const content = req.body.content

    match.messages.push({
        content,
        sender: senderId
    })
    match.save()
    res.redirect(`/matches/${match._id}`)
  }



