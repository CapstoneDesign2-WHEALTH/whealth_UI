import * as React from 'react';
import {Text, View, SafeAreaView, StyleSheet, Dimensions} from 'react-native';

import Carousel from 'react-native-snap-carousel';
import Styles from '../common/Styles';
import Colors from '../constants/Colors';

const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      carouselItems: [
        {
          title: 'Good',
          text: '우리 몸의 독소를 제거해 줍니다.',
        },
        {
          title: 'Good',
          text: '다이어트에 도움을 줍니다.',
        },
        {
          title: 'Good',
          text: '피부가 좋아집니다.',
        },
        {
          title: 'Good',
          text: '변비 증상을 완화할수 있습니다.',
        },
        {
          title: 'Good',
          text: '신장결석을 예방합니다.',
        },
        {
          title: 'Good',
          text: '부종을 해소하는데 도움을 줍니다.',
        },
        {
          title: 'Good',
          text: '신장결석을 예방합니다.',
        },
        {
          title: 'Good',
          text: '숙취 해소에 좋습니다.',
        },
        {
          title: 'Good',
          text: '피로를 감소시킵니다.',
        },
        {
          title: 'Good',
          text: '운동 효과를 높입니다.',
        },
      ],
    };
  }

  _renderItem({item, index}) {
    return (
      <View style={styles.infoText}>
        <Text style={{...Styles.boldText, fontSize: 17}}>{item.title}</Text>
        <View
          style={{
            ...styles.bar,
            backgroundColor: Colors.darkBlue,
          }}></View>
        <View
          style={{
            ...styles.bar,
            backgroundColor: Colors.lightBlue,
            left: 40,
            zIndex: -1,
          }}></View>
        <Text style={{...Styles.Text, fontSize: 13, marginTop: 50}}>
          {item.text}
        </Text>
      </View>
    );
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.carousel}>
          <Carousel
            layout={'default'}
            ref={ref => (this.carousel = ref)}
            data={this.state.carouselItems}
            sliderWidth={SCREEN_WIDTH / 1.9}
            itemWidth={SCREEN_WIDTH / 2}
            renderItem={this._renderItem}
            onSnapToItem={index => this.setState({activeIndex: index})}
            autoplay
            autoplayInterval={3000}
            loop
          />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.bg,
    fontFamily: 'Lato-Bold',
    position: 'relative',
  },
  carousel: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  infoText: {
    backgroundColor: Colors.white,
    borderRadius: 20,
    width: '85%',
    height: '100%',
    padding: 20,
    // marginLeft: 25,
    // marginRight: 25,
  },
  bar: {
    position: 'absolute',
    backgroundColor: '#B933F9',
    top: 60,
    left: 30,
    width: 10,
    height: 20,
    borderRadius: 4,
    transform: [{rotate: '90deg'}],
  },
});
