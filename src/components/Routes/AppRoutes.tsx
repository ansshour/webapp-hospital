import { Routes, Route } from "react-router-dom";
import { Main } from "../Main/Main";
import { NotFound } from "../NotFound/NotFound";
import { AboutClinic } from "../AboutClinic/AboutClinic";


export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/about_clinic" element={<AboutClinic />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}