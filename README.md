# shortbox-contract

Zentrale Contract-Quelle fuer `shortbox-react` und `shortbox-graphql`.

## Inhalt

- `schema/shortbox.graphql`: kanonisches GraphQL-Schema
- `generated/graphql-types.d.ts`: generierte TypeScript-Typen aus dem Schema
- `index.d.ts`: stabile Exporte fuer Frontend/Backend

## Workflow

1. `npm install` im Ordner `shortbox-contract`
2. `npm run codegen` im Ordner `shortbox-contract`

Frontend (`shortbox-react`) und Backend (`shortbox-graphql`) fuehren diesen Schritt ueber `contract:codegen` automatisch vor `build` aus.
