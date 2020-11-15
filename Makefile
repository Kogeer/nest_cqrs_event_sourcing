DC = docker-compose

start:
	$(DC) up

stop:
	$(DC) down

exec-backend:
	$(DC) exec backend bash
