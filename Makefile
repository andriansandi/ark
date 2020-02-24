FRONTEND := ./frontend
API := ./api 
ADMIN := ./admin

# Port Number
BACKEND_PORT = 1501
FRONTEND_PORT = 1500

start:
	@make install
	@make serve

install: frontend_install_deps backend_install_deps
	@echo 'Installation done...Happy coding!'

serve: frontend_serve backend_serve

stop: stop_frontend stop_backend
	@echo 'All servers stopped...'

build: backend_clean frontend_build backend_build

clean: frontend_clean backend_clean
	@echo 'All clean...'


## Frontend
frontend_install_deps:
	@echo 'Installing frontend dependencies...' && \
	cd $(FRONTEND) && yarn install 

frontend_build:
	@echo 'Building the frontend...' && \
	rm -rf $(FRONTEND)/build && cd $(FRONTEND) && yarn build

frontend_serve: frontend_build
	cd $(FRONTEND) && yarn start &

frontend_clean:
	@echo 'Cleaning the frontend...' && \
	rm -rf $(FRONTEND)/node_modules && rm -rf $(FRONTEND)/build


## Backend
backend_install_deps:
	@echo 'Installing backend dependencies...' && \
	go get -u

backend_serve:
	@echo 'Running backend server...' && \
	go run main.go &

backend_build:
	@echo 'Building the backend...' && \
	go build

backend_clean:
	@echo 'Cleaning the backend...' && \
	rm -rf ./ark

## Stop Process
stop_frontend:
	@echo 'Stopping frontend...' && \
	lsof -i tcp:${FRONTEND_PORT} | awk 'NR!=1 {print $$2}' | xargs kill 

stop_backend:
	@echo 'Stopping backend...' && \
	lsof -i tcp:${BACKEND_PORT} | awk 'NR!=1 {print $$2}' | xargs kill 