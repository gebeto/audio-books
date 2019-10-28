FROM node:12.3.0-alpine

COPY . /app

WORKDIR /app

RUN yarn

EXPOSE 5000

# CMD ["exec", "yarn", "workspace", "@audio-books/backend", "start"]
CMD ["node", "backend/index.js"]
# ENTRYPOINT ["backend/index.js"]
