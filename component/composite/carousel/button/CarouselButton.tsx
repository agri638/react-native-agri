import React from "react";
import Icon from "react-native-vector-icons/MaterialIcons";
import {
  View,
  Pressable,
  StyleSheet,
  GestureResponderEvent,
} from "react-native";
import { CarouselButtonProps } from "../types";

const CarouselButton = ({
  direction,
  carouselSize,
  itemsLength,
  scrollX,
  slidesRef,
}: CarouselButtonProps) => {
  if (process.env.NODE_ENV !== "production") {
    console.log(`Re-rendering Carousel Button component`);
  }

  const onClickHandler = React.useCallback(
    (_amount: number) => {
      return (_event: GestureResponderEvent) => {
        // _value does exist on Animated.Value type

        // @ts-ignore
        let newValue = scrollX.current?._value + _amount;
        if (newValue < 0 || newValue >= itemsLength) {
          if (newValue < 0) newValue = itemsLength - 1;
          else newValue = 0;
        }
        scrollX.current?.setValue(newValue);
        slidesRef.current?.scrollToIndex({
          animated: true,
          index: newValue,
        });
      };
    },
    [length, scrollX, slidesRef]
  );

  return (
    <Pressable
      style={[
        styles.iconButton,
        { top: carouselSize / 2 - 15 },
        direction === "left" ? styles.left : styles.right,
      ]}
      onPress={onClickHandler(direction === "left" ? -1 : 1)}
    >
      <View>
        <Icon name={`arrow-${direction}`} size={26} />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  iconButton: {
    position: "absolute",
    width: 30,
    height: 30,
    borderRadius: 18,
    backgroundColor: "rgba(0, 0, 0, .05)",
    alignItems: "center",
    justifyContent: "center",
  },
  left: {
    left: 5,
  },
  right: {
    right: 5,
  },
});

export default CarouselButton;
