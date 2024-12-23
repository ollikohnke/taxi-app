## version 1.2
# taxi-app

- Node.js Express Backend
- React Frontend
- JWT Auth
- Esbuild for bundling
- Podman for deployment

## Logic
### Node express works as backend which purpose is to:

  - Act as a HTTP server for frontends (customer and driver)
  - Act as an API to save data to memory and respond to requests by clients (GET and POST)
  - Implement JWT authentication and authorization for API calls

### React is used for frontends which purpose is to:

For customer:
  - See current status of the driver
  - See current location of the driver

For driver:
  - Set the current status
  - Choose if to share the location or no

### Esbuild is used to achieve:

  - Lightning fast development for React with watch feature
  - Minified production bundle

## Deployment

### Podman build & compose
1. Create image with a tag
```
podman build -t taxi-app .
```
2. Copy files from (development folder) ./dist_back and ./dist_front to importantly include index.html and assets
```
cp -r ./dist_back /path/to/your/deployment/dist_back
cp -r ./dist_front /path/to/your/deployment/dist_front
```
3. Create docker-compose.yaml file to /path/to/your/deployment/
```yaml
services:
  taxi-app:
    image: localhost/taxi-app
    container_name: taxi-app
    networks:
      - internal
    expose:
      - 3000
    volumes:
      - /path/to/your/deployment/dist_back:/home/node/app/dist_back
      - /path/to/your/deployment/dist_front:/home/node/app/dist_front
    restart: unless-stopped
    environment:
      - TZ=Europe/Helsinki
      - PROD=TRUE
      - PORT=3000
      - JWT_SECRET=secret
      - JWT_EXPIRES=1h
      - CREDENTIALS_USERNAME=secret
      - CREDENTIALS_PINCODE=secret
      - SERVER_URI=your_url
networks:
  internal:
    external: true
```
4. Start the "stack" with configuration above
```
podman compose up -d
```



> [!TIP]
> Since you have mounted dist_back and dist_front to the container, it is possible to make further development with
> ```
> npm run build-prod
> ```
> which bundles the client files to your mounted volume configured in package.json

> [!IMPORTANT]
> The docker image does not contain required index.html or assets. This is why it is important to check these files.
> Also, care is needed to sustain integrity of dist_back and dist_front when rebuilding image after file changes.

## Development

### Github branching

Creating a new branch:
```
git branch new_branch
```
Seetting branch as current branch:
```
git checkout new_branch
```

### Bundling development to local folder
```
npm run watch-front
npm run watch-back
npm run nodemon-dev
```

### Push new branch to github
```
git add .
git commit
git push
```

### Create new podman image
```
podman build -t taxi-app:new_branch .
```

### Create new build dist with production variables
```
npm run build-prod
```

### Change the YAML of the stack
```yaml
taxi-app:
    image: localhost/taxi-app:status-message
```
