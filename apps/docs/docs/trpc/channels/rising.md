# Rising

Retrieve a random list of kittr users with a significant number of views on their channel.

# Usage

```js
const { data: risingChannels } = trpc.useQuery(["channels/rising"])
```

# Returns

This query returns a random set of Channel objects representing users that have a significant number of views (over 400) on their channel.

```json
[
    {
        "id": "<channel-id>",
        "createdAt": "2022-06-11T15:48:10.390Z",
        "displayName": "Slxsh",
        "urlSafeName": "Slxsh",
        "viewCount": 1851,
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
