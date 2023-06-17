import {} from 'next-axiom';

async function Page() {
  const fetchRoot = 'https://api.axiom.co/v1/datasets/vercel';
  const data = await fetch(
    'https://api.axiom.co/v1/datasets/vercel/query?saveAsKind=apl&streaming-duration=60s&nocache=true',
    {
      cache: 'no-cache',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.AXIOM_PERSONAL_TOKEN!}`,
        'X-Axiom-Org-ID': process.env.AXIOM_ORG_ID!,
      },

      // body: '{"apl":"[\'vercel\']\\n| where level == \\"info\\" and [\'fields.metric\'] contains \\"Creator popularity\\" and [\'vercel.environment\'] == \\"production\\" and isnotnull([\'fields.displayName\'])\\n| summarize count() by [\'fields.displayName\']","startTime":"2023-05-18T01:51:22.000Z","endTime":"2023-06-17T01:51:22.000Z","queryOptions":{"quickRange":"","startTime":"2023-05-18T01:51:22.000Z","endTime":"2023-06-17T01:51:22.000Z","against":"","againstTimestamp":"","editorContent":"[\'vercel\']\\n| where level == \\"info\\" and [\'fields.metric\'] contains \\"Creator popularity\\" and [\'vercel.environment\'] == \\"production\\" and isnotnull([\'fields.displayName\'])\\n| summarize count() by [\'fields.displayName\']\\n\\n\\n","containsTimeFilter":"false","datasets":"vercel","startLineNumber":"1","endLineNumber":"4","startColumn":"1","endColumn":"1"}}',
      body: JSON.stringify({
        startTime: '2023-06-16T01:40:22Z',
        endTime: '2023-06-18T01:40:22Z',
        resolution: '',
        aggregations: [
          {
            op: 'count',
            field: '',
            alias: 'count_',
          },
        ],
        groupBy: ['fields.displayName'],
        // filter: {
        //   caseSensitive: true,
        //   children: [],
        //   field: 'level',
        //   op: 'equals',
        //   value: 'info',
        // },
        order: [
          {
            field: 'count_',
            desc: true,
          },
        ],
        limit: 1000,
        virtualFields: null,
        project: [
          {
            field: 'count_',
            alias: 'count_',
          },
          {
            field: 'fields.displayName',
            alias: 'fields.displayName',
          },
        ],
        cursor: '',
        includeCursor: false,
      }),
    },
  )
    .then((res) => {
      console.log({ res, body: res.body });
      return res.json();
    })
    .catch((err) => console.error(err));

  return (
    <div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default Page;
