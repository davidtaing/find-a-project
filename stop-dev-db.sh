# stop development db
if [ $(uname) = "Linux" ] || [ $(uname) = "Darwin" ]; then
  sudo docker-compose down
else
  docker-compose down
fi