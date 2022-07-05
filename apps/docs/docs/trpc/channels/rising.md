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
        // The id of the channel
        "id": "<channel-id>",

        // A date representing when this channel was created
        "createdAt": "2022-06-11T15:48:10.390Z",

        // The name of this channel
        "displayName": "Slxsh",

        // A safe string we can use in the url for this channel
        "urlSafeName": "Slxsh",

        /**
        * How many views this channel received
        * This is calculated through our google analytics and written to our database
        * in an asynchronous job (api/src/jobs/writeViewCounts.ts)
        **/
        "viewCount": 1851,

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
