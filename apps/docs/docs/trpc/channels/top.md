# Top

Retrieve a list of kittr users with the most channel views.

# Usage

```js
const { data: popularChannels } = trpc.useQuery(["channels/top"])
```

# Returns

This query returns Channel objects representing users that are our most popular users by viewCount.

```json
[
    {
        "id": "<channel-id>",
        "createdAt": "2022-06-11T15:48:10.122Z",
        "displayName": "HusKerrs",
        "urlSafeName": "HusKerrs",
        "viewCount": 263637,
        "previousUpdater": null,
        "profile": {
            "id": "<profile-id>",
            "hasCoverPhoto": false,
            "hasProfileImage": false,
            "youtubeAutoplay": false,
            "channelId": "<channel-id>"
        }
    },
    ...
]
```
