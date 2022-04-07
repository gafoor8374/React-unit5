// import logo from './logo.svg';
import './App.css';

function App() {
  const food ="Briyani";
  const age = 19;
  const skills =["mern","nodejs","dsa","design","animation"];
  return (
    <div className="App">
     Your fav food is {food},you are {age} years old
      <div>you are {age > 18 ? "Eligible" : "Not Eligible"} for license</div>
      <div>
        {skills.map((e)=>{
          return <Skill skills={e}/>
        })}
    
      </div>
    </div>
  );
}
//COMPONENT
function Skill(props){
  console.log(props.skills)
  return <p className="redtext">Skill:{props.skills}</p>
}

export default App;
