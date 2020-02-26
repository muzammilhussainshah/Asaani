import React, { Component } from 'react';
import Sound from 'react-native-sound'
export default Click =
    new Sound('mouseclick.mp3', Sound.MAIN_BUNDLE, (error) => {
        if (error) {
            console.log('failed to load the sound', error);
            return;
        }
        // loaded successfully
        console.log('duration in seconds: ' + Click.getDuration() + 'number of channels: ' + Click.getNumberOfChannels());
    })



    
export  const  Starting = 
    new Sound('start.mp3', Sound.MAIN_BUNDLE, (error) => {
        if (error) {
            console.log('failed to load the sound', error);
            return;
        }
        // loaded successfully
        console.log('duration in seconds: ' + Click.getDuration() + 'number of channels: ' + Click.getNumberOfChannels());
    })

    
export  const  Winning = 
    new Sound('win.mp3', Sound.MAIN_BUNDLE, (error) => {
        if (error) {
            console.log('failed to load the sound', error);
            return;
        }
        // loaded successfully
        console.log('duration in seconds: ' + Click.getDuration() + 'number of channels: ' + Click.getNumberOfChannels());
    })
    


    export const  Background = 
    new Sound('background.mp3', Sound.MAIN_BUNDLE, (error) => {
        if (error) {
            console.log('failed to load the sound', error);
            return;
        }
        // loaded successfully
        console.log('duration in seconds: ' + Click.getDuration() + 'number of channels: ' + Click.getNumberOfChannels());
    })
