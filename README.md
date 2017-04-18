# The DogeMate Project

## Requirements

* Install NodeJS
* Install MongoDB

## Initialization

1. Clone the project folder.

```
git clone https://github.com/UCdavidUC/DogeMate.git
```

Note: if you have a Windows machine please install [Git for Windows](https://git-scm.com/download/win). Once you have installed Git you can use all bash commands from the git bash console.

2. Go to the project directory  and type the following command:

```
npm install
```

This command will help you set all the project's required modules.

3. On a separate console go to the the project directory and run the following commands:

```
mkdir db
mongod --dbpath db
```

This commands will create a process for the MongoDB Databse Management System.

4. Open another git bash console and go to the project directory, type the following command:

```
sudo nodemon
```

If it throws module nodemon not found, run the following commands:

```
sudo npm install nodemon -g
sudo nodemon
```