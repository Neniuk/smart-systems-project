# App Name


## Description


## Development


### Dependencies

Download the dependencies separately in the client
**AND** server folders with:

    npm install

Make sure you're in the correct folder when you run
the command.


### Running the App

Before running the app, make sure you have all the
dependencies installed, and that you have an `.env`
file in the server folder with the following variables:

    PORT="5000"
    OPENWEATHER_API_KEY="your-api-key-here"


To start the client and server, run the following
command separately in the client **AND** server
folders:

    npm start

The client will run on port 3000 and the server will
run on port 5000. Production build is hosted by the
server on port 5000.


### Code Style

This project uses [Prettier](https://prettier.io/) for
code formatting. Please install the Prettier extension
for your code editor of choice and enable format on
save. 

**Optionally** you can instead manually run prettier
in the terminal with:

    prettier . --write

Refer to the [documentation](https://prettier.io/docs/en/cli.html) 
for more detailed instructions on the use of the
Prettier CLI.

**NOTE!** This command will overwrite all files in the
current folder and subfolders. Make sure you're in the
correct folder when you run the command. Files and
folders can be excluded by adding them to the
`.prettierignore` file (such as node_modules, build or
dist directories, which are already in the file). 

In addition it uses the Prettier Tailwind plugin to
format Tailwind classes, this is installed
automatically when you run `npm install` in each
folder.
