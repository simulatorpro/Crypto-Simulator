import {useState, useContext, useEffect, useCallback, useMemo} from "react";
import OrderHistory from "../orderHistory";
import {LeaderboardContext} from "../../provider/leaderboard";
import { OrderContext } from "../../provider/order";
import {SERVER_URL} from "../../constants/env";

import './index.css';


const Leaders = () => {
  const leaderboard = useContext(LeaderboardContext);
  const order = useContext(OrderContext);
  const [trades, setTrades] = useState([]);

  useEffect(()=>{
    leaderboard.getAllLeaderBoards();
  },[])

  const getOrders = async (userID) => {
    if(!userID)
      return;
    let result = await order.getOrdersByUserID(userID);
    setTrades(result)
    console.log(result);
  }

  return (
    <>
    {
      trades.length == 0 &&
      <div className="leader-section">
        {
          leaderboard.leaderBoards.map((el, idx) => (
            <div className="leader-card" key={idx} onClick={()=>{
              getOrders(el.userID)
              }} >
              <img  src={`${SERVER_URL}/useravatar/${el.userAvatar}`} style={{width: "36px", borderRadius : '70px'}}/>
              <div>{el.userName}</div>
              <div>{`$${el.totalTradesAmount}`}</div>
              <div>{el.totalTradesCount}</div>
            </div>
          ))
        }
      </div>
    }
     
    {
      trades.length > 0 && 
      <OrderHistory orders={trades} />
    }

    </>
    
   
  );
}

export default Leaders;
