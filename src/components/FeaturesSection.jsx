import { Truck, Shield, RotateCcw, Headphones, CreditCard, Award } from "lucide-react"

const features = [
  {
    icon: Truck,
    title: "Free Shipping",
    description: "Free delivery on orders over $50",
  },
  {
    icon: Shield,
    title: "Secure Payment",
    description: "100% secure payment processing",
  },
  {
    icon: RotateCcw,
    title: "Easy Returns",
    description: "30-day hassle-free returns",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Round-the-clock customer service",
  },
  {
    icon: CreditCard,
    title: "Multiple Payment",
    description: "Various payment methods accepted",
  },
  {
    icon: Award,
    title: "Quality Guarantee",
    description: "Premium quality products only",
  },
]

function FeaturesSection() {
  return (
    <section className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Why Choose Us?</h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          We're committed to providing you with the best shopping experience
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => {
          const IconComponent = feature.icon
          return (
            <div
              key={index}
              className="border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow bg-white dark:bg-gray-800 backdrop-blur-sm rounded-lg"
            >
              <div className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2 text-base">{feature.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">{feature.description}</p>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default FeaturesSection
