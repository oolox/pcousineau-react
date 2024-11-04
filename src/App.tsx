import React from 'react';
import './App.css';
import Topbar from "./components/topbar/topbar";

const getMenu= () => {
  return [
    {
      label: 'overview',
      key: 'OVERVIEW',
      selected: true
    },
    {
      label: 'skills',
      key: 'SKILLS',
      selected: false
    },
    {
      label: 'experience',
      key: 'TIMELINE',
      selected: false
    },
    {
      label: 'samples',
      key: 'LINKS',
      selected: false
    }
  ];
}


const App = () => {
  const [count, setCount] = React.useState<number>(0);
  const [menu, setMenu ] = React.useState(getMenu());


  const updateMenu = ( data:any ) => {
    console.log('SET: ',data);
    setCount(count+1);
    // setMenu
  }


  return (
   <div>
     <div>
      pcousineau-react : {count}
     </div>
     <Topbar menu={menu} updatemenu={updateMenu}></Topbar>
   </div>

  );
}

export default App;
