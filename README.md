# starstruc-project-2
# StarStruC

This is an Express messaging application with basic features. Getting started, assuming you have not created an account, you will sign in with your Google account, then be redirected to created your public profile. you will  be prompted to put in your name, date AND time you were born (yes, time. Explained in NEXT STEP.), and what you want your bio to be (emojis are not authorized). After which, you will see the page where everyone with an account will be displayed. If you know who youre looking for, there is a drop down menu with the list of users on the same page. In Your Account, you can select which conversation you would like to enter after one has been initiated in the same page. you can edit you bio on that same page and delete the conversations within the conversations page.

[play it here](https://starstruc-c587d85d28b5.herokuapp.com/)

## FEATURES

* Able to message other people privately!

* Can delete you conversations

* Able to edit your bio

* Sign in with google oauth 

### FAVORITE FUNCTION 

```js
function getKeyCode(e) {
    if (e.keyCode >= 65 && e.keyCode <= 90) {
        if (currentWord.includes(e.key)) {
            currentWord.forEach(function(letter, i) {
                if (letter === e.key) {
                    openSpace.querySelectorAll('li')[i].innerText = letter.toUpperCase()
                }
            })
```

### BIGGEST CHALLENGE

The biggest challenge was the main feature of the app, the conversations. I could not get the functionality of seeing the other accounts' messages from the logged-in users' side. 

#### KEY TAKEAWAY

This project dealt with a lot of code that I had not seen before, and utilized techniques I would not have thought of. The key takeaway is that understanding what needs to be done is important. Coding along mindlessly will only make it harder for you.

## TECHNOLOGIES USED 
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![HTML](https://img.shields.io/badge/HTML-5-orange)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS](https://img.shields.io/badge/CSS-3-blue)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![GitHub](https://img.shields.io/badge/GitHub-Version%20Control-lightgrey)](https://github.com/)
[![Slack](https://img.shields.io/badge/Slack-Communication-brightgreen)](https://slack.com/)
[![Dev.to](https://img.shields.io/badge/Dev.to-Community-orange)](https://dev.to/)
![Zoom](https://img.shields.io/badge/Zoom-2D8CFF?style=for-the-badge&logo=zoom&logoColor=white)
![macOS](https://img.shields.io/badge/mac%20os-000000?style=for-the-badge&logo=apple&logoColor=white)
[![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white)](https://getbootstrap.com/)
[![Heroku](https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white)](https://www.heroku.com/)
[![Express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)](https://expressjs.com/)
[![Google Cloud](https://img.shields.io/badge/Google_Cloud-4285F4?style=for-the-badge&logo=google-cloud&logoColor=white)](https://cloud.google.com/)
[![Google Chrome](https://img.shields.io/badge/Google_Chrome-4285F4?style=for-the-badge&logo=Google-chrome&logoColor=white)](https://www.google.com/chrome/)
[![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)


## APP WALK-THROUGH

![TITLE-SCREEN](screenshots/Screenshot%202023-09-28%20at%209.53.14%20AM.png)
![HOME-SCREEN](screenshots/Screenshot%202023-09-28%20at%209.52.50%20AM.png)
![YOUR-ACCOUNT](screenshots/Screenshot%202023-09-28%20at%209.54.42%20AM.png)
![CONVERSATION-SCREEN](screenshots/Screenshot%202023-09-28%20at%203.27.47%20PM%20(2).png)
![NEW-ACCOUNT](screenshots/Screenshot%202023-09-28%20at%209.56.07%20AM.png)
![EDIT-BIO](screenshots/Screenshot%202023-09-28%20at%209.56.24%20AM.png)


## NEXT STEPS

* The reason why the time is important when entering it during the creation of your new account is because this app will become a match-making dating site that involves match compatability based on your natal/birth chart.

* Profile pictures are a must

* Currently, you can match with anyone. Code will be added to limit the messages between users based on compatability 

* merge the user and account models

* Add unique horoscopes for user based on natal/birth chart