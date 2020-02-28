export default (professionArr,serFrmDb) => {
    console.log(professionArr,serFrmDb,"dynamic")
        return new Promise(function (resolve, reject) {
            let profession = professionArr
            //ac Invertor Installation 
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
            console.log(profession,"professiondynamic")
            resolve(profession)
        })
}