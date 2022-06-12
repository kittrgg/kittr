# Live

Retrieve the list of live kittr users.

# Usage

```js
const { data: liveChannels } = trpc.useQuery(["channels/live"])
```

# Returns

This query returns Channel objects representing users that are currently livestreaming on Twitch.

```json
[
    {
        "id": "<channel-id>",
        "createdAt": "2022-06-11T15:48:10.169Z",
        "displayName": "JoeWo",
        "urlSafeName": "JoeWo",
        "viewCount": 156312,
        "previousUpdater": null,
        "links": [
            {
                "id": "<link-id>",
                "property": "TIKTOK",
                "value": "https://www.tiktok.com/@averagejoewo",
                "channelId": "<channel-id>""
            },
            ...
        ]
    },
    ...
]
```
