import * as React from 'react';
import {
  PanGestureHandler as PanGestureHandlerNative,
  PanGestureHandlerProperties,
} from 'react-native-gesture-handler';
import GestureHandlerRefContext from '../utils/GestureHandlerRefContext';

export function PanGestureHandler(props: PanGestureHandlerProperties) {
  const gestureRef = React.useRef<PanGestureHandlerNative>(null);
  const [simultaneousHandlers, setSimultaneousHandlers] = React.useState<
    React.Ref<any> | React.Ref<any>[]
  >();

  const hitSlop: any = props.hitSlop;
  const isModal =
    hitSlop?.top !== undefined ||
    hitSlop?.bottom !== undefined ||
    hitSlop?.vertical !== undefined;

  if (isModal) {
    return (
      <GestureHandlerRefContext.Provider
        value={{ handler: gestureRef, setSimultaneousHandlers }}
      >
        <PanGestureHandlerNative
          {...props}
          ref={gestureRef}
          simultaneousHandlers={simultaneousHandlers}
        />
      </GestureHandlerRefContext.Provider>
    );
  } else {
    return (
      <PanGestureHandlerNative
        {...props}
        ref={gestureRef}
        simultaneousHandlers={simultaneousHandlers}
      />
    );
  }
}

export {
  GestureHandlerRootView,
  PanGestureHandlerGestureEvent,
  State as GestureState,
} from 'react-native-gesture-handler';
