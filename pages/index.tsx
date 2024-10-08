import LayoutMain from '../components/HomeLayoutMain'

const HomePage = () => {
  return (
    <LayoutMain>
      <div className="w-100p h-100p layout justify-center align-center">
        <div className="w-300">
          <div>
            <img className="w-100p" src="/logo-monfent.png" />
          </div>
          <p>
            Completely <b>FREE.</b>
          </p>
        </div>
      </div>
    </LayoutMain>
  )
}
export default HomePage
