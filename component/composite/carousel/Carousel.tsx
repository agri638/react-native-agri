import React from "react";
import { CarouselProps } from "./types";
import { View, Image, StyleSheet, FlatList, Animated } from "react-native";
import CarouselButton from "./button/CarouselButton";
import useResetCarousel from "./../../../hooks/useResetCarousel";
import CarouselPaginator from "./paginator/CarouselPaginator";
import { MediaType } from "./../../types";

function Carousel({ media, paginator = true }: CarouselProps) {
  const scrollX = React.useRef<Animated.Value>(new Animated.Value(0));
  const slidesRef = React.useRef<FlatList<MediaType>>(null as any);
  const size = 550;

  console.log("rendering carousell");

  useResetCarousel(slidesRef);

  return (
    <View style={[styles.container]}>
      <View
        style={[
          styles.carouselUpper,
          {
            minWidth: size,
            maxWidth: size,
          },
        ]}
      >
        <FlatList
          data={media}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <CarouselItem item={item} size={size} />}
          scrollEnabled={false}
          ref={slidesRef}
        />
        <CarouselButton
          scrollX={scrollX}
          itemsLength={media.length}
          carouselSize={size}
          direction="left"
          slidesRef={slidesRef}
        />
        <CarouselButton
          scrollX={scrollX}
          itemsLength={media.length}
          carouselSize={size}
          direction="right"
          slidesRef={slidesRef}
        />
      </View>
      <CarouselPaginator
        media={media}
        scrollX={scrollX}
        slidesRef={slidesRef}
        paginator={paginator}
      />
    </View>
  );
}

const CarouselItem = React.memo(({ item, size }: any) => (
  <View
    style={{
      minWidth: size,
      maxWidth: size,
      minHeight: size,
      maxHeight: size,
    }}
  >
    <Image source={{ uri: item.url }} style={styles.images} />
  </View>
));

const styles = StyleSheet.create({
  container: {
    zIndex: 2,
  },
  carouselUpper: {
    position: "relative",
    overflow: "hidden",
    borderRadius: 4,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowRadius: 10,
  },

  images: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
});

export default Carousel;
