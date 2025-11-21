import { View, Text, Image, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Roomsection = () => {
    return (
        <SafeAreaView style={styles.container} >
            <View style={styles.semiconatiner} >
                <View>
                    <Image style={styles.img} source={require("../images/logoweb.png")} />
                </View>
                <View>
                    <Text style={styles.FirstText} >
                        RoomAI Designer
                    </Text>
                    <Text style={styles.Secendtext} >
                        Statements By Stellar Fumrsnings
                    </Text>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Roomsection;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ffffff",
        padding: 10
    },
    semiconatiner: {
        flexDirection: "row",
        alignItems: "center",
    },
    img: {
        height: 80,
        width: 80,
    },
    FirstText: {
        fontSize: 20,
    },
    Secendtext: {
        fontSize: 12,
        color: "#605e5eff"
    }

})