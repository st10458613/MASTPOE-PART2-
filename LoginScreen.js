import { useState } from 'react';
import {View, StyleSheet, Button, TextInput} from 'react-native';

export default function LoginScreen({ navigation }) {
    
    const [Name, setName] = useState('');
  const [Surname, setSurname] = useState('');
  const [Number, setNumber] = useState('');
  const [Email, setEmail] = useState('');

    return (
        <View style={styles.container}>
            <TextInput placeholder="Name"
      onChangeText={newText => setName(newText)} style={styles.input}/>
      <TextInput placeholder="Surname"
      onChangeText={newText => setSurname(newText)} style={styles.input}/>
            <TextInput placeholder="Please enter Contact Number" onChangeText={newText => setNumber(newText)} style={styles.input}/>
            <TextInput placeholder="Please enter Email" onChangeText={newText => setEmail(newText)} style={styles.input}/>
            <Button title="Sign in" onPress={() => navigation.navigate('Menu')}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyCotent: 'center',
        alignItems: 'center',
        backgroundColor: '#00cc99',
    }
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 12,
        paddingHorizontal: 10,
        width: '80%',
        backgroundColor: 'white',
        borderRadius: 5,
    },
});