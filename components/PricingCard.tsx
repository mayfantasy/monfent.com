import { IPricingConfig } from '../types/pricing.types'
import Link from 'next/link'

interface IProps extends IPricingConfig {}
const PricingCard = (props: IProps) => {
  const { name, price, tagline, features, priceSuffix, subscribeUrl } = props
  return (
    <>
      <style jsx>{`
        .container {
          margin-right: 20px;
          padding: 20px;
        }
        .container:hover {
          background-color: white;
          border-radius: 5px;
        }
        .name {
          font-size: 30px;
          font-weight: bold;
        }
        .price {
          font-size: 20px;
        }
        .tagline {
          font-size: 12px;
        }
        .features {
        }
        .feature-item {
        }
      `}</style>
      <div className="container">
        <div className="name">{name}</div>
        <br />
        <div className="price">
          <b>{price}</b> {priceSuffix && <span>/ month</span>}
        </div>
        <div className="tagline cf-grey-1">{tagline}</div>
        <br />
        <ul className="features">
          {features.map((f, i) => (
            <li className="feature-item" key={i}>
              {f}
            </li>
          ))}
        </ul>
        <br />
        <div className="subscribe">
          <Link href={subscribeUrl}>
            <a>
              <button className="btn-primary pointer">Subscribe</button>
            </a>
          </Link>
        </div>
      </div>
    </>
  )
}
export default PricingCard
