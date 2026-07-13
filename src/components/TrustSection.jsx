export default function TrustSection() {
  const items = [
    {
      title: "40+ Years Experience",
      description:
        "Trusted professional services in taxation, audit, compliance and advisory."
    },
    {
      title: "Chartered Accountants",
      description:
        "Qualified professionals delivering reliable financial and compliance solutions."
    },
    {
      title: "Tax & GST Experts",
      description:
        "Specialized support for income tax, GST compliance, litigation and advisory."
    },
    {
      title: "Corporate Advisory Specialists",
      description:
        "Strategic guidance for business structuring, mergers, compliance and growth."
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">
          Why Businesses Trust Us
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, index) => (
            <div
              key={index}
              className="p-6 rounded-lg shadow-md border"
            >
              <h3 className="font-bold text-lg mb-3">
                {item.title}
              </h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}