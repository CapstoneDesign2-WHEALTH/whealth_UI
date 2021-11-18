import React from 'react';
import {LineChart} from 'react-native-svg-charts';
import * as shape from 'd3-shape';
import {Circle, G, Line, Rect, Text} from 'react-native-svg';
import Colors from '../constants/Colors';

class ExtrasExample extends React.PureComponent {
  render() {
    const data = [
      100, 200, 200, 200, 200, 400, 400, 800, 800, 1200, 1500, 1800, 1900, 2000,
      2100,
    ];

    const HorizontalLine = ({y}) => (
      <Line
        key={'zero-axis'}
        x1={'0%'}
        x2={'100%'}
        // y1={y(50)}
        // y2={y(50)}
        y1={'0%'}
        y2={'0%'}
        stroke={Colors.black}
        strokeDasharray={[4, 8]}
        strokeWidth={2}
      />
    );

    const Tooltip = ({x, y}) => (
      <G
        x={x(5) - 75 / 2}
        key={'tooltip'}
        onPress={() => console.log('tooltip clicked')}>
        <G y={50}>
          <Rect
            height={40}
            width={75}
            stroke={'grey'}
            fill={'white'}
            ry={10}
            rx={10}
          />
          <Text
            x={75 / 2}
            dy={20}
            alignmentBaseline={'middle'}
            textAnchor={'middle'}
            stroke={Colors.darkPurple}>
            {`${data[5]}ml`}
          </Text>
        </G>
        <G x={75 / 2}>
          <Line y1={50 + 40} y2={y(data[5])} stroke={'grey'} strokeWidth={2} />
          <Circle
            cy={y(data[5])}
            r={6}
            stroke={'rgb(134, 65, 244)'}
            strokeWidth={2}
            fill={'white'}
          />
        </G>
      </G>
    );

    return (
      <LineChart
        style={{height: '100%', width: '100%'}}
        data={data}
        svg={{
          stroke: Colors.darkPurple,
          strokeWidth: 3,
        }}
        contentInset={{top: 10, bottom: 10}}
        curve={shape.curveBasisOpen}>
        <HorizontalLine />
        <Tooltip />
      </LineChart>
    );
  }
}

export default ExtrasExample;
