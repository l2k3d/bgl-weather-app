
## `Instructions`

Open Terminal

### 1. install dependencies
npm install

### 2. build Application
npm run build

### 3. Build Docker File
docker build -t forecast-app:technical-test .

### 4. Run Docker Container
docker run -d -p 80:80 forecast-app:technical-test

### 5. Use Application
Navigate to 127.0.0.1 or localhost

### Run Tests
npm run test