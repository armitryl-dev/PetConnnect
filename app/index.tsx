import { Redirect } from 'expo-router';
import React from 'react';
import { Text, View } from 'react-native';

export default function HomePage() {
  return (
    <Redirect href={'./login/'} />
  );
}