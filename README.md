# CSCO - Your Personal Media Board
#### Shareable collections for your digital snapshots

This is the frontend repo for CSCO. The backend repo can be found at: [https://github.com/Jaysontian/csco-api]

![image](https://github.com/cs35l-group/csco/assets/48577877/0e331320-2500-47f1-89ce-c9b929533168)

## About this Project
### Built With
- 
- [![Express][Express.js]][Express-url]
- [![React][React.js]][React-url]
- [![OpenAI][OpenAI]][OpenAI-url]

  
### Description/Motivation
CSCO is a social media web application built with the MERN tech stack. Users can create authenticated accounts and post images (either through URL or file upload) onto their profile. Using OpenAI’s GPT 4 Vision Preview API, CSCO automatically generates “vibe” words for each image. Users can search for posts by searching for other users or by searching by image “vibe”.

This project was built UCLA’s CS 35L course.


## Getting Started
### Prerequisites
* npm
  ```sh
  npm install npm@latest -g
  ```
### Installing the frontend 
1. Clone the repo
   ```sh
   git clone https://github.com/cs35l-group/csco
   ```
2. Install NPM packages
   ```sh
   npm install
   ```

### Installing the backend
1. Clone the repo
   ```sh
   git clone https://github.com/Jaysontian/csco-api
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Create an Open AI API Key (preferably with a GPT 4 account) at [https://platform.openai.com/api-keys](https://platform.openai.com/api-keys) 
4. Create a 32-byte JWT hash by running 
	```sh
	openssl rand -hex 32 
	```
5. Create a MongoDB deployment and save the connection string and replace `<password>` with your database password

6. Create a `.env` file in the main project folder and enter your API Key in it
   ```js
   const API_KEY = 'ENTER YOUR API KEY’;
   const JWT_SECRET = 'ENTER YOUR JWT HASH’;
   const MONGO_URI = 'ENTER YOUR MONGO CONNECTION STRING’; 
   ```
### Launch on localhost

1. Launch the backend
   ```sh
   npm start
   ```
- If backend connection to MongoDB fails, you might have to go to your MongoDB database page and enable all IP Addresses

2. Launch the frontend repo
-    ```sh
-    npm start
-    ```

<!-- USAGE EXAMPLES -->
## Usage
- 

<!-- ROADMAP -->
## Roadmap
- 

<!-- CONTRIBUTING -->
## Contributing
Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<!-- LICENSE -->
## License
Distributed under the MIT License. See `LICENSE.txt` for more information.


<!-- ACKNOWLEDGMENTS -->
## Acknowledgments
* [Open AI Chat Completions Docs](https://platform.openai.com/docs/guides/text-generation)
- [Bcrypt and JWT encryption](https://dev.to/eidorianavi/authentication-and-jwt-in-node-js-4i13)
* [README Template](https://github.com/othneildrew/Best-README-Template)
   
[OpenAI]: https://img.shields.io/badge/OpenAI-412991.svg?style=for-the-badge&logo=OpenAI&logoColor=white
[OpenAI-url]: https://platform.openai.com/docs/guides/text-generation
[Express.js]: https://img.shields.io/badge/Express.js-404D59?style=for-the-badge
[Express-url]: https://expressjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/

