import { ScrollView, FlatList, View, Text, StyleSheet } from "react-native"
import Header from "../components/Header.js"
import { SafeAreaView } from "react-native-safe-area-context";
import PlanCard from "../components/PlanCard.js"

const plans = [
  {
    id: 1,
    name: "Free",
    price: "0",
    per: "month",
    features: ["5 designs / month", "Unlimited renders", "Basic support"],
    buttonText: "Start Free",
    recommended: false,
  },
  {
    id: 2,
    name: "Pro",
    price: "9.99",
    per: "month",
    yearly: "$80/year",
    features: [
      "Unlimited designs",
      "AR/VR Export",
      "Revit File Export",
      "Revit File Export",
      "Priority Support",
    ],
    buttonText: "Upgrade Now",
    recommended: true,
  },
  {
    id: 3,
    name: "Business",
    price: "29.99",
    per: "month",
    features: [
      "50 team members",
      "PDF Report Export",
      "BIM Export",
    ],
    buttonText: "Upgrade",
    recommended: false,
  },
];

const Subscrption = () => {
  return (
    <SafeAreaView style={styles.Subcontainer} >
      <Header />
      <View style={styles.topsection} >
        <Text style={styles.firsttext} >Find Your Perfect Plan</Text>
        <Text style={styles.secendtext} >Unlock Powerful AI design tools</Text>
      </View>
      <View style={styles.container}>
        <FlatList
          horizontal
          data={plans}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <PlanCard item={item} />}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 12 }}
        />
      </View>

      <View style={styles.subcard} >
        <Text> FAQ</Text>
        <Text>hello i am srijonchowdhury i am from ghatal paschim medinipur</Text>
      </View>

    </SafeAreaView>
  )
}
export default Subscrption


const styles = StyleSheet.create({
  Subcontainer: {
    flex: 1,
    backgroundColor: "#edeaeaff"
  },
  container: {
    marginTop: 10,
  },
  topsection: {
    marginVertical: 20,
    alignItems: "center",
    gap: 10
  },
  firsttext: {
    fontSize: 22,
    fontWeight: 600
  },
  secendtext: {
    fontSize: 18
  },
  subcard:{
    width:"90%",
    backgroundColor:"red",
    padding:10,
    margin:"auto"
  }
})