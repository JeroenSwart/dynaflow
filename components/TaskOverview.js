// // Example code
// import React from 'react';
// import getPokemonTest from '../util/ApiCalls';
// import randomPokemon from '../util/pokemonArray';

// import { Card } from 'react-native-paper';
// import { Text, Image } from 'react-native';

// export default class taskOverview extends React.Component {
//     constructor() {
//         super();
//         this.state = {
//             loading: true,
//             // pokemonMeta: {}
//         }
//     }

//     async componentDidMount() {
//         this.getPokemon();
//     }

//     async getPokemon() {
//       this.setState({
//             pokemonMeta: await getPokemonTest(randomPokemon()),
//             loading: false
//       })
//     }

//     render() {
//         if(this.state.loading) {
//             return (
//               <Card>
//                 <Text>
//                   Hi from React - Now loading
//                 </Text>
//               </Card>
//             )
//         }
//         else {
//             return (
//               <Card>
//                 <Image
//                   style={{width: 100, height: 100}}
//                   source={{uri: this.state.pokemonMeta.spriteUrl}}
//                 />
//                 <Text
//                   style={{fontSize: 24, fontWeight: 'bold'}}
//                 > {this.state.pokemonMeta.name} </Text>
//                 <Text
//                   style={{
//                     fontSize: 18,
//                     fontWeight: 'bold',
//                     backgroundColor: this.state.pokemonMeta.textColor}}
//                 > {this.state.pokemonMeta.type} </Text>
//               </Card>
//             )
//         }
        
//     }
// }
 
// My code
import React from 'react';
import {StyleSheet, Text } from 'react-native';
import getTaskAPI from '../util/ApiCalls';

export default class TaskOverview extends React.Component {
  constructor() {
    super();
    this.state = {
        loading: true,
        title:''
    }
}
async componentDidMount() {
  // Get document title from Dynalist API
  this.setState({
    title: await getTaskAPI(),
    loading: false
  })
}


  render() {
    if(this.state.loading) {
      return(
            <Text style={styles.container}>Loading.....</Text>
            )
    } else {
    return (
              <Text style={styles.container}>{this.state.title}</Text>
          )
        }
      }
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#200',
  },
});
