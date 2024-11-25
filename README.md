# taxi-app

## Podman compose

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
      - /mnt/vol-opako/podman/taxi-app/dist_back:/home/node/app/dist_back
      - /mnt/vol-opako/podman/taxi-app/dist_front:/home/node/app/dist_front
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
