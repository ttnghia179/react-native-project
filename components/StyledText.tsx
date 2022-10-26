/* eslint-disable import/prefer-default-export, react/destructuring-assignment */
import { Text, TextProps } from './Themed';

export function MonoText(props: TextProps) {
  return (
    <Text {...props} style={[props.style, { fontFamily: 'space-mono' }]} />
  );
}
