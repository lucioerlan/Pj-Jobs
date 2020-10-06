import Reactotron from 'reactotron-react-native';

if (__DEV__) {
    const tron = Reactotron
        .configure({ host: '172.17.12.170' })
        .useReactNative()
        .connect();

    tron.clear();

    console.tron = tron;
}