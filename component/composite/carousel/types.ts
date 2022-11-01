import React from "react";
import { Animated, FlatList } from "react-native";
import { MediaList, MediaType } from "./../../types";

export type CarouselButtonProps = {
  itemsLength: number;
  carouselSize: number;
  direction: "left" | "right";
  scrollX: React.RefObject<Animated.Value>;
  slidesRef: React.RefObject<FlatList<MediaType>>;
};

export interface CarouselProps {
  media: MediaList;

  paginator?: boolean;
}

export interface CarouselPaginatorProps {
  paginator?: boolean;
  media: MediaList;
  scrollX: React.RefObject<Animated.Value>;
  slidesRef: React.RefObject<FlatList<MediaType>>;
}
