import { Outlet } from 'react-router-dom'
import TopNav from '../components/TopNav'
import SideNav from '../components/SideNav'

const DashLayout = () => {
  return (
    <main className="h-screen w-screen flex flex-col overflow-hidden">
        <TopNav/>
        <div className="flex h-full w-full">
          <SideNav/>
            <Outlet/>
        </div>
    </main>
  )
}

export default DashLayout
