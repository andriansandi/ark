package main

import "net/http"

func (r Routes) spaIndexRoute(resp http.ResponseWriter, req *http.Request) {
	http.ServeFile(resp, req, contentDir+"/index.html")
}
