# Usa una imagen base de MySQL
FROM mysql:latest

# Crea una base de datos inicial si es necesario
ENV MYSQL_DATABASE=eve_bd

# Opcional: Copia archivos SQL para inicializar la base de datos
COPY incomes.sql /docker-entrypoint-initdb.d/