import type React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { Cross2Icon } from '@radix-ui/react-icons';

interface ModalProps {
  trigger: React.ReactNode;
  children: React.ReactNode;
  title: string;
}

export default function Modal({ trigger, children, title }: ModalProps) {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        {trigger}
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/60 backdrop-blur-sm" />
        <Dialog.Content className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-900 p-6 rounded-lg shadow-lg w-[90%] max-w-2xl max-h-[85vh] overflow-auto">
          <div className="flex items-center justify-between mb-6">
            <Dialog.Title className="text-xl font-semibold text-white">{title}</Dialog.Title>
            <Dialog.Close className="text-gray-400 hover:text-white">
              <Cross2Icon />
            </Dialog.Close>
          </div>
          <div className="text-white">
            {children}
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
} 