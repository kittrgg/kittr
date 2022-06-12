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
        // The id of the channel
        "id": "<channel-id>",

        // A date representing when this channel was created
        "createdAt": "2022-06-11T15:48:10.169Z",

        // The name of this channel
        "displayName": "JoeWo",

        // A safe string we can use in the url for this channel
        "urlSafeName": "JoeWo",

        /**
        * How many views this channel received
        * This is calculated through our google analytics and written to our database
        * in an asynchronous job (api/src/jobs/writeViewCounts.ts)
        **/
        "viewCount": 156312,

        // The name of the user that previously updated this channel
        "previousUpdater": null,

        // An array of links the profile can configure to external sites
        "links": [
            {
                // The id of the link
                "id": "<link-id>",

                // Property used to identify the type of link
                "property": "TIKTOK",

                // The actual link string assocatied to this link object
                "value": "https://www.tiktok.com/@averagejoewo",

                // The id of the channel
                "channelId": "<channel-id>""
            },
            ...
        ]
    },
    ...
]
```
