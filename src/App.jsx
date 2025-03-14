import { useState } from "react"


function App() {

        let count=1

      const handleClick = (e) => {
        count++;
        if (count%2==0){
          e.target.style.transform = `translate(200%, 0%)`;
        }
        else{
        e.target.style.transform = `translate(0%, 0%)`;
        }
      };


        return( 
          <div className="img rounded-xl">
            <h1 className="py-8 text-3xl font-bold px-32 text-blue-400">User Login</h1>
            <input className="tex border-solid border border-light-blue-500 py-2 px-2 rounded" type="text" placeholder="Enter Username"/><br />
            <input className="tex border-solid border border-light-blue-500 py-2 px-2 rounded" type="password" placeholder="Enter password"/><br />
            <button onClick={(e)=>handleClick(e)} className="button bg-blue-400 text-white rounded py-2 ml-28 px-2 my-14">submit</button>
          </div>
 )
}

export default App
