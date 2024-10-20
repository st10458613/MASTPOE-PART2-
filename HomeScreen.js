import {View, Text, StyleSheet, Imagebackground, TouchableOpacity} from 'react-native';
import BackgroundImage from '../Images/chef (1).avif';


    export default function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Imagebackground source= {BackgroundImage}
            style={styles.background}>
                <View style={styles.header}>
                    <Text style={styles.title}>Christoffels' culinary</Text>
                    <Text style={styles.subtitle}>Finding an amazing private chef has never beem easier.</Text>
                </View>

                <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.logiText}>Login</Text>
                </TouchableOpacity>
            </Imagebackground>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
    },
    background: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    header: {
        marginTop: 100,
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#000',
    },
    subtitle: {
        fontSize: 16,
        color: '#333',
        marginTop: 10,
    }
    loginButton: {
        backgroundcolor: '#ff5733',
        padding: 15,
        marginBorrom: 50,
        borderRadius: 25,
        alignItems: 'center',
        alignSelf: 'center',
        width: '80%',
    },
    logiText: {
        color: '#fff',
        fontSize: 18,
        fontWeight:'bold',
    },

});

