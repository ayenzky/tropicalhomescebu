import { createClient } from '@sanity/client';
/* empty css                                */

const sanityClient = createClient(
            {"apiVersion":"2025-01-28","projectId":"1nd8mw6f","dataset":"production","useCdn":false}
          );

globalThis.sanityClient = sanityClient;
