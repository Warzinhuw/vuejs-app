#!/bin/bash

docker stack deploy --compose-file docker-compose.yml stackdemo

echo "LEMBRETE, rodar depois docker swarm join-token manager para lembrar o token e docker service scale stackdemo_vue-ui=2 para escalar o front"
