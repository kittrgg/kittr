# Count

Retrieve the number of kits created on kittr.

# Usage

```js
const { data: totalNumberOfKits } = trpc.useQuery(["kits/count"])
```

# Returns

This query returns a number, the total number of kits in our database.
