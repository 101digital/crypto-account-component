import React, { forwardRef, useContext, useRef, useState } from 'react';
import { Image, Text, View } from 'react-native';
import { ThemeContext, Carousel, Button, CarouselRef } from 'react-native-theme-component';
import { OnboardingComponentProps, OnboardingItem } from './types';
import useMergeStyles from './styles';

const defaultOnboardingData: OnboardingItem[] = [
  {
    title: 'Welcome to your UnionDigital Bank Crypto Account',
    subtitle: 'Trade directly with PHP!',
    description:
      'Experience a more seamless crypto trading process with the UnionDigital Bank app where you can directly transfer PHP from your Pitaka Account to your My Crypto Account.',
    image: require('../assets/images/Onboarding01.png'),
  },
  {
    title: 'Welcome to your UnionDigital Bank Crypto Account',
    subtitle: 'Save money on fees!',
    description:
      'Crypto trading shouldn’t be expensive! Here in the UnionDigital Bank App, your cash-in and cash-out transactions are free.',
    image: require('../assets/images/Onboarding02.png'),
  },
  {
    title: 'Welcome to your UnionDigital Bank Crypto Account',
    subtitle: 'Secured Transactions',
    description:
      'All transactions made in the UnionDigital Bank app are safe and secure. We are a digital bank regulated and licensed by the Bangko Sentral ng Pilipinas as well as our exchange partner, PDAX.',
    image: require('../assets/images/Onboarding03.png'),
  },
];

const OnboardingComponent = forwardRef(({ Root }: OnboardingComponentProps) => {
  const { style, data = defaultOnboardingData, props } = Root || {};
  const { onFinished } = props || {};

  const styles = useMergeStyles(style);
  const { colors } = useContext(ThemeContext);

  const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0);
  const carouselRef = useRef<CarouselRef>();

  const isLastSlide = currentSlideIndex === data.length - 1;

  const renderOnboardingItem = (item: OnboardingItem) => (
    <View style={styles.sliderWrapper}>
      <Text style={styles.title}>{item.title}</Text>
      {(item.image || item.imageUrl) && (
        <View style={styles.imageWrapper}>
          <Image style={styles.image} source={item.image ? item.image : { uri: item.imageUrl }} />
        </View>
      )}
      {item.subtitle && <Text style={styles.subTitle}>{item.subtitle}</Text>}
      {item.description && <Text style={styles.description}>{item.description}</Text>}
    </View>
  );

  const onNext = () => {
    if (!isLastSlide) {
      carouselRef.current?.scrollToNextSlide();
    } else {
      onFinished && onFinished();
    }
  };

  return (
    <View style={styles.container}>
      <Carousel
        ref={carouselRef}
        onChangeIndex={setCurrentSlideIndex}
        swipeAble={true}
        data={data.map((item) => renderOnboardingItem(item))}
        style={{
          container: { backgroundColor: colors.primaryColor },
          selectedCircle: { backgroundColor: colors.secondaryColor },
          circle: { backgroundColor: colors.mainBackgroundColor },
        }}
      />
      <View>
        <Button
          label={isLastSlide ? 'Proceed to activate crypto account' : 'Next'}
          onPress={onNext}
          disabled={false}
          disableColor={colors.primaryButtonColor}
        />
      </View>
    </View>
  );
});

export default OnboardingComponent;
