lanetix-setup-env
=================
:sparkles::sparkles: setup your lanetix dev environment :sparkles::sparkles:

__NB__ If you don't work at lanetix, you probably don't want to use this :wink:

Installation
------------

```bash
bash $(curl https://raw.githubusercontent.com/lanetix/setup-env/master/install.sh)
```

if you already have a working environment, install this with
```bash
npm install -g lanetix-setup-env
```

Usage
-----

- `lx-clone` clones all the repos for the lanetix services
- `lx-install` npm install for all the lanetix services
- `lx-migrate` run migrations for all services which have migrations
- `lx-start` start all the core services
