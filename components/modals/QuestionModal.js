import { Modal } from "react-bootstrap";

export default function QuestionModal({ modal, hideModal, okBtn, cancelBtn }) {
	return (
		<Modal show={modal.isShow} onHide={hideModal} backdrop="static" keyboard={false} centered={modal.centered && true}>
			<Modal.Header closeButton>
				<Modal.Title>{modal.title}</Modal.Title>
			</Modal.Header>
			<Modal.Body>{modal.content}</Modal.Body>
			<Modal.Footer>
				<button className={okBtn.className} onClick={okBtn.okClick}>
					{okBtn.text}
				</button>
				<button className={cancelBtn.className} onClick={hideModal}>
					{cancelBtn.text}
				</button>
			</Modal.Footer>
		</Modal>
	);
}
