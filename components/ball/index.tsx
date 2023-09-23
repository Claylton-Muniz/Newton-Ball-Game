import React from 'react';
import { View } from 'react-native';
import { styles } from './styles'

type Props = {
  posY: number
}

export function Ball({ posY } : Props) {
  return(
    <View style={[styles.container, { bottom: posY }]}>
    </View>
  );
}
