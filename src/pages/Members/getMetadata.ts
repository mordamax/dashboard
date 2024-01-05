import { GetProvider, WellKnownChain } from "@polkadot-api/sc-provider"
import { createClient } from "@polkadot-api/substrate-client"
import type { CodecType } from "@polkadot-api/substrate-bindings"
import { compact, metadata, Tuple } from "@polkadot-api/substrate-bindings"

const scProvider = GetProvider()

const smProvider = scProvider(
  WellKnownChain.polkadot /*, {
  embeddedNodeConfig: {
    maxLogLevel: 9,
  },
}*/
).relayChain

const withLogsProvider = (input: any) => {
  return (onMsg: (arg0: any) => void) => {
    const result = input((msg: string) => {
      console.log("<< " + msg)
      onMsg(msg)
    })

    return {
      ...result,
      send: (msg: string) => {
        console.log(">> " + msg)
        result.send(msg)
      },
    }
  }
}

export const { chainHead } = createClient(withLogsProvider(smProvider))

type Metadata = CodecType<typeof metadata>

const opaqueMeta = Tuple(compact, metadata)

export const getMetadata = (): Promise<Metadata> =>
  new Promise<Metadata>((res, rej) => {
    let requested = false
    const chainHeadFollower = chainHead(
      true,
      (message) => {
        if (message.type === "newBlock") {
          chainHeadFollower.unpin([message.blockHash])
          return
        }
        if (requested || message.type !== "initialized") return
        const latestFinalized = message.finalizedBlockHash
        if (requested) return
        requested = true

        chainHeadFollower
          .call(latestFinalized, "Metadata_metadata", "")
          .then((response) => {
            const [, mt] = opaqueMeta.dec(response)
            res(mt)
          })
          .catch((e) => {
            console.log("error", e)
            rej(e)
          })
          .finally(() => {
            chainHeadFollower.unfollow()
          })
      },
      () => {}
    )
  })
