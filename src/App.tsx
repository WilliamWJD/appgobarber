import React from 'react';
import { View, Text } from 'react-native';

const App: React.FC = () => (
  <View style={{
    flex: 1, backgroundColor: '#7159c1', justifyContent: 'center', alignItems: 'center',
  }}
  >
    <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 20 }}>GoBarber</Text>
  </View>
);

export default App;
