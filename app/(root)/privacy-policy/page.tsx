export default function PrivacyPolicy() {
  return (
    <div className="max-w-4xl mx-auto p-6 min-h-screen">
      <div className="bg-white shadow-md rounded-lg p-8">
        <h1 className="text-3xl font-semibold mb-6 text-center">Privacy <span className="text-blue-500 underline">Policy</span></h1>

        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold mb-2">1. Information Collection and Use</h2>
            <p className="text-gray-700">
              Heftix collects and uses personal information for the purpose of providing and improving our service.
              This includes, but is not limited to, appointment scheduling data, client management information, and usage analytics.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">2. Data Security</h2>
            <p className="text-gray-700">
              We implement robust security measures to protect your data. All information is encrypted and stored securely,
              adhering to HIPAA compliance standards.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">3. Data Sharing</h2>
            <p className="text-gray-700">
              Heftix does not sell or share your personal information with third parties, except as required by law or
              with your explicit consent.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">4. AI Analytics</h2>
            <p className="text-gray-700">
              Our AI-driven analytics feature processes client data to generate insights. This processing is done securely
              and in compliance with all relevant data protection regulations.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">5. Your Rights</h2>
            <p className="text-gray-700">
              You have the right to access, correct, or delete your personal information. Contact us if you wish to exercise
              these rights.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
