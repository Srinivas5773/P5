.PHONY: all build start test clean

all: build

build:
	@echo "Building Srinivas Ecommerce application..."

start:
	node server.js

test:
	npm test

clean:
	@echo "Cleaning transient artifacts..."
