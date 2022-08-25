import "./App.css";
import CakeView from "./features/cake/CakeView";
import IcecreamView from "./features/icecream/IcecreamView";
import User from "./features/user/User";

function App() {
	return (
		<div className='App'>
			<CakeView />
			<IcecreamView />
			<User />
		</div>
	);
}

export default App;
