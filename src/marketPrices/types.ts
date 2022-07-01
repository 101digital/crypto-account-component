import { ImageSourcePropType, ImageStyle, StyleProp, TextStyle, ViewStyle } from 'react-native';

export type MarketPriceComponentProps = {
  Root?: {
    style?: MarketPriceComponentStyles;
    props?: {
      onSearchingFinished: () => void;
    };
  };
};

export type MarketPriceComponentStyles = {
  container?: StyleProp<ViewStyle>;
  imageWrapper?: StyleProp<ViewStyle>;
  image?: StyleProp<ImageStyle>;
  header?: StyleProp<ViewStyle>;
  title?: StyleProp<TextStyle>;
  viewAllLabel?: StyleProp<TextStyle>;
  viewAllSection?: StyleProp<ViewStyle>;
  viewAllBtn?: StyleProp<ViewStyle>;
};

export type MarketPriceItem = {
  title: string;
  image?: ImageSourcePropType;
  imageUrl?: string;
  subtitle?: string;
  description?: string;
};
