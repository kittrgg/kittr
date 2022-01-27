FROM node:16

# Create app directory
WORKDIR /src

# Bundle app source
COPY ./ ./

# Install app dependencies
COPY package*.json ./
RUN npm ci --only=production


EXPOSE 5000
CMD [ "ts-node", "-r tsconfig-paths/register", "index.ts" ]