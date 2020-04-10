import Link from 'next/link'
import { pageRoutes } from '../helpers/page.helper'
import ParticlesBg from '../components/ParticlesBg'

const Home = () => {
  return (
    <div className="layout vertical page-home h-100vh">
      <div className=" cb-grey-5 flex-1 relative">
        <div className="absolute w-100p h-100p top-0 left-0">
          <ParticlesBg />
        </div>
        <div className="absolute top-0 left-0 w-100p h-100p layout justify-center align-center">
          <div className="w-300">
            <div>
              <img className="w-100p" src="/logo-monfent.png" />
            </div>
          </div>
        </div>
      </div>
      <div className="layout horizontal h-70">
        <Link href={pageRoutes.documentation.url}>
          <a className="layout w-50p cf-white cb-dark-1 justify-center align-center hover-cb-dark-1-07">
            Documentation
          </a>
        </Link>
        <Link href={pageRoutes.signup.url}>
          <a className="layout w-50p cf-black cb-primary justify-center align-center hover-cb-primary-07">
            Sign Up
          </a>
        </Link>
      </div>
    </div>
  )
}
export default Home
