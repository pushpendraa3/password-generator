import { useCallback } from "react";
import { useState } from "react"


function App() {
  const [length, setLength] = useState(6);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, SetCharAllowed] = useState(false);
  const [Password, setPassword] = useState("");

  const generatePassword = useCallback(() => {
    let pass = "";
    let stringpool = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numAllowed) stringpool += "1234567890";
    if (charAllowed) stringpool += "!@#$%^&*()_+=-";

    // for (const i in stringpool) {
    //   let randomIndex = Math.floor(Math.random() * stringpool.length + 1);
    //   pass += stringpool.charAt(randomIndex);
    // }

    for (let i = 1; i <= length; i++) {
      let randomIndex = Math.floor(Math.random() * stringpool.length + 1);
      pass += stringpool.charAt(randomIndex);

    }
    setPassword(pass)

  }, [length, numAllowed, charAllowed, setPassword])
  return (
    <>

      <h1 className="bg-green-600 rounded-md text-4xl text-center p-2">Password Generator</h1>
      <div className="w-full max-w-md mx-auto shadow-md rounded-md m-8 px-8 py-8 text-orange-400 bg-gray-800">
        <div className="flex shadow rounded-md overflow-hidden mb-4">
          <input 
          type="text" 
          value={Password} 
          className="outline-none w-full py-1 px-8" 
          placeholder="Password"
          readOnly
          />
          <button className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0">Copy</button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input 
            type="range"  
            min={4}
            max={20}
            value={length}
            className="cursor-pointer"
            onChange={(e) => setLength(e.target.value)}
            />
            <label>Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
      <input
          type="checkbox"
          defaultChecked={numAllowed}
          id="numberInput"
          onChange={() => {
              setNumAllowed((prev) => !prev);
          }}
      />
      <label htmlFor="numberInput">Numbers</label>
      </div>
      <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="characterInput"
              onChange={() => {
                SetCharAllowed((prev) => !prev )
              }}
          />
          <label htmlFor="characterInput">Characters</label>
      </div>
        </div>
      </div>
    </>
  )
}

export default App
