// import { useState } from "react";
import NavBar from "../components/NavBar";

// npm run dev
export default function Home() {
  // const [counter, setCounter] = useState(0);
  return (
    <div>
      {/* <h1>Hello {counter}</h1> */}
      {/* <button onClick={() => setCounter((prev) => prev + 1)}>+</button> */}
      <NavBar />
      <h1>Hello Next</h1>
    </div>
  );
}
