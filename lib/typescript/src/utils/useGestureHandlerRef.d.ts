/// <reference types="react-native-gesture-handler" />
import * as React from 'react';
export default function useGestureHandlerRef(): {
    handler: React.Ref<import("react-native-gesture-handler").PanGestureHandler>;
    setSimultaneousHandlers: (handlers?: ((instance: any) => void) | React.RefObject<any> | React.Ref<any>[] | null | undefined) => void;
} | null;
