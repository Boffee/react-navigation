import * as React from 'react';

export default React.createContext<{
  handler: React.Ref<import('react-native-gesture-handler').PanGestureHandler>;
  setSimultaneousHandlers: (
    handlers?: React.Ref<any> | React.Ref<any>[]
  ) => void;
} | null>(null);
