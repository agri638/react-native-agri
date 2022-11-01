import React from "react";
import { FlatList } from "react-native";
const useResetCarousel = (slidesRef: React.RefObject<FlatList>) => {
  React.useEffect(() => {
    if (slidesRef.current) {
      slidesRef.current.scrollToIndex({ animated: false, index: 0 });
    }
  }, []);
};

export default useResetCarousel;
