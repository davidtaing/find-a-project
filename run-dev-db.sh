# run development db via docker
if [ $(uname) = "Linux" ] || [ $(uname) = "Darwin" ]; then
  sudo docker-compose --profile development up -d
else
  docker-compose --profile development up -d
fi
