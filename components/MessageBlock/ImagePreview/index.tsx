import React, { FC, memo } from "react";
import { View, Image, StyleSheet } from "react-native";

interface IImagePreview {
  imgPreviewUrl: string | null;
}

const ImagePreview: FC<IImagePreview> = ({ imgPreviewUrl }) => {
  return (
    <View style={styles.contentBlock}>
      <View style={styles.emptySpace} />
      {imgPreviewUrl && (
        <Image
          style={styles.imagePreview}
          source={{ uri: imgPreviewUrl }}
          resizeMode="contain"
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  contentBlock: {
    flexDirection: "row",
    marginRight: 5,
    maxHeight: 150,
    overflow: "hidden",
  },
  emptySpace: {
    flex: 1,
  },
  imagePreview: {
    flex: 5,
    height: 200,
    borderRadius: 5,
    marginTop: 5,
    maxWidth: "80%",
    marginRight: 10,
  },
});

export default memo(ImagePreview);
