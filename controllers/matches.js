
const Account = require('../models/account');
const Match = require('../models/match');



module.exports = {
    index,
    createNewMatch
  };


  async function index(req, res) {
      try {
          // Fetch matches from the database for the current user (or your matching logic)
          const userId = req.user._id; // Assuming you're using passport.js for user authentication
          const matches = await Match.find({ sender: userId }).populate('messages.recipient');
  
          // Render the 'matches/index' template with the matches data
          res.render('matches/index', { matches });
      } catch (error) {
          console.error(error);
          res.status(500).send('Internal Server Error');
      }
  }

async function createNewMatch(req, res) {
    console.log(req.body)
    const { sender, recipient, content } = req.body;

    try {
        // Create a new match with sender, recipient, and an initial message
        const match = new Match({
            sender: sender,
            messages: [{
                content: content,
                recipient: recipient
            }]
        });

        // Save the match to the database
        await match.save();

        // Redirect to the match page or any other appropriate action
        res.redirect('/matches');
    } catch (err) {
        // Handle errors (e.g., validation errors)
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
}


