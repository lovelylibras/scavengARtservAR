# scavengARtservAR

ScavengARt is an AR-based scavenger hunt that guides users through New York art museums, prompting them to follow a series of clues to discover selected artworks. Using ARKit image recognition and the user’s camera view, scavengARt allows users to scan paintings around the museum. When the correct artwork is identified, a pop-up modal displays information and the app displays a 3D trophy on the artwork to indicate a successful guess.
The back-end of the application runs on an Express server which uses Express.js, Sequelize, Node.js, and Postgres and is deployed on Heroku.

Our team is comprised of Ahsun Kim, Rachel Reinauer, and Audra Kenney.

## Deployed copy
* Our deployed server and its corresponding API routes can be viewed at this link: http://scavengart.herokuapp.com/

## Setup

To look at the repo locally, you'll need to take the following steps:

* Please fork and clone this repo!
* `npm install`
* Create one postgres database: `scavengARtservAR`
* `node seed.js` will seed the database
* `npm start` will run the server locally
