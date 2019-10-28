# Building frontend
FROM node:12.3.0-alpine as frontend
COPY . /app
WORKDIR /app
RUN yarn && yarn build


# Running server
FROM node:12.3.0-alpine as backend
COPY ./backend /app
COPY --from=frontend /app/backend/static /app/static
WORKDIR /app
RUN yarn
CMD ["node", "index.js"]
