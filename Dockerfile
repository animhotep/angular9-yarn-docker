# base image
FROM node:13.8.0

# set working directory
WORKDIR /app

# install and cache app dependencies
COPY package.json /app/package.json
RUN yarn

# add app
CMD rsync -r --exclude="node_modules" --exclude=".git" . /app

# start app
CMD yarn start
