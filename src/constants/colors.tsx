import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
const LightTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "white",
    text: "#101520",
    primary: "#0286FF",
    opacityText: '#858585',
  },
  images: {
    logo: require("../assets/logo.png"),
    ob1: require('../assets/onboarding1.png'),
    ob2: require('../assets/onboarding2.png'),
    ob3: require('../assets/onboarding3.png'),
    getStarted: require('../assets/get-started.png'),
    google: require('../assets/google.png'),
    person: require('../assets/person.png'),
    mail: require('../assets/email.png'),
    lock: require('../assets/lock.png'),
    eye: require('../assets/eyecross.png'),
    backMap: require('../assets/Back.png'),
    search: require('../assets/SearchBlack.png'),
    filter: require('../assets/filter.png'),


  },
};

const DarkTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "white",
    text: "#101520",
    primary: "#0286FF",
    opacityText: '#858585',
  },
  images: {
    logo: require("../assets/logo.png"),
    ob1: require('../assets/onboarding1.png'),
    ob2: require('../assets/onboarding2.png'),
    ob3: require('../assets/onboarding3.png'),
    getStarted: require('../assets/get-started.png'),
    google: require('../assets/google.png'),
    person: require('../assets/person.png'),
    mail: require('../assets/email.png'),
    lock: require('../assets/lock.png'),
    eye: require('../assets/eyecross.png'),
    backMap: require('../assets/Back.png'),
    search: require('../assets/SearchBlack.png'),
    filter: require('../assets/filter.png'),
  },
};
export { LightTheme, DarkTheme };
