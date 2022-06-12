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
        // The id of the channel
        "id": "<channel-id>",

        // A date representing when this channel was created
        "createdAt": "2022-06-11T15:48:10.122Z",

        // The name of this channel
        "displayName": "HusKerrs",

        // A safe string we can use in the url for this channel
        "urlSafeName": "HusKerrs",

        /**
        * How many views this channel received
        * This is calculated through our google analytics and written to our database
        * in an asynchronous job (api/src/jobs/writeViewCounts.ts)
        **/
        "viewCount": 263637,

        // The name of the user that previously updated this channel
        "previousUpdater": null,

        // An object representing metadata related to the profile page for this channel
        "profile": {
            // The id of the profile
            "id": "<profile-id>",

            // A boolean representing if this channel's profile has a cover photo to display
            "hasCoverPhoto": false,

            // A boolean representing if this channel's profile has a profile image to display
            "hasProfileImage": false,

            /**
            * A boolean representing if this channel's embedded youtube video will autoplay
            * when a user visits their page
            **/
            "youtubeAutoplay": false,

            // The id of the channel
            "channelId": "<channel-id>"
        }
    },
    ...
]
```
