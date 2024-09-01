import { useState } from "react";
import { GestureResponderEvent } from "react-native";

const useSwipeDown = (threshold = 20) => {
  const [startY, setStartY] = useState(0);
  const [isSwipingDown, setIsSwipingDown] = useState(false);
  const [isInnerScrollViewActive, setIsInnerScrollViewActive] = useState(false);

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

  const handleInnerScrollViewTouchStart = () => {
    setIsInnerScrollViewActive(true);
  };

  const handleInnerScrollViewTouchEnd = () => {
    setIsInnerScrollViewActive(false);
  };

  const handleOuterTouchStart = (event: GestureResponderEvent) => {
    if (!isInnerScrollViewActive) {
      handleTouchStart(event);
    }
  };

  const handleOuterTouchMove = (event: GestureResponderEvent) => {
    if (!isInnerScrollViewActive) {
      handleTouchMove(event);
    }
  };

  const handleOuterTouchEnd = () => {
    if (!isInnerScrollViewActive) {
      return handleTouchEnd();
    }
    return false;
  };

  return {
    handleOuterTouchStart,
    handleOuterTouchMove,
    handleOuterTouchEnd,
    handleInnerScrollViewTouchStart,
    handleInnerScrollViewTouchEnd,
    isSwipingDown,
    isInnerScrollViewActive,
  };
};

export default useSwipeDown;
