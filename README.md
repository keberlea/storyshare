# StoryShare

## Table of Contents
---
* [License](#license)
* [Installation](#installation)
* [Description](#description)
* [Technologies](#technologies)
* [Usage](#usage)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

<br>

## License 

[MIT License](./LICENSE) <br>

This project is licensed under the MIT license.

<br>

## Installation
---
To install the StoryShare app: 

1. Clone the repository of the Story Share app to your local machine using the following command:

    `git clone https://github.com/your-username/storyshare.git`

2. Navigate to the project directory:

    `cd storyshare`

3. Open the project in your preferred text editor. For example, if you're using VS Code, run:

    `code .`

4. Install the required dependencies by running the following command:

    `npm install`

    This will download and install all the necessary packages and libraries.

<br>


## Description
---
StoryShare is a collaborative writing platform that empowers creative writers to receive writing prompts, share their stories, and engage with a vibrant writing community. It provides an immersive space where users can enhance their writing skills and foster a love for storytelling. StoryShare alleviates writer's block by offering a platform where users can overcome the stress of coming up with story ideas. Through engaging prompts that serve as a catalyst for imagination, writers can use their creativity and explore storytelling through a collaborative lense. By fostering a community of like-minded individuals, StoryShare encourages users to participate, share their stories, and engage in meaningful interactions with other writers.

<br>

## Technologies

The application leverages the following technologies and frameworks so that the application can deliver a seamless experience:

#### General Technologies:
- ![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black): 
A JavaScript library for building user interfaces, it provides a flexible and efficient platform for creating interactive components and managing application state.

- ![Express](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge&logo=express&logoColor=white): 
A fast and minimalist web application framework for Node.js, it provides a solid foundation for building web servers and APIs. With Express, you can easily establish smooth and efficient communication between clients and the server.

- ![Mongoose](https://img.shields.io/badge/Mongoose-880000?style=for-the-badge&logo=mongoose&logoColor=white): A MongoDB object modeling tool for Node.js, it simplifies interaction with MongoDB databases, providing features such as data modeling, validation, and query building.

- ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white): A customizable CSS framework that promotes a utility-first approach to styling, Tailwind CSS offers a comprehensive set of pre-built components and responsive design utilities, enabling rapid UI development.

#### NPM Packages:
- ![Apollo Client](https://img.shields.io/badge/Apollo_Client-311C87?style=for-the-badge&logo=apollo-graphql&logoColor=white): A robust GraphQL client that enables efficient data fetching and state management, it integrates seamlessly with React and simplifies the process of working with GraphQL APIs.

- ![Apollo Server](https://img.shields.io/badge/Apollo_Server-311C87?style=for-the-badge&logo=apollo-graphql&logoColor=white): An open-source GraphQL server, Apollo Server seamlessly integrates with any GraphQL schema, simplifying the process of implementing a GraphQL server and providing powerful features like schema stitching and subscriptions. With schema stitching, you can leverage existing schemas or third-party schemas and seamlessly integrate them into your application's schema. While the application may not currently utilize subscriptions, Apollo Server's support for subscriptions gives the flexibility to implement real-time functionality in the future if needed.

- ![bcrypt](https://img.shields.io/badge/bcrypt-004D40?style=for-the-badge&logo=npm&logoColor=white): A library for hashing passwords and providing password security.

- ![express-graphql](https://img.shields.io/badge/express--graphql-CD0000?style=for-the-badge&logo=npm&logoColor=white): 
A library for integrating GraphQL with Express.js. GraphQL is a modern query language for APIs, it allows users to specify the exact data they need, eliminating over-fetching and under-fetching of information and enhancing overall performance. Express is a fast and minimalist web application framework for Node.js, it provides a solid foundation for building web servers and APIs. With Express, you can easily establish smooth and efficient communication between clients and the server.

- ![jsonwebtoken](https://img.shields.io/badge/jsonwebtoken-000000?style=for-the-badge&logo=npm&logoColor=white): A library for generating and verifying JSON Web Tokens (JWTs).

- ![mongoose](https://img.shields.io/badge/mongoose-880000?style=for-the-badge&logo=npm&logoColor=white): A MongoDB object modeling tool for Node.js, it simplifies interaction with MongoDB databases, providing features such as data modeling, validation, and query building.

- ![concurrently](https://img.shields.io/badge/concurrently-333333?style=for-the-badge&logo=npm&logoColor=white): A library for running multiple commands concurrently.

- ![web-vitals](https://img.shields.io/badge/web--vitals-00C7B7?style=for-the-badge&logo=npm&logoColor=white): A library for tracking and measuring web performance metrics.

<br>

## Usage 
---
To use the StoryShare app, follow these steps:

1. Install the necessary dependencies by running the following command in the project root folder:

    `npm install`

2. Build the client-side code by running the following command:

    `npm run build`

    This will compile and bundle the client-side code.

3. Start the development server and the client application by running the following command:

    `npm run develop`

    This will start the server and the client application concurrently.

4. Once the installation is complete, you can start the project by running:

    `npm start`

5. Open your web browser and visit http://localhost:3000 to access the Story Share App.

6. Create an account with a unique username and password to log in and access the features of the   app.

7. Browse through the available prompts and start writing your stories based on them. Interact with other users' stories, leave comments, and provide feedback.

You can now use Story Share to overcome writer's block, explore inspiring prompts, create some prompts yourself, and engage with other writers. Happy reading and writing!


    To access the Heroku link:


    To access the Github Repository visit:
    https://github.com/CarolinaRaIs/storyshare

    To access the deployed site visit:
    https://carolinarais.github.io/storyshare/ 

<br>

### **Screenshots**

--- 
#### _ _**Home**_ _
<br>

![Home Screenshot](/assests/homescreenshot.PNG)
<br>

#### _ _**Login**_ _
<br>

![Login Screenshot](/assets/LoginScreenshot.png)
<br>

#### _ _**Signup**_ _
<br>

![SignUp Screenshot](/assets/signupScreenshot.png)
<br>

#### _ _**Dashboard**_ _ 
<br>

![user dashboard](/assests/userDashboardScreenshot.PNG)
<br>

#### _ _**Prompts Page**_ _ 
<br>

![create a new post](/assets/promptsScreenshot.PNG)
<br>
#### _ _**Create a new story**_ _ 
<br>

![create a new post](/assests/createStoryScreenshot.PNG)
<br>

#### _ _**Update/Delete a story**_ _ 
<br>

![Update/delete post](/assests/singleStoryvandUpdateandDelete.PNG)
<br>

#### _ _**Create a new prompt**_ _ 
<br>

![create a new post](/assests/createPromptScreenshot.PNG)
<br>

#### _ _**Update/Delete a prompt**_ _ 
<br>

![Update/delete post](/assests/singlePromptvandUpdateandDelete.PNG)
<br>

#### _ _**Comment on a story**_ _ 
<br>

![Comment on a post](public/assests/SingleStoryComment.PNG)
<br>

## Contributing 
---
Contributions are welcome and encouraged for this project. If you find any issues or have any suggestions for new features, please open an issue or submit a pull request. Before submitting a pull request, please ensure that your code adheres to the project's goals and has appropriate test coverage. Thank you for your interest in contributing to this project!

This project was completed by Corey Vasser, Alicia Keberle, Carolina Ramirez Islas, and Chris Sarnacki under the instruction of the University of Oregon Full Stack Development Bootcamp. We appreciate your interest in contributing, and please don't hesitate to reach out if you have any questions. We value your input and look forward to collaborating with you!

<br>

## Questions?
Please contact [keberlea](https://github.com/keberlea), [spamdalfz](https://github.com/spamdalfz) , [csarnacki](https://github.com/csarnacki), [CarolinaRaIs](https://github.com/CarolinaRaIs)