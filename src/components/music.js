import React, { Component } from 'react';
import Sound from 'react-native-sound'
export default Click =
    new Sound('mouseclick.mp3', Sound.MAIN_BUNDLE, (error) => {
        if (error) {
            return;
        }
    })
// export  const  Starting = 
//     new Sound('start.mp3', Sound.MAIN_BUNDLE, (error) => {
//         if (error) {
//             return;
//         }
//         // loaded successfully
//     })

    
// export  const  Winning = 
//     new Sound('win.mp3', Sound.MAIN_BUNDLE, (error) => {
//         if (error) {
//             return;
//         }
//         // loaded successfully
//     })
    


//     export const  Background = 
//     new Sound('background.mp3', Sound.MAIN_BUNDLE, (error) => {
//         if (error) {
//             return;
//         }
//         // loaded successfully
//     })
