# Babysitter Kata

This project file is a coding challenge that requires the following from the challenge provider:

```
## Background
This kata simulates a babysitter working and getting paid for one night.  
The rules are pretty straight forward.

The babysitter:
- starts no earlier than 5:00PM
- leaves no later than 4:00AM
- gets paid $12/hour from start-time to bedtime
- gets paid $8/hour from bedtime to midnight
- gets paid $16/hour from midnight to end of job
- gets paid for full hours (no fractional hours)


## Feature
*As a babysitter<br>
In order to get paid for 1 night of work<br>
I want to calculate my nightly charge<br>*
```
## Key Features
- The babysitter needs to be able to enter their clock in time and clock out time
- The app needs to be able to calculate pay based on whole hours, not fractional, so round up or round down
- The app needs to calculate rate based on the time frame and if child is in bed, etc

## Bonus Features

If there is time the following features will be added in:
1. Addition of Stripe functionality to allow for payment of babysitter
2. A button that will act as an 'invoice' for the client to submit payment to babysitter
3. If the client does not agree with the payment, the button will remain inactive
4. If the client agrees with the payment, they will hit a button that will acknowledge the pay and activate the payment button
5. The client will submit their payment (with test payment info below) to submit requested payment to babysitter, and offer a thank you page
6. If time, place the app up on a working production environment such as Heroku or AWS

## Front End Technologies

### React
- This app was built using ReactJS and was initialized with npx create-react-app
- This app uses LESS-CSS as a pre-processor for styling, as it is simple and easy to set up and organize styling files
- 

## Installation

Please use the following for downloading and installing this repository:

1. Copy and save the repo link
2. Clone the repo and create your own unique branch with a descriptive name and your initials
- - ex: 'bergeronm_landingPage_v1'
3. Download all dependencies with yarn or npm
- - yarn: 'yarn install'
- - npm: 'npm install' or 'npm i'
4. Start the app with either yarn or npm
- - yarn: 'yarn start'
- - npm: 'npm start'

## Contributing

When contributing to this repository, please first discuss the change you wish to make via issue, email, or any other method with the owners of this repository before making a change.

### Issue/Bug Request 

- Check first to see if your issue has already been reported.
- Check to see if the issue has recently been fixed by attempting to reproduce the issue using the latest master branch in the repository.
- Create a live example of the problem.
- Submit a detailed bug report including your environment & browser, steps to reproduce the issue, actual and expected outcomes,<br/> where you believe the issue is originating from, and any potential solutions you have considered.

### Feature Requests

We would love to hear from you about new features which would improve this app and further the aims of our project. <br/>Please provide as much detail and information as possible to show us why you think your new feature should be implemented.

### Pull Requests
If you have developed a patch, bug fix, or new feature that would improve this app, please submit a pull request. It is best to communicate your ideas with the developers first before investing a great deal of time into a pull request to ensure that it will mesh smoothly with the project.

Remember that this project is licensed under the MIT license, and by submitting a pull request, you agree that your work will be, too.

#### Pull Request Guidelines

- Ensure any install or build dependencies are removed before the end of the layer when doing a build.
- Update the README.md with details of changes to the interface, including new plist variables, exposed ports, useful file locations and container parameters.
- Ensure that your code conforms to our existing code conventions and test coverage.
- Include the relevant issue number, if applicable.
- You may merge the Pull Request in once you have the sign-off of two other developers, or if you do not have permission to do that, you may request the second reviewer to merge it for you.

## Attribution

These contribution guidelines have been adapted from this <a href="https://gist.github.com/PurpleBooth/b24679402957c63ec426">good-Contributing.md-template.</a>