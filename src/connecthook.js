import { ThirdwebProvider } from "@thirdweb-dev/react";

const activeChain = {
  chainId: 4272528,
  rpc: ["https://froopyland.dymension.xyz/22/kafirchain_4272528-1/evmrpc"],
  nativeCurrency: {
    decimals: 18,
    name: "KafirChain",
    symbol: "KFR",
  },
  shortName: "KFR",
  slug: "KafirChain",
  testnet: true,
  chain: "KafirChain",
  name: "KafirChain Testnet",
};

function MyApp({ Component, pageProps }) {
  return (
    <ThirdwebProvider activeChain={activeChain}>
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default MyApp;