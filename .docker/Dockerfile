# Use node 16
FROM node:16 AS client-build
WORKDIR /app


# install dependencies
# copy package.json and install dependencies
COPY package.json package.json

RUN npm install && mv node_modules /node_modules
RUN npm install react-scripts -g

# Copy source code
COPY . .

RUN npm run build

RUN ls


# Expose API port to the outside for container
EXPOSE 3000

LABEL maintainer="Pascal Ulor <pascalulor@yahoo.com>"

# Launch application
RUN ["chmod", "+x", "/app/dev.docker-entrypoint.sh"]

ENTRYPOINT [ "./dev.docker-entrypoint.sh" ]
