# Example Responses:

No Broadcast attached:
```JSON
{
    "icestats": {
        "admin":"icemaster@localhost",
        "host":"FeG-Server.local",
        "location":"Earth",
        "server_id":"Icecast 2.4.4",
        "server_start":"Sat, 16 Apr 2022 21:56:36 +0200",
        "server_start_iso8601":"2022-04-16T21:56:36+0200",
        "dummy":null
    }
}
```

Rocket Broadcaster attached:
- Note: `source`-key contains object
```JSON
{
    "icestats": {
        "admin": "icemaster@localhost",
        "host": "FeG-Server.local",
        "location": "Earth",
        "server_id": "Icecast 2.4.4",
        "server_start": "Fri, 01 Apr 2022 21:51:17 +0200",
        "server_start_iso8601": "2022-04-01T21:51:17+0200",
        "source": {
            "audio_info": "ice-samplerate=44100;ice-bitrate=128;ice-channels=2",
            "bitrate": 128,
            "genre": "various",
            "ice-bitrate": 128,
            "ice-channels": 2,
            "ice-samplerate": 44100,
            "listener_peak": 2,
            "listeners": 0,
            "listenurl": "http://FeG-Server.local:8000/germanInterpreter",
            "server_description": "Unspecified description",
            "server_name": "FeG - Deutsch",
            "server_type": "audio/mpeg",
            "stream_start": "Sat, 02 Apr 2022 14:45:03 +0200",
            "stream_start_iso8601": "2022-04-02T14:45:03+0200",
            "title": "Starting - Soon",
            "dummy": null
        }
    }
}
```

Rocket Broadcaster and CoolMic attached:
- Note: `source`-key contains array of objects
``` JSON
{
    "icestats": {
        "admin": "icemaster@localhost",
        "host": "FeG-Server.local",
        "location": "Earth",
        "server_id": "Icecast 2.4.4",
        "server_start": "Sat, 16 Apr 2022 21:56:36 +0200",
        "server_start_iso8601": "2022-04-16T21:56:36+0200",
        "source": [
            {
                "audio_info": "ice-samplerate=44100;ice-bitrate=128;ice-channels=2",
                "bitrate": 128,
                "genre": "various",
                "ice-bitrate": 128,
                "ice-channels": 2,
                "ice-samplerate": 44100,
                "listener_peak": 0,
                "listeners": 0,
                "listenurl": "http://FeG-Server.local:8000/germanInterpreter",
                "server_description": "Unspecified description",
                "server_name": "Home - German",
                "server_type": "audio/mpeg",
                "stream_start": "Sun, 24 Apr 2022 18:31:32 +0200",
                "stream_start_iso8601": "2022-04-24T18:31:32+0200",
                "title": null,
                "dummy": null
            },
            {
                "genre": "various",
                "listener_peak": 0,
                "listeners": 0,
                "listenurl": "http://localhost:8000/interpreterMobile",
                "server_description": "Unspecified description",
                "server_name": "Interpreter - mobile",
                "server_type": "audio/ogg",
                "stream_start": "Sun, 24 Apr 2022 18:32:37 +0200",
                "stream_start_iso8601": "2022-04-24T18:32:37+0200",
                "subtype": "Opus",
                "dummy": null
            }
        ]
    }
}
```