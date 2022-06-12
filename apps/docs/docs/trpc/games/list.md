# List

Retrieve the list of games kittr supports.

# Usage

```js
const { data: games } = trpc.useQuery(["games/list"])
```

# Returns

This query returns the Game objects that kittr supports (or will soon support).

```json
[
	{
        // The ID we use in our DB for this game
		"id": "<game-id>",

        // The name of the game
		"displayName": "Warzone",

        // A safe string we can use in the url for this game
		"urlSafeName": "warzone",

        // Background image for this game
        "backgroundImageUrl": "/warzone/background-image.png",

        // Image used for the games cards
		"titleImageUrl": "/warzone/title-image.png",

        // Is this game currently supported by kittr
		"active": true,

        // NextJS placeholder image for titleImageUrl
		"blurDataUrl": "/media/games/warzone/placeholder-image.png",

        // Developer of the game
		"developer": "Activision",

        // Release date of the game
		"releaseDate": "2020-03-10T12:00:00.000Z"
	},
    ...
]
```
