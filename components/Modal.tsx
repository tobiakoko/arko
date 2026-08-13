'use client'

type ModalType = 'privacy' | 'terms' | null;

interface ModalProps {
  activeModal: ModalType;
  onClose: () => void;
}

export default function Modal({ activeModal, onClose }: ModalProps) {
  if (!activeModal) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-md"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-3xl max-h-[85vh] overflow-hidden rounded-3xl glass-card p-8 lg:p-12"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-10 h-10 rounded-full glass-effect flex items-center justify-center hover:bg-white/10 transition-all hover:scale-110 hover:rotate-90"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Modal Content */}
        <div className="overflow-y-auto max-h-[calc(85vh-8rem)] pr-4 custom-scrollbar">
          {activeModal === 'privacy' ? (
            <div>
              <h2
                className="text-4xl font-bold mb-6 text-gradient"
                style={{ fontFamily: 'var(--font-family-display)' }}
              >
                Privacy Policy
              </h2>
              <div className="space-y-6 text-gray-300 leading-relaxed">
                <p className="text-sm text-gray-400">Last updated: December 2024</p>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">1. Information We Collect</h3>
                  <p>At Arko Media Labs, we collect information that you provide directly to us, including your name, email address, phone number, and any other information you choose to provide when you contact us or use our services.</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">2. How We Use Your Information</h3>
                  <p>We use the information we collect to provide, maintain, and improve our services, communicate with you about our services, respond to your inquiries, and send you technical notices and support messages.</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">3. Information Sharing</h3>
                  <p>We do not share your personal information with third parties except as described in this policy. We may share information with vendors, consultants, and other service providers who need access to such information to carry out work on our behalf.</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">4. Data Security</h3>
                  <p>We take reasonable measures to help protect information about you from loss, theft, misuse, unauthorized access, disclosure, alteration, and destruction. However, no internet or email transmission is ever fully secure or error-free.</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">5. Your Rights</h3>
                  <p>You have the right to access, update, or delete your personal information. You can do this by contacting us at hello@arkomedia.com. We will respond to your request within a reasonable timeframe.</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">6. Contact Us</h3>
                  <p>If you have any questions about this Privacy Policy, please contact us at hello@arkomedia.com.</p>
                </div>
              </div>
            </div>
          ) : (
            <div>
              <h2
                className="text-4xl font-bold mb-6 text-gradient-coral"
                style={{ fontFamily: 'var(--font-family-display)' }}
              >
                Terms of Service
              </h2>
              <div className="space-y-6 text-gray-300 leading-relaxed">
                <p className="text-sm text-gray-400">Last updated: December 2024</p>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">1. Acceptance of Terms</h3>
                  <p>By accessing and using the services provided by Arko Media Labs, you accept and agree to be bound by the terms and provisions of this agreement. If you do not agree to these terms, please do not use our services.</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">2. Use of Services</h3>
                  <p>You agree to use our services only for lawful purposes and in accordance with these Terms. You agree not to use our services in any way that could damage, disable, overburden, or impair our servers or networks.</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">3. Intellectual Property</h3>
                  <p>All content, features, and functionality of our services are owned by Arko Media Labs and are protected by international copyright, trademark, and other intellectual property laws. You may not reproduce, distribute, or create derivative works without our express written permission.</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">4. User Content</h3>
                  <p>You retain ownership of any content you submit to us. However, by submitting content, you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, and distribute your content in connection with our services.</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">5. Limitation of Liability</h3>
                  <p>Arko Media Labs shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use our services.</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">6. Modifications</h3>
                  <p>We reserve the right to modify these terms at any time. We will notify you of any changes by posting the new Terms of Service on this page. Your continued use of our services after such modifications constitutes acceptance of the updated terms.</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">7. Contact Information</h3>
                  <p>For any questions regarding these Terms of Service, please contact us at hello@arkomedia.com.</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
