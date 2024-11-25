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
2. Copy files index.html and assets to podman/taxi-app/dist_back and dist_front
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
      - API_SERVER_URI=whatever
networks:
  internal:
    external: true
```
4. Start the "stack" with configuration above
```
podman compose up -d
```
> [!TIP]
> Since you have mounted dist_back and dist_front to the container, it is possible to make updates with
> ```
> npm run build-prod
> ```
