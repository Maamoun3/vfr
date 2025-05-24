// src/TermsPage.js
import React from 'react';
import './LegalPages.css';

const TermsPage = () => {
  return (
    <div className="legal-container">
      <h1 className="legal-title">Terms and Conditions</h1>
      <p className="legal-intro">
        Please read these Terms and Conditions ("Terms", "Terms and Conditions") carefully before using the Virtual Fitting Room (VFR) platform.
      </p>

      <section className="legal-section">
        <h2>1. Acceptance of Terms</h2>
        <p>
          By accessing or using our service, you agree to be bound by these Terms. If you disagree with any part, you may not access the service.
        </p>
      </section>

      <section className="legal-section">
        <h2>2. Use of the Service</h2>
        <ul>
          <li>You must be at least 13 years old to use this service.</li>
          <li>Do not upload offensive or harmful content.</li>
          <li>Your image data is used solely for virtual try-on purposes.</li>
        </ul>
      </section>

      <section className="legal-section">
        <h2>3. Modifications</h2>
        <p>
          VFR reserves the right to modify or discontinue the service at any time without prior notice.
        </p>
      </section>

      <p className="legal-contact">
        If you have any questions, contact us at <a href="mailto:support@vfr.com">support@vfr.com</a>.
      </p>
    </div>
  );
};

export default TermsPage;
