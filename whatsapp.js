/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';


import {Platform, StyleSheet,Button, Text, TextInput,Image, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import OneSignal from 'react-native-onesignal'; // Import package from node modules


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


export default class  Appss extends Component {
  constructor(properties) {
  super(properties);
  OneSignal.init("ce5fa3b1-0396-4555-9177-93ee40845e54");

  OneSignal.addEventListener('received', this.onReceived);
  OneSignal.addEventListener('opened', this.onOpened);
  OneSignal.addEventListener('ids', this.onIds);
  OneSignal.configure(); 	// triggers the ids event
}

componentWillUnmount() {
  OneSignal.removeEventListener('received', this.onReceived);
  OneSignal.removeEventListener('opened', this.onOpened);
  OneSignal.removeEventListener('ids', this.onIds);
}

onReceived(notification) {
  console.log("Notification received: ", notification);
}

onOpened(openResult) {
  console.log('Message: ', openResult.notification.payload.body);
  console.log('Data: ', openResult.notification.payload.additionalData);
  console.log('isActive: ', openResult.notification.isAppInFocus);
  console.log('openResult: ', openResult);
}

onIds(device) {
  console.log('Device info: ', device);
}

  render() {
    return (
      <View style={styles.container}>
        <View style = {styles.topbar}>
          
          <View style ={{flex:1,backgroundColor:'green',height: 40,
     elevation:10,fontSize:35,alignItems:"center",Color:'white',
    flexDirection:'row',}}>
      
           <View style ={{flex:1,backgroundColor:'green',height: 40,elevation:10,
     fontSize:35,alignItems:"center",Color:'whites',
    flexDirection:'row',}}>
      
      <Text>
  <Text style={{fontStyle: "normal",fontSize:20,color:'white'}}>whatsaap
  </Text>
  </Text>
             </View>
             
             <View style ={{backgroundColor:'green',height: 40,
     elevation:10,fontSize:25,alignItems:"center",flexDirection:'row',Color:'#ffffff',
    }}>
            <Icon name='search' size={25} color='white' />
             
              <Icon name='add-circle-outline' size={25} color='white'/>
              
              
              </View>
              
           </View>
           <View style = {styles.body}>

     
<View>

<View style ={{backgroundColor:'white',height: 55,
     fontSize:80,alignItems:"center",flexDirection:'row',
    }}>
      
               <View style ={{flex:1,backgroundColor:'green',height: 50,
    justifyContent:'space-around',elevation:10,alignItems:"center", textColor:'#ffffff',
    flexDirection:'row',}}>
           <Icon name='camera-alt' size={25} color='white'/>
           
             
           
            
           <Text>
  <Text style={{fontStyle: "normal",fontSize:20 ,color:'white'}}>chats
  </Text>
  </Text>
  <Text>
  <Text style={{fontStyle: "normal",fontSize:20,color:'white'}}>status
  </Text>
  </Text>
  <Text>
  <Text style={{fontStyle: "normal",fontSize:20,color:'white'}}>calls
  </Text>
  </Text>
              </View>
              
      
</View>


<View style ={{backgroundColor:'white',height: 70,marginTop:10,
     fontSize:80,alignItems:"center",flexDirection:'row',
    }}>
      <View>
  
  <Image
          source={{uri: 'https://media2.picsearch.com/is?mW0dl15GsYG-AmsmDo6xBD3Ed4w7b3tnfyB6-Wrq6QA&height=341'}}
          style={{width: 40, height: 40,borderRadius:16}}
        />
        </View>
  
  <View>
    <View>
    <Text>
  <Text style={{fontStyle: "normal",fontSize:25}}>Gnits ECE-B
  </Text>
  </Text>

    </View>
    <View>
    <Text>
  <Text style={{fontStyle: "italic"}}>Anvitha: haha yess
  </Text>
  </Text>
  </View>
</View>
 </View>
<View>



<View style ={{backgroundColor:'white',height: 70,marginTop:10,
     fontSize:80,alignItems:"center",flexDirection:'row',
    }}>
      <View>
  
  <Image
          source={{uri:'https://media2.picsearch.com/is?zYzdt021HKcJGMPCw4r-PJk3HJO1iem-XQDQdmXnFg4&height=246'}}
          style={{width: 40, height: 40,borderRadius:16}}
        />
        </View>
  
  <View>
    <View>
    <Text>
  <Text style={{fontStyle: "normal",fontSize:25}}>priyanka
  </Text>
  </Text>

    </View>
    <View>
    <Text>
  <Text style={{fontStyle: "italic"}}>hey
  </Text>
  </Text>
  </View>
  


  </View>



  </View>




  </View>
  <View style ={{backgroundColor:'white',height: 70,
     fontSize:80,alignItems:"center",flexDirection:'row',
    }}>
      <View>
  
  <Image
          source={{uri: 'https://cdn.pixabay.com/photo/2019/06/15/03/13/sunset-4274662__340.jpg'}}
          style={{width: 40, height: 40,borderRadius:16}}
        />
        </View>
  
  <View>
    <View>
    <Text>
  <Text style={{fontStyle: "normal",fontSize:25}}>Reejas
  </Text>
  </Text>

    </View>
    <View>
    <Text>
  <Text style={{fontStyle: "italic"}}>missed video call
  </Text>
  </Text>
  </View>



  </View>




  </View><View style ={{backgroundColor:'white',height: 70,marginTop:10,
     fontSize:100,alignItems:"center",flexDirection:'row',
    }}>
      <View>
  
  <Image
          source={{uri: 'https://media2.picsearch.com/is?uPuGDgHSLUc6iFhNi7p-gCnPIweWjXyiWOQdcP-KpkE&height=256'}}
          style={{width: 40, height: 40,borderRadius:16}}
        />
        </View>
  
  <View>
    <View>
    <Text>
  <Text style={{fontStyle: "normal",fontSize:25}}>Bus
  </Text>
  </Text>

    </View>
    <View>
    <Text>
  <Text style={{fontStyle: "italic"}}>Sreeja: ok
  </Text>
  </Text>
  </View>



  </View>




  </View><View style ={{backgroundColor:'white',height: 50,marginTop:10,
     fontSize:55,alignItems:"center",flexDirection:'row',
    }}>
      <View>
  
  <Image
          source={{uri: 'https://media2.picsearch.com/is?mW0dl15GsYG-AmsmDo6xBD3Ed4w7b3tnfyB6-Wrq6QA&height=341'}}
          style={{width: 40, height: 40,borderRadius:16}}
        />
        </View>
  
  <View>
    <View>
    <Text>
  <Text style={{fontStyle: "normal",fontSize:25}}>Artista coordinators
  </Text>
  </Text>

    </View>
    <View>
    <Text>
  <Text style={{fontStyle: "italic"}}>okay
  </Text>
  </Text>
  </View>



  </View>




  </View><View style ={{backgroundColor:'white',height: 50,marginTop:10,
     fontSize:55,alignItems:"center",flexDirection:'row',
    }}>
      <View>
  
  <Image
          source={{uri: 'https://media1.picsearch.com/is?fFrziyh-CyDCoIHTDg-hWqqfmUfQI7Uv1P5qdYPW0oM&height=341'}}
          style={{width: 40, height: 40,borderRadius:16}}
        />
        </View>
  
  <View>
    <View>
    <Text>
  <Text style={{fontStyle: "normal",fontSize:25}}>Emi
  </Text>
  </Text>

    </View>
    <View>
    <Text>
  <Text style={{fontStyle: "italic"}}>Mmmm
  </Text>
  </Text>
  </View>



  </View>




  </View><View style ={{backgroundColor:'white',height: 50,marginTop:10,
     fontSize:55,alignItems:"center",flexDirection:'row',
    }}>
      <View>
  
  <Image
          source={{uri: 'https://media4.picsearch.com/is?37gEBy4GXi0cLgH1Lkqn7n_9Y6pqAs5TexN0vSXcz88&height=227'}}
          style={{width: 40, height: 40,borderRadius:16}}
        />
        </View>
  
  <View>
    <View>
    <Text>
  <Text style={{fontStyle: "normal",fontSize:25}}>sreeja bus member
  </Text>
  </Text>

    </View>
    <View>
    <Text>
  <Text style={{fontStyle: "italic"}}>ok
  </Text>
  </Text>
  </View>



  </View>




  </View>
  <View style ={{backgroundColor:'white',height: 50,marginTop:10,
     fontSize:55,alignItems:"center",flexDirection:'row',
    }}>
      <View>
  
  <Image
          source={{uri: 'https://media2.picsearch.com/is?itX3JMLLueLwxNZAx4VrIN3L9ASbAD2VN4VPb5ZtOb4&height=255'}}
          style={{width: 40, height: 40,borderRadius:16}}
        />
        </View>
  
  <View>
    <View>
    <Text>
  <Text style={{fontStyle: "normal",fontSize:25}}>path decoration
  </Text>
  </Text>

    </View>
    <View>
    <Text>
  <Text style={{fontStyle: "italic"}}>ok akka
  </Text>
  </Text>
  </View>



  </View>




  </View><View style ={{backgroundColor:'white',height: 50,marginTop:10,
     fontSize:55,alignItems:"center",flexDirection:'row',
    }}>
      <View>
  
  <Image
          source={{uri: 'https://cdn.pixabay.com/photo/2019/06/15/03/13/sunset-4274662__340.jpg'}}
          style={{width: 40, height: 40,borderRadius:16}}
        />
        </View>
  
  <View>
    <View>
    <Text>
  <Text style={{fontStyle: "normal",fontSize:25}}>Eli
  </Text>
  </Text>

    </View>
    <View>
    <Text>
  <Text style={{fontStyle: "italic"}}>haha
  </Text>
  </Text>
  </View>



  </View>




  </View>
  <View style ={{backgroundColor:'white',height: 50,marginTop:10,
     fontSize:55,alignItems:"center",flexDirection:'row',
    }}>
      <View>
  
  <Image
          source={{uri: 'https://cdn.pixabay.com/photo/2019/06/15/03/13/sunset-4274662__340.jpg'}}
          style={{width: 50, height: 40,borderRadius:16}}
        />
        </View>
  
  <View>
    <View>
    <Text>
  <Text style={{fontStyle: "normal"}}>Gnits ECE-B
  </Text>
  </Text>

    </View>
    <View>
    <Text>
  <Text style={{fontStyle: "italic"}}>Anvitha: haha yess
  </Text>
  </Text>
  </View>



  </View>




  </View>

  

  


        </View>
        </View>
      </View>
      </View>
      
      
      
        
          
      
      
      
    );
  }
}

const styles=StyleSheet.create({
  container:{
    flex:1,
backgroundColor:"#fff"
},
topbar: {
  height: 50,
},

body: {
  flex:1, 
}, 
bottombar:{
  height:50,
  fontSize:25,
},
});