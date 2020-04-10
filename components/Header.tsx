import Link from 'next/link'
import { pageRoutes } from '../helpers/page.helper'

interface IProps {
  showLogo: boolean
}

const Header = (props: IProps) => {
  const { showLogo } = props
  return (
    <div className="absolute w-100p top-0 left-0  h-70 z-3">
      <nav className="w-100p h-100p ph-20 layout horizontal space-between align-center">
        <div>
          {showLogo && <img className="w-200" src="/logo-monfent.png" />}
        </div>
        <div>
          <Link href={pageRoutes.pricing.url}>
            <a className="btn-primary">Pricing</a>
          </Link>
          &nbsp;
          <Link href={pageRoutes.signup.url}>
            <a className="btn-secondary">Sign Up Now</a>
          </Link>
        </div>
      </nav>
    </div>
  )
}
export default Header
