import React, { forwardRef } from 'react';
import { Image, View, Text, TouchableOpacity } from 'react-native';
import { SearchInput } from 'react-native-theme-component';
import { MarketPriceComponentProps } from './types';
import useMergeStyles from './styles';
import { ArrowRightIcon } from '../assets/index';

const MarketPricesComponent = forwardRef(({ Root }: MarketPriceComponentProps) => {
  const { style } = Root || {};

  const styles = useMergeStyles(style);
  const cryptoImg = require('../assets/images/listCrypto.png');

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Market Prices</Text>
        <View style={styles.viewAllSection}>
          <TouchableOpacity style={styles.viewAllSection} onPress={() => {}}>
            <Text style={styles.viewAllLabel}>All Markets</Text>
            <ArrowRightIcon width={12} height={15} />
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <SearchInput />
      </View>
      <View style={styles.imageWrapper}>
        <Image style={styles.image} source={cryptoImg} resizeMode={'stretch'} />
      </View>
    </View>
  );
});

export default MarketPricesComponent;
