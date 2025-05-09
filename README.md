# SIT323 Task 6.1C

1. Build the docker image using the _docker build_ command
2. Use _docker compose_ to containerise the image
3. Tag and push the image to Docker Hub with the _docker tag_ and _docker push_ commands
4. Change the image name in _calculator-deployment.yaml_ to match your repository, container and image name
5. Run _kubectl apply -f calculator-deployment.yaml_ to start the cluster, starting up the application node and service
6. If running Kubernetes cluster locally, access application on _localhost:4026_