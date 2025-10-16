import { Route , Routes , Navigate } from "react-router-dom"
import { ForgotPasswordPage , LoginPage , RegisterPage , ReAssignPasswordPage, SelectCompany } from '../features/index'

// TEST
import MainDashboard from "../layouts/MainDashboard"

export default function AuthRoutes() {
    return (
        <Routes>
          {/* مسیر اصلی → هدایت به login */}
          <Route path="/" element={<Navigate to="/login" replace />} />

          {/* صفحات احراز هویت */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/forgotPassword" element={<ForgotPasswordPage />} />
          <Route path="/reAssignPassword" element={<ReAssignPasswordPage />} />
          <Route path="/selectCompany" element={<SelectCompany />} />
          <Route path="/mainDashboard" element={<MainDashboard />} />

          {/* اگر مسیر اشتباه وارد شد → هدایت به login */}
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
    )
}