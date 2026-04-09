interface EmbeddedFormProps {
  height?: number;
}

export default function EmbeddedForm({ height = 537 }: EmbeddedFormProps) {
  return (
    <div style={{ height }} className="w-full flex flex-col">
      <div className="bg-primary px-6 py-4">
        <h3 className="font-heading font-bold text-white text-lg">
          Get Your Free Estimate
        </h3>
        <p className="text-white/80 text-sm mt-0.5">
          We respond within 24 hours
        </p>
      </div>
      <form
        className="flex-1 flex flex-col gap-4 p-6 bg-card"
        onSubmit={(e) => {
          e.preventDefault();
          alert("Thank you! We'll be in touch within 24 hours.");
          (e.target as HTMLFormElement).reset();
        }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-foreground mb-1">
              First Name
            </label>
            <input
              type="text"
              required
              placeholder="Jane"
              className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-1">
              Last Name
            </label>
            <input
              type="text"
              required
              placeholder="Smith"
              className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-foreground mb-1">
            Phone Number
          </label>
          <input
            type="tel"
            required
            placeholder="(570) 555-0100"
            className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-foreground mb-1">
            Email Address
          </label>
          <input
            type="email"
            required
            placeholder="jane@example.com"
            className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-foreground mb-1">
            Service Needed
          </label>
          <select
            required
            className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
          >
            <option value="">Select a service…</option>
            <option>Recurring Cleaning</option>
            <option>Deep Cleaning</option>
            <option>Move-In / Move-Out Cleaning</option>
            <option>Airbnb & Rental Turnover</option>
            <option>Post-Construction Cleaning</option>
            <option>Commercial Cleaning</option>
          </select>
        </div>
        <button
          type="submit"
          className="mt-auto w-full rounded-md bg-primary px-4 py-3 text-sm font-semibold text-white hover:bg-blue-700 transition-colors"
        >
          Request My Free Estimate →
        </button>
      </form>
    </div>
  );
}
