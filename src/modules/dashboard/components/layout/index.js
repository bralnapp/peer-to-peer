import { Navbar } from "./Navbar"

const DashboadLayout = ({ children }) => {
    return (
        <div>
            <Navbar />
            <div className="bg-[#F5F5F5] min-h-screen pt-20 pb-[86px] md:pt-[128px]">
                {children}
            </div>
        </div>
    )
}

export default DashboadLayout
