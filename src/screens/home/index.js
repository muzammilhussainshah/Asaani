import React, { useReducer } from 'react';
import { View, StyleSheet, Text, Dimensions, TouchableOpacity, Image, ImageBackground, BackHandler } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Drawer from '../../components/drawer'
import Header from '../../components/header';
import Charactors from '../../components/charactors';
const charactorBtn = [
    <Image resizeMode="contain" style={{ width: "100%", }} source={require("../../assets/c0.png")} />,
    <Image resizeMode="contain" style={{ width: "100%", }} source={require("../../assets/c1.png")} />,
    <Image resizeMode="contain" style={{ width: "100%", }} source={require("../../assets/c2.png")} />,
    <Image resizeMode="contain" style={{ width: "100%", }} source={require("../../assets/c3.png")} />,
    <Image resizeMode="contain" style={{ width: "100%", }} source={require("../../assets/c4.png")} />,
    <Image resizeMode="contain" style={{ width: "100%", }} source={require("../../assets/c5.png")} />,
    <Image resizeMode="contain" style={{ width: "100%", }} source={require("../../assets/c6.png")} />,
]

const profession = [
    // ac technitian
    {
        Invertor: {
            Maintenance: [
                { title: "AC Compressor Change", price: "12000" },
                { title: "AC Countinuous Trip", price: "1000" },
                { title: "AC Icing", price: "1000" },
                { title: "AC water leak", price: "1000" },
                { title: "Gas Filling 1 Ton", price: "4800" },
                { title: "Gas Filling 2 Ton", price: "7200" },
                { title: "General Service", price: "1000" },
                { title: "Diagnostic Visit", price: "400" },
                { title: "Inverter Capacitor change", price: "800" },
                { title: "Inverter Repair Fan", price: "3500" },
                { title: "Inverter Repair circuit", price: "8000" },
                { title: "Inverter valve replacement", price: "1800" },
                { title: "Master Service", price: "1750" },
                { title: "Gas Filling 1.5 Ton", price: "5200" },

            ],
            Installation: [
                { title: "Installation", price: "2700" },
                { title: "AC Dismantle", price: "1000" },
                { title: "Installation (Higher than the 2nd floor)", price: "3200" },
            ],

        },
        "Non-Invertor": {
            Maintenance: [
                { title: "AC Circuit Repair (Regular AC)", price: "3000" },
                { title: "AC Circuit Replace (Regular AC)", price: "3000" },
                { title: "AC Compressor Change", price: "12000" },
                { title: "AC Countinuous Trip", price: "1000" },
                { title: "AC Icing", price: "1000" },
                { title: "AC water leak", price: "1000" },
                { title: "Gas Filling 1 Ton", price: "2800" },
                { title: "Gas Filling 2 Ton", price: "4200" },
                { title: "General Service", price: "1000" },
                { title: "Diagnostic Visit", price: "400" },
                { title: "Master Service", price: "1750" },
                { title: "Gas Filling 1.5 Ton", price: "3200" },
            ],
            Installation: [
                { title: "Installation", price: "2000" },
                { title: "AC Dismantle", price: "1000" },
                { title: "Installation (Higher than the 2nd floor)", price: "2500" },
            ],

        }
    },
    // Carpenter
    {
        route: "AvailService",
        Bed:
            [
                { title: "Bed Dismantle", price: "500" },
                { title: "Bed Repair", price: "600" },
            ],
        Cabinet: [
            { title: "Cabinet Handle replacement", price: "150" },
            { title: "Cabinet hinge repair", price: "400" },
        ],
        Door: [
            { title: "Door Catcher magnet", price: "300" },
            { title: "Door Chatakni", price: "300" },
            { title: "Door Glass fix", price: "50" },
            { title: "Door Handle & Lock replacement", price: "600" },
            { title: "Door Installation Sliding", price: "120" },
            { title: "Door Kundi/Latches replacement", price: "500" },
            { title: "Door Chokhat Repair (disfuguration)", price: "500" },
            { title: "Door Chokhat Stopper", price: "500" },
            { title: "Wooden Door Installation with lock", price: "500" },
        ],
        Drawer: [
            { title: "Drawer Channel Replacement", price: "500" },
            { title: "Drawer Lock Change", price: "250" },

        ],
        Installation: [
            { title: "Art work or Mirror Installation", price: "200" },
            { title: "Curtain Rod Installation", price: "300" },
            { title: "Mosquito netting", price: "80" },
            { title: "Shelf Installation", price: "600" },

        ],
        Polish: [
            { title: "Furniture Polish-Varnishing", price: "1000" },
            { title: "Laquer", price: "1" },
        ],
        Window: [
            { title: "Window Glass fix", price: "50" },
            { title: "Window Installation Sliding", price: "150" },
            { title: "Wooden Window Installation", price: "120" },
        ],
    },
    // Electrition
    {
        route: "AvailService",
        Fans:
            [
                { title: "Fan Installation", price: "400" },
                { title: "Fan installation including hook installation", price: "1200" },
                { title: "Faulty Fan Dimmer", price: "400" },
                { title: "Fan Capacitor Replacement", price: "400" },
                { title: "Exhaust Fan Installation with Wiring & Drilling", price: "800" },
                { title: "Exhaust Fan Installation", price: "600" },
                { title: "Bracket Fan installation", price: "500" },
            ],
        Power: [
            { title: "Generator Installation with ChangeOver Switch", price: "2000" },
            { title: "Generator - Power Supply issue", price: "1500" },
            { title: "Generator Replacement", price: "1000" },
            { title: "UPS dismantle", price: "800" },
            { title: "UPS Installation (floor)", price: "1650" },
            { title: "UPS Installation (wall bracket)", price: "1800" },
            { title: "UPS Point Connection", price: "300" },
            { title: "UPS Replacement", price: "1300" },
        ],
        Installation: [
            { title: "Ceiling / wall lights installation", price: "250" },
            { title: "Flat Screen TV Installation", price: "15" },
            { title: "Led Lights installation", price: "250" },
            { title: "LED Lights Installation Concealed", price: "1500" },
            { title: "LED Lights installation Open", price: "450" },
            { title: "Spot Lights installation", price: "500" },
        ],
        "Sockets, Wiring and Fuse Boards": [
            { title: "AC Point with Wiring & Re-Plastering", price: "150" },
            { title: "AC Point with Wiring & Channel Patti", price: "500" },
            { title: "AC Point without wiring", price: "600" },
            { title: "Breaker panel (DB Panel)", price: "1000" },
            { title: "Main Board", price: "1000" },
            { title: "New Switchboard", price: "600" },
            { title: "Panel Fuse - cut out", price: "600" },
            { title: "Single Phase Breaker Replacement", price: "1000" },
            { title: "Socket Repair", price: "600" },
            { title: "Switch Board Current Issue - Breaker Issue", price: "400" },
            { title: "Switch box current issue - wiring issue", price: "800" },
            { title: "Switch box sheet with connection", price: "500" },
            { title: "Three Phase Breaker Replacement", price: "1500" },

        ],

    },
    // Fumigation
    {
        route: "AvailService",
        Fumigation:
            [
                { title: "Bed Bugs Treatment-khatmal", price: "270" },
                { title: "General Fumigation for cockroaches & insects", price: "1" },
                { title: "Termite Treatement - deemak", price: "1" },
            ],
    },
    // Laundry
    {
        route: "AvailService",
        Pent:
            [
                { title: "Small size washing", price: "30" },
                { title: "Medium size washing", price: "40" },
                { title: "Large size washing", price: "50" },
            ],
        Shirt:
            [
                { title: "Small size washing", price: "30" },
                { title: "Medium size washing", price: "40" },
                { title: "Large size washing", price: "50" },
            ],
        Kurta:
            [
                { title: "Small size washing", price: "30" },
                { title: "Medium size washing", price: "40" },
                { title: "Large size washing", price: "50" },
            ],
        Pajama:
            [
                { title: "Small size washing", price: "30" },
                { title: "Medium size washing", price: "40" },
                { title: "Large size washing", price: "50" },
            ],
    },
    // Painter
    {
        route: "AvailService",
        Painter:
            [
                { title: "Distemper /ft", price: "15" },
                { title: "Oil Base Matt 25/ft", price: "25" },
                { title: "Texture Paint sq.ft", price: "55" },
                { title: "Velvet Paint-ICI dulux sq.ft", price: "170" },
                { title: "Velvet Paint-ICI Nippin sq.ft", price: "45" },
                { title: "Water Base Matt sq.ft", price: "25" },
                // { title: "Water Base Matt sq.ft", price: "25" },
            ],

    },
    // Plumber
    {
        route: "AvailService",
        Geyser:
            [
                { title: "Electric Geyser Installation without piping", price: "1500" },
                { title: "Geyser Burner Replacement", price: "500" },
                { title: "Geyser Installation", price: "1500" },
                { title: "Geyser Pilot Work", price: "500" },
                { title: "Geyser Service", price: "750" },
                { title: "Geyser Thermostat Change", price: "800" },
            ],
        "Pumps & Tanks":
            [
                { title: "Motor Installation/Replacement", price: "1000" },
                { title: "Motor Machine Installation/Replacement with piping", price: "1500" },
                { title: "Water Tank Cleaning", price: "1200" },
            ],
        "Installation/Repair":
            [
                { title: "Airlock", price: "1500" },
                { title: "Fibre or PVC Tank Installation without piping", price: "2500" },
                { title: "Kitchen Gas leak", price: "1000" },
                { title: "Mixer Tap Repair/Replacement", price: "700" },
                { title: "Pressure in taps", price: "1000" },
                { title: "Single Small Tap Replacement", price: "600" },
                { title: "Sink/Basin replacement/installation without points", price: "1000" },
                { title: "Sink Spindle Change", price: "500" },
                { title: "Water leaks", price: "300" },
            ],
        Bathroom:
            [
                { title: "Bath Tub Installation", price: "3000" },
                { title: "Bathroom Accessory Set Installation", price: "1000" },
                { title: "Commode Installation", price: "2000" },
                { title: "Complete New bathroom set change", price: "5000" },
                { title: "Flush Button & Lever Change/New", price: "600" },
                { title: "Flush Button & Lever Change/Repair", price: "600" },
                { title: "Flush Tank", price: "600" },
                { title: "Muslim Shower Replacement/repair", price: "600" },
                { title: "Removal of WC & Commode Installation", price: "2750" },
                { title: "Shower Set Change with new", price: "2500" },
                { title: "Toilet Seat Fixing", price: "300" },
            ],
    },
]

