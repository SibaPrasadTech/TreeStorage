# >> STAGE-1 - BUILD
FROM node:lts-alpine3.19 AS build
WORKDIR /app
COPY package*.json .
RUN npm install
COPY . .
RUN npm run build

# >> STAGE-2 - BUILD
FROM node:lts-alpine3.19 AS production
WORKDIR /app
COPY package*.json .
RUN npm ci --only=production
COPY --from=build /app/dist ./dist
# EXPOSE 3001 - will do it in docker run --expose
CMD ["node", "dist/index.js"]