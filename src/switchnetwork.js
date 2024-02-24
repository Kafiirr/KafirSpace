import React, { useContext } from 'react'; // Importing useContext
import { ThirdwebProviderContext } from '@thirdweb-dev/react'; // Updated import

const NetworkSwitcher = () => {
  const { provider, setProvider } = useContext(ThirdwebProviderContext); // Using useContext for ThirdwebProvider

  const customChainId = '4272528'; // Your custom chain ID

  const switchToCustomChain = async () => {
    try {
      if (provider) {
        const network = await provider.getNetwork();
        if (network.chainId !== customChainId) {
          const customRPC = 'https://froopyland.dymension.xyz/22/kafirchain_4272528-1/evmrpc';
          const newProvider = new providers.JsonRpcProvider(customRPC);

          // Update the existing provider with the new one
          setProvider(newProvider);
        } else {
          console.log('Already on the desired chain.');
        }
      }
    } catch (error) {
      console.error('Error switching network:', error);
    }
  };

  return (
    <div>
      <button onClick={switchToCustomChain}>Switch to Kafirchain</button>
    </div>
  );
};

export default NetworkSwitcher;