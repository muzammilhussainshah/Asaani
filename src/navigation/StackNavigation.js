import {
    createStackNavigator,
    createAppContainer,
} from 'react-navigation';
import SplashScreen from '../screens/SplashScreen';
import home from '../screens/home';
import checkout from '../screens/checkout';
import Service from '../screens/Service';
import AvailService from '../screens/AvailService';
import SubService from '../screens/SubService';
import about from '../screens/about';
import Notifications from '../screens/Notifications';
import faqs from '../screens/faqs';
import contactUs from '../screens/contactUs';
const StackNavigator = createStackNavigator({
    SplashScreen: { screen: SplashScreen },
    home: { screen: home },
    checkout: { screen: checkout },
    about: { screen: about },
    Notifications: { screen: Notifications },
    faqs: { screen: faqs },
    contactUs: { screen: contactUs },
    Service: { screen: Service },
    AvailService: { screen: AvailService },
    SubService: { screen: SubService },
}, {
        headerMode: 'none',
        navigationOptions: {
            headerVisible: false,
            drawerLockMode: 'locked-closed'
        },
    });
const Navigation = createAppContainer(StackNavigator)
export default Navigation;