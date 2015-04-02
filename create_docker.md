Exercise: Create Dockerfile that runs unit tests

1. Use **vfarcic/books-fe-base** as the base image
2. Set **/app** as the work directory
3. Add **package.json** and **bower.json** to the **/app/** directory
4. Run following **npm** and **bower** commands to install necessary dependencies
```bash
npm install
bower install --allow-root | xargs echo
```
5. Add **run.sh**, **Gruntfile.js**, **gulpfile.js**, **web.js** and **index.html** files to the **/app/** directory
6. Add **src** and **api** directories to the **/app/** directory
7. Set `gulp test` as the Docker command
8. Run **gulp**
```bash
gulp
```
9. Set `/app/run.sh` as the Docker command
10. Build the container using `sudo docker build -t books-fe .` command
