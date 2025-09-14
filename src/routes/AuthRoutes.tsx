import { Route , Routes , Navigate } from "react-router-dom"
import { ForgotPasswordPage , LoginPage , RegisterPage } from '../pages/index'

export default function AuthRoutes() {
    return (
        <Routes>
          {/* مسیر اصلی → هدایت به login */}
          <Route path="/" element={<Navigate to="/login" replace />} />

          {/* صفحات احراز هویت */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />

          {/* اگر مسیر اشتباه وارد شد → هدایت به login */}
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
    )
}