# GetBack - Lost and Found Items Platform

GetBack is a platform designed to help people report and find lost and found items. Users can post details about items they have lost or found, and browse through other posts to help reunite owners with their belongings.

## Instructions on how to run the application locally 📝

- 1️⃣ Clone the repository to your machine. Use this link to do it.
- 2️⃣ Open the project in vs code and create a file named .env in the root of the folder.
- 3️⃣ Add the code bellow in the .env file

```
NEXT_PUBLIC_SERVER_URL=https://getback-server.vercel.app/api

# cloudinary
# use your credentials here
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=
NEXT_PUBLIC_CLOUDINARY_API_KEY=
NEXT_PUBLIC_CLOUDINARY_API_SECRET=

```

- 4️⃣ Open the command prompt on the project path or terminal on the vs code by pressing Ctrl + `
- 5️⃣ Run the command 'npm i' or 'npm install' to install all the necessary dependencies.
- 6️⃣ To run the app on <http://localhost:3000>, run the command 'npm run dev'.

- 7️⃣ To run the production version, run the command 'npm run build' to build the project. After complete the build process, run 'npm run start:prod' to run the build or production version on the localhost.

#### This app is deployed on vercel

links ↦

client-git: <https://github.com/hasansharif819/getback-client>
backend-git: <https://github.com/hasansharif819/getback>

client-live: <https://getback-lemon.vercel.app>
backend-live: <https://getback-server.vercel.app>

admin - there is no dashboard right now. but all apis are already created on the server.

- email : <hs.sharif819@gmail.com>
- password : SuperAdmin

user -

- email :sharif@gmail.com
- password: 123456

## tasks you can perform

- sign up or delete existing account
- login with email and password
- post and delete lost and found items with multiple images
- can claim a found item
- preview claims and make response. the claimer will get the notification through email.
- can edit posts and claims
- can search lost or found items. also can filter them with categories.
- all post and info will show on the my profile page
