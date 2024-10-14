FROM node:18-alpine

WORKDIR /app

COPY package.json package.json
COPY package-lock.json package-lock.json
RUN ["npm", "install"]
RUN npm install forever -g

COPY src src
COPY tsconfig.json tsconfig.json
COPY hardhat.config.js hardhat.config.js
RUN ["npm", "run", "build"]

CMD [ "forever", "dist/index.js","--spinSleepTime", "10000"]
