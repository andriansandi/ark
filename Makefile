.ONESHELL:
.PHONY: statik

statik:
	cd client-cra && yarn build
	statik -src=./client-cra/build

clean:
	rm -rf ./statik