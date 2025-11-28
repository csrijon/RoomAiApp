import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList } from "react-native";


const previewImages = [
    { id: 1, img: require("../images/firstroom1.jpg") },
    { id: 2, img: require("../images/secend2.jpg") },
    { id: 3, img: require("../images/3rd3.jpg") },
];

const Roomsence = () => {
    return (
        <View style={styles.containers}>

            {/* Logo */}
            <Image
                source={require("../images/logoweb.png")}
                style={styles.logo}
            />

            {/* Title */}
            <Text style={styles.title}>RoomAI Designer</Text>
            <Text style={styles.subtitle}>Statements By Stellar Furnishings</Text>

            {/* AI Label */}
            <View style={styles.aiTag}>
                <Text style={styles.aiTagText}>AI-Powered{"\n"}Interior Design</Text>
            </View>

            {/* Preview Cards */}
            <FlatList
                horizontal
                data={previewImages}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <Image source={item.img} style={styles.previewCard} />
                )}
                contentContainerStyle={{ paddingHorizontal: 10 }}
                showsHorizontalScrollIndicator={false}
                style={{ marginTop: 20 }}
            />

            {/* Tap To Explore */}
            <Text style={styles.tapText}>Tap to Explore</Text>

            {/* Features Row */}
            <View style={styles.featuresRow}>
                <View style={styles.featureItem}>
                    <Image
                        source={require("../images/logoweb.png")}
                        style={styles.featureIcon}
                    />
                    <Text style={styles.featureLabel}>Scan Your Room</Text>
                </View>

                <View style={styles.featureItem}>
                    {/* <Image
                        source={require("./assets/customize.png")}
                        style={styles.featureIcon}
                    /> */}
                    <Text style={styles.featureLabel}>Customize{"\n"}Style & Furniture</Text>
                </View>

                <View style={styles.featureItem}>
                    {/* <Image
                        source={require("./assets/ar.png")}
                        style={styles.featureIcon}
                    /> */}
                    <Text style={styles.featureLabel}>Visualize in{"\n"}3D & AR</Text>
                </View>
            </View>

            {/* CTA Button */}
            <TouchableOpacity style={styles.ctaButton}>
                <Text style={styles.ctaText}>Start Designing Your Space</Text>
            </TouchableOpacity>

            {/* Footer */}
            <Text style={styles.footer}>Developed by Digital Edge 360 Consultancy</Text>
        </View>
    )
}

export default Roomsence

const styles = StyleSheet.create({
  containers: {
    flex: 1,
    // paddingTop: 60,
    alignItems: "center",
    backgroundColor: "#ffffff",
  },

  logo: {
    width: 70,
    height: 70,
    resizeMode: "contain",
    // marginBottom: 10,
  },

  title: {
    fontSize: 26,
    fontWeight: "700",
    color: "#222",
  },

  subtitle: {
    fontSize: 12,
    color: "#777",
    marginBottom: 10,
    zIndex:111111
  },

  aiTag: {
    backgroundColor: "#eaeef2",
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 10,
    position: "absolute",
    top: 130,
    right: 0,
  },

  aiTagText: {
    fontSize: 12,
    textAlign: "center",
    color: "#444",
    fontWeight: "500",
  },

  previewCard: {
    width: 150,
    height: 260,
    borderRadius: 16,
    marginRight: 12,
    marginTop:30
  },

  tapText: {
    marginTop: 25,
    fontSize: 16,
    color: "#777",
  },

  featuresRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "88%",
    marginTop: 80,
  },

  featureItem: {
    alignItems: "center",
  },

  featureIcon: {
    width: 55,
    height: 55,
    marginBottom: 8,
  },

  featureLabel: {
    fontSize: 13,
    color: "#444",
    textAlign: "center",
  },

  ctaButton: {
    marginTop: 30,
    backgroundColor: "#4da6ff",
    width: "85%",
    paddingVertical: 14,
    borderRadius: 25,
    alignItems: "center",
  },

  ctaText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },

  footer: {
    position: "absolute",
    bottom: 20,
    color: "#999",
    fontSize: 12,
  },
});
