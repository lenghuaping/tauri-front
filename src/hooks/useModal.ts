import { useSafeState } from 'ahooks';

interface IModalConfig {
  isOpen: boolean;
  id?: number;
  /**
   * 用于自定义参数
   */
  extra?: any;
}

interface IModalControlOption<ExtraType> {
  callback?: () => void;
  id?: number;
  /**
   * 用于自定义参数
   */
  extra?: ExtraType;
}

const useModal = <T = any>() => {
  const [modalConfig, setModalConfig] = useSafeState<IModalConfig>({
    id: undefined,
    isOpen: false,
  });

  const open = (options?: IModalControlOption<T>) => {
    if (typeof options?.callback === 'function') {
      options?.callback?.();
    }
    setModalConfig({ isOpen: true, id: options?.id, extra: options?.extra });
  };

  const close = (options?: IModalControlOption<T>) => {
    if (typeof options?.callback === 'function') {
      options?.callback?.();
    }
    setModalConfig({ isOpen: false, id: undefined, extra: options?.extra });
  };

  return {
    open,
    close,
    isOpen: modalConfig.isOpen,
    id: modalConfig.id,
    extra: modalConfig.extra,
  };
};

export default useModal;
