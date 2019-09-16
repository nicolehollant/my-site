all: generate

generate:
	cd mysite
	@echo "Installing Dependecies!"
	yarn --cwd=mysite
	@echo "Building!"
	yarn --cwd ./mysite build
	@echo "Done!"