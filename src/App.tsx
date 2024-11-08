import React from 'react';
import './App.css';
import Topbar from "./components/topbar/topbar";
import Skills from "./components/skills/skills";
import Overview from "./components/overview/overview";
import Skilltree from "./components/skilltree/skilltree";
import topbarMenu from "./components/topbar/topbar-menu";
import { screenName } from "./App.types";
import Samples from "./components/samples/samples";

const App = () => {
  const [menu, setMenu ] = React.useState(topbarMenu);
  const [selectedPage, setSelectedPage] = React.useState<screenName>(menu[0].id as screenName);

  const updateMenu = ( data:any ) => {
    const updated = menu.map (item => {
      if (data.id === item.id) { return { ...item, selected: true }; }
      else return { ...item, selected: false };
    });
    setMenu(updated);
    setSelectedPage(data.id);
  }

   const Showpage = ()=> {
    switch (selectedPage) {
        case 'OVERVIEW': return <Overview />;
        case 'SKILLS': return <Skills />;
        case 'SKILLTREE': return <Skilltree />;
        case 'SAMPLES': return <Samples />;
        default: return <div>ERROR: Can not find page</div>;
    }
  }

  return (
   <div>
       <Topbar menu={menu} updatemenu={updateMenu}></Topbar>
       <Showpage></Showpage>
   </div>

  );
}

export default App;
