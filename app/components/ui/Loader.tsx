import { View, Text, ActivityIndicator } from 'react-native'
import React, {FC} from 'react'

export const Loader:FC = () =>  {
  return <ActivityIndicator size='large' color='yellow'/>
}