# Express Apollo MongoDB Project

This project is a simple GraphQL API built with Express.js, Apollo Server, and MongoDB. It demonstrates how to create and query data using GraphQL and MongoDB as the database.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js
- npm
- MongoDB

### Installation

1. Clone the repository
    ```
    git clone https://github.com/yourusername/express-apollo-mongodb.git
    cd express-apollo-mongodb
    ```

2. Install dependencies
    ```
    npm install
    ```

3. Setup environment variables. Create a `.env` file in the root directory and set your variables:
    ```
    MONGODB_URI=your_mongodb_uri
    PORT=3000
    ```

4. Run the application
    ```
    npm start
    ```

5. Visit `http://localhost:3000/graphql` in your browser to use the GraphQL playground.

### Usage

This project defines a simple schema for a task with two fields: title and description. You can create and retrieve tasks through GraphQL mutations and queries.

Example Mutation:
```graphql
mutation {
  createTask(task: { title: "My Task", description: "This is a task description" }) {
    title
    description
  }
}
Example Query:

graphql
Copy code
query {
  tasks {
    title
    description
  }
}
```
### Deployment
To deploy this on a server, make sure that you have a MongoDB instance that your server can connect to and make sure the .env file or environment variables are set up on the server. You can deploy this app on various platforms like Heroku, AWS, DigitalOcean, etc.

### Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

### License
This project is licensed under the MIT License - see the LICENSE file for details.
