import { View, Text, Image, StyleSheet, FlatList, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../components/Button.js";
import RoomCard from "../components/RoomCard.js"


const data = [
    {
        id: 1,
        title: "Living Room Project",
        date1: "2023-10-26",
        date2: "2023-09-10-25",
        image: require("../images/appbed.webp"),
    },
    {
        id: 2,
        title: "Bedroom Design",
        date1: "2023-09-30",
        date2: "2023-08-28",
        image: require("../images/appbed.webp"),
    },
    {
        id: 2,
        title: "Bedroom Design",
        date1: "2023-09-30",
        date2: "2023-08-28",
        image: require("../images/appbed.webp"),
    },
    {
        id: 2,
        title: "Bedroom Design",
        date1: "2023-09-30",
        date2: "2023-08-28",
        image: require("../images/appbed.webp"),
    },
    {
        id: 2,
        title: "Bedroom Design",
        date1: "2023-09-30",
        date2: "2023-08-28",
        image: require("../images/appbed.webp"),
    },
    {
        id: 2,
        title: "Bedroom Design",
        date1: "2023-09-30",
        date2: "2023-08-28",
        image: require("../images/appbed.webp"),
    },
];


const Roomsection = () => {
    return (
        <SafeAreaView style={styles.container} >
            <ScrollView>
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
                <View style={styles.middlecontainer} >
                    <Text style={styles.thirdtext} >My Room Scenes</Text>
                </View>
                <View style={styles.buttoncontainer} >
                    <Button name="sofa" date="Room Type" />
                    <Button name="calendar" date="Date" />
                </View>
                {/* <View> */}
                <FlatList
                    data={data}
                    keyExtractor={item => item.id.toString()}
                    renderItem={({ item }) => (
                        <RoomCard
                            title={item.title}
                            date1={item.date1}
                            date2={item.date2}
                            image={item.image}
                        />
                    )}
                    contentContainerStyle={{
                        paddingHorizontal: 10,
                        paddingBottom: 20,
                    }}
                />
            </ScrollView>
            {/* </View> */}
        </SafeAreaView>
    )
}

export default Roomsection;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ffffff",
    },
    semiconatiner: {
        flexDirection: "row",
        alignItems: "center",
        padding: 10
    },
    img: {
        height: 80,
        width: 80,
    },
    FirstText: {
        fontSize: 20,
        fontWeight: "600",
    },
    Secendtext: {
        fontSize: 12,
        color: "#605e5eff"
    },
    middlecontainer: {
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 8
    },
    thirdtext: {
        fontSize: 16,
        fontWeight: "600"
    },
    buttoncontainer: {
        flexDirection: "row",
        justifyContent: "center",
        marginTop: 30,
        gap: 10
    }

})