---
title: Node js SPA deployement with nginx
description: ""
position: 2
category: "linux"
---

## connect via ssh to the server

```
ssh <user_name>@<server_ip>
```

## install node js/npm

use this resource: https://nodejs.org/en/

## install mongodb

N.B: if you do not use mongodb, skipe this section
use this resource: https://docs.mongodb.com/manual/installation/

### enable the mongodb service

```
sudo systemctl enable mongod
```

### start mongodb service

this proccess may be need a few minute to execute

```
sudo systemctl start mongod
```

## install pm2 globally

```
sudo npm install pm2 -g
```

## add pm2 to the loopback api

```
npm install pm2 --save
```

```
pm2 init
```

### for loopback 3

change the ecosystem.config.js content to:

```javascript
module.exports = {
  apps: [
    {
      name: "your_app_name",
      script: "server/server.js",
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: "1G",
      env: {
        NODE_ENV: "development",
      },
      env_production: {
        NODE_ENV: "production",
      },
    },
  ],
  ... other code
};

```

add this to scritp to package.json

```
"start": "pm2 start ecosystem.config.js --env production",
"stop": "pm2 stop ecosystem.config.js --env production"
```

## clone your project from the git repository

```
git clone <your_project_git_repository>
```

## install dependecies

```
npm install
```

## run the server

```
npm start
```

## install and configure nginx

user this resource: https://docs.nginx.com/nginx/admin-guide/installing-nginx/installing-nginx-open-source/#prebuilt_ubuntu

### createa a file api nginx configuration file

```
cd /etc/nginx/sites-available/
suod cp default api
sudo vim /etc/nginx/sites-available/api
```

add this to the location part in the server block

```
server_name yourdomain.com www.yourdomain.com;

    location / {
        proxy_pass http://localhost:3000; #whatever port your app runs on
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
```

activat the api site

```
sudo ln -s /etc/nginx/sites-available/api /etc/nginx/sites-enabled/api
```

restart the nginx service

```
sudo service nginx restart
```

## SPA deployemnt

for react:

### add pm2 tothe recat app

```
npm install pm2 --save
```

add this line to package.json:

```
"start-production-server": "pm2 start ./node_modules/react-scripts/scripts/start.js --name <your-server-name>",
"stop-production-server": "pm2 stop <your-server-name>",
```

```
git clone <your_project_git_repository>
```

### install dependencies

```
npm install
```

### start the server

```
npm run build
npm run start-production-server
```

### save the pm2 status

```
pm2 save
```

### configure the reverse proxy for the SPA

### createa a file api nginx configuration file

```
cd /etc/nginx/sites-available/
suod cp default front
sudo vim /etc/nginx/sites-available/front
```

add this to the location part in the server block

```
server_name yourdomain.com www.yourdomain.com;

    location / {
        proxy_pass http://localhost:3000; #whatever port your app runs on
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
```

activat the api site

```
sudo ln -s /etc/nginx/sites-available/api /etc/nginx/sites-enabled/api
```

restart the nginx service

```
sudo service nginx restart
```

## Add SSL with LetsEncrypt

### install certbot

use this resource: https://certbot.eff.org/lets-encrypt/ubuntufocal-nginx

### generate the certificat for the api domain

```
sudo letsencrypt certonly -a webroot --webroot-path=/usr/share/nginx/website.com/ -d apidomain.com
```

### edit the api nginx config to add ssl entries

- Add redirect to https in port 80 block

```
return 301 https://$host$request_uri;
```

- Add a new block for port 443

```
server {
    server_name www.apidomain.com;
    listen 443 ssl;
    listen [::]:443 ssl;
    root /usr/share/nginx/website.com;
    index index.php index.html index.htm;
    location / {
        proxy_pass http://localhost:3000; #whatever port your app runs on
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }

    ssl_certificate /etc/letsencrypt/live/website.com/fullchain.pem; #depend on your domain
    ssl_certificate_key /etc/letsencrypt/live/website.com/privkey.pem; # depend on you domain
  }

```

### generate the certificat for the frontend domain

```
sudo letsencrypt certonly -a webroot --webroot-path=/usr/share/nginx/website.com/ -d frontdomain.com
```

### edit the front nginx config to add ssl entries

- Add redirect to https in port 80 block

```
return 301 https://$host$request_uri;
```

- Add a new block for port 443

```
server {
    server_name www.yourdomain.com;
    listen 443 ssl;
    listen [::]:443 ssl;
    root /usr/share/nginx/website.com;
    index index.php index.html index.htm;
    location / {
        proxy_pass http://localhost:3000; #whatever port your app runs on
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }

    ssl_certificate /etc/letsencrypt/live/website.com/fullchain.pem; #depend on your domain
    ssl_certificate_key /etc/letsencrypt/live/website.com/privkey.pem; #depend on your domain
  }

```
