FROM nginx:1.21.3-alpine

COPY ./services/nginx/conf.d/*.conf /etc/nginx/conf.d/

CMD [ "nginx", "-g", "daemon off;" ]