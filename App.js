import * as React from 'react';
import {View, Text, Button} from 'react-native'

const App = () => {
  const persons = ["Ram", "Shyam", "hari","gopal"]
  return (
    <View>
     {
       persons.map((value,index) => {
         return (
            <Text style={{color:(index % 2 == 0?'red':'green')}}>Person is {value} and index is {index}</Text>
         )
       })
     }
      <Button 
          title="Click Me"
          color="#841584"
       />
    </View>
  )
}

export default App