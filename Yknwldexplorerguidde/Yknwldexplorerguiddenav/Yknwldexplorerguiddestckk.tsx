import {createStackNavigator} from '@react-navigation/stack';

import Yknwldexplorerguidtab from '../../Yknwldexplorerguidtab.tsx';

import Yknwldexplorerguiddeonb from '../Yknwldexplorerguiddescrns/Yknwldexplorerguiddeonb.tsx';
import Yknwldexplorerguiddeloadr from '../Yknwldexplorerguiddecpn/Yknwldexplorerguiddeloadr.tsx';
import Yknwldexplorerguiddedtl from '../Yknwldexplorerguiddescrns/Yknwldexplorerguiddedtl.tsx';

const Stack = createStackNavigator();

const Yknwldexplorerguiddestckk = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="Yknwldexplorerguiddeloadr"
        component={Yknwldexplorerguiddeloadr}
      />
      <Stack.Screen
        name="Yknwldexplorerguiddeonb"
        component={Yknwldexplorerguiddeonb}
      />
      <Stack.Screen
        name="Yknwldexplorerguidtab"
        component={Yknwldexplorerguidtab}
      />
      <Stack.Screen
        name="Yknwldexplorerguiddedtl"
        component={Yknwldexplorerguiddedtl}
      />
    </Stack.Navigator>
  );
};

export default Yknwldexplorerguiddestckk;
