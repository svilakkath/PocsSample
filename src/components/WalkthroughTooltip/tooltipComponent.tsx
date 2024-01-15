import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const TooltipComponent = ({
  isFirstStep,
  isLastStep,
  handleNext,
  handlePrev,
  handleStop,
  currentStep,
  order
  
}: any) => (
  <View style={styles.container}>
    <View style={styles.header}>
      <View style={styles.exclamation}>
        <Icon name='exclamation' size={15} color={"#fff"} />
      </View>
      <Text style={{  }}>{currentStep.text[0]}</Text>
      <TouchableOpacity style={{}} onPress={handleStop}>
        <Icon name='close' size={20} color={"#000"} />
      </TouchableOpacity>
    </View>

    <Text style={styles.headingText}>{currentStep.text[1]}</Text>

    <View style={styles.footbar}>
        <View style={{}}><Text>{`${currentStep.order}/2`}</Text></View>
      <TouchableOpacity onPress={isLastStep ? handleStop : handleNext} style={styles.button}>
        <Text style={{ fontSize: 15, color: '#fff' }}>{isLastStep ? 'Got it' : 'Next'}</Text>
      </TouchableOpacity>
    </View>




  </View>
);

export default TooltipComponent;
const styles = StyleSheet.create({
  container: {
    // width: '100%', 
    borderRadius: 10, 
   
    // padding: 15,
    backgroundColor:'#8fbc8f',
    
  },
  header:{
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center',
     marginBottom: 10
  },
  exclamation:{
    backgroundColor: '#4682b4', borderRadius: 15, alignItems: 'center', width: 17
  },
  headingText:{
    fontSize: 15, color: '#000', fontWeight: '400'
  },
  button:{
    left: 0, 
    backgroundColor: 'tomato',
    alignItems: 'center',
    width: 80, 
    padding: 5, 
    borderRadius: 10, 
    marginTop: 13
  },
  footbar:{
    flexDirection:'row',alignItems:'center',justifyContent:'flex-end'
  }

})

//<TouchableOpacity onPress={handlePrev} disabled={isFirstStep}>
//<Text style={{ /* Your custom styles for the previous button */ }}>Previous</Text>
//</TouchableOpacity>

//<TouchableOpacity onPress={handleStop}>
//<Text style={{ /* Your custom styles for the stop button */ }}>Stop</Text>
//</TouchableOpacity>