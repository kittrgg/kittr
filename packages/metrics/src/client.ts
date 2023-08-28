import { Axiom } from '@axiomhq/js';

export const client = new Axiom({
  token: process.env.AXIOM_PERSONAL_TOKEN,
  orgId: process.env.AXIOM_ORG_ID,
});
