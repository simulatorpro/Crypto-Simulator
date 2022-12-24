import {useState, useContext, useEffect} from "react";
import {Link} from "react-router-dom";
import {UserContext} from "../../provider/user";
import LoginButton from "../loginButton";
import './index.css';

const Header = () => {
	const user = useContext(UserContext);

  return (
	<div>
		<div className="logo">
			<span className="p4">LOGO</span>
			<div style={{width: "30%", flexGrow: 1}}>
				<Link to="/">Home</Link>
				<Link to="/mytrade">My Trade</Link>
				<Link to="/profile">Profile</Link>
				<Link to="/leaderboard">LeaderBoard</Link>
				<Link to="/cryptocurrency">Cryptocurrencies</Link>
			</div>
			<div style={{width: "30%"}}>
				<LoginButton />
			</div>
		</div>
		

		{/* {
			user.userInfo.islogin &&
			<>ETH: <input type="text" value={user.userInfo.eth} readOnly={true}/></>
		}
		{
			user.userInfo.islogin &&
			<>USD: <input type="text" value={user.userInfo.usd} readOnly={true}/></>
		} */}

    </div>
  );
}

export default Header;
