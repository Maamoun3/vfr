// src/PrivacyPolicyPage.js
import React from 'react';
import './LegalPages.css';

const PrivacyPolicyPage = () => {
  return (
    <div className="legal-container">
      <h1 className="legal-title">Privacy Policy</h1>
      <p className="legal-intro">
        This Privacy Policy explains how Virtual Fitting Room (VFR) collects, uses, and protects your data.
      </p>

      <section className="legal-section">
        <h2>1. Data Collection</h2>
        <p>
          We collect the minimum necessary data, such as user-uploaded photos and fitting preferences, to simulate virtual clothing try-ons.
        </p>
      </section>

      <section className="legal-section">
        <h2>2. Data Usage</h2>
        <ul>
          <li>Your data is used solely for rendering your virtual fitting experience.</li>
          <li>We do not sell or share your personal data with third parties.</li>
          <li>All data is stored securely and temporarily, unless otherwise consented.</li>
        </ul>
      </section>

      <section className="legal-section">
        <h2>3. User Rights</h2>
        <p>
          You may request to delete your data at any time by contacting us.
        </p>
      </section>

      <p className="legal-contact">
        For privacy inquiries, reach out to <a href="mailto:privacy@vfr.com">privacy@vfr.com</a>.
      </p>
    </div>
  );
};

export default PrivacyPolicyPage;
