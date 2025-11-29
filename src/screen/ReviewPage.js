import { SafeAreaView } from "react-native-safe-area-context"
import { View, Image, Text, StyleSheet } from "react-native"

const ReviewPage = () => {
    return (
        <SafeAreaView style={styles.reviewsection}  >
            <View style={styles.reviewheader} >
                <Image source={require("../images/logoweb.png")} style={{ width: 60, height: 60 }} />
                <View>
                    <Text>Room AI Designer</Text>
                    <Text>Statements By Srijonchowdhury</Text>
                </View>
            </View>
        </SafeAreaView>
    )

}

export default ReviewPage

const styles = StyleSheet.create({
    reviewsection: {
        flex: 1,
        backgroundColor: "#ffffff",
        paddingVertical: 10,
        paddingHorizontal: 15
    },
    reviewheader: {
        flexDirection: "row",
        alignItems: "center"
    }
})