### Site link

https://chatify-app-project.netlify.app/

# ChatApp

ChatApp allows users to create an account and connect with friends. Using web Socket.IO the app allows users to have real time conversations similar to other applications like WhatsApp. The applications client side was build with React and Redux, with Axios used to make API calls to the server side which was build with Express. All data is managed by ClearDB MySQL using Sequelize.

### Executing program

Copy the repository.

```
git clone git@github.com:Nuccino92/chat-app.git
```

Enter into the client/server directories through terminal respectively.

#### Client Directory (terminal)

```
npm install
npm start
```

#### Server Directory (terminal)

```
npm install
```

- Create a local MYSQL database https://dev.mysql.com/doc/workbench/en/
- Create a Cloudinary account https://cloudinary.com/
- Create .env file that contains:

```
// NODE
PORT = 8000

// database info
HOST = XXXXXX
USER = XXXXXX
PASSWORD = XXXXXX
DATABASE = XXXXXX

//JWT
JWT_SECRET = XXXXXX (any secret you want to use)

//cloudinary info
CLOUDINARY_CLOUD_NAME = XXXXXX
CLOUDINARY_API_KEY = XXXXXX
CLOUDINARY_API_SECRET = XXXXXX
```

```
npm start
```
