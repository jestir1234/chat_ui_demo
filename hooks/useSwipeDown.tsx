import { useState } from "react";
import { GestureResponderEvent } from "react-native";

const useSwipeDown = (threshold = 20) => {
  const [startY, setStartY] = useState(0);
  const [isSwipingDown, setIsSwipingDown] = useState(false);

  const handleTouchStart = (event: GestureResponderEvent) => {
    setStartY(event.nativeEvent.pageY);
  };

  const handleTouchMove = (event: GestureResponderEvent) => {
    const currentY = event.nativeEvent.pageY;

    if (currentY > startY + threshold) {
      setIsSwipingDown(true);
    } else {
      setIsSwipingDown(false);
    }
  };

  const handleTouchEnd = () => {
    const swipeDetected = isSwipingDown;
    setIsSwipingDown(false);
    return swipeDetected;
  };

  return {
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
    isSwipingDown,
  };
};

export default useSwipeDown;
