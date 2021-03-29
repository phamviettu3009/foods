import React from 'react';
import { Dimensions } from 'react-native';

export const IsLandScape = (callback) => {
    if (Dimensions.get('window').width >= Dimensions.get('window').height) {
        return callback(2)
    } else {
        return callback(1)
    }
}