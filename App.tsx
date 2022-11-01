import { View, Text, StyleSheet } from "react-native";
import { Button } from "react-native-paper";
import { Carousel } from "./component";
import { MacbookAirM2 } from "./dump-data";
import useFontLoader from "./hooks/useFontLoader";

export default function App() {
  const { fontLoaded, onLayoutRootView } = useFontLoader("InterTight");
  const product = MacbookAirM2;

  if (!fontLoaded) return null;

  return (
    // <PaperProvider>
    <View
      style={[styles.container, styles.productDetailPage]}
      onLayout={onLayoutRootView}
    >
      <Carousel media={product.media} />
      <View style={{ flex: 1 }}>
        <Text style={[styles.heading, styles.mediumFont]}>{product.name}</Text>
        <Text style={[{ fontSize: 32, lineHeight: 36 }, styles.mediumFont]}>
          <Text style={{ marginRight: 4 }}>{product.currency}</Text>
          <Text>{product.price}</Text>
        </Text>

        {/* @ts-ignore */}
        <View style={{ flexDirection: "row", gap: 8 }}>
          <Button
            icon={"card"}
            mode="contained"
            onPress={() => console.log("buy now")}
          >
            Buy now
          </Button>
          <Button
            icon={"cart"}
            mode="outlined"
            onPress={() => console.log("Add to cart")}
          >
            Add to cart
          </Button>
        </View>
      </View>
    </View>
    // </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    paddingVertical: 16,
    overflow: "hidden",
  },

  productDetailPage: {
    flexDirection: "row",
    gap: 16,
  },

  mediumFont: {
    fontFamily: "InterTight500",
  },

  heading: {
    display: "flex",
    fontSize: 24,
    lineHeight: 28,
  },
});
