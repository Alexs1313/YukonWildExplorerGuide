// loader

import {Animated, Image, ScrollView, StyleSheet, View} from 'react-native';
import React, {useEffect} from 'react';

import {useNavigation} from '@react-navigation/native';
import WebView from 'react-native-webview';

const av = new Animated.Value(0);
av.addListener(() => {
  return;
});

const htmlloader = ` <!DOCTYPE html>
    <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
          body {
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background: transparent;
          }

          .loading-wave {
            width: 120px;
            height: 60px;
            display: flex;
            justify-content: center;
            align-items: flex-end;
          }

          .loading-bar {
            width: 10px;
            height: 10px;
            margin: 0 3px;
            background-color: #3498db;
            border-radius: 5px;
            animation: loading-wave-animation 1s ease-in-out infinite;
          }

          .loading-bar:nth-child(2) {
            animation-delay: 0.1s;
          }

          .loading-bar:nth-child(3) {
            animation-delay: 0.2s;
          }

          .loading-bar:nth-child(4) {
            animation-delay: 0.3s;
          }

          @keyframes loading-wave-animation {
            0% { height: 10px; }
            50% { height: 40px; }
            100% { height: 10px; }
          }
        </style>
      </head>

      <body>
        <div class="loading-wave">
          <div class="loading-bar"></div>
          <div class="loading-bar"></div>
          <div class="loading-bar"></div>
          <div class="loading-bar"></div>
        </div>
      </body>
    </html>`;

const Yknwldexplorerguiddeloadr = () => {
  const yknwldexplorerguidNavigation = useNavigation();

  useEffect(() => {
    const yknwldexplorerguidTimer = setTimeout(() => {
      yknwldexplorerguidNavigation.navigate('Yknwldexplorerguiddeonb' as never);
    }, 6000);

    return () => {
      clearTimeout(yknwldexplorerguidTimer);
    };
  }, [yknwldexplorerguidNavigation]);

  return (
    <View style={styles.yknwldexplorerguidimageBg}>
      <ScrollView
        contentContainerStyle={styles.yknwldexplorerguidscrollContent}
        showsVerticalScrollIndicator={false}>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Image
            source={require('../../assets/i/yknwldexployklo.png')}
            style={{
              width: 220,
              height: 220,
              borderRadius: 60,
              borderWidth: 1,
              borderColor: '#C9A84C80',
              top: 20,
            }}
          />
        </View>
        <View style={styles.yknwldexplorerguidbottomWrap}>
          <WebView
            source={{html: htmlloader}}
            scrollEnabled={false}
            originWhitelist={['*']}
            style={{width: 260, height: 70, backgroundColor: 'transparent'}}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Yknwldexplorerguiddeloadr;

const styles = StyleSheet.create({
  yknwldexplorerguidimageBg: {
    flex: 1,
    backgroundColor: '#0F0C1D',
  },
  yknwldexplorerguidscrollContent: {
    flexGrow: 1,
  },
  yknwldexplorerguidbottomWrap: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 40,
  },
  yknwldexplorerguidbottomText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontFamily: 'DmSans-Regular',
    marginTop: 11,
    textAlign: 'center',
  },
  yknwldexplorerguidcenterFill: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    height: 550,
  },
  yknwldexplorerguidwebviewDock: {
    alignItems: 'center',
    flex: 1,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingBottom: 20,
  },
  yknwldexplorerguidwebview: {
    backgroundColor: 'transparent',
    width: 260,
    height: 150,
  },
});
