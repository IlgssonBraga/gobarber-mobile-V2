import React from 'react';
import { StatusBar, View } from 'react-native';

const App: React.FC = () => {
    return (
        <>
            <StatusBar barStyle="light-content" backgroundColor="#312e38" />
            <View style={{ flex: 1, backgroundColor: '#312e38' }} />
        </>
    );
};

export default App;