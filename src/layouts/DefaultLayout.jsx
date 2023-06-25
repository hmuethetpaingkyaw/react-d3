import { Outlet } from "react-router";
import Navbar from "../components/Navbar/Navbar";

export default function Layout () {
    return <div className="w-full">
        <header>
            <Navbar />
        </header> 
        <main className="p-8 flex justify-center">
            <Outlet />
        </main>
    </div>
}