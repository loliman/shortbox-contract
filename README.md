# shortbox-contract

Zentrale Contract-Quelle fuer das Shortbox-Oekosystem.

Dieses Repo ist die Single Source of Truth fuer:

- GraphQL-Schema (`schema/shortbox.graphql`)
- generierte TypeScript-Typen (`generated/graphql-types.d.ts`)
- geteilte Contract-Typen fuer Frontend und Backend (`index.d.ts`)

Publiziertes Paket:

- `@loliman/shortbox-contract`

## Inhalt

- `schema/shortbox.graphql`
  Kanonisches GraphQL-Schema.
- `generated/graphql-types.d.ts`
  Aus dem Schema generierte TypeScript-Typen (GraphQL Code Generator).
- `index.d.ts`
  Stabile, oeffentliche Typ-Surface fuer Consumer.
- `index.js`
  Runtime-Platzhalter (leeres Objekt), damit Runtime-Imports stabil bleiben.

## Installation

```bash
npm i @loliman/shortbox-contract
```

Fuer Installationen aus GitHub Packages muss npm fuer den Scope `@loliman` konfiguriert sein.

## Nutzung in anderen Repos

Schema importieren:

```ts
import schemaPath from "@loliman/shortbox-contract/schema/shortbox.graphql";
```

Typen importieren:

```ts
import type { Issue, Series, Publisher } from "@loliman/shortbox-contract";
```

## Entwicklung

Voraussetzungen:

- Node.js 20+
- npm 10+

Dependencies installieren:

```bash
npm ci
```

Typen generieren:

```bash
npm run codegen
```

Pruefen, dass Codegen-Output aktuell ist:

```bash
npm run codegen:check
```

Tests:

```bash
npm test
```

Coverage-Gate (>=80% lines/functions/branches/statements):

```bash
npm run test:coverage
```

## Release-Prozess

Versionierung laeuft automatisch nach Merge/Push auf `main`:

- Workflow: `.github/workflows/auto-release.yml`
- Label-gesteuert: `major`, `minor`, `patch`
- Default ohne Label: `minor`

Publishing laeuft auf Version-Tags:

- Workflow: `.github/workflows/release.yml`
- Trigger: `v*.*.*`
- Ablauf: Tag/Version pruefen -> `npm pack --dry-run` -> `npm publish` nach GitHub Packages

## CI

Qualitaetspipeline auf Push und Pull Request:

- Workflow: `.github/workflows/ci.yml`
- Checks: Codegen-Konsistenz, Coverage-Gate, SonarCloud-Analyse

## Hinweise

- `generated/graphql-types.d.ts` nicht manuell editieren.
- Bei Schema-Aenderungen immer den aktualisierten Codegen-Output im selben Change mitliefern.
