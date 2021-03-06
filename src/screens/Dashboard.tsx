import React, {useCallback, useState} from 'react';
import { View, useWindowDimensions } from 'react-native';
import {useData, useTheme, useTranslation} from '../hooks/';
import {Block, Button, Image, Input, Product, Text} from '../components/';

import Home from './Home';
import Profile from './Profile';

import { TabView, SceneMap } from 'react-native-tab-view';

const Dashboard = () => {
  const {t} = useTranslation();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'chat', title: 'CHAT' },
    { key: 'group', title: 'GROUP' },
    { key: 'status', title: 'STATUS' },
    { key: 'calls', title: 'CALLS' },
    { key: 'profile', title: 'TOOLS' },
  ]);

  const renderScene = SceneMap({
    chat: Home,
    group: Home,
    status: Home,
    calls: Home,
    profile: Profile,
  });

  const layout = useWindowDimensions();
  return (
        <TabView
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={{ width: layout.width }}
            />

  );
};

export default Dashboard;
