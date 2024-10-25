import { RootState } from '@/app/store';

export const selectOperation = ({ operation }: RootState) => operation;

export const selectOperationId = ({ operation }: RootState) => operation.id;
