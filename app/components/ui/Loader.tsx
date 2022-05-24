import { View, Text, ActivityIndicator } from 'react-native'
import React, {FC} from 'react'

const Loader:FC = () =>  {
  return <ActivityIndicator size='large' color='yellow'/>
}