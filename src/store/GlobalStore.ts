import { create } from "zustand"
import { persist } from "zustand/middleware"

type ThemeStore = {
    isDarkMode : boolean
    toggleDarkMode : () => void
}

const useGlobalStore = create<ThemeStore>()(
    persist(
        (set) => ({
    isDarkMode : false ,
    toggleDarkMode : () => set((state) => (
        {
            isDarkMode : !state.isDarkMode
        }
    )),
}),
{
    name : "theme-storage",
}))

export default useGlobalStore;
