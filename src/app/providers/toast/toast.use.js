import { useContext } from 'react';
import { ToastFunctionContext, ToastStateContext } from './toast.context';

export const useToast = () => useContext(ToastFunctionContext);

export const useToastState = () => useContext(ToastStateContext);
