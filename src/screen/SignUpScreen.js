import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  StatusBar
} from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const SignUpScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
    <StatusBar backgroundColor="#FFFFFF" barStyle="dark-content" />
      {/* Title */}
      <Text style={styles.title}>Create an account</Text>

      {/* Subtitle */}
      <Text style={styles.subtitle}>
        Sign up to get started with all features
      </Text>

      {/* Full Name */}
      <Text style={styles.label}>Full Name</Text>
      <View style={styles.inputRow}>
        <TextInput
          style={styles.input}
          placeholder="Enter your full name"
          placeholderTextColor="#B3B3B3"
        />
      </View>

      {/* Email */}
      <Text style={styles.label}>Email</Text>
      <View style={styles.inputRow}>
        <TextInput
          style={styles.input}
          placeholder="Enter your email"
          placeholderTextColor="#B3B3B3"
          keyboardType="email-address"
        />
      </View>

      {/* Password */}
      <Text style={styles.label}>Password</Text>
      <View style={styles.inputRow}>
        <TextInput
          style={styles.input}
          placeholder="Create a password"
          placeholderTextColor="#B3B3B3"
          secureTextEntry={true}
        />
        <MaterialIcons name="visibility-off" size={22} color="#B3B3B3" />
      </View>

      {/* Confirm Password */}
      <Text style={styles.label}>Confirm Password</Text>
      <View style={styles.inputRow}>
        <TextInput
          style={styles.input}
          placeholder="Re-enter your password"
          placeholderTextColor="#B3B3B3"
          secureTextEntry={true}
        />
        <MaterialIcons name="visibility-off" size={22} color="#B3B3B3" />
      </View>

      {/* Create Account Button */}
      <TouchableOpacity  style={styles.createBtn}>
        <Text style={styles.createText}>Create Account</Text>
      </TouchableOpacity>

      {/* Already have account */}
      <View style={styles.loginRow}>
        <Text style={styles.loginText}>Already have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate("LoginScreen")}>
          <Text style={styles.loginLink}> Login</Text>
        </TouchableOpacity>
      </View>

    </SafeAreaView>
  );
};

export default SignUpScreen;


// ---------------------- STYLES ----------------------

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingTop: 20,
    paddingHorizontal: 20,
  },

  title: {
    fontSize: 26,
    fontWeight: "700",
    color: "#000",
    marginTop: 10,
  },

  subtitle: {
    fontSize: 15,
    color: "#9A9A9A",
    marginBottom: 30,
  },

  label: {
    fontSize: 15,
    color: "#000",
    fontWeight: "600",
    marginTop: 12,
    marginBottom: 8,
  },

  inputRow: {
    flexDirection: "row",
    alignItems: "center",
    height: 50,
    borderWidth: 1,
    borderColor: "#E5E5E5",
    borderRadius: 10,
    paddingHorizontal: 15,
  },

  input: {
    flex: 1,
    fontSize: 16,
    color: "#000",
  },

  createBtn: {
    backgroundColor: "#648DDB",
    paddingVertical: 15,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 30,
  },

  createText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "600",
  },

  loginRow: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },

  loginText: {
    color: "#999",
    fontSize: 14,
  },

  loginLink: {
    color: "#3578E5",
    fontSize: 14,
    fontWeight: "600",
  },
});
