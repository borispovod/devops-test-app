# DevOps Test App

## Requirements

```
Nodejs Version >= 6
```

## Installation

To install dependencies:

```
npm install
```

## Launch

Launch with:

```
PORT=3000 IP=127.0.0.1 node index.js
```

Default parameters:

* **Port**: 3000
* **IP**: 127.0.0.1

Should show message: `Launched on http://127.0.0.1:3000/`

## Requests:

* **/** - Returns `Hello, world`
* **/uuid** - Returns random UUID
* **/image** - Returns image
