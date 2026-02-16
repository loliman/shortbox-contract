# shortbox-contract

Shared GraphQL contract package fuer das Shortbox-Oekosystem.

## Ueberblick

- Rolle: zentrale Contract-Quelle fuer Frontend und Backend
- Paketname: `@loliman/shortbox-contract`
- Enthalten: Schema, generierte Typen, stabile Typ-Exporte

## Voraussetzungen

- Node.js 20+
- npm 10+
- npm-Auth fuer GitHub Packages (`@loliman`)

## Installation

```bash
npm ci
```

Paket in anderen Projekten nutzen:

```bash
npm i @loliman/shortbox-contract
```

## Lokale Entwicklung

Typen generieren:

```bash
npm run codegen
```

Codegen-Stand verifizieren:

```bash
npm run codegen:check
```

Tests lokal:

```bash
npm test
```

Coverage-Gate lokal:

```bash
npm run test:coverage
```

## Wichtige Skripte

- `npm run codegen`: erzeugt `generated/graphql-types.d.ts` aus dem Schema
- `npm run codegen:check`: prueft, dass der Codegen-Output committed ist
- `npm test`: Contract-Tests
- `npm run test:coverage`: Coverage-Run mit 80%-Gate

## Projektstruktur

- `schema/shortbox.graphql`: kanonisches GraphQL-Schema
- `generated/graphql-types.d.ts`: generierte TypeScript-Typen
- `index.d.ts`: stabile oeffentliche Typ-Surface
- `index.js`: Runtime-Platzhalter fuer stabile Runtime-Imports
- `tests/`: Contract-Tests

## CI und Release

CI-Workflow:

- Datei: `.github/workflows/ci.yml`
- Trigger: Push + Pull Request auf `main`
- Checks: Codegen-Konsistenz, Coverage-Gate, SonarCloud

Release:

- Datei: `.github/workflows/release.yml`
- Trigger: Push auf `main` (inkl. Merge und Direkt-Push) oder manuell (`workflow_dispatch`)
- Verhalten:
  - Version-Bump aus PR-Labels (`major`, `minor`, `patch`, Default `minor`)
  - Commit + Tag `vX.Y.Z`
  - `npm pack --dry-run`
  - `npm publish` nach GitHub Packages

## Hinweise

- `generated/graphql-types.d.ts` nicht manuell bearbeiten.
- Schema-Aenderungen immer zusammen mit aktualisiertem Codegen-Output committen.
