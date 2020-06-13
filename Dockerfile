# Building frontend
FROM node:12.3.0-alpine as frontend
WORKDIR /app
COPY package.json package.json
COPY ./frontend/package.json ./frontend/package.json
COPY ./backend/package.json ./backend/package.json
RUN yarn
COPY . /app
RUN yarn build


# Running server
FROM node:12.3.0-alpine as backend
COPY ./backend /app
COPY --from=frontend /app/backend/static /app/static
WORKDIR /app
RUN yarn
CMD ["node", "index.js"]
