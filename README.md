# Ark

Ark is a web development toolkit using Go and ReactJS in the frontend. You can make a single binary executable application using Ark.

### Installation

Ark requires [Go](https://golang.org/) v2+ to run and [ReactJS](https://reactjs.org/) >= 16.12.0

Clone the repository (right now only working on the Go Workspace) and install the dependencies:
```sh
$ make install
```

Running the server
```sh
$ make serve
```
Frontend will serve at http://localhost:1500 and the backend will serve at http://1501

Stop the server
```sh
$ make stop
```

Clean Projects
```sh
$ make clean
```

Building for production environments...
```sh
$ make build
```