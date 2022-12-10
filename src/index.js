// import React from 'react';
// import ReactDOM from 'react-dom/client';
//import './index.css';
//import reportWebVitals from './reportWebVitals';
//import App from './App';

//Section 1 project
//import MainContent from './Component/MainContent'
//import Footer from './Component/Footer'
//import About from './Section1/component/About'
//import Info from './Section1/component/Info'
//import Interest from './Section1/component/Interest'
//import Footer from './Section1/component/Footer'

//Section 2 project
//import Nav from './Section2/component/Nav';
//import ImageLayout from './Section2/component/ImageLayout';
//import TextRich from './Section2/component/TextRich';
//import Collection from './Section2/component/Collection';

//import image1 from "./Section2/image/paysage_1.jpg";
//import image2 from "./Section2/image/paysage_2.jpg";
//import image3 from "./Section2/image/paysage_3.jpg";
//import image4 from "./Section2/image/paysage_4.jpg";
//import image5 from "./Section2/image/paysage_5.jpg";

//*/
//import Array from './Component/ArrayToMaps';
//import jokesData from "./Component/JokesData";
//import Jokes from "./Component/Jokes";
//import jokes from './Component/JokesData';

//Section 2 - 26 project
/*import Nav from "./Section2-26/component/Nav"
import Card from "./Section2-26/component/Card"
import dataTravel from "./Section2-26/file/data"
//*/



//Section 3-51
//import Form from "./Section3-51/Form"

//const root = ReactDOM.createRoot(document.getElementById('root'))
/*
Original code
//*/
//const root = ReactDOM.createRoot(document.getElementById('root'));
/*const h1 = document.createElement("h1");
h1.textContent = "Learing Js";
h1.className ="Header";
document.getElementById('root').append(h1);*/

/*const page = (
  <div>
    <p>My Story</p>
    <ul>
      <li>Failed</li>
      <li>Failed</li>
      <li>Failed again</li>
      <li>And...</li>
    </ul>
  </div>
)//*/

//document.getElementById('root').append(JSON.stringify(page))

//ReactDOM.createRoot(document.getElementById('root')).render(page);

//11. Projetc 1 - part 1 - Mark up

/*function Page(){
  return (
    <div>
    <MainContent />
    <Footer />
    </div>
  )
}//*/

//Section 1 solo project
/*
function Page() {
  return(
    <div className="container">
      <div>
      <Info />
      <About />
      <Interest />
      <Footer />
      </div>
    </div>
  )
}//*/

// Section 2 Airbnb
// import Nav from './Airbnb/component/Nav';
// import ImageLayout from './Airbnb/component/ImageLayout';
// import TextRich from './Airbnb/component/TextRich';
// import Collection from './Airbnb/component/Collection';

// import image1 from "./Airbnb/image/paysage_1.jpg";
// import image2 from "./Airbnb/image/paysage_2.jpg";
// import image3 from "./Airbnb/image/paysage_3.jpg";
// import image4 from "./Airbnb/image/paysage_4.jpg";
// import image5 from "./Airbnb/image/paysage_5.jpg";

// function App(){

//   let badge = {value: "sold out", image:image1}
//   return (
//     <div className="container">
//       <Nav />
//       <ImageLayout />
//       <TextRich />

//       <div className="collection">
//       <Collection 
//         image = "../image/paysage_1.jpg"
//         rating={"5.0"}
//         reviews={60}
//         country="USA"
//         name="Ndoumba Tchantchou Ivan House"
//         price={250}
//         badge={badge}
//       />

//       <Collection 
//         image = "../image/paysage_1.jpg"
//         rating={"5.0"}
//         reviews={60}
//         country="USA"
//         name="Ndoumba Tchantchou Ivan House"
//         price={250}
//         badge={badge}
//       />

//       <Collection 
//         image = "../image/paysage_1.jpg"
//         rating={"5.0"}
//         reviews={60}
//         country="USA"
//         name="Ndoumba Tchantchou Ivan House"
//         price={250}
//         badge={badge}
//       />
//       </div>
//     </div> 
//   )
// }



//Section 11
/*function Page(){
   
  return (
    <div>
      {jokesData.map(jokesDataItems =>
        {
          return (<Jokes 
                    setup = {jokesDataItems.setup}
                    punchline =  {jokesDataItems.punchline}
                    />)
        }
      )}
    
    </div>
  )
}//*/

//Apply array to our project finalAirBnb project
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import Nav from './Airbnb/component/Nav';
// import ImageLayout from './Airbnb/component/ImageLayout';
// import TextRich from './Airbnb/component/TextRich';
// import Collection from './Airbnb/component/Collection';

