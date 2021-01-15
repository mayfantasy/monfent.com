import Link from 'next/link'
import { pageRoutes } from '../helpers/page.helper'
import ParticlesBg from './ParticlesBg'
import Header from './Header'

interface IProps {
  disableParticles?: boolean
  children: React.ReactNode
  showLogo?: boolean
}

const LayoutMain = (props: IProps) => {
  const { disableParticles, children, showLogo } = props
  return (
    <div className="layout vertical page-home h-100vh">
      <div className=" cb-grey-5 flex-1 relative">
        <Header showLogo={showLogo || false} />
        {!disableParticles && (
          <div className="absolute w-100p h-100p top-0 left-0">
            <ParticlesBg />
          </div>
        )}
        <div className="absolute top-0 left-0 w-100p h-100p">{children}</div>
      </div>
      <div className="layout horizontal h-70">
        <Link href={pageRoutes.documentation.url}>
          <a className="layout w-50p cf-white cb-dark-1 justify-center align-center hover-cb-dark-1-07">
            Documentation
          </a>
        </Link>
        <Link href={pageRoutes.features.url}>
          <a className="layout w-50p cf-black cb-primary justify-center align-center hover-cb-primary-07">
            Features
          </a>
        </Link>
      </div>
    </div>
  )
}
export default LayoutMain
