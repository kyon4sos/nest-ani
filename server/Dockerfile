FROM node:lts-buster-slim
ENV NODE_ENV production
RUN mkdir -p /home/app
WORKDIR /home/app
COPY ["package.json" ,"package-lock.json","/home/app/" ]
COPY 'dist' /home/app/dist
RUN yarn config set registry https://registry.npm.taobao.org/ \
&& npm config set registry https://registry.npm.taobao.org/ \
&& npm install pm2 -g \
&& yarn
EXPOSE 3000
CMD ["pm2-runtime", "./dist/main.js"]