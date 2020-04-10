import LayoutMain from '../components/LayoutMain'
import { IPricingConfig } from '../types/pricing.types'
import PricingCard from '../components/PricingCard'
import { pageRoutes } from '../helpers/page.helper'
import Link from 'next/link'

// const pricings: IPricingConfig[] = [
//   {
//     name: 'Free',
//     key: 'free',
//     price: '$ 0',
//     priceSuffix: '/ month',
//     tagline: 'Start for free, no credit card required.',
//     features: ['Feature 1', 'Feature 2', 'Feature 3'],
//     subscribeUrl: 'https://www.google.ca'
//   }
//   {
//     name: 'Business',
//     key: 'business',
//     price: '$ 29',
//     priceSuffix: '/ month',
//     tagline: 'No contract, cancel anytime.',
//     features: ['Feature 1', 'Feature 2', 'Feature 3'],
//     subscribeUrl: 'https://www.google.ca'
//   },
//   {
//     name: 'Customized',
//     key: 'customized',
//     price: 'Please contact',
//     tagline: 'Fully customized service for you.',
//     features: ['Feature 1', 'Feature 2', 'Feature 3'],
//     subscribeUrl: 'https://www.google.ca'
//   }
// ]

const pricings: IPricingConfig[] = [
  {
    name: 'Free',
    key: 'free',
    price: '$ 0',
    priceSuffix: '/ month',
    tagline: 'Completely free, no credit card required.',
    features: ['Feature 1', 'Feature 2', 'Feature 3'],
    subscribeUrl: 'https://www.google.ca',
    button: (
      <Link href={pageRoutes.signup.url}>
        <a>
          <button className="btn-secondary pointer">Sign Up Now</button>
        </a>
      </Link>
    )
  }
]

const PricingPage = () => {
  return (
    <LayoutMain showLogo>
      <style jsx>{`
        .pricing-container {
          width: 100%;
          max-width: 800px;
          margin-top: 70px;
        }
        .free-pricing-container {
        }
      `}</style>
      {/* <div className="w-100p h-100p layout justify-center-md- align-center-md- scroll">
        <div className="pricing-container layout horizontal-md-vertical">
          {pricings.map((p) => (
            <div key={p.key} className="w-30p-md">
              <PricingCard {...p} />
            </div>
          ))}
        </div>
      </div> */}
      <div className="w-100p h-100p layout justify-center align-center">
        <div className="free-pricing-container">
          {pricings.map((p) => (
            <div key={p.key}>
              <PricingCard {...p} />
            </div>
          ))}
        </div>
      </div>
    </LayoutMain>
  )
}
export default PricingPage
