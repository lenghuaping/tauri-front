import { useSafeState, } from 'ahooks'
import { useCallback } from 'react'

const useModalControl = () => {
	const [isOpen, setIsOpen] = useSafeState(false);

	const open = useCallback((callback?: () => void) => {
		setIsOpen(true);
		callback?.();
	}, []);

	const close = useCallback((callback?: () => void) => {
		setIsOpen(false);
		callback?.();
	}, []);

	return {
		isOpen,
		open,
		close
	}
}

export default useModalControl
