// HomePage.js
import React from "react";
import {
  StatusBar,
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/Header.js"

const previewImages = [
  {
    id: 1,
    uri: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg",
  },
  {
    id: 2,
    uri: "https://images.pexels.com/photos/1457841/pexels-photo-1457841.jpeg",
  },
  {
    id: 3,
    uri: "https://images.pexels.com/photos/37347/office-freelancer-computer-business-37347.jpeg",
  },
];

const features = [
  {
    id: 1,
    title: "Scan & Capture",
    description:
      "Use your smartphone to quickly map your room, capture walls and openings.",
    icon: "📷",
  },
  {
    id: 2,
    title: "Design & Customize",
    description:
      "Browse endless styles, materials and furniture. Let AI create magic.",
    icon: "🎨",
  },
  {
    id: 3,
    title: "Visualize & Live It",
    description:
      "Step inside your design with 3D previews or share with friends.",
    icon: "👓",
  },
  {
    id: 3,
    title: "Visualize & Live It",
    description:
      "Step inside your design with 3D previews or share with friends.",
    icon: "👓",
  },
];

const HomePage = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#F4F5F7" />
      <View style={styles.root}>
        <Header/>

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          {/* TITLE */}
          <View style={styles.titleBlock}>
            <Text style={styles.title}>
              Your Dream Space, Designed in Minutes
            </Text>
          </View>

          {/* PREVIEW CARDS */}
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.previewScroll}
          >
            {previewImages.map((item) => (
              <View style={styles.previewCard} key={item.id}>
                <Image source={{ uri: item.uri }} style={styles.previewImage} />
                <View style={styles.previewTag}>
                  <Text style={styles.previewTagText}>3D View</Text>
                </View>
              </View>
            ))}
          </ScrollView>

          {/* FEATURE CARDS */}
          <View style={styles.featureList}>
            {features.map((item) => (
              <View key={item.id} style={styles.featureCard}>
                <View style={styles.featureIconWrap}>
                  <Text style={styles.featureIcon}>{item.icon}</Text>
                </View>
                <View style={styles.featureTextWrap}>
                  <Text style={styles.featureTitle}>{item.title}</Text>
                  <Text style={styles.featureDescription}>
                    {item.description}
                  </Text>
                </View>
              </View>
            ))}
          </View>

          {/* BOTTOM BUTTON */}
          <TouchableOpacity style={styles.ctaButton}>
            <Text style={styles.ctaText}>Start Designing Your Space</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#4159a3ff",
  },
  root: {
    flex: 1,
    backgroundColor: "#e6e7e8ff",
  },

  scrollContent: {
    paddingHorizontal: 16,
    paddingBottom: 30,
  },

  // TITLE
  titleBlock: {
    marginTop: 10,
    marginBottom: 14,
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    color: "#1A1D21",
  },

  // PREVIEW
  previewScroll: {
    marginBottom: 18,
  },
  previewCard: {
    width: 140,
    height: 90,
    borderRadius: 14,
    overflow: "hidden",
    marginRight: 12,
    backgroundColor: "#ccc",
  },
  previewImage: {
    width: "100%",
    height: "100%",
  },
  previewTag: {
    position: "absolute",
    bottom: 8,
    left: 8,
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 10,
    backgroundColor: "rgba(0,0,0,0.55)",
  },
  previewTagText: {
    fontSize: 11,
    color: "#fff",
  },

  // FEATURES
  featureList: {
    marginTop: 6,
    gap: 12,
  },
  featureCard: {
    flexDirection: "row",
    padding: 16,
    borderRadius: 12,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 3 },
    elevation: 3,
  },
  featureIconWrap: {
    width: 42,
    height: 42,
    borderRadius: 22,
    backgroundColor: "#F1F5FF",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 14,
  },
  featureIcon: {
    fontSize: 22,
  },
  featureTextWrap: {
    flex: 1,
  },
  featureTitle: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 4,
    color: "#1A1D21",
  },
  featureDescription: {
    fontSize: 13,
    lineHeight: 18,
    color: "#6C727F",
  },

  // CTA BUTTON
  ctaButton: {
    marginTop: 22,
    marginHorizontal: 20,
    paddingVertical: 14,
    borderRadius: 24,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#3A8DF5",
  },
  ctaText: {
    fontSize: 15,
    fontWeight: "600",
    color: "#FFFFFF",
  },
});

export default HomePage;
