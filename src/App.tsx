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
    const updated = menu.map (item =>
      data.id === item.id ? { ...item, selected: true } : { ...item, selected: false }
    );
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
          <div style={{position: 'fixed', top: 0, left: 0, right: 0, height: '8rem'}}>
              <Topbar menu={menu} updatemenu={updateMenu}></Topbar>
          </div>
            <div style={{position: 'fixed', top: '8rem', left: 0,right:0, bottom:0, overflow: 'auto' }}>
                {Showpage()}
            </div>
          </div>
          );
}

export default App;
