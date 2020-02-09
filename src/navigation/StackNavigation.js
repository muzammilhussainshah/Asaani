import {
    createStackNavigator,
    createDrawerNavigator,
    createAppContainer,
} from 'react-navigation';
// import Home from '../screens/home/Home/home'
// import Login from '../screens/Login/index';
import SplashScreen from '../screens/SplashScreen';
import home from '../screens/home';
import checkout from '../screens/checkout';
import Service from '../screens/Service';
import AvailService from '../screens/AvailService';
import SubService from '../screens/SubService';
import about from '../screens/about';
import faqs from '../screens/faqs';
import contactUs from '../screens/contactUs';
// import SignUp from '../screens/home/SignUp';



const StackNavigator = createStackNavigator({
    SplashScreen: { screen: SplashScreen },
    home: { screen: home },
    checkout: { screen: checkout },
    about: { screen: about },
    faqs: { screen: faqs },
    contactUs: { screen: contactUs },
    Service: { screen: Service },
    AvailService: { screen: AvailService },
    SubService: { screen: SubService },
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