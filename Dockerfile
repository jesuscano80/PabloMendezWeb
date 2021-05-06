FROM node:10-alpine as crear

WORKDIR /usr/src/app

COPY *.json ./

RUN npm install

COPY . .

EXPOSE 4200

RUN npm run build --prod


#paso 2

FROM nginx:1.13.8-alpine

COPY --from=crear /usr/src/app/dist/pablo /usr/share/nginx/html
