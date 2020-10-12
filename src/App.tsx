import React from 'react';
import { View, Text, StatusBar } from 'react-native';

const App: React.FC = () => (
  <>
    <StatusBar barStyle="light-content" backgroundColor="#312e38" />
    <View style={{
      flex: 1, backgroundColor: '#312e38', justifyContent: 'center', alignItems: 'center',
    }}
    >
      <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 20 }}>GoBarber</Text>
    </View>
  </>
);

export default App;
