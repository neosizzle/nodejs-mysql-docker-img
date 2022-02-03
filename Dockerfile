#base image
FROM node

ADD . /docker_node
WORKDIR /docker_node

#RUN
# RUN apt-get -yqq update
RUN npm install
RUN npm install -g nodemon

EXPOSE 3000

CMD ["npm", "run", "dev"]