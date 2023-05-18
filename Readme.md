# Dungeons and Dragons Token Generator

This is an tool to create Dungeons and Dragons tokens (which can also be used for other pen & paper games).
It creates tokens in the sizes medium (2.5cm wide), large (5cm wide)., huge (7.5cm wide) and gargantuan (10cm wide).

## Using the Token Generator

The Token Generator is ready to use at https://dndtokens.herokuapp.com/index.html. 

## Host it on your own Server

If you want to run the token generator on your own server, simply clone this repository and copy the files to your webservers public directory. For the case that you want to run it locally on your machine, follow the instructions for setting up a development environment.

## Setting up a Development Environment

First clone this repository by running this command in your favourite terminal:
```
git clone https://Riger2311@bitbucket.org/Riger2311/dndtokens.git
cd dndtokens
```
You can use the included docker file to set up a local webserver for development. Make sure you have docker-compose installed and run:
```
docker-compose up -d 
```
This pulls and starts a minimal apache webserver on your machine and mounts the repository directory to its htdocs directory.
After that, you can connect to the server by entering the url `localhost:8080` in your browser.

## Bug Reports and Feature Requests

If you want to report bugs, suggest a feature or simply want to say thanks, feel free to drop me a mail at `dominik dot mocher at npluseins dot com`.
Since I'm developing this in my leisure time, I do not provide any guarantees, warranties or similar, not even implied.
