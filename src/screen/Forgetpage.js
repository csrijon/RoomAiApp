import { SafeAreaView,Text,Input,TouchableOpacity } from "react-native-safe-area-context";


const Forgetpage = () => {
    return(
      <SafeAreaView>
        <Text>Forgot Password</Text>
        <Text>Please enter your email to reset the Password</Text>
        <Text>Your Email</Text>
        <Input placeholder="Enter your email" />
        <TouchableOpacity>
            <Text>Reset Password</Text>
        </TouchableOpacity>
      </SafeAreaView>
    )
}

export default Forgetpage;