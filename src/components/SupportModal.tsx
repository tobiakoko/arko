import Modal from './Modal';

interface SupportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SupportModal: React.FC<SupportModalProps> = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Support">
      <div className="modal-section">
        <h3>How Can We Help You?</h3>
        <p>
          We're here to assist you with any questions or concerns. Our team is committed to providing
          exceptional support for all your needs.
        </p>
      </div>

      <div className="modal-section">
        <h3>Contact Information</h3>
        <div className="support-contact">
          <div className="support-item">
            <strong>Email</strong>
            <p><a href="mailto:support@arkomedia.com">support@arkomedia.com</a></p>
          </div>
          <div className="support-item">
            <strong>General Inquiries</strong>
            <p><a href="mailto:hello@arkomedia.com">hello@arkomedia.com</a></p>
          </div>
          <div className="support-item">
            <strong>Business Hours</strong>
            <p>Monday - Friday: 9:00 AM - 6:00 PM EST</p>
          </div>
        </div>
      </div>

      <div className="modal-section">
        <h3>Frequently Asked Questions</h3>

        <div className="faq-item">
          <h4>What services do you offer?</h4>
          <p>
            We offer a comprehensive range of digital media services including web development, content creation,
            digital strategy, brand identity, social media management, and analytics.
          </p>
        </div>

        <div className="faq-item">
          <h4>How long does a typical project take?</h4>
          <p>
            Project timelines vary depending on scope and complexity. Simple projects may take 2-4 weeks,
            while larger projects can take 2-3 months or more. We'll provide a detailed timeline during our initial consultation.
          </p>
        </div>

        <div className="faq-item">
          <h4>What is your pricing structure?</h4>
          <p>
            We offer custom pricing based on project requirements. Contact us for a detailed quote tailored to your specific needs.
          </p>
        </div>

        <div className="faq-item">
          <h4>Do you offer ongoing support?</h4>
          <p>
            Yes! We offer maintenance and support packages to ensure your digital assets continue to perform optimally.
          </p>
        </div>

        <div className="faq-item">
          <h4>Can you work with existing projects?</h4>
          <p>
            Absolutely! We can help improve, maintain, or expand existing digital projects. We're experienced in
            working with various technologies and platforms.
          </p>
        </div>
      </div>

      <div className="modal-section">
        <h3>Response Time</h3>
        <p>
          We aim to respond to all inquiries within 24 hours during business days. For urgent matters,
          please mark your email as "Urgent" in the subject line.
        </p>
      </div>
    </Modal>
  );
};

export default SupportModal;
