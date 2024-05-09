
Run the container using git bash:

```bash
docker run -v /$(pwd):/app:ro -v //app/node_modules --env-file ./.env -p 3000:4000 --name node-app -d node-app-image
```

