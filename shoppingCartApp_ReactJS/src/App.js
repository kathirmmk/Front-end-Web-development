import Cart from "./components/Cart";
import Nav from "./components/Navigation";
import HomeScreen from "./screens/HomeScreen";

function App() {
  return (
    <div className='App'>
      <Nav />
      <Cart />
      <HomeScreen />
    </div>
  );
}

export default App;