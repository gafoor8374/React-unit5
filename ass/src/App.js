// import logo from './logo.svg';
import "./App.css";

function App() {
  const links = ["Services", "Projects", "About"];
  const MobileOperatingSystem = [
    "Android",
    "Blackberry",
    "iPhone",
    "Windows Phone",
  ];
  const MobileManufacturers = ["Samsung", "HTC", "Micromax", "Apple"];
  return (
    <div className="App">

       <div className="navbar">
        <div className="logo">
          {" "}
          <h4>LOGO BAKERY</h4>{" "}
        </div>
        <div className="links">
          {links.map((e) => {
            return <Links links={e} />;
          })}
        </div>

        <div className="button-div">
          {" "}
          <button type="button" >
            Contact
          </button>
        </div>
      </div>



      <div>
        <h3 className="system">Mobile Operating System</h3>
        {/* <ul> */}
        {MobileOperatingSystem.map((e) => {
          return <Operating MobileOperatingSystem={e} />;
        })}
        {/* </ul> */}
      </div>
      <div>
        <h3 className="system">Mobile Manufacturers</h3>
        {/* <ul> */}
        {MobileManufacturers.map((e) => {
          return <Mobiles MobileManufacturers={e} />;
        })}
        {/* </ul> */}
      </div>
    
    </div>
  );
}

//components

function Operating(props) {
  return <li className="system">{props.MobileOperatingSystem}</li>;
}
function Mobiles(props) {
  return <li className="system">{props.MobileManufacturers}</li>;
}

function Links(props) {
  console.log(props);
  return <a href="/" style={{ textDecoration:"none",color:"white",padding:"10px"}}>{props.links}</a> ;
}

export default App;
