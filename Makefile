# Makefile for Portfolio Website

NPM = npm

.DEFAULT_GOAL := help

.PHONY: help
help: ## Display available commands
	@echo "Available commands:"
	@fgrep -h "##" $(MAKEFILE_LIST) | fgrep -v fgrep | sed -e 's/\$$//' | sed -e 's/##//' | column -t -s ':'

.PHONY: install
install: ## Install dependencies
	$(NPM) install

.PHONY: dev
dev: ## Start the development server
	$(NPM) run dev

.PHONY: build
build: ## Build for production
	$(NPM) run build

.PHONY: start
start: ## Start the production server
	$(NPM) run start

.PHONY: lint
lint: ## Run ESLint
	$(NPM) run lint

.PHONY: format
format: ## Format code with Prettier
	$(NPM) run format

.PHONY: clean
clean: ## Remove node_modules and build artifacts
	rm -rf node_modules .next out
