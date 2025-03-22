#!/bin/bash

# Install dependencies (if not already installed by Dockerfile)
npm install

# Run unit tests (adjust this for your testing framework)
echo "Running unit tests..."
npm test