// import image1 from "./Airbnb/image/paysage_1.jpg";
// import image2 from "./Airbnb/image/paysage_2.jpg";
// import image3 from "./Airbnb/image/paysage_3.jpg";
// import image4 from "./Airbnb/image/paysage_4.jpg";
// import image5 from "./Airbnb/image/paysage_5.jpg";

// function Page(){
//   let arrayOfData = [
//     {
//       id : 1,
//       rating : "5.0",
//       reviews: 60,
//       country : "USA",
//       name : "Ndoumba Tchantchou Ivan House",
//       price : 250,
//       badge : {value: "sold out", image:image1}
//     },
//     {
//       id : 2,
//       rating : "5.0",
//       reviews: 55,
//       country : "USA",
//       name : "Djouikouo Maluala Laure House",
//       price : 250,
//       badge : {value: "sold out", image:image2}
//     },
//     {
//       id : 3,
//       rating : "5.0",
//       reviews: 5,
//       country : "USA",
//       name : "Ndoumba Ngantchui Mahel House",
//       price : 250,
//       badge : {value: "sold out", image:image3}
//     }
//     ,
//     {
//       id : 4,
//       rating : "4.8",
//       reviews: 5,
//       country : "USA",
//       name : "Yanguibe donfack House",
//       price : 250,
//       badge : {value: "online", image:image4}
//     },
//     {
//       id : 5,
//       rating : "4.9",
//       reviews: 34,
//       country : "USA",
//       name : "CEDRIc House",
//       price : 250,
//       badge : {value: "", image:image5}
//     }
//   ]

//   let arrayToDisplay = arrayOfData.map(dataItems=>{
//     return (
//       <Collection
//       //key = {objectItems.id} 
//       //rating = {objectItems.rating}
//       //reviews = {objectItems.reviews}
//       //country = {objectItems.country}
//       //name = {objectItems.name}
//       //price = {objectItems.price}
//       //badge = {objectItems.badge}
//       // ||
//       // vv samethings
      
//       key = {dataItems.id}
//       dataItems = {dataItems}
//       />)
//   })
//   return(
//     <div className="container">
//       <Nav />
//       <ImageLayout />
//       <TextRich />
//       <div className="collection">
//         {arrayToDisplay}
//       </div>

//     </div>
//   )
// }//*/

/*function Page(){
  const data = dataTravel.map(items=>{
    return(
      <Card
        key={items.id} 
        items={items}/>
    )
  })
  return(<div>
    <Nav />
    <div className="card-list">
      {data}
    </div>
  </div>)
}//*/

/**Meme Challenge */
// /**/import React from 'react';
// import ReactDOM from 'react-dom/client';
// //import './index.css';
// import reportWebVitals from './reportWebVitals';//*/


//Section 3 - Meme generator
// import Nav from "./Section3/component/App"
// import Meme from "./Section3/component/Meme"
// import CounterTrack from "./MiniChallenge/MiniChallenge"
// import Addthings from './MiniChallenge/MiniChallenge';
// import ContactCard from './MiniChallenge/MiniChallenge';

// const root = ReactDOM.createRoot(document.getElementById("root"))

// function Page(){
//   return( 
//     <div>
//       <Nav />
//       <Meme />
//     </div>
//     )
// }
// root.render(<Page />)
//*/



/**MiniChallenge */
/*
import MiniChallenge from './MiniChallenge/MiniChallenge'
//*/
/*function Page(){
  return(
    <div>
      <MiniChallenge />
    </div>
  )
}//*/

/*function Page(){
  return(
    <div>
      <Form />
    </div>
  )
}//*/


/**Box Component */
/*import BoxesComponent from './BoxChallenge/App';//*/
/*function Page(){
  return(
    <div>
      <BoxesComponent darkMode={false} />
    </div>
  )
}//*/
//root.render(<Page />)


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();


/** Tenzie game */
// import React from "react"
// import ReactDOM from "react-dom/client"
// import "./Tenzie/style.css"
// import Die from "./Tenzie/component/Die"


// const root = ReactDOM.createRoot(document.getElementById("root"))


// function Page (){
//   return(
//     <Die />
//   )
// }
// root.render(<Page />)
//*/


/**Quiz */
import ReactDOM from "react-dom/client"
import AllQuiz from "./Quiz/Component/AllQuiz"

const root = ReactDOM.createRoot(document.getElementById("root"))

function App(){
  return(
    <AllQuiz />
  )
}
root.render(<App />)

// const root = ReactDOM.createRoot(document.getElementById("root"))

// root.render(<Page />)//*/

