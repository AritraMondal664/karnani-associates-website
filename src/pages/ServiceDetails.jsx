import { useParams, Link } from "react-router-dom";

const servicesData = {
  "audit-assurance": {
    title: "Audit & Assurance",
    description:
      "Independent, risk-based assurance services designed to strengthen governance, improve transparency, and build stakeholder confidence.",
    benefits: [
      "Enhanced financial credibility",
      "Improved risk management",
      "Regulatory compliance",
      "Strengthened governance",
    ],
    process: [
      "Planning & understanding operations",
      "Risk assessment",
      "Audit execution",
      "Reporting findings",
      "Management recommendations",
    ],
    industries: [
      "Manufacturing",
      "Trading",
      "Financial Services",
      "Professional Firms",
    ],
  },

  "accounting-reporting": {
    title: "Accounting & Reporting",
    description:
      "Comprehensive accounting solutions including IND-AS, IFRS reporting, MIS frameworks, bookkeeping, and financial reporting systems.",
    benefits: [
      "Accurate financial records",
      "Better decision making",
      "Improved reporting quality",
      "Compliance readiness",
    ],
    process: [
      "Review existing systems",
      "Accounting setup",
      "Data reconciliation",
      "Financial reporting",
      "Periodic review",
    ],
    industries: [
      "SMEs",
      "Manufacturing",
      "Retail",
      "Professional Services",
    ],
  },

  "ma-restructuring": {
    title: "M&A and Restructuring",
    description:
      "Strategic advisory for mergers, acquisitions, demergers, restructuring, business transitions, and transaction support.",
    benefits: [
      "Improved business value",
      "Efficient restructuring",
      "Tax optimization",
      "Smooth transactions",
    ],
    process: [
      "Business evaluation",
      "Transaction planning",
      "Due diligence",
      "Execution support",
      "Post-transaction advisory",
    ],
    industries: [
      "Corporate Groups",
      "Family Businesses",
      "Startups",
      "SMEs",
    ],
  },

  "direct-tax": {
    title: "Direct Tax",
    description:
      "Tax planning, compliance, assessments, litigation support, and representation before tax authorities.",
    benefits: [
      "Reduced tax exposure",
      "Strategic tax planning",
      "Timely compliance",
      "Professional representation",
    ],
    process: [
      "Tax review",
      "Planning strategy",
      "Compliance & filing",
      "Assessment support",
      "Ongoing advisory",
    ],
    industries: [
      "Manufacturing",
      "Trading",
      "Real Estate",
      "Professional Services",
    ],
  },

  "gst-indirect-tax": {
    title: "GST & Indirect Tax",
    description:
      "GST registrations, return filings, audits, advisory services, litigation support, and indirect tax compliance.",
    benefits: [
      "Improved GST compliance",
      "Reduced penalties",
      "Input tax optimization",
      "Efficient tax management",
    ],
    process: [
      "GST assessment",
      "Registration & setup",
      "Return filing",
      "Audit support",
      "Litigation assistance",
    ],
    industries: [
      "Retail",
      "Manufacturing",
      "Hospitality",
      "E-commerce",
    ],
  },

  "corporate-law-regulatory": {
    title: "Corporate Law & Regulatory",
    description:
      "Corporate governance, ROC compliance, NCLT matters, company law advisory, and regulatory support.",
    benefits: [
      "Improved governance",
      "Regulatory compliance",
      "Reduced legal risks",
      "Professional oversight",
    ],
    process: [
      "Compliance review",
      "Regulatory assessment",
      "Documentation",
      "Filing & representation",
      "Continuous monitoring",
    ],
    industries: [
      "Private Companies",
      "LLPs",
      "Listed Entities",
      "Startups",
    ],
  },

  "project-finance-funding": {
    title: "Project Finance & Funding",
    description:
      "Project reports, CMA data preparation, lender coordination, and funding readiness advisory.",
    benefits: [
      "Funding readiness",
      "Better lender confidence",
      "Improved financial planning",
      "Structured project execution",
    ],
    process: [
      "Project evaluation",
      "CMA preparation",
      "Financial modelling",
      "Lender coordination",
      "Funding support",
    ],
    industries: [
      "Manufacturing",
      "Infrastructure",
      "Startups",
      "Growing Businesses",
    ],
  },

  "family-office-advisory": {
    title: "Family Office Advisory",
    description:
      "Succession planning, wealth governance, family constitutions, trusts, and legacy management solutions.",
    benefits: [
      "Smooth succession",
      "Asset protection",
      "Family governance",
      "Long-term wealth preservation",
    ],
    process: [
      "Family consultation",
      "Governance framework",
      "Structuring & trusts",
      "Implementation",
      "Ongoing advisory",
    ],
    industries: [
      "Family Businesses",
      "HNIs",
      "Promoters",
      "Family Offices",
    ],
  },
};

const ServiceDetails = () => {
  const { slug } = useParams();

  const service = servicesData[slug];

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-[#0D2B52] mb-4">
            Service Not Found
          </h1>

          <Link
            to="/"
            className="inline-block mt-4 bg-[#0D2B52] text-white px-6 py-3 rounded-xl"
          >
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <section className="bg-white">

      {/* Hero */}
      <div className="bg-[#0D2B52] text-white py-24 px-4">
        <div className="max-w-6xl mx-auto">

          <Link
            to="/#services"
            className="inline-flex items-center gap-2 text-gray-200 hover:text-[#C8A23A] font-medium mb-8 transition duration-300"
          >
            <span>←</span>
            <span>Back to Services</span>
          </Link>




          <p className="uppercase tracking-[0.3em] text-sm text-[#C8A23A] mb-4">
            Service Area
          </p>

          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            {service.title}
          </h1>

          <p className="text-lg md:text-xl text-gray-200 max-w-4xl leading-relaxed">
            {service.description}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto py-20 px-4">

        <div className="grid md:grid-cols-2 gap-12">

          {/* Process */}
          <div className="bg-gray-50 rounded-3xl p-8">
            <h2 className="text-3xl font-bold text-[#0D2B52] mb-6">
              Our Process
            </h2>

            <ul className="space-y-4">
              {service.process.map((item, index) => (
                <li key={index} className="flex gap-3">
                  <span className="text-[#C8A23A] font-bold">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Benefits */}
          <div className="bg-gray-50 rounded-3xl p-8">
            <h2 className="text-3xl font-bold text-[#0D2B52] mb-6">
              Key Benefits
            </h2>

            <ul className="space-y-4">
              {service.benefits.map((item, index) => (
                <li key={index} className="flex gap-3">
                  <span className="text-[#C8A23A] font-bold">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Industries */}
        <div className="mt-16">

          <h2 className="text-3xl font-bold text-[#0D2B52] mb-8">
            Industries We Serve
          </h2>

          <div className="flex flex-wrap gap-4">
            {service.industries.map((industry, index) => (
              <span
                key={index}
                className="bg-blue-50 text-[#0D2B52] px-5 py-3 rounded-full font-medium"
              >
                {industry}
              </span>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-20 text-center bg-[#0D2B52] rounded-3xl p-12 text-white">

          <h2 className="text-3xl font-bold mb-4">
            Need Professional Guidance?
          </h2>

          <p className="text-gray-200 mb-8">
            Speak with our experienced professionals and discover how we can
            support your business objectives.
          </p>

          <a
            href="/#contact"
            className="inline-block bg-[#C8A23A] text-[#0D2B52] px-8 py-4 rounded-xl font-bold hover:scale-105 transition"
          >
            Request a Consultation
          </a>

        </div>

      </div>
    </section>
  );
};

export default ServiceDetails;