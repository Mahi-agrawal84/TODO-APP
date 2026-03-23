mkdir backend
cd backend
npm init -y

npm install express mongoose dotenv
npm install nodemon --save-dev

touch .env
touch .gitignore

mkdir src
cd src

mkdir config controllers models routes middleware utils

touch config/db.js

touch controllers/todo.controller.js

touch models/todo.model.js

touch routes/todo.routes.js

touch middleware/error.middleware.js
touch middleware/auth.middleware.js

touch app.js
touch server.js
