echo "Running FEL in prod mode ..."
docker-compose down
docker-compose rm -f
docker-compose up --build -d
