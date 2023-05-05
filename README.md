# station-search

## About
station-search is a fast API wrapper for searching railway stations in Germany. There is a deployed instance at 
<a href="https://api.phipsiart.at">api.phipsiart.at</a>
## Usage
The usage is quite simple.
The url scheme is: 

```https://api.phipsiart.at/api?station={stationname}&results={numberofresults}```

for example searching for stations that begin with "Gr" and the number of wanted results 5

```https://api.phipsiart.at/api?station=Gr&results=5```

## Self-hosting
For self hosting make sure that Docker is installed.

Step 1: Clone the Repo

 ```git clone https://github.com/Phipsiart/station-search```
 
Step 2: enter the directory

 ```cd station-search```
 
Step 3: build the image

```docker build -t station-search```

Step 4: run the container

```docker run --name station-search  -d -p 3000:3000 station-search```

This will start the container with the name "station-search" and will be available on port 3000

## License
This project is licensed under the MIT License
