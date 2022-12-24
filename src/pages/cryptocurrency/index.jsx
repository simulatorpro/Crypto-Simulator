import React, {useState, useContext, useEffect} from "react";
import { CryptocurrencyMarket } from "react-tradingview-embed";
import Header from "../../components/header";
import Ticker from "../../components/ticker";
import OrderMarket from "../../components/orderMarket";
import './index.css';

const tradingPairs = [
  "BTCUSD",
  "ETHUSD",
  "BNBUSD",
  "XRPUSD",
  "DOGEUSD",
"ADAUSD",
"MATICUSD",
"DOTUSD",
"LTCUSD",
"SOLUSD",
"TRXUSD",
"SHIBUSD",
"UNIUSD",
"AVAXUSD",
"LINKUSD",
"ATOMUSD",
"XMRUSD",
"XLMUSD",
"ALGOUSD",
"APEUSD",
"XTZUSD",
"AAVEUSD",
"MANAUSD",
"SANDUSD",
"AXSUSD",
"CAKEUSD",
]

const Cryptocurrency = (props) => {
  const [chartMode, setChartMode] = useState(0);
  return (
     <div className="App">
            <Header/>
        <div style={{margin: "32px"}}></div>
        <CryptocurrencyMarket widgetProps = {{
          width : "100%"
        }}/>
    

    </div>
  );
}

export default Cryptocurrency;
