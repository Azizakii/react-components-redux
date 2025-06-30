import { createPortal } from "react-dom";
import { useRef, useEffect } from "react";
import "./Modal.module.scss";

interface ModalProps {
	children: React.ReactNode;
	open: boolean;
}

export default function Modal({ children, open }: ModalProps) {
	const dialog = useRef<HTMLDialogElement>(null);

	useEffect(() => {
		if (dialog.current) {
			if (open) {
				dialog.current.showModal();
			} else {
				dialog.current.close();
			}
		}
	}, [open]);

	const modalRoot = document.getElementById("modal");

	if (!modalRoot) {
		console.error("Modal root element not found!");
		return null;
	}

	return createPortal(<dialog ref={dialog}>{children}</dialog>, modalRoot);
}
