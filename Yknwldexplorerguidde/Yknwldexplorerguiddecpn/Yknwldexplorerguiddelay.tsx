import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const Yknwldexplorerguiddelay = ({
  children,
  bounces = true,
}: {
  children: React.ReactNode;
  scrollable?: boolean;
  bounces?: boolean;
}) => {
  return (
    <LinearGradient
      colors={['rgb(42, 29, 91)', 'rgb(7, 5, 19)']}
      style={styles.cozyrabtteacorneercontainer}>
      <ScrollView
        bounces={bounces}
        contentContainerStyle={styles.cozyrabtteacorneerscrollContent}
        showsVerticalScrollIndicator={false}>
        {children}
      </ScrollView>
    </LinearGradient>
  );
};

export default Yknwldexplorerguiddelay;

const styles = StyleSheet.create({
  cozyrabtteacorneercontainer: {
    flex: 1,
    backgroundColor: '#0F0C1D',
  },
  cozyrabtteacorneerscrollContent: {
    flexGrow: 1,
  },
  cozyrabtteacorneerflexFill: {
    flex: 1,
  },
});
