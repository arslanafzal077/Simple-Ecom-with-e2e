import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: '#F4F4F4',
  },
  loadingView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0,0.7)',
    ...StyleSheet.absoluteFillObject,
  },
  itemImage: {
    width: '100%',
    height: '70%',
    resizeMode: 'cover',
    backgroundColor: 'grey',
    marginRight: 10,
  },
  pName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  flStyle: {
    marginHorizontal: 10,
  },
  pDetail: {
    flex: 1,
    marginVertical: 5,
    marginHorizontal: 10,
  },
  price: {
    marginVertical: 4,
  },
});
