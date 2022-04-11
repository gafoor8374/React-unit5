import {useState} from "react"


function India(){
const [score,setScore]=useState(76);
const [wicket,setWicket]=useState(2);
const [over,setOver]=useState(50)

const cric =(i,j)=>{
   if(i==="score"){
       setScore(score+j)
   }
   else if(i==="wicket"){
       setWicket(wicket+j)
   }
   else{
       setOver(over+j)
   }
   
}




    return (
        <div>
             <h3>India:</h3>
      <div className="banner">
        <div>
          Score:
          <h1 className="scoreCount">
          {score} 
          </h1>
        
        </div>
        <div>
          Wicket:
          <h1 className="wicketCount">
            {wicket}
          </h1>
        </div>

        <div>
          Over:
          <h1 className="overCount">
          {over}
      {over ? <div>"over.ball":{over/6}</div> : "over:{Math.floor(over/6)}"}

            {
              // Show Over here in the format: "over.ball" eg: 4.5 means 4th over and 5th ball
              // if 1 more ball is thrown then over is now 5.0
              // you have to write logic to form this string from current ball number.
            }
          </h1>
        </div>
      </div>

      <div className="addScore">
        Add Score
        {/* these buttons should add the respective amount in the score */}
        <button onClick={()=>cric("score",1)} className="addScore1">Add 1</button>
        <button onClick={()=>cric("score",4)} className="addScore4">Add 4</button>
        <button onClick={()=>cric("score",6)} className="addScore6">Add 6</button>
      </div>

      <div className="addWicket">
        Add Wicket
        {/* Increase the count of wicket */}
        <button onClick={()=>{if(wicket<12) cric("wicket",1)}}>Add 1 wicket</button>
      </div>

      <div className="addBall">
        Add ball
        {/* Increase the total number of balls thrown here. */}
        <button onClick={()=> cric("over",1)}>Add 1</button>
      </div>
      {score >=100 ? <div> <h1>India Won</h1></div> : " "}
    </div>
    )
}

export {India}