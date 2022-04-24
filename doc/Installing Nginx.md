# Installing Nginx-Webserver
Nginx is used in this case to serve the radio app.
## Installation
Follow following steps
- Install with: `> sudo apt install nginx`
- Check Nginx status `> systemctl status nginx`
- Test running test page with browser `http://ipToServer` (in my case `ipToServer` was `192.168.178.3`)
- Enable autostart of Nginx after boot-up `> sudo systemctl enable nginx`

## Configuration
- Configure server by modifying `/etc/nginx/nginx.conf` file
- Test configuration by `> sudo nginx -t`
- If configuration checks pass restart server with `> sudo systemctl restart nginx`

## Paths
- Websites are to be distributed to `/var/www/html`
- Configuration file is located at `/etc/nginx/nginx.conf`
- logs are located at `/var/log/nginx/`