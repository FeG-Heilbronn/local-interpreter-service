# Install VNC-Server
According to https://www.digitalocean.com/community/tutorials/how-to-install-and-configure-vnc-on-ubuntu-20-04-de

``` bash
sudo apt update
sudo apt install xfce4 xfce4-goodies
sudo apt install tightvncserver
```

Start VNC-Server with `vncserver` and specify password

**NOTE: By querying running processes one can see which port is active i.e. `:1` is assigned to port `5901`**

Configure by
``` bash
vncserver -kill :1
mv ~/.vnc/xstartup ~/.vnc/xstartup.bak
nano ~/.vnc/xstartup
```
create file
``` bash
#!/bin/bash
xrdb $HOME/.Xresources
startxfce4 &
```
change flags by `chmod +x ~/.vnc/xstartup`
start VNC-Server with: `vncserver`

Connecting to server by `ssh -L 59000:localhost:5901 -C -N -l sammy your_server_ip` (note: the process started with `:1` port here)

**Or use something advanced like MobaXterm**
