import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222'
  },
  area: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#333'
  },
  control: {
    flexDirection: 'row',
    margin: 15
  },
  controlText: {
    color: '#fff'
  },
  controlButton: {
    flex: 1,
    marginLeft: 50,
    backgroundColor: '#0954A5',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    color: '#fff'
  }
});
