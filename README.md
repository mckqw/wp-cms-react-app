# Bedrock Docker
[Docker](https://www.docker.com/) setup for local development of [Bedrock](https://github.com/roots/bedrock) based [Wordpress](https://wordpress.org/) projects

*please note that this is intended for local development - deploying it to production is probably a bad idea*

## Features
- Automated setup of new and existing [Bedrock](https://github.com/roots/bedrock) projects
- Minimal configuration needed: Enter your project's name, and you're good to go
- Backup/Restore routines for the database
- [MailHog](https://github.com/mailhog/MailHog): Catch all outgoing mail for easy mail debugging
- [phpMyAdmin](https://github.com/phpmyadmin/phpmyadmin): Direct database access

## Requirements

### macOS
- If you're using [dinghy](https://github.com/codekitchen/dinghy) that's everything you need
- For native docker installs you need to configure your system to resolve `.docker` domains to `127.0.0.1` This can be done by:
    - Make a new folder called `/etc/resolver/`
    - Inside this folder create a new file named `docker` with the following contents:


    nameserver 127.0.0.1
    port 19322


### Linux
- `docker` & `docker-compose`
- Configure your system to resolve `.docker` domains to `127.0.0.1`

## Usage

### First time setup
1. `git clone https://github.com/mckqw/wp-react-docker-app.git your-project`
2. `cd your-project/frontent` & `npm install`
3. `cd your-project` & `make composer update`

### Starting, stopping etc...

_Ensure that you run this command in your project root where the makefile is located_

Run `make up` to start everything

Run `make stop` to stop everything

Run `make restart` to - you probably guessed it - restart everything

Run `make rebuild` to rebuild the project from the ground (current database will be lost if not backed up)

### Using composer
Bedrock Docker abstracts composer into a container. You can use `make composer` like you would use `composer` standalone:

    # install a wordpress plugin:
    make composer require wpackagist-plugin/wp-mail-smtp
    
    # update wordpress & plugins:
    make composer update

### Using NPM

    # install a npm plugin:
    make ssh frontend
    npm i your-package-name


### Backup a database
Run `make mysql-backup` creates a compressed backup of your database in the backup folder. If you need a more fine-grained backup you can use phpMyAdmin

### Restoring a database
Use phpMyAdmin to restore the database or use `make mysql-restore` if you created a backup previously

### Upgrading the project & development containers
Run `make upgrade`

### Logging & information
Run `make logs` or `make logs app` for just the logs of all or specific containers

Run `make state` to see the current state of your containers

Run `make urls` to see the URLs of the project

### Accessing containers
Run `make ssh app` or `make logs web` to access the specific containers

### Deleting the containers
Run `make destroy`

## Need help or missing a feature?
Open an issue over [here](https://github.com/schliflo/bedrock-docker/issues)

Feedback is generally appreciated ;)
