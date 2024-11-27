import React from 'react'
import DashboardSideBar from '@/components/dashboard/dashboardSidebar'

const layout = ({children}) => {
  return (
    <div className='w-full bg-white'>
            <div className="max-w-[230px] hidden sm:block fixed  w-full">
                <DashboardSideBar />
            </div>
            <div className="ml-0 md:ml-[230px] p-10 py-2">
                {children}
            </div>
        </div>
  )
}

export default layout