package api

import (
	"fmt"
	"net/http"
)

const (
	HelloWorld = "Hello World!"
)

// type Hello interface {
// 	sayHello()
// }

// func SayHello() string {
// 	return HelloWorld
// }

func SayHello() http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		if r.URL.Path != "/api" {
			http.Error(w, http.StatusText(http.StatusNotFound), http.StatusNotFound)
			return
		}
		w.Header().Set("Content-Type", "text/plain; charset=utf-8")
		w.Header().Set("X-Content-Type-Options", "nosniff")
		w.WriteHeader(http.StatusOK)
		fmt.Fprintln(w, "Hello, World!")
	})
}
