import BetFiIco from "assets/buy/betfi.png"
import JUNOIco from "assets/buy/juno.png"

export const RoomIcon = {
  1: BetFiIco,
  2: JUNOIco,
}

export const ChainInfo = {
  $schema: "../chain.schema.json",
  chain_name: "seimainnet",
  status: "live",
  network_type: "mainnet",
  pretty_name: "Sei Atlantic 2",
  chain_id: "atlantic-2",
  bech32_prefix: "sei",
  node_home: "$HOME/.sei",
  key_algos: ["secp256k1"],
  slip44: 118,
  fees: {
    fee_tokens: [
      {
        denom: "usei",
        fixed_min_gas_price: 0,
      },
    ],
  },
  codebase: {
    git_repo: "https://github.com/sei-protocol/sei-chain",
    recommended_version: "1.0.6beta",
    compatible_versions: ["1.0.6beta"],
    genesis: {
      genesis_url:
        "https://raw.githubusercontent.com/sei-protocol/testnet/main/sei-incentivized-testnet/genesis.json",
    },
  },
  staking: {
    staking_tokens: [
      {
        denom: "usei",
      },
    ],
  },
  apis: {
    rpc: [
      {
        address: "https://rpc.atlantic-2.seinetwork.io/",
        provider: "nodestake",
      },
    ],
    rest: [
      {
        address: "https://rest.atlantic-2.seinetwork.io/",
        provider: "Anonstake",
      },
    ],
  },
}

export const ConnectedChain = "sei" // "seimainnet" | "juno" | "terra2" | "neutron"
