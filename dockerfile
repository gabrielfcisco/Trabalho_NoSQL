FROM mongo

ENV MONGO_INITDB_DATABASE Xastre
ENV MONGO_INITDB_ROOT_USERNAME root
ENV MONGO_INITDB_ROOT_PASSWORD 1234

RUN apt-get update
RUN apt-get -y install git

WORKDIR /root

RUN git clone https://github.com/gabrielfcisco/Trabalho_NoSQL.git

WORKDIR /root/Trabalho_NoSQL

RUN mv -i mysetup.js /docker-entrypoint-initdb.d/