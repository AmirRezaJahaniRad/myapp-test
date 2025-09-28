import { create } from "zustand"

type AuthStore = {
    showToast : boolean
    setToast : () => void
    resetToast : () => void
}

const useAuthStore = create<AuthStore>()((set) => ({
    showToast : false,
    setToast : () => set({
        showToast : true,
    }),
    resetToast : () => set({
        showToast : false,
    }),
}))

export default useAuthStore;
