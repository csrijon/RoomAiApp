
import { View,Text,Image,TouchableOpacity, StyleSheet } from "react-native"
const Header = () => {
    return (
        <View style={styles.header}>
            <View style={styles.headerLeft}>
                <View style={styles.logoCircle}>
                    <Image style={styles.img} source={require("../images/logoweb.png")} />
                </View>
                <View>
                    <Text style={styles.appName}>RoomAI Designer</Text>
                </View>
            </View>

            <TouchableOpacity style={styles.menuButton}>
                <View style={styles.menuLine} />
                <View style={styles.menuLine} />
                <View style={styles.menuLine} />
            </TouchableOpacity>
        </View>
    )
}
export default Header


const styles = StyleSheet.create({
      header: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor:"#ffffff"
  },
  headerLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  logoCircle: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "#E1F3FF",
    alignItems: "center",
    justifyContent: "center",
  },
  img:{
     width:50,
     height:50
  },
  logoText: {
    fontSize: 18,
  },
  appName: {
    fontSize: 16,
    fontWeight: "600",
    color: "#1A1D21",
  },
  menuButton: {
    width: 28,
    justifyContent: "space-between",
    alignItems: "flex-end",
    height: 20,
  },
  menuLine: {
    width: 22,
    height: 2,
    borderRadius: 2,
    backgroundColor: "#1A1D21",
  },
})