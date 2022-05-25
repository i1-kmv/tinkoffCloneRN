import { View, Text } from 'react-native'
import React, {FC} from 'react'
import tw from 'tailwind-rn'

export const Padding:FC<{style?:any}> = ({children, style = {}}) => {
  return (
    <View style={{...tw('px-4'), ...style}}>
       {children}
    </View>
  )
}