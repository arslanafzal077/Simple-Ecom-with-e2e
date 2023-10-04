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
  itemView: {
    // flexDirection: 'row',
    alignItems: 'flex-start',
    margin: 10,
    borderRadius: 20,
    borderWidth: 1,
    overflow: 'hidden',
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  itemImage: {
    width: '100%',
    height: 140,
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
    marginBottom: 50,
  },
  pDetail: {
    flex: 1,
    marginVertical: 5,
    marginHorizontal: 10,
  },
  price: {
    marginVertical: 4,
  },
  btn: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: '#2986FF',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
  },
  btnTitle: {
    fontSize: 18,
    color: 'white',
  },
});
