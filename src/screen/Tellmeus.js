import { SafeAreaView } from "react-native-safe-area-context"
import { View, Text, Image, StyleSheet, ScrollView } from "react-native"
import RoomSelector from "../components/RoomSelector.js"
import StyleSelector from "../components/StyleSelector.js"
const Tellmeus = () => {
    return (
        <SafeAreaView style={styles.mainsection} >
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.firstsection}  >
                    <Image style={styles.images} source={require("../images/logoweb.png")} />
                    <Text style={styles.firsttext} >RoomAI Designer</Text>
                    <Text>Statements By Srijon Chowdhury</Text>
                    <Text style={styles.thirdtext} >Tell Us Your Vision</Text>
                </View>
                <Text style={styles.roomtext}  >What type a room is this ? </Text>
                <RoomSelector />
                <StyleSelector />
            </ScrollView>
        </SafeAreaView>
    )
}

export default Tellmeus

const styles = StyleSheet.create({
    mainsection: {
        flex: 1,
        backgroundColor: "#ffffff",
        paddingHorizontal: 15
    },
    firstsection: {
        flexDirection: "column",
        alignItems: "center",
        gap: 5
    },
    images: {
        width: 80,
        height: 80,
        resizeMode: "contain"
    },
    firsttext: {
        fontSize: 20,
    },
    thirdtext: {
        fontSize: 22,
        fontWeight: "500"
    },
    roomtext: {
        marginTop: 30
    },

})