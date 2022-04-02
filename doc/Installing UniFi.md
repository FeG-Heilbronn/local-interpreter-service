# Install UniFi
``` bash
sudo apt update
sudo apt upgrade
sudo apt install ca-certificates wget -y

sudo wget https://get.glennr.nl/unifi/install/install_latest/unifi-latest.sh
sudo bash unifi-latest.sh
# Answer prompted questions 
```
- Service is now available under `<ip>:8443`
