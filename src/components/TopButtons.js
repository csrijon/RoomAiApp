import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const TopButtons=() => {
  return (
    <View style={styles.topButtons}>
      <TouchableOpacity style={styles.topBtn}>
        <Text style={styles.topBtnText}>360° Panorama</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.topBtn}>
        <Text style={styles.topBtnText}>AR Overlay</Text>
      </TouchableOpacity>
    </View>
  );
}
export default TopButtons;

const styles = StyleSheet.create({
  topButtons: {
    flexDirection: "row",
    justifyContent:"center",
    gap: 10,
    marginTop: 20,
  },
  topBtn: {
    backgroundColor: "#EDEDED",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
  },
  topBtnText: {
    fontSize: 14,
    fontWeight: "600",
  },
});
