DC = docker-compose

start:
	$(DC) up

stop:
	$(DC) down

exec-backend:
	$(DC) exec backend bash

install:
	$(DC) run --rm backend bash -c "npm install; npm run typeorm migration:run;"
