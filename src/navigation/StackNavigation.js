import {
    createStackNavigator,
    createDrawerNavigator,
    createAppContainer,
} from 'react-navigation';
// import Home from '../screens/home/Home/home'
// import Login from '../screens/Login/index';
import SplashScreen from '../screens/SplashScreen';
import home from '../screens/home';
// import SignUp from '../screens/home/SignUp';



const StackNavigator = createStackNavigator({
    SplashScreen: { screen: SplashScreen },
    home: { screen: home },
    // Home: { screen: Home },
    // SignUp: { screen: SignUp },
}, {
        headerMode: 'none',
        navigationOptions: {
            headerVisible: false,
            drawerLockMode: 'locked-closed'
        },
    });


const Navigation = createAppContainer(StackNavigator)

export default Navigation;