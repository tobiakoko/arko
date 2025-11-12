import Modal from './Modal';

interface TermsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const TermsModal: React.FC<TermsModalProps> = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Terms & Conditions">
      <div className="modal-section">
        <h3>1. Acceptance of Terms</h3>
        <p>
          By accessing and using the services provided by Arko Media Labs, you agree to be bound by these Terms and Conditions.
          If you do not agree to these terms, please do not use our services.
        </p>
      </div>

      <div className="modal-section">
        <h3>2. Services</h3>
        <p>
          Arko Media Labs provides digital media services including but not limited to web development, content creation,
          digital strategy, and creative production. We reserve the right to modify or discontinue services at any time.
        </p>
      </div>

      <div className="modal-section">
        <h3>3. Intellectual Property</h3>
        <p>
          All content, designs, and materials created by Arko Media Labs remain our intellectual property until full payment
          is received. Upon payment, rights are transferred to the client as specified in the project agreement.
        </p>
      </div>

      <div className="modal-section">
        <h3>4. Client Responsibilities</h3>
        <p>
          Clients are responsible for providing accurate information, timely feedback, and necessary materials for project completion.
          Delays caused by client inaction may result in timeline adjustments.
        </p>
      </div>

      <div className="modal-section">
        <h3>5. Payment Terms</h3>
        <p>
          Payment terms are specified in individual project agreements. Late payments may incur additional fees.
          All fees are non-refundable unless otherwise stated in writing.
        </p>
      </div>

      <div className="modal-section">
        <h3>6. Confidentiality</h3>
        <p>
          We maintain strict confidentiality regarding all client information and project details. We expect clients to
          respect the confidentiality of our business processes and methodologies.
        </p>
      </div>

      <div className="modal-section">
        <h3>7. Limitation of Liability</h3>
        <p>
          Arko Media Labs is not liable for any indirect, incidental, or consequential damages arising from the use of our services.
          Our total liability shall not exceed the amount paid for the specific service in question.
        </p>
      </div>

      <div className="modal-section">
        <h3>8. Changes to Terms</h3>
        <p>
          We reserve the right to modify these terms at any time. Continued use of our services after changes constitutes
          acceptance of the modified terms.
        </p>
      </div>

      <div className="modal-section">
        <p className="last-updated">Last updated: November 2025</p>
      </div>
    </Modal>
  );
};

export default TermsModal;
