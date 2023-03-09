import { Outlet } from "react-router-dom";

export default function () {
    return (
        <>
            <h2>Dashboard component</h2>
            <Outlet />
        </>
    )
}