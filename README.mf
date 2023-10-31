## Run Locally

Clone the project

```bash
    git clone https://github.com/CJThornburg/fetchRew.git
```

In main dir, run:
1.
```bash
   docker build -t fetch-app .
```
allow the docker container to be created.

When completed, can run the app by running:

```bash
    docker run -d -p 5000:5000 fetch-app
```

api will be accessible through port 5000
