import { View, Text } from 'react-native'
import React from 'react'
import { TouchableHighlight } from 'react-native-gesture-handler'

const Second = () => {
  return (
    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
      <TouchableHighlight>
        <Text>Second</Text>
      </TouchableHighlight>
    </View>
  )
}

export default Second