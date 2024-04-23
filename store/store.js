// store.js
import create from "zustand";

const useStore = create((set) => ({
    activeIds: {},
    setActiveIds: (step, ids) => set((state) => ({ activeIds: { ...state.activeIds, [step]: ids } })),
    resetActiveIds: () => set({ activeIds: {} }),
    isNextButtonEnabled: (step, multipleChoice, allActiveIds) => {
        // Ensure allActiveIds is defined and has the key for the current step
        const ids = allActiveIds && allActiveIds[step] ? allActiveIds[step] : [];
        return multipleChoice ? ids.length > 0 : ids.length === 1;
    },
}));

export default useStore;
