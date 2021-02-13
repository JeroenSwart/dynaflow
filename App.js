import axios from 'axios';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import TaskOverview from './components/TaskOverview';

export default function App() {
  // getDynalistTask()
  return (
    <View style={styles.container}>
      <Text>DynaFlow</Text>
      <Text>your best friend for optimal productivity</Text>
      <TaskOverview />
      <StatusBar style="auto" />
    </View>
  ); 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#155',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


// function getDynalistTask(){
//     console.log('hello')
//     axios.post('https://dynalist.io/api/v1/doc/read', 
//        {
//        token: 'HJFjeUECg4DbuxSRclwYPjVyNpukDcBVfUDUKJTTkvQufgv2aw23pIeiu1klGGZBAi03hKrbUbLOabj3yafVaJzF5Qncgn7fCVXtasTBgTp7wZbnzy4XsDvi0UiZhNr2',
//        file_id: 'TLDWe8a5xrdvptlhqnkWQMUY'
//      })
//      .then((response) => {
//       // console.log("succes!")
//       console.log(response.data.title);

//      }, (error) => {
//       //  console.log(error);
//       console.log('Failure!')
//      });
// } 

// https://dynalist.io/api/v1/file/list