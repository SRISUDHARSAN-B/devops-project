#!/bin/bash

# Variables
IMAGE_NAME="srisudharsan1b/testops"
IMAGE_TAG="latest"
REGISTRY="docker.io"
REPO="srisudharsan1b"
DOCKER_IMAGE="${REGISTRY}/${REPO}/${IMAGE_NAME}:${IMAGE_TAG}"

# Pull the Docker image from the registry
echo "Pulling image ${DOCKER_IMAGE}..."
docker pull ${DOCKER_IMAGE}

# Run the container (You may need to update this for your environment, e.g., Kubernetes or other orchestrators)
echo "Running the container..."
docker run -d -p 3000:3000 --name ${IMAGE_NAME} ${DOCKER_IMAGE}
