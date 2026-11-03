# intro-devops

<!-- Create SSL Certificate create -->
<!-- Generate a self-signed certificate -->

## Generate a self-signed certificate

```bash
openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout selfsigned.key -out selfsigned.crt -config san.cnf

# or
openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout selfsigned.key -out selfsigned.crt \
-subj "/C=US/ST=California/O=DevLab/CN=localhost" \
-addext "subjectAltName=DNS:localhost,IP:127.0.0.1"

```
