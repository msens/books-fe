Exercise: Create Dockerfile that runs unit tests

1. Use **google/nodejs** as the base image
2. Set **/app** as the work directory
3. Add **package.json** and **bower.json** to the **/app/** directory
4. Run following **npm** and **bower** commands to install necessary dependencies
  1. npm install -g grunt-cli
  2. npm install -g gulp
  3. npm install -g bower
  4. npm install
  5. bower install --allow-root --config.interactive=false
5. Add **Gruntfile.js**, **gulpfile.js** files to the **/app/** directory
6. Add **src** directory to the **/app/** directory
7. Set `gulp test` as the Docker command
8. Build the container using `docker build -t books-fe .` command
9. Run unit tests using `docker run -t --rm books-fe command