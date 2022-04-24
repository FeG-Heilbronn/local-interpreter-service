# Query Self-Signed Certificate
According to: https://www.digitalocean.com/community/tutorials/how-to-create-a-self-signed-ssl-certificate-for-nginx-in-ubuntu-18-04

Command 
`sudo openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout /etc/ssl/private/nginx-selfsigned.key -out /etc/ssl/certs/nginx-selfsigned.crt`

Following values are used:
- Country Code-Name: `DE`
- State or Province Name: `Baden-Württemberg`
- Locality Name: `Heilbronn`
- Organization Name: `FeG-Heilbronn`
- Organizational Unit Name: `Gemeinde`
- Common Name: `feg-server`
- Email Address: `feginheilbronn@gmail.com`
