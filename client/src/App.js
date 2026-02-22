import { useEffect } from "react";
import axios from "axios";

function App() {

  useEffect(() => {
    axios.get("/api/test")
      .then(res => console.log(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <h1>Urban Gardening Planner</h1>
    </div>
  );
}

export default App;
