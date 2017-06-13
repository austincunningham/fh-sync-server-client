# FeedHenry Sync server and client

To install git clone this repo then cd into the new directory and run 

```bash
    npm install
```

## Dependencies 

You will need a local Mongodb server and Redis server for information on setting up these 

For Mongodb see

https://docs.mongodb.com/manual/installation/

For Redis see 

https://redis.io/topics/quickstart

## Getting Started

To run the server 

```bash
    node app
```    
   

Response 

```bash 
    Example app listening on port 3000!
    sync ready
    Sync no error on startup
    
```
    
To run the client open _./public/index.html_ in a browser when the server is running

You won't see anything running in the browser until you check the developer tools (ctrl/shift/i)
Check the network tabs and console tabs to see sync in action. 

For more information on browser developer tools see

https://developer.chrome.com/devtools

https://developer.mozilla.org/en-US/docs/Tools/Tools_Toolbox