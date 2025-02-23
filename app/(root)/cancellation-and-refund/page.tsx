export default function CancellationAndRefund() {
    return (
      <div className="max-w-4xl mx-auto p-6 min-h-screen">
        <div className="p-8 shadow-md rounded-md bg-white">
          <h1 className="text-3xl font-semibold mb-6 text-center"><span className="text-violet-500">Cancellation</span> and <span className="text-blue-500 underline">Refund</span> Policy</h1>
          
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold mb-2">1. Subscription Cancellation</h2>
              <p className="text-gray-700">
                You may cancel your Heftix subscription at any time. To cancel, please log into your account and go to the subscription management page.
              </p>
            </div>
  
            <div>
              <h2 className="text-2xl font-semibold mb-2">2. Refunds</h2>
              <p className="text-gray-700">
                Heftix offers a 30-day money-back guarantee. If you&spos;re not satisfied with our service within the first 30 days of your subscription, you can request a full refund.
              </p>
            </div>
  
            <div>
              <h2 className="text-2xl font-semibold mb-2">3. Prorated Refunds</h2>
              <p className="text-gray-700">
                After the initial 30-day period, cancellations will stop future billing, but we do not provide prorated refunds for the remainder of the billing cycle.
              </p>
            </div>
  
            <div>
              <h2 className="text-2xl font-semibold mb-2">4. Data Retention</h2>
              <p className="text-gray-700">
                Upon cancellation, your data will be retained for 30 days, after which it will be permanently deleted. You can request an export of your data during this period.
              </p>
            </div>
  
            <div>
              <h2 className="text-2xl font-semibold mb-2">5. Contacting Support</h2>
              <p className="text-gray-700">
                If you have any questions about cancellation or refunds, please contact our support team at <a href="mailto:support@heftix.com" className="text-blue-500">support@heftix.com</a>.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  