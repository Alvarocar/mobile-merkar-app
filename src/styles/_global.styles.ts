import React from 'react'
import { Dimensions } from 'react-native'

export const dimensions = {
  fullHeight: Dimensions.get('window').height,
  fullWidth: Dimensions.get('window').width
}
  
export const colors  = {
  primary: '#E0B678',
  secondary: '#176368',
  tertiary: '#991E69',
  white: '#FFFFFF',
  red: '#C11919',
  blue: '#1166AA',
  grey: '#969696',
  black: '#212121',

}

export const padding = {
  sm: 10,
  md: 20,
  lg: 30,
  xl: 40
}

export const fonts = {
  sm: 12,
  md: 18,
  lg: 28,
  primary: 'Roboto'
}

export const borderRadius = {
  sm: 10,
  md: 20,
  lg: 50,
}

export const footer = {
  height: 60,
}

export const screenContainer: React.CSSProperties = {
  backgroundColor: colors.secondary,
  width: dimensions.fullWidth,
  height: dimensions.fullHeight,
}