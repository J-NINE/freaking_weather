import React from "react";
import {View, Text, StyleSheet, StatusBar} from "react-native";
import PropTypes from "prop-types";
//icon family 골라서 {}안에 넣기
import {MaterialCommunityIcons} from "@expo/vector-icons";
import { LinearGradient } from 'expo-linear-gradient';

const weatherOptions = {
    Thunderstorm: {
        iconName:"weather-lightning",
        gradient: ["#bdc3c7", "#2c3e50"]
    },
    Drizzle: {
        iconName:"weather-rainy",
        gradient: ["#bdc3c7", "#2c3e50"]
    },
    Rain: {
        iconName:"weather-pouring",
        gradient: ["#bdc3c7", "#2c3e50"]
    },
    Snow: {
        iconName:"weather-snowy-heavy",
        gradient: ["#bdc3c7", "#2c3e50"]
    },
    Atmosphere: {
        iconName:"weather-cloudy-alert",
        gradient: ["#bdc3c7", "#2c3e50"]
    },
    Clear: {
        iconName:"weather-sunny",
        gradient: ["#fceabb", "#f8b500"]
    },
    Clouds: {
        iconName:"cloud-outline",
        gradient: ["#2c3e50", "#bdc3c7"],
        title:"Cloudy",
        subtitle:"so many clouds"
    },
    Haze: {
        iconName:"weather-hazy",
        gradient: ["#bdc3c7", "#2c3e50"]
    },
    Mist: {
        iconName:"weather-partly-rainy",
        gradient: ["#bdc3c7", "#2c3e50"]
    },
    Dust: {
        iconName:"weather-hail",
        gradient: ["#bdc3c7", "#2c3e50"]
    },
}

//stateless component
export default function Weather({temp, condition, country, city}){
return (
    //LinearGradient 자체로 View이므로 container View 지우고 Linear에 style 부여해도 됨
    //StatusBar default:"dark-content", 시간이랑 배터리 테마임
    
    <LinearGradient colors={weatherOptions[condition].gradient} style={styles.container}>
        <StatusBar barStyle="light-content"/>   
        <View style={styles.halfContainer}>
            <MaterialCommunityIcons size={96} color="white" 
            name={weatherOptions[condition].iconName} />
            <Text style={styles.subtitle}> {country}, {city} </Text>
            <Text style={styles.temperature}>{temp}°</Text>
        </View>

        <View style={{...styles.halfContainer, ...styles.textContainer}}>
            <Text style={styles.title}>{weatherOptions[condition].title}</Text>
            <Text style={styles.subtitle}>{weatherOptions[condition].subtitle}</Text>
            
        </View>
    </LinearGradient>
    ); 
}

//temp, condition
Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes.oneOf([
        "Thunderstorm",
        "Drizzle",
        "Rain",
        "Snow",
        "Atmosphere",
        "Clear",
        "Clouds",
        "Haze",
        "Mist",
        "Dust"
    ]).isRequired,
   
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"     
    },
    temperature:{
        fontSize:42,
        color: "white"
    },
    halfContainer:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    title:{
        color:"white",
        fontWeight:"600",
        fontSize: 30,
        marginBottom: 10
    },
    subtitle:{
        color:"white",
        fontWeight:"600",
        fontSize: 20
    },
    textContainer:{
        paddingHorizontal:20,
        alignItems:"flex-start"
    }
});
