# take default image of node boron i.e node 6.x
FROM node:6.10.1

MAINTAINER Ruslan Kazakov <ruslan.kazakov@gmail.com>

# create app directory in container
RUN mkdir -p /app

# set /app directory as default working directory
WORKDIR /app

# only copy package.json initially so that `RUN yarn` layer is recreated only
# if there are changes in package.json
ADD package.json /app/

RUN npm install

# copy all file from current dir to /app in container
COPY . /app/

# expose port 3333
EXPOSE 3333

# cmd to start service
CMD [ "npm", "start" ]