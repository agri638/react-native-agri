import {
  Animated,
  View,
  Image,
  StyleSheet,
  Pressable,
  GestureResponderEvent,
} from "react-native";
import { MediaType } from "./../../../types";
import { CarouselPaginatorProps } from "../types";

const CarouselPaginator = ({
  scrollX,
  slidesRef,
  media,
  paginator = true,
}: CarouselPaginatorProps) => {
  const onPressHandler = (id: number | string) => {
    return (_event: GestureResponderEvent) => {
      const _ind = media.findIndex((el: MediaType) => el.id === id);
      //   @ts-ignore
      if (_ind !== -1 && _ind !== scrollX.current?._value) {
        scrollX.current?.setValue(_ind);
        slidesRef.current?.scrollToIndex({ animated: true, index: _ind });
      }
    };
  };
  console.log("rendering carousel paginator");
  if (!paginator) return null;

  return (
    <View style={{ paddingVertical: 12 }}>
      {/* @ts-ignore for gap property to use in web */}
      <View style={{ flexDirection: "row", gap: 8 }}>
        {media.map((el: MediaType, ind: number) => {
          const inputRange = [ind - 1, ind, ind + 1];
          const borderColor = scrollX.current?.interpolate({
            inputRange,
            outputRange: ["#000", "#f57c00", "#000"],
            extrapolate: "clamp",
          });
          const shadowRadius = scrollX.current?.interpolate({
            inputRange,
            outputRange: [0, 5, 0],
            extrapolate: "clamp",
          });
          return (
            <Pressable key={el.id} onPress={onPressHandler(el.id)}>
              <Animated.View
                style={[
                  styles.element,
                  {
                    borderColor,
                    shadowRadius,
                  },
                ]}
              >
                <Image source={{ uri: el.url }} style={styles.image} />
              </Animated.View>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  element: {
    width: 65,
    height: 80,
    borderWidth: 1,
    borderRadius: 2,
    // @ts-ignore for web only
    cursor: "pointer",
    shadowColor: "#f57c00",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
});

export default CarouselPaginator;
