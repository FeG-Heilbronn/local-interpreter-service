# local-interpreter-service
Radio broadcast for interpreter so the foreign guests are able to follow the sermon

## Running Services:
### SSH 
- Port: 22 (like always)
### VNC
- Port: 5901
### IceCast2
- Port: 8000
- Configuration: `/etc/icecast2/icecast.xml`
### NginX
- Port: 80 / 443
- Config-File: `etc/nginx/nginx.conf`
- Websites: `/var/www/...`
### UniFi
- Port: 8443
### Active WebPages
- Station-Name: `FeG-Server`
    - accessible with `FeG-Server.local` in LAN
    - or with `FeG-Server.fritz.box`
- Radio-Stations `<ip|domain>/interpreter/stations/`

# ToDo:
- Switch to HTTP2 (with SSL)
- Test on all platforms
- Configuration File
- Multi-Language Support