class home extends React.Component {
    constructor(props) {
        super(props)
        this.state = { drawer: false, slideStyle: "slideInLeft", screenHeight: "", catogery: false, charactor: "0" }
    };
    componentDidMount() {
        const { serFrmDb } = this.props

        var { height, width } = Dimensions.get('window');
        this.setState({
            screenHeight: height,
        })
        console.log(serFrmDb, "serFrmDbserFrmDb")
        //ac Invertor maintanence 
        profession[0].Invertor.Maintenance[0].price = serFrmDb[6]["AC Compressor Change"]
        profession[0].Invertor.Maintenance[1].price = serFrmDb[6]["AC Countinuous Trip"]
        profession[0].Invertor.Maintenance[2].price = serFrmDb[6]["AC Icing"]
        profession[0].Invertor.Maintenance[3].price = serFrmDb[6]["AC water leak"]
        profession[0].Invertor.Maintenance[4].price = serFrmDb[6]["Gas Filling 1 Ton"]
        profession[0].Invertor.Maintenance[5].price = serFrmDb[6]["Gas Filling 2 Ton"]
        profession[0].Invertor.Maintenance[6].price = serFrmDb[6]["General Service"]
        profession[0].Invertor.Maintenance[7].price = serFrmDb[6]["Diagnostic Visit"]
        profession[0].Invertor.Maintenance[8].price = serFrmDb[6]["Inverter Capacitor change"]
        profession[0].Invertor.Maintenance[9].price = serFrmDb[6]["Inverter Repair Fan"]
        profession[0].Invertor.Maintenance[10].price = serFrmDb[6]["Inverter Repair circuit"]
        profession[0].Invertor.Maintenance[11].price = serFrmDb[6]["Inverter valve replacement"]
        profession[0].Invertor.Maintenance[12].price = serFrmDb[6]["Master Service"]
        profession[0].Invertor.Maintenance[13].price = serFrmDb[6]["Gas Filling 1.5 Ton"]
        //ac Invertor Installation 
        profession[0].Invertor.Installation[0].price = serFrmDb[6]["Installation"]
        profession[0].Invertor.Installation[1].price = serFrmDb[6]["AC Dismantle"]
        profession[0].Invertor.Installation[2].price = serFrmDb[6]["Installation (Higher than the 2nd floor)"]
        //ac Non Invertor Maintenance
        profession[0]["Non-Invertor"].Maintenance[0].price = serFrmDb[6]["AC Circuit Repair (Regular AC) (non)"]
        profession[0]["Non-Invertor"].Maintenance[1].price = serFrmDb[6]["AC Circuit Replace (Regular AC) (non)"]
        profession[0]["Non-Invertor"].Maintenance[2].price = serFrmDb[6]["AC Compressor Change (non)"]
        profession[0]["Non-Invertor"].Maintenance[3].price = serFrmDb[6]["AC Countinuous Trip (non)"]
        profession[0]["Non-Invertor"].Maintenance[4].price = serFrmDb[6]["AC Icing (non)"]
        profession[0]["Non-Invertor"].Maintenance[5].price = serFrmDb[6]["AC water leak (non)"]
        profession[0]["Non-Invertor"].Maintenance[6].price = serFrmDb[6]["Gas Filling 1 Ton (non)"]
        profession[0]["Non-Invertor"].Maintenance[7].price = serFrmDb[6]["Gas Filling 2 Ton (non)"]
        profession[0]["Non-Invertor"].Maintenance[8].price = serFrmDb[6]["General Service (non)"]
        profession[0]["Non-Invertor"].Maintenance[9].price = serFrmDb[6]["Diagnostic Visit (non)"]
        profession[0]["Non-Invertor"].Maintenance[10].price = serFrmDb[6]["Master Service (non)"]
        profession[0]["Non-Invertor"].Maintenance[11].price = serFrmDb[6]["Gas Filling 1.5 Ton (non)"]
        //ac Non Invertor Installation
        profession[0]["Non-Invertor"].Installation[0].price = serFrmDb[6]["Installation (non)"]
        profession[0]["Non-Invertor"].Installation[1].price = serFrmDb[6]["AC Dismantle (non)"]
        profession[0]["Non-Invertor"].Installation[2].price = serFrmDb[6]["Installation (Higher than the 2nd floor) (non)"]
        //Carpenter bed
        profession[1].Bed[0].price = serFrmDb[0]["Bed Dismantle"]
        profession[1].Bed[1].price = serFrmDb[0]["Bed Repair"]
        //Carpenter Cabinet
        profession[1].Cabinet[0].price = serFrmDb[0]["Cabinet Handle replacement"]
        profession[1].Cabinet[1].price = serFrmDb[0]["Cabinet hinge repair"]
        //Carpenter Door
        profession[1].Door[0].price = serFrmDb[0]["Door Catcher magnet"]
        profession[1].Door[1].price = serFrmDb[0]["Door Chatakni"]
        profession[1].Door[2].price = serFrmDb[0]["Door Glass fix"]
        profession[1].Door[3].price = serFrmDb[0]["Door Handle & Lock replacement"]
        profession[1].Door[4].price = serFrmDb[0]["Door Installation Sliding"]
        profession[1].Door[5].price = serFrmDb[0]["Door Kundi/Latches replacement"]
        profession[1].Door[6].price = serFrmDb[0]["Door Chokhat Repair (disfuguration)"]
        profession[1].Door[7].price = serFrmDb[0]["Door Chokhat Stopper"]
        profession[1].Door[8].price = serFrmDb[0]["Wooden Door Installation with lock"]
        //Carpenter Drawer
        profession[1].Drawer[0].price = serFrmDb[0]["Drawer Channel Replacement"]
        profession[1].Drawer[1].price = serFrmDb[0]["Drawer Lock Change"]
        //Carpenter Installation
        profession[1].Installation[0].price = serFrmDb[0]["Art work or Mirror Installation"]
        profession[1].Installation[1].price = serFrmDb[0]["Curtain Rod Installation"]
        profession[1].Installation[2].price = serFrmDb[0]["Mosquito netting"]
        profession[1].Installation[3].price = serFrmDb[0]["Shelf Installation"]

        //Carpenter Polish
        profession[1].Polish[0].price = serFrmDb[0]["Furniture Polish-Varnishing"]
        profession[1].Polish[1].price = serFrmDb[0]["Laquer"]
        //Carpenter Window
        profession[1].Window[0].price = serFrmDb[0]["Window Glass fix"]
        profession[1].Window[1].price = serFrmDb[0]["Window Installation Sliding"]
        profession[1].Window[2].price = serFrmDb[0]["Wooden Window Installation"]
        //Electrition Fans
        profession[2].Fans[0].price = serFrmDb[1]["Fan Installation"]
        profession[2].Fans[1].price = serFrmDb[1]["Fan installation including hook installation"]
        profession[2].Fans[2].price = serFrmDb[1]["Faulty Fan Dimmer"]
        profession[2].Fans[3].price = serFrmDb[1]["Fan Capacitor Replacement"]
        profession[2].Fans[4].price = serFrmDb[1]["Exhaust Fan Installation with Wiring & Drilling"]
        profession[2].Fans[5].price = serFrmDb[1]["Exhaust Fan Installation"]
        profession[2].Fans[6].price = serFrmDb[1]["Bracket Fan installation"]
        //Electrition Power
        profession[2].Power[0].price = serFrmDb[1]["Generator Installation with ChangeOver Switch"]
        profession[2].Power[1].price = serFrmDb[1]["Generator - Power Supply issue"]
        profession[2].Power[2].price = serFrmDb[1]["Generator Replacement"]
        profession[2].Power[3].price = serFrmDb[1]["UPS dismantle"]
        profession[2].Power[4].price = serFrmDb[1]["UPS Installation (floor)"]
        profession[2].Power[5].price = serFrmDb[1]["UPS Installation (wall bracket)"]
        profession[2].Power[6].price = serFrmDb[1]["UPS Point Connection"]
        profession[2].Power[7].price = serFrmDb[1]["UPS Replacement"]
        //Electrition Installation
        profession[2].Installation[0].price = serFrmDb[1]["Ceiling / wall lights installation"]
        profession[2].Installation[1].price = serFrmDb[1]["Flat Screen TV Installation"]
        profession[2].Installation[2].price = serFrmDb[1]["Led Lights installation"]
        profession[2].Installation[3].price = serFrmDb[1]["LED Lights Installation Concealed"]
        profession[2].Installation[4].price = serFrmDb[1]["LED Lights installation Open"]
        profession[2].Installation[5].price = serFrmDb[1]["Spot Lights installation"]
        //Electrition Sockets, Wiring and Fuse Boards
        profession[2]["Sockets, Wiring and Fuse Boards"][0].price = serFrmDb[1]["AC Point with Wiring & Re-Plastering"]
        profession[2]["Sockets, Wiring and Fuse Boards"][1].price = serFrmDb[1]["AC Point with Wiring & Channel Patti"]
        profession[2]["Sockets, Wiring and Fuse Boards"][2].price = serFrmDb[1]["AC Point without wiring"]
        profession[2]["Sockets, Wiring and Fuse Boards"][3].price = serFrmDb[1]["Breaker panel (DB Panel)"]
        profession[2]["Sockets, Wiring and Fuse Boards"][4].price = serFrmDb[1]["Main Board"]
        profession[2]["Sockets, Wiring and Fuse Boards"][5].price = serFrmDb[1]["New Switchboard"]
        profession[2]["Sockets, Wiring and Fuse Boards"][6].price = serFrmDb[1]["Panel Fuse - cut out"]
        profession[2]["Sockets, Wiring and Fuse Boards"][7].price = serFrmDb[1]["Single Phase Breaker Replacement"]
        profession[2]["Sockets, Wiring and Fuse Boards"][8].price = serFrmDb[1]["Socket Repair"]
        profession[2]["Sockets, Wiring and Fuse Boards"][9].price = serFrmDb[1]["Switch Board Current Issue - Breaker Issue"]
        profession[2]["Sockets, Wiring and Fuse Boards"][10].price = serFrmDb[1]["Switch box current issue - wiring issue"]
        profession[2]["Sockets, Wiring and Fuse Boards"][11].price = serFrmDb[1]["Switch box sheet with connection"]
        profession[2]["Sockets, Wiring and Fuse Boards"][12].price = serFrmDb[1]["Three Phase Breaker Replacement"]
        // Fumigation Fumigation
        profession[3].Fumigation[0].price = serFrmDb[2]["Bed Bugs Treatment-khatmal"]
        profession[3].Fumigation[1].price = serFrmDb[2]["General Fumigation for cockroaches & insects"]
        profession[3].Fumigation[2].price = serFrmDb[2]["Termite Treatement - deemak"]
        // Laundry Pent
        profession[4].Pent[0].price = serFrmDb[3]["Small size washing"]
        profession[4].Pent[1].price = serFrmDb[3]["Medium size washing"]
        profession[4].Pent[2].price = serFrmDb[3]["Large size washing"]
        // Laundry Shirt
        profession[4].Shirt[0].price = serFrmDb[3]["Small size washing shirt"]
        profession[4].Shirt[1].price = serFrmDb[3]["Medium size washing shirt"]
        profession[4].Shirt[2].price = serFrmDb[3]["Large size washing shirt"]
        // Laundry Kurta
        profession[4].Kurta[0].price = serFrmDb[3]["Small size washing kurta"]
        profession[4].Kurta[1].price = serFrmDb[3]["Medium size washing kurta"]
        profession[4].Kurta[2].price = serFrmDb[3]["Large size washing kurta"]
        // Laundry Pajama
        profession[4].Pajama[0].price = serFrmDb[3]["Small size washing Pajama"]
        profession[4].Pajama[1].price = serFrmDb[3]["Medium size washing Pajama"]
        profession[4].Pajama[2].price = serFrmDb[3]["Large size washing Pajama"]
        // Painter Painter
        profession[5].Painter[0].price = serFrmDb[4]["Distemper /ft"]
        profession[5].Painter[1].price = serFrmDb[4]["Oil Base Matt 25/ft"]
        profession[5].Painter[2].price = serFrmDb[4]["Texture Paint sq.ft"]
        profession[5].Painter[3].price = serFrmDb[4]["Velvet Paint-ICI dulux sq.ft"]
        profession[5].Painter[4].price = serFrmDb[4]["Velvet Paint-ICI Nippin sq.ft"]
        profession[5].Painter[5].price = serFrmDb[4]["Water Base Matt sq.ft"]
        // Plumber Geyser
        profession[6].Geyser[0].price = serFrmDb[5]["Electric Geyser Installation without piping"]
        profession[6].Geyser[1].price = serFrmDb[5]["Geyser Burner Replacement"]
        profession[6].Geyser[2].price = serFrmDb[5]["Geyser Installation"]
        profession[6].Geyser[3].price = serFrmDb[5]["Geyser Pilot Work"]
        profession[6].Geyser[4].price = serFrmDb[5]["Geyser Service"]
        profession[6].Geyser[5].price = serFrmDb[5]["Geyser Thermostat Change"]
        // Plumber Pumps & Tanks
        profession[6]["Pumps & Tanks"][0].price = serFrmDb[5]["Motor Installation/Replacement"]
        profession[6]["Pumps & Tanks"][1].price = serFrmDb[5]["Motor Machine Installation/Replacement with piping"]
        profession[6]["Pumps & Tanks"][2].price = serFrmDb[5]["Water Tank Cleaning"]
        // Plumber Installation/Repair
        profession[6]["Installation/Repair"][0].price = serFrmDb[5]["Airlock"]
        profession[6]["Installation/Repair"][1].price = serFrmDb[5]["Fibre or PVC Tank Installation without piping"]
        profession[6]["Installation/Repair"][2].price = serFrmDb[5]["Kitchen Gas leak"]
        profession[6]["Installation/Repair"][3].price = serFrmDb[5]["Mixer Tap Repair/Replacement"]
        profession[6]["Installation/Repair"][4].price = serFrmDb[5]["Pressure in taps"]
        profession[6]["Installation/Repair"][5].price = serFrmDb[5]["Single Small Tap Replacement"]
        profession[6]["Installation/Repair"][6].price = serFrmDb[5]["Sink/Basin replacement/installation without points"]
        profession[6]["Installation/Repair"][7].price = serFrmDb[5]["Sink Spindle Change"]
        profession[6]["Installation/Repair"][8].price = serFrmDb[5]["Water leaks"]
        // Plumber Bathroom
        profession[6].Bathroom[0].price = serFrmDb[5]["Bath Tub Installation"]
        profession[6].Bathroom[1].price = serFrmDb[5]["Bathroom Accessory Set Installation"]
        profession[6].Bathroom[2].price = serFrmDb[5]["Commode Installation"]
        profession[6].Bathroom[3].price = serFrmDb[5]["Complete New bathroom set change"]
        profession[6].Bathroom[4].price = serFrmDb[5]["Flush Button & Lever Change/New"]
        profession[6].Bathroom[5].price = serFrmDb[5]["Flush Button & Lever Change/Repair"]
        profession[6].Bathroom[6].price = serFrmDb[5]["Flush Tank"]
        profession[6].Bathroom[7].price = serFrmDb[5]["Muslim Shower Replacement/repair"]
        profession[6].Bathroom[8].price = serFrmDb[5]["Removal of WC & Commode Installation"]
        profession[6].Bathroom[9].price = serFrmDb[5]["Shower Set Change with new"]
        profession[6].Bathroom[10].price = serFrmDb[5]["Toilet Seat Fixing"]



    }
    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', BackHandler.exitApp());
    }
    animateParent(fals) {
        setTimeout(() => {
            this.setState({ drawer: false })
        }, 250);
    }
    render() {
        const { fields, loading, screenHeight, charactor } = this.state
        return (
            <ImageBackground source={require("../../assets/gradient.jpg")}

                style={{ width: '100%', height: '100%' }}>
                <View style={{ flex: 1, }}>
                    {/* //drawer close view// */}
                    {(this.state.drawer === true) && (
                        <TouchableOpacity
                            activeOpacity={1}
                            onPress={() => { this.setState({ drawer: false }) }}
                            style={{ position: "absolute", height: screenHeight, width: "30%", right: 0, zIndex: 1 }}>
                        </TouchableOpacity>
                    )}
                    {/* draewaer  */}
                    {(this.state.drawer === true) && (
                        <Drawer
                            navigation={this.props.navigation}
                            animationStyle="fadeInLeftBig"
                            animateParent={this.animateParent.bind(this)}
                        />
                    )}
                    {/* header */}
                    <Header func={() => this.setState({ drawer: true })}
                    // heading="Home"
                    />
                    {/* body */}
                    <View style={{ flex: 9, }}>
                        <View style={{ flex: 8, justifyContent: "center", alignItems: "center" }}>
                            <Charactors
                                func={(index) => { this.setState({ charactor: index }) }}
                            />
                        </View>
                        <View style={{ flex: 2, justifyContent: "center", alignItems: "center" }}>
                            <View
                                // onPress={() => this.setState({ catogery: true })}
                                style={{
                                    shadowColor: "#000",
                                    shadowOffset: {
                                        width: 0,
                                        height: 1,
                                    },
                                    shadowOpacity: 0.22,
                                    shadowRadius: 2.22,
                                    borderRadius: 5,
                                    elevation: 0,
                                    justifyContent: "center",
                                    alignItems: "center", width: "80%", height: 40,
                                    flexDirection: "row",
                                }}>

                                {/* charactor btn */}
                                {charactorBtn[charactor]}

                            </View>
                            <TouchableOpacity
                                onPress={() => this.props.navigation.navigate("Service", { profession: profession[charactor] })}
                                style={{
                                    marginTop: 5,
                                    shadowColor: "#000",
                                    shadowOffset: {
                                        width: 0,
                                        height: 1,
                                    },
                                    shadowOpacity: 0.22,
                                    shadowRadius: 2.22,
                                    borderRadius: 5,
                                    elevation: 0,
                                    width: "80%", height: 40, justifyContent: "center"
                                }}>
                                <Image
                                    resizeMode="contain"
                                    style={{ width: "100%", }}
                                    source={require("../../assets/Book-Now-Button.png")}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    container: {
    },
})

function mapStateToProps(states) {
    return ({
        // USERDATA: states.root.USERDATA,
        serFrmDb: states.root.serFrmDb,

    })
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({
            // signInWithGoogle, login
        }, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(home);