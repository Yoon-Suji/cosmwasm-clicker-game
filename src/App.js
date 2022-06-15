import './App.css';
import { useState } from 'react';
import networkInfo from './wallet/network_info';
import connectWallet from './wallet/connect';

function App() {
  // connectWallet에서 받아올 값
  const [client, setClient] = useState();
  const [address, setAddress] = useState();
  const [balance, setBalance] = useState();
  const [chainId, setChainId] = useState("");

  // 
  const getInfo = (client, address, balance, chainId) => {
    setClient(client);
    setAddress(address);
    setBalance(balance);
    setChainId(chainId);
    console.log(address);
  }

  connectWallet(networkInfo['cliffnet-1'], {getInfo});

  return (
    <div className="App">
    </div>
  );
}

export default App;
