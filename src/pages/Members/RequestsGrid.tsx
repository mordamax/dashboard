// Copyright 2023 @polkadot-fellows/dashboard authors & contributors
// SPDX-License-Identifier: GPL-3.0-only

import "./RequestsGrid.scss"
// import { AccountInfo } from "./AccountInfo"

// interface AccountInfo {
//   name?: string
//   address: string
//   rank: number
// }

// const rankings = [
//   "Candidate",
//   "Member",
//   "Proficient",
//   "Fellow",
//   "Architect",
//   "Architect Adept",
//   "Grand Architect",
//   "Free Master",
//   "Master Constant",
//   "Grand Master",
// ]

export const RequestsGrid = () => {
  // const members: AccountInfo[] = []
  // const [mem, setMem] = useState<AccountInfo[]>([])

  return (
    <>
      {/* <Grid row key={"random_key"} style={{ padding: "2rem 0", width: "100%" }}>
        <Grid column sm={3} md={3} style={{ textAlign: "left" }}>
          <h3>Name</h3>
        </Grid>
        <Grid column sm={7} md={7} style={{ textAlign: "left" }}>
          <h3>Account Address</h3>
        </Grid>
        <Grid column sm={2} md={2} style={{ textAlign: "left" }}>
          <h3>Rank</h3>
        </Grid>
      </Grid>
      {mem.map((m) => (
        <Grid row key={m.address} style={{ padding: "0.5rem 0" }}>
          <Grid column sm={3} md={3}>
            <AccountName address={m.address} />
          </Grid>
          <Grid column sm={7} md={7}>
            <AccountCard
              style={{
                background: "transparent",
                border: 0,
                boxShadow: "none",
              }}
              title={{
                address: m.address,
                justify: "flex-start",
                align: "center",
              }}
              ellipsis={{
                active: true,
                amount: 10,
              }}
              icon={{
                copy: true,
                size: 38,
                gridSize: 1,
                justify: "space-between",
                outerColor: "transparent",
                dark: true,
              }}
            />
          </Grid>
          <Grid column sm={1} md={2}>
            <p>
              {rankings[m.rank]} ({m.rank})
            </p>
          </Grid>
        </Grid>
      ))} */}
    </>
  )
}
