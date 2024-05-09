
Run the container using git bash:

```bash
docker run -v /$(pwd):/app:ro -v //app/node_modules -p 3000:3000 --name node-app -d node-app-image
```

