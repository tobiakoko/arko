import Modal from './Modal';

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PrivacyModal: React.FC<PrivacyModalProps> = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Privacy Policy">
      <div className="modal-section">
        <h3>1. Information We Collect</h3>
        <p>
          We collect information that you provide directly to us, including name, email address, phone number,
          and any other information you choose to provide when contacting us or using our services.
        </p>
      </div>

      <div className="modal-section">
        <h3>2. How We Use Your Information</h3>
        <p>
          We use the information we collect to:
        </p>
        <ul>
          <li>Provide, maintain, and improve our services</li>
          <li>Communicate with you about projects and services</li>
          <li>Send you technical notices and support messages</li>
          <li>Respond to your comments and questions</li>
          <li>Analyze usage patterns and optimize user experience</li>
        </ul>
      </div>

      <div className="modal-section">
        <h3>3. Information Sharing</h3>
        <p>
          We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
        </p>
        <ul>
          <li>With your consent</li>
          <li>To comply with legal obligations</li>
          <li>To protect our rights and safety</li>
          <li>With service providers who assist in our operations</li>
        </ul>
      </div>

      <div className="modal-section">
        <h3>4. Data Security</h3>
        <p>
          We implement appropriate technical and organizational measures to protect your personal information against
          unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the
          internet is 100% secure.
        </p>
      </div>

      <div className="modal-section">
        <h3>5. Cookies and Tracking</h3>
        <p>
          We may use cookies and similar tracking technologies to collect information about your browsing activities.
          You can control cookies through your browser settings.
        </p>
      </div>

      <div className="modal-section">
        <h3>6. Your Rights</h3>
        <p>
          You have the right to:
        </p>
        <ul>
          <li>Access your personal information</li>
          <li>Correct inaccurate information</li>
          <li>Request deletion of your information</li>
          <li>Object to processing of your information</li>
          <li>Withdraw consent at any time</li>
        </ul>
      </div>

      <div className="modal-section">
        <h3>7. Children's Privacy</h3>
        <p>
          Our services are not directed to children under 13. We do not knowingly collect personal information from children.
          If you believe we have collected information from a child, please contact us immediately.
        </p>
      </div>

      <div className="modal-section">
        <h3>8. Changes to Privacy Policy</h3>
        <p>
          We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new
          Privacy Policy on this page and updating the "Last updated" date.
        </p>
      </div>

      <div className="modal-section">
        <h3>9. Contact Us</h3>
        <p>
          If you have any questions about this Privacy Policy, please contact us at privacy@arkomedia.com
        </p>
      </div>

      <div className="modal-section">
        <p className="last-updated">Last updated: November 2025</p>
      </div>
    </Modal>
  );
};

export default PrivacyModal;
