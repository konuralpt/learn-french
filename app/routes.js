import Home from './home/Home';
import Videos from './videos/Videos';
import WordGame from './wordgame/WordGame';
import SideMenu from './SideMenu/SideMenu';
import {createAppContainer,createDrawerNavigator} from 'react-navigation';

const RootStack = createDrawerNavigator({
  Home: {
    screen: Home
  },
  WordGame: {
    screen: WordGame
  },
  Videos: {
    screen: Videos
  }
},{
  contentComponent: SideMenu,
  drawerWidth: 300
});

const App = createAppContainer(RootStack);

export default App;
