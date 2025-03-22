#!/bin/bash

# Stop script execution if an error occurs
set -e

echo "Deploying the application..."

# Pull the latest Docker image
docker pull srisudharsan1b/testops:latest

# Stop and remove the existing container if it exists
docker stop your-app || true
docker rm your-app || true

# Run the new container
docker run -d --name your-app -p 3000:3000 srisudharsan1b/testops

echo "Deployment completed successfully!"
