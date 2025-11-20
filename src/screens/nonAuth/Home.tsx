import { useTheme } from "@react-navigation/native";
import React from "react";
import { StyleSheet } from "react-native";
import SolidView from "../components/SolidView";
import SolidText from "../components/SolidText";
import { setAuth } from "../../redux/Reducers/userData";
import { useDispatch } from "react-redux";

interface HomeProps {
  navigation: any;
}

const Home: React.FC<HomeProps> = ({ navigation }) => {
  const { colors, images } = useTheme();
  const dispatch = useDispatch();
  return (
    <SolidView
      viewStyle={styles.parent}
      view={
        <SolidText
         onPress={() => dispatch(setAuth(false))}
         variant='bold' style={{alignSelf:'center'}}>
          {"Welcome Home\nSolidAppMaker"}
        </SolidText>
      }
    />
  );
}

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    justifyContent: "center",
    backgroundColor:'black',
  }
});

export default Home;
