import { ActionSheetTool } from './components/action-sheet.tool';
import { AlertTool } from './components/alert.tool';
import { EncryptionTool } from './security/encryption.tool';
import { LoadingTool } from './components/loading.tool';
import { ModalTool } from './components/modal.tool';
import { NativeTool } from './plugins/native.tool';
import { removeEmptyProperties } from './objects/object.tool';
import { PopoverTool } from './components/popover.tool';
import { ToastTool } from './components/toast.tool';

export {
  ActionSheetTool,
  AlertTool,
  EncryptionTool,
  LoadingTool,
  ModalTool,
  PopoverTool,
  removeEmptyProperties,
  ToastTool
};

export const TOOLS = [
  ActionSheetTool,
  AlertTool,
  EncryptionTool,
  LoadingTool,
  ModalTool,
  NativeTool.getMocks(),
  PopoverTool,
  ToastTool
];
