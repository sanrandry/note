__NUXT_JSONP__("/linux/node js deployement", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as,at,au,av,aw,ax,ay,az,aA,aB,aC,aD,aE,aF,aG,aH,aI,aJ,aK,aL,aM,aN,aO,aP,aQ,aR,aS,aT,aU,aV,aW,aX,aY,aZ,a_,a$,ba,bb,bc){return {data:[{document:{title:"Node js SPA deployement with nginx",description:"",position:w,category:"linux",toc:[{id:K,depth:w,text:L},{id:M,depth:w,text:N},{id:O,depth:w,text:P},{id:Q,depth:r,text:R},{id:S,depth:r,text:T},{id:U,depth:w,text:V},{id:W,depth:w,text:X},{id:Y,depth:r,text:Z},{id:_,depth:w,text:$},{id:aa,depth:w,text:ab},{id:ac,depth:w,text:ad},{id:ae,depth:w,text:af},{id:ag,depth:r,text:B},{id:ah,depth:w,text:ai},{id:aj,depth:r,text:ak},{id:al,depth:r,text:am},{id:an,depth:r,text:ao},{id:ap,depth:r,text:aq},{id:ar,depth:r,text:as},{id:at,depth:r,text:B},{id:au,depth:w,text:av},{id:aw,depth:r,text:ax},{id:ay,depth:r,text:az},{id:aA,depth:r,text:aB},{id:aC,depth:r,text:aD},{id:aE,depth:r,text:aF}],body:{type:"root",children:[{type:a,tag:y,props:{id:K},children:[{type:a,tag:k,props:{href:"#connect-via-ssh-to-the-server",ariaHidden:m,tabIndex:n},children:[{type:a,tag:d,props:{className:[o,p]},children:[]}]},{type:b,value:L}]},{type:b,value:c},{type:a,tag:f,props:{className:[g]},children:[{type:a,tag:h,props:{className:[i,l]},children:[{type:a,tag:j,props:{},children:[{type:b,value:"ssh \u003Cuser_name\u003E@\u003Cserver_ip\u003E\n"}]}]}]},{type:b,value:c},{type:a,tag:y,props:{id:M},children:[{type:a,tag:k,props:{href:"#install-node-jsnpm",ariaHidden:m,tabIndex:n},children:[{type:a,tag:d,props:{className:[o,p]},children:[]}]},{type:b,value:N}]},{type:b,value:c},{type:a,tag:s,props:{},children:[{type:b,value:aG},{type:a,tag:k,props:{href:aH,rel:[C,D,E],target:F},children:[{type:b,value:aH}]}]},{type:b,value:c},{type:a,tag:y,props:{id:O},children:[{type:a,tag:k,props:{href:"#install-mongodb",ariaHidden:m,tabIndex:n},children:[{type:a,tag:d,props:{className:[o,p]},children:[]}]},{type:b,value:P}]},{type:b,value:c},{type:a,tag:s,props:{},children:[{type:b,value:"N.B: if you do not use mongodb, skipe this section\nuse this resource: "},{type:a,tag:k,props:{href:aI,rel:[C,D,E],target:F},children:[{type:b,value:aI}]}]},{type:b,value:c},{type:a,tag:t,props:{id:Q},children:[{type:a,tag:k,props:{href:"#enable-the-mongodb-service",ariaHidden:m,tabIndex:n},children:[{type:a,tag:d,props:{className:[o,p]},children:[]}]},{type:b,value:R}]},{type:b,value:c},{type:a,tag:f,props:{className:[g]},children:[{type:a,tag:h,props:{className:[i,l]},children:[{type:a,tag:j,props:{},children:[{type:b,value:"sudo systemctl enable mongod\n"}]}]}]},{type:b,value:c},{type:a,tag:t,props:{id:S},children:[{type:a,tag:k,props:{href:"#start-mongodb-service",ariaHidden:m,tabIndex:n},children:[{type:a,tag:d,props:{className:[o,p]},children:[]}]},{type:b,value:T}]},{type:b,value:c},{type:a,tag:s,props:{},children:[{type:b,value:"this proccess may be need a few minute to execute"}]},{type:b,value:c},{type:a,tag:f,props:{className:[g]},children:[{type:a,tag:h,props:{className:[i,l]},children:[{type:a,tag:j,props:{},children:[{type:b,value:"sudo systemctl start mongod\n"}]}]}]},{type:b,value:c},{type:a,tag:y,props:{id:U},children:[{type:a,tag:k,props:{href:"#install-pm2-globally",ariaHidden:m,tabIndex:n},children:[{type:a,tag:d,props:{className:[o,p]},children:[]}]},{type:b,value:V}]},{type:b,value:c},{type:a,tag:f,props:{className:[g]},children:[{type:a,tag:h,props:{className:[i,l]},children:[{type:a,tag:j,props:{},children:[{type:b,value:"sudo npm install pm2 -g\n"}]}]}]},{type:b,value:c},{type:a,tag:y,props:{id:W},children:[{type:a,tag:k,props:{href:"#add-pm2-to-the-loopback-api",ariaHidden:m,tabIndex:n},children:[{type:a,tag:d,props:{className:[o,p]},children:[]}]},{type:b,value:X}]},{type:b,value:c},{type:a,tag:f,props:{className:[g]},children:[{type:a,tag:h,props:{className:[i,l]},children:[{type:a,tag:j,props:{},children:[{type:b,value:aJ}]}]}]},{type:b,value:c},{type:a,tag:f,props:{className:[g]},children:[{type:a,tag:h,props:{className:[i,l]},children:[{type:a,tag:j,props:{},children:[{type:b,value:"pm2 init\n"}]}]}]},{type:b,value:c},{type:a,tag:t,props:{id:Y},children:[{type:a,tag:k,props:{href:"#for-loopback-3",ariaHidden:m,tabIndex:n},children:[{type:a,tag:d,props:{className:[o,p]},children:[]}]},{type:b,value:Z}]},{type:b,value:c},{type:a,tag:s,props:{},children:[{type:b,value:"change the ecosystem.config.js content to:"}]},{type:b,value:c},{type:a,tag:f,props:{className:[g]},children:[{type:a,tag:h,props:{className:[i,"language-javascript"]},children:[{type:a,tag:j,props:{},children:[{type:b,value:"module"},{type:a,tag:d,props:{className:[e,q]},children:[{type:b,value:"."}]},{type:a,tag:d,props:{className:[e,"property-access"]},children:[{type:b,value:"exports"}]},{type:b,value:u},{type:a,tag:d,props:{className:[e,v]},children:[{type:b,value:"="}]},{type:b,value:u},{type:a,tag:d,props:{className:[e,q]},children:[{type:b,value:G}]},{type:b,value:"\n  apps"},{type:a,tag:d,props:{className:[e,v]},children:[{type:b,value:z}]},{type:b,value:u},{type:a,tag:d,props:{className:[e,q]},children:[{type:b,value:"["}]},{type:b,value:aK},{type:a,tag:d,props:{className:[e,q]},children:[{type:b,value:G}]},{type:b,value:"\n      name"},{type:a,tag:d,props:{className:[e,v]},children:[{type:b,value:z}]},{type:b,value:u},{type:a,tag:d,props:{className:[e,A]},children:[{type:b,value:"\"your_app_name\""}]},{type:a,tag:d,props:{className:[e,q]},children:[{type:b,value:x}]},{type:b,value:"\n      script"},{type:a,tag:d,props:{className:[e,v]},children:[{type:b,value:z}]},{type:b,value:u},{type:a,tag:d,props:{className:[e,A]},children:[{type:b,value:"\"server\u002Fserver.js\""}]},{type:a,tag:d,props:{className:[e,q]},children:[{type:b,value:x}]},{type:b,value:"\n      instances"},{type:a,tag:d,props:{className:[e,v]},children:[{type:b,value:z}]},{type:b,value:u},{type:a,tag:d,props:{className:[e,"number"]},children:[{type:b,value:"1"}]},{type:a,tag:d,props:{className:[e,q]},children:[{type:b,value:x}]},{type:b,value:"\n      autorestart"},{type:a,tag:d,props:{className:[e,v]},children:[{type:b,value:z}]},{type:b,value:u},{type:a,tag:d,props:{className:[e,aL]},children:[{type:b,value:m}]},{type:a,tag:d,props:{className:[e,q]},children:[{type:b,value:x}]},{type:b,value:"\n      watch"},{type:a,tag:d,props:{className:[e,v]},children:[{type:b,value:z}]},{type:b,value:u},{type:a,tag:d,props:{className:[e,aL]},children:[{type:b,value:"false"}]},{type:a,tag:d,props:{className:[e,q]},children:[{type:b,value:x}]},{type:b,value:"\n      max_memory_restart"},{type:a,tag:d,props:{className:[e,v]},children:[{type:b,value:z}]},{type:b,value:u},{type:a,tag:d,props:{className:[e,A]},children:[{type:b,value:"\"1G\""}]},{type:a,tag:d,props:{className:[e,q]},children:[{type:b,value:x}]},{type:b,value:"\n      env"},{type:a,tag:d,props:{className:[e,v]},children:[{type:b,value:z}]},{type:b,value:u},{type:a,tag:d,props:{className:[e,q]},children:[{type:b,value:G}]},{type:b,value:aM},{type:a,tag:d,props:{className:[e,aN]},children:[{type:b,value:aO}]},{type:a,tag:d,props:{className:[e,v]},children:[{type:b,value:z}]},{type:b,value:u},{type:a,tag:d,props:{className:[e,A]},children:[{type:b,value:"\"development\""}]},{type:a,tag:d,props:{className:[e,q]},children:[{type:b,value:x}]},{type:b,value:aP},{type:a,tag:d,props:{className:[e,q]},children:[{type:b,value:H}]},{type:a,tag:d,props:{className:[e,q]},children:[{type:b,value:x}]},{type:b,value:"\n      env_production"},{type:a,tag:d,props:{className:[e,v]},children:[{type:b,value:z}]},{type:b,value:u},{type:a,tag:d,props:{className:[e,q]},children:[{type:b,value:G}]},{type:b,value:aM},{type:a,tag:d,props:{className:[e,aN]},children:[{type:b,value:aO}]},{type:a,tag:d,props:{className:[e,v]},children:[{type:b,value:z}]},{type:b,value:u},{type:a,tag:d,props:{className:[e,A]},children:[{type:b,value:"\"production\""}]},{type:a,tag:d,props:{className:[e,q]},children:[{type:b,value:x}]},{type:b,value:aP},{type:a,tag:d,props:{className:[e,q]},children:[{type:b,value:H}]},{type:a,tag:d,props:{className:[e,q]},children:[{type:b,value:x}]},{type:b,value:aK},{type:a,tag:d,props:{className:[e,q]},children:[{type:b,value:H}]},{type:a,tag:d,props:{className:[e,q]},children:[{type:b,value:x}]},{type:b,value:aQ},{type:a,tag:d,props:{className:[e,q]},children:[{type:b,value:"]"}]},{type:a,tag:d,props:{className:[e,q]},children:[{type:b,value:x}]},{type:b,value:aQ},{type:a,tag:d,props:{className:[e,"spread",v]},children:[{type:b,value:"..."}]},{type:b,value:" other code\n"},{type:a,tag:d,props:{className:[e,q]},children:[{type:b,value:H}]},{type:a,tag:d,props:{className:[e,q]},children:[{type:b,value:";"}]},{type:b,value:"\n\n"}]}]}]},{type:b,value:c},{type:a,tag:s,props:{},children:[{type:b,value:"add this to scritp to package.json"}]},{type:b,value:c},{type:a,tag:f,props:{className:[g]},children:[{type:a,tag:h,props:{className:[i,l]},children:[{type:a,tag:j,props:{},children:[{type:b,value:"\"start\": \"pm2 start ecosystem.config.js --env production\",\n\"stop\": \"pm2 stop ecosystem.config.js --env production\"\n"}]}]}]},{type:b,value:c},{type:a,tag:y,props:{id:_},children:[{type:a,tag:k,props:{href:"#clone-your-project-from-the-git-repository",ariaHidden:m,tabIndex:n},children:[{type:a,tag:d,props:{className:[o,p]},children:[]}]},{type:b,value:$}]},{type:b,value:c},{type:a,tag:f,props:{className:[g]},children:[{type:a,tag:h,props:{className:[i,l]},children:[{type:a,tag:j,props:{},children:[{type:b,value:aR}]}]}]},{type:b,value:c},{type:a,tag:y,props:{id:aa},children:[{type:a,tag:k,props:{href:"#install-dependecies",ariaHidden:m,tabIndex:n},children:[{type:a,tag:d,props:{className:[o,p]},children:[]}]},{type:b,value:ab}]},{type:b,value:c},{type:a,tag:f,props:{className:[g]},children:[{type:a,tag:h,props:{className:[i,l]},children:[{type:a,tag:j,props:{},children:[{type:b,value:aS}]}]}]},{type:b,value:c},{type:a,tag:y,props:{id:ac},children:[{type:a,tag:k,props:{href:"#run-the-server",ariaHidden:m,tabIndex:n},children:[{type:a,tag:d,props:{className:[o,p]},children:[]}]},{type:b,value:ad}]},{type:b,value:c},{type:a,tag:f,props:{className:[g]},children:[{type:a,tag:h,props:{className:[i,l]},children:[{type:a,tag:j,props:{},children:[{type:b,value:"npm start\n"}]}]}]},{type:b,value:c},{type:a,tag:y,props:{id:ae},children:[{type:a,tag:k,props:{href:"#install-and-configure-nginx",ariaHidden:m,tabIndex:n},children:[{type:a,tag:d,props:{className:[o,p]},children:[]}]},{type:b,value:af}]},{type:b,value:c},{type:a,tag:s,props:{},children:[{type:b,value:"user this resource: "},{type:a,tag:k,props:{href:aT,rel:[C,D,E],target:F},children:[{type:b,value:aT}]}]},{type:b,value:c},{type:a,tag:t,props:{id:ag},children:[{type:a,tag:k,props:{href:"#createa-a-file-api-nginx-configuration-file",ariaHidden:m,tabIndex:n},children:[{type:a,tag:d,props:{className:[o,p]},children:[]}]},{type:b,value:B}]},{type:b,value:c},{type:a,tag:f,props:{className:[g]},children:[{type:a,tag:h,props:{className:[i,l]},children:[{type:a,tag:j,props:{},children:[{type:b,value:"cd \u002Fetc\u002Fnginx\u002Fsites-available\u002F\nsuod cp default api\nsudo vim \u002Fetc\u002Fnginx\u002Fsites-available\u002Fapi\n"}]}]}]},{type:b,value:c},{type:a,tag:s,props:{},children:[{type:b,value:aU}]},{type:b,value:c},{type:a,tag:f,props:{className:[g]},children:[{type:a,tag:h,props:{className:[i,l]},children:[{type:a,tag:j,props:{},children:[{type:b,value:aV}]}]}]},{type:b,value:c},{type:a,tag:s,props:{},children:[{type:b,value:aW}]},{type:b,value:c},{type:a,tag:f,props:{className:[g]},children:[{type:a,tag:h,props:{className:[i,l]},children:[{type:a,tag:j,props:{},children:[{type:b,value:aX}]}]}]},{type:b,value:c},{type:a,tag:s,props:{},children:[{type:b,value:aY}]},{type:b,value:c},{type:a,tag:f,props:{className:[g]},children:[{type:a,tag:h,props:{className:[i,l]},children:[{type:a,tag:j,props:{},children:[{type:b,value:aZ}]}]}]},{type:b,value:c},{type:a,tag:y,props:{id:ah},children:[{type:a,tag:k,props:{href:"#spa-deployemnt",ariaHidden:m,tabIndex:n},children:[{type:a,tag:d,props:{className:[o,p]},children:[]}]},{type:b,value:ai}]},{type:b,value:c},{type:a,tag:s,props:{},children:[{type:b,value:"for react:"}]},{type:b,value:c},{type:a,tag:t,props:{id:aj},children:[{type:a,tag:k,props:{href:"#add-pm2-tothe-recat-app",ariaHidden:m,tabIndex:n},children:[{type:a,tag:d,props:{className:[o,p]},children:[]}]},{type:b,value:ak}]},{type:b,value:c},{type:a,tag:f,props:{className:[g]},children:[{type:a,tag:h,props:{className:[i,l]},children:[{type:a,tag:j,props:{},children:[{type:b,value:aJ}]}]}]},{type:b,value:c},{type:a,tag:s,props:{},children:[{type:b,value:"add this line to package.json:"}]},{type:b,value:c},{type:a,tag:f,props:{className:[g]},children:[{type:a,tag:h,props:{className:[i,l]},children:[{type:a,tag:j,props:{},children:[{type:b,value:"\"start-production-server\": \"pm2 start .\u002Fnode_modules\u002Freact-scripts\u002Fscripts\u002Fstart.js --name \u003Cyour-server-name\u003E\",\n\"stop-production-server\": \"pm2 stop \u003Cyour-server-name\u003E\",\n"}]}]}]},{type:b,value:c},{type:a,tag:f,props:{className:[g]},children:[{type:a,tag:h,props:{className:[i,l]},children:[{type:a,tag:j,props:{},children:[{type:b,value:aR}]}]}]},{type:b,value:c},{type:a,tag:t,props:{id:al},children:[{type:a,tag:k,props:{href:"#install-dependencies",ariaHidden:m,tabIndex:n},children:[{type:a,tag:d,props:{className:[o,p]},children:[]}]},{type:b,value:am}]},{type:b,value:c},{type:a,tag:f,props:{className:[g]},children:[{type:a,tag:h,props:{className:[i,l]},children:[{type:a,tag:j,props:{},children:[{type:b,value:aS}]}]}]},{type:b,value:c},{type:a,tag:t,props:{id:an},children:[{type:a,tag:k,props:{href:"#start-the-server",ariaHidden:m,tabIndex:n},children:[{type:a,tag:d,props:{className:[o,p]},children:[]}]},{type:b,value:ao}]},{type:b,value:c},{type:a,tag:f,props:{className:[g]},children:[{type:a,tag:h,props:{className:[i,l]},children:[{type:a,tag:j,props:{},children:[{type:b,value:"npm run build\nnpm run start-production-server\n"}]}]}]},{type:b,value:c},{type:a,tag:t,props:{id:ap},children:[{type:a,tag:k,props:{href:"#save-the-pm2-status",ariaHidden:m,tabIndex:n},children:[{type:a,tag:d,props:{className:[o,p]},children:[]}]},{type:b,value:aq}]},{type:b,value:c},{type:a,tag:f,props:{className:[g]},children:[{type:a,tag:h,props:{className:[i,l]},children:[{type:a,tag:j,props:{},children:[{type:b,value:"pm2 save\n"}]}]}]},{type:b,value:c},{type:a,tag:t,props:{id:ar},children:[{type:a,tag:k,props:{href:"#configure-the-reverse-proxy-for-the-spa",ariaHidden:m,tabIndex:n},children:[{type:a,tag:d,props:{className:[o,p]},children:[]}]},{type:b,value:as}]},{type:b,value:c},{type:a,tag:t,props:{id:at},children:[{type:a,tag:k,props:{href:"#createa-a-file-api-nginx-configuration-file-1",ariaHidden:m,tabIndex:n},children:[{type:a,tag:d,props:{className:[o,p]},children:[]}]},{type:b,value:B}]},{type:b,value:c},{type:a,tag:f,props:{className:[g]},children:[{type:a,tag:h,props:{className:[i,l]},children:[{type:a,tag:j,props:{},children:[{type:b,value:"cd \u002Fetc\u002Fnginx\u002Fsites-available\u002F\nsuod cp default front\nsudo vim \u002Fetc\u002Fnginx\u002Fsites-available\u002Ffront\n"}]}]}]},{type:b,value:c},{type:a,tag:s,props:{},children:[{type:b,value:aU}]},{type:b,value:c},{type:a,tag:f,props:{className:[g]},children:[{type:a,tag:h,props:{className:[i,l]},children:[{type:a,tag:j,props:{},children:[{type:b,value:aV}]}]}]},{type:b,value:c},{type:a,tag:s,props:{},children:[{type:b,value:aW}]},{type:b,value:c},{type:a,tag:f,props:{className:[g]},children:[{type:a,tag:h,props:{className:[i,l]},children:[{type:a,tag:j,props:{},children:[{type:b,value:aX}]}]}]},{type:b,value:c},{type:a,tag:s,props:{},children:[{type:b,value:aY}]},{type:b,value:c},{type:a,tag:f,props:{className:[g]},children:[{type:a,tag:h,props:{className:[i,l]},children:[{type:a,tag:j,props:{},children:[{type:b,value:aZ}]}]}]},{type:b,value:c},{type:a,tag:y,props:{id:au},children:[{type:a,tag:k,props:{href:"#add-ssl-with-letsencrypt",ariaHidden:m,tabIndex:n},children:[{type:a,tag:d,props:{className:[o,p]},children:[]}]},{type:b,value:av}]},{type:b,value:c},{type:a,tag:t,props:{id:aw},children:[{type:a,tag:k,props:{href:"#install-certbot",ariaHidden:m,tabIndex:n},children:[{type:a,tag:d,props:{className:[o,p]},children:[]}]},{type:b,value:ax}]},{type:b,value:c},{type:a,tag:s,props:{},children:[{type:b,value:aG},{type:a,tag:k,props:{href:a_,rel:[C,D,E],target:F},children:[{type:b,value:a_}]}]},{type:b,value:c},{type:a,tag:t,props:{id:ay},children:[{type:a,tag:k,props:{href:"#generate-the-certificat-for-the-api-domain",ariaHidden:m,tabIndex:n},children:[{type:a,tag:d,props:{className:[o,p]},children:[]}]},{type:b,value:az}]},{type:b,value:c},{type:a,tag:f,props:{className:[g]},children:[{type:a,tag:h,props:{className:[i,l]},children:[{type:a,tag:j,props:{},children:[{type:b,value:"sudo letsencrypt certonly -a webroot --webroot-path=\u002Fusr\u002Fshare\u002Fnginx\u002Fwebsite.com\u002F -d apidomain.com\n"}]}]}]},{type:b,value:c},{type:a,tag:t,props:{id:aA},children:[{type:a,tag:k,props:{href:"#edit-the-api-nginx-config-to-add-ssl-entries",ariaHidden:m,tabIndex:n},children:[{type:a,tag:d,props:{className:[o,p]},children:[]}]},{type:b,value:aB}]},{type:b,value:c},{type:a,tag:I,props:{},children:[{type:b,value:c},{type:a,tag:J,props:{},children:[{type:b,value:a$}]},{type:b,value:c}]},{type:b,value:c},{type:a,tag:f,props:{className:[g]},children:[{type:a,tag:h,props:{className:[i,l]},children:[{type:a,tag:j,props:{},children:[{type:b,value:ba}]}]}]},{type:b,value:c},{type:a,tag:I,props:{},children:[{type:b,value:c},{type:a,tag:J,props:{},children:[{type:b,value:bb}]},{type:b,value:c}]},{type:b,value:c},{type:a,tag:f,props:{className:[g]},children:[{type:a,tag:h,props:{className:[i,l]},children:[{type:a,tag:j,props:{},children:[{type:b,value:"server {\n    server_name www.apidomain.com;\n    listen 443 ssl;\n    listen [::]:443 ssl;\n    root \u002Fusr\u002Fshare\u002Fnginx\u002Fwebsite.com;\n    index index.php index.html index.htm;\n    location \u002F {\n        proxy_pass http:\u002F\u002Flocalhost:3000; #whatever port your app runs on\n        proxy_http_version 1.1;\n        proxy_set_header Upgrade $http_upgrade;\n        proxy_set_header Connection 'upgrade';\n        proxy_set_header Host $host;\n        proxy_cache_bypass $http_upgrade;\n    }\n\n    ssl_certificate \u002Fetc\u002Fletsencrypt\u002Flive\u002Fwebsite.com\u002Ffullchain.pem; #depend on your domain\n    ssl_certificate_key \u002Fetc\u002Fletsencrypt\u002Flive\u002Fwebsite.com\u002Fprivkey.pem; # depend on you domain\n  }\n\n"}]}]}]},{type:b,value:c},{type:a,tag:t,props:{id:aC},children:[{type:a,tag:k,props:{href:"#generate-the-certificat-for-the-frontend-domain",ariaHidden:m,tabIndex:n},children:[{type:a,tag:d,props:{className:[o,p]},children:[]}]},{type:b,value:aD}]},{type:b,value:c},{type:a,tag:f,props:{className:[g]},children:[{type:a,tag:h,props:{className:[i,l]},children:[{type:a,tag:j,props:{},children:[{type:b,value:"sudo letsencrypt certonly -a webroot --webroot-path=\u002Fusr\u002Fshare\u002Fnginx\u002Fwebsite.com\u002F -d frontdomain.com\n"}]}]}]},{type:b,value:c},{type:a,tag:t,props:{id:aE},children:[{type:a,tag:k,props:{href:"#edit-the-front-nginx-config-to-add-ssl-entries",ariaHidden:m,tabIndex:n},children:[{type:a,tag:d,props:{className:[o,p]},children:[]}]},{type:b,value:aF}]},{type:b,value:c},{type:a,tag:I,props:{},children:[{type:b,value:c},{type:a,tag:J,props:{},children:[{type:b,value:a$}]},{type:b,value:c}]},{type:b,value:c},{type:a,tag:f,props:{className:[g]},children:[{type:a,tag:h,props:{className:[i,l]},children:[{type:a,tag:j,props:{},children:[{type:b,value:ba}]}]}]},{type:b,value:c},{type:a,tag:I,props:{},children:[{type:b,value:c},{type:a,tag:J,props:{},children:[{type:b,value:bb}]},{type:b,value:c}]},{type:b,value:c},{type:a,tag:f,props:{className:[g]},children:[{type:a,tag:h,props:{className:[i,l]},children:[{type:a,tag:j,props:{},children:[{type:b,value:"server {\n    server_name www.yourdomain.com;\n    listen 443 ssl;\n    listen [::]:443 ssl;\n    root \u002Fusr\u002Fshare\u002Fnginx\u002Fwebsite.com;\n    index index.php index.html index.htm;\n    location \u002F {\n        proxy_pass http:\u002F\u002Flocalhost:3000; #whatever port your app runs on\n        proxy_http_version 1.1;\n        proxy_set_header Upgrade $http_upgrade;\n        proxy_set_header Connection 'upgrade';\n        proxy_set_header Host $host;\n        proxy_cache_bypass $http_upgrade;\n    }\n\n    ssl_certificate \u002Fetc\u002Fletsencrypt\u002Flive\u002Fwebsite.com\u002Ffullchain.pem; #depend on your domain\n    ssl_certificate_key \u002Fetc\u002Fletsencrypt\u002Flive\u002Fwebsite.com\u002Fprivkey.pem; #depend on your domain\n  }\n\n"}]}]}]}]},dir:"\u002Fen\u002Flinux",path:"\u002Fen\u002Flinux\u002Fnode js deployement",extension:".md",slug:"node js deployement",createdAt:bc,updatedAt:bc,to:"\u002Flinux\u002Fnode js deployement"},prev:{title:"The E-myth revisited",slug:"the_e_myth_resited",to:"\u002Fbook\u002Fthe_e_myth_resited"},next:{title:"Theme Creation",slug:"theme creation",to:"\u002Fprogramming\u002Fwordpress\u002Ftheme creation"}}],fetch:[],mutations:[]}}("element","text","\n","span","token","div","nuxt-content-highlight","pre","line-numbers","code","a","language-text","true",-1,"icon","icon-link","punctuation",3,"p","h3"," ","operator",2,",","h2",":","string","createa a file api nginx configuration file","nofollow","noopener","noreferrer","_blank","{","}","ul","li","connect-via-ssh-to-the-server","connect via ssh to the server","install-node-jsnpm","install node js\u002Fnpm","install-mongodb","install mongodb","enable-the-mongodb-service","enable the mongodb service","start-mongodb-service","start mongodb service","install-pm2-globally","install pm2 globally","add-pm2-to-the-loopback-api","add pm2 to the loopback api","for-loopback-3","for loopback 3","clone-your-project-from-the-git-repository","clone your project from the git repository","install-dependecies","install dependecies","run-the-server","run the server","install-and-configure-nginx","install and configure nginx","createa-a-file-api-nginx-configuration-file","spa-deployemnt","SPA deployemnt","add-pm2-tothe-recat-app","add pm2 tothe recat app","install-dependencies","install dependencies","start-the-server","start the server","save-the-pm2-status","save the pm2 status","configure-the-reverse-proxy-for-the-spa","configure the reverse proxy for the SPA","createa-a-file-api-nginx-configuration-file-1","add-ssl-with-letsencrypt","Add SSL with LetsEncrypt","install-certbot","install certbot","generate-the-certificat-for-the-api-domain","generate the certificat for the api domain","edit-the-api-nginx-config-to-add-ssl-entries","edit the api nginx config to add ssl entries","generate-the-certificat-for-the-frontend-domain","generate the certificat for the frontend domain","edit-the-front-nginx-config-to-add-ssl-entries","edit the front nginx config to add ssl entries","use this resource: ","https:\u002F\u002Fnodejs.org\u002Fen\u002F","https:\u002F\u002Fdocs.mongodb.com\u002Fmanual\u002Finstallation\u002F","npm install pm2 --save\n","\n    ","boolean","\n        ","constant","NODE_ENV","\n      ","\n  ","git clone \u003Cyour_project_git_repository\u003E\n","npm install\n","https:\u002F\u002Fdocs.nginx.com\u002Fnginx\u002Fadmin-guide\u002Finstalling-nginx\u002Finstalling-nginx-open-source\u002F#prebuilt_ubuntu","add this to the location part in the server block","server_name yourdomain.com www.yourdomain.com;\n\n    location \u002F {\n        proxy_pass http:\u002F\u002Flocalhost:3000; #whatever port your app runs on\n        proxy_http_version 1.1;\n        proxy_set_header Upgrade $http_upgrade;\n        proxy_set_header Connection 'upgrade';\n        proxy_set_header Host $host;\n        proxy_cache_bypass $http_upgrade;\n    }\n","activat the api site","sudo ln -s \u002Fetc\u002Fnginx\u002Fsites-available\u002Fapi \u002Fetc\u002Fnginx\u002Fsites-enabled\u002Fapi\n","restart the nginx service","sudo service nginx restart\n","https:\u002F\u002Fcertbot.eff.org\u002Flets-encrypt\u002Fubuntufocal-nginx","Add redirect to https in port 80 block","return 301 https:\u002F\u002F$host$request_uri;\n","Add a new block for port 443","2021-04-26T16:41:32.983Z")));