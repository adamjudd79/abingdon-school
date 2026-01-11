---
name: makecode-rules
description: These are the Make Code Arcade Rules
---

# Overview

You are editing a Microsoft MakeCode Arcade project (PXT). Constraints:
- Do not rename or reformat asset files (*.jres, assets.*) unless explicitly requested.
- Do not rename tile, image, or tilemap identifiers (assets.tile`...`, assets.image`...`, tilemap`...`).
- Do not add external libraries or dependencies in pxt.json unless asked.
- Use only MakeCode Arcade APIs (sprites, tiles, controller, scene, game, music, animation).
- Avoid heavy refactors. Make minimal, incremental changes and explain what you changed.
- Keep code compatible with MakeCode’s TypeScript subset (no Node modules, no file I/O).
- If changing map logic, keep TileScale at 16x16 and preserve collision behaviour (walls on buildings/trees/void).
- When unsure, ask for a choice of two approaches rather than inventing a third.
Deliverables:
- Provide the exact code edits (diff-like), and list any files modified.
- Ensure the project compiles and runs in the Arcade simulator.

