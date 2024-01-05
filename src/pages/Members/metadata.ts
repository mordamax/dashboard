import { getMetadata } from "./getMetadata"
import * as fs from "node:fs/promises"
import { metadata as $metadata } from "@polkadot-api/substrate-bindings"

const metadata = await getMetadata()
await fs.writeFile("./collectives-meta.scale", $metadata.enc(metadata))
console.log("DONE")
process.exit(0)
