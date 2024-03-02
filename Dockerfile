FROM node AS client
WORKDIR /client

# Copy only the package files to leverage Docker cache
COPY client/package.json package.json
COPY client/package-lock.json package-lock.json

# Install dependencies
RUN npm install --force

# Copy the rest of the client application
COPY client .

# Stage 2: Build the MiddleLayer application
FROM node AS middlelayer
WORKDIR /MiddleLayer

# Copy only the package files to leverage Docker cache
COPY MiddleLayer/package.json package.json
COPY MiddleLayer/package-lock.json package-lock.json

# Install dependencies
RUN npm install --force

# Copy the rest of the MiddleLayer application
COPY MiddleLayer .

# Final stage: Combining both applications and setting entry points
FROM node

# Copy the built client application
COPY --from=client /client /client

# Copy the built MiddleLayer application
COPY --from=middlelayer /MiddleLayer /MiddleLayer

# Set the working directory and entry points for each application
WORKDIR /client
ENTRYPOINT ["npm", "run", "dev"]

WORKDIR /MiddleLayer
ENTRYPOINT ["npm", "run", "dev"]
