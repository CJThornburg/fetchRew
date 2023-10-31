## Run Locally

Clone the project

```bash
    git clone https://github.com/CJThornburg/fetchRew.git
```

In main dir, run:

```bash
   docker build -t fetch-app .
```
Allow time for the docker container to be created.

When completed, can run the app by running:

```bash
    docker run -d -p 5000:5000 fetch-app
```

api will be accessible through port 5000
