import { useState, useEffect } from "react";
import Home from "./components/Home";
import SplashScreen from "./components/SplashScreen";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <SplashScreen
          from={0}
          to={100}
          separator=","
          direction="up"
          duration={1}
          className="count-up-text"
        />
      ) : (
        <Home />
      )}
    </>
  );
}

export default App;
