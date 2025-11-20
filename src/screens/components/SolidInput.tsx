import React from "react";
import { Image, Pressable, SafeAreaView, ScrollView, StyleSheet, TextInput, View } from "react-native";
import { useTheme } from "@react-navigation/native";
import SolidText from "./SolidText";
import AppUtils from "../../utils/appUtils";
import { hp } from "../../utils/dimension";
import AppFonts from "../../constants/fonts";

interface SolidInputProps {
  viewStyle?: object;
  textInputStyle?: object;
  placeholder?: string;
  title?: string;
  titleStyle?: object;
  leftImg?: any;
  rightImg?: any;
  isSecure?: boolean;
  stylestitle?: any;
  onRightPress?: () => void;
}

const SolidInput: React.FC<SolidInputProps> = ({
  title,
  titleStyle,
  viewStyle,
  placeholder,
  textInputStyle,
  leftImg,
  rightImg,
  isSecure,
  onRightPress }) => {
  const { colors }: any = useTheme();
  const styles = style(colors)
  return (
    <View style={[styles.mainContainer, viewStyle]}>
      {title && (
        <SolidText
          maxFontSizeMultiplier={1.6}
          style={[styles.titlestyles, titleStyle]}
        >
          {title}
        </SolidText>
      )}
      <View style={styles.inputContainer}>
        {leftImg && <Image source={leftImg} style={[styles.imgStyle, { marginRight: 8 }]} />}
        <TextInput
          secureTextEntry={isSecure}
          placeholderTextColor={colors.opacityText || '#858585'}
          placeholder={placeholder}
          style={[styles.textInput, textInputStyle]} />
        {rightImg && <Pressable style={{ alignSelf: 'center' }} onPress={onRightPress}>
          <Image source={rightImg} style={[styles.imgStyle, { marginLeft: 8 }]} />
        </Pressable>}
      </View>
    </View>
  );
}

const style = (colors: any) => StyleSheet.create({
  mainContainer: {
    width: 340,
    alignSelf: 'center',
  },
  inputContainer: {
    width: '100%',
    height: 48,
    backgroundColor: '#F6F8FA',
    borderRadius: 50,
    overflow: 'hidden',
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  absolutePosition: {
    flex: 1, position: 'absolute', left: 0, right: 0, top: 0, bottom: 0
  },
  textInput: {
    flex: 1, color: colors.text,
    height: '100%',
    fontFamily: AppFonts.Regular,
    fontSize: AppUtils.fontSize(15),
  },
  imgStyle: {
    width: 24,
    height: 24,
    alignSelf: 'center',
  },
  titlestyles: {
    fontSize: AppUtils.fontSize(15),
    marginBottom: hp(1),
    fontFamily: AppFonts.SemiBold,
    color: colors?.text,
  }
});

export default SolidInput;
