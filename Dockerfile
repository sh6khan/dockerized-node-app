FROM node:4-onbuild

# add the source code into the /code directory of the
# docker image
ADD . /code
WORKDIR /code

# install all the production npm packages
RUN npm install --production

# expose port 8080 from the docker dameon ?
EXPOSE 8888

CMD node index.js


