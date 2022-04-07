// import logo from './logo.svg';
import './App.css';

function App() {
  const MobileOperatingSystem =["Android","Blackberry","iPhone","Windows Phone"];
  const MobileManufacturers = ["Samsung","HTC","Micromax","Apple"];
  return (
    <div className="App">
     <div>
     <h3 className="system">Mobile Operating System</h3>
       {/* <ul> */}
         {MobileOperatingSystem.map((e)=>{
           return <Operating MobileOperatingSystem={e}/>
         })}
       {/* </ul> */}
     </div>
     <div>
     <h3 className="system">Mobile Manufacturers</h3>
       {/* <ul> */}
         {MobileManufacturers.map((e)=>{
           return <Mobiles MobileManufacturers={e}/>
         })}
       {/* </ul> */}
     </div>
    </div>
  );
}

//components

function Operating(props){
  return  <li className="system">{props.MobileOperatingSystem}</li>
}
function Mobiles(props){
  return  <li className="system">{props.MobileManufacturers}</li>

}

export default App;
