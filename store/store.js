// store.js
import create from "zustand";

const useStore = create((set) => ({
    activeIds: {},
    textValue: "", // Adding textValue state to manage text inputs

    setActiveIds: (step, ids) => set((state) => ({ activeIds: { ...state.activeIds, [step]: ids } })),
    setTextValue: (value) => set({ textValue: value }), // Function to update textValue

    resetActiveIds: () => set({ activeIds: {} }),
    resetTextValue: () => set({ textValue: "" }), // Reset text input when needed

    selectedServices: [],
    setSelectedServices: (services) => set({ selectedServices: services }),

    selectedStages: [],
    setSelectedStages: (stages) => set({ selectedStages: stages }),

    selectedRequirements: [],
    setSelectedRequirements: (requirements) => set({ selectedRequirements: requirements }),

    selectedMarket: [],
    setSelectedMarket: (market) => set({ selectedMarket: market }),

    projectDescription: "",
    setProjectDescription: (description) => set({ projectDescription: description }),

    newsletterSubscribed: true,
    setNewsletterSubscribed: (agreed) => set({ newsletterSubscribed: agreed }),

    termsAgreed: false,
    setTermsAgreed: (agreed) => set({ termsAgreed: agreed }),
    // Ensure all selections are reset properly
    resetAll: () =>
        set({
            selectedServices: [],
            selectedStages: [],
            selectedRequirements: [],
            selectedMarket: [],
            projectDescription: "",
            // other resets...
        }),

    budgetOption: "",
    setBudgetOption: (option) => set({ budgetOption: option }),
    timeframeOption: "",
    setTimeframeOption: (option) => set({ timeframeOption: option }),
    textAreaValue: "",
    setTextAreaValue: (value) => set({ textAreaValue: value }),

    personalInfo: {
        name: "",
        company: "",
        email: "",
        phone: "",
        message: "",
    },
    setPersonalInfo: (info) =>
        set((state) => ({
            personalInfo: { ...state.personalInfo, ...info },
        })),

    // isNextButtonEnabled: (step, multipleChoice, allActiveIds, componentType) => {
    //     const ids = allActiveIds && allActiveIds[step] ? allActiveIds[step] : [];
    //     if (componentType === "textarea") {
    //         return set.getState().textValue.length >= 50; // Check text length for textarea components
    //     } else if (multipleChoice) {
    //         return ids.length > 0;
    //     } else {
    //         return ids.length === 1;
    //     }
    // },
    // Updated isNextButtonEnabled function
    isNextButtonEnabled: (
        step,
        multipleChoice,
        allActiveIds,
        textValue,
        componentType,
        budgetOption,
        timeframeOption,
        personalInfo
    ) => {
        if (componentType === "dropzone") {
            return true; // Always enable the Next button for the dropzone step
        } else if (componentType === "textarea") {
            return textValue.length >= 50; // Check text length for textarea components
        } else if (componentType === "options") {
            // Assuming you have an identifier for your budget and timeframe options step
            return budgetOption !== "" && timeframeOption !== ""; // Both options need to be selected
        } else if (componentType === "personal") {
            // Check if required personal info fields are filled
            return personalInfo.name !== "" && personalInfo.email !== "" && personalInfo.phone !== "";
        } else if (multipleChoice) {
            const ids = allActiveIds[step] ? allActiveIds[step] : [];
            return ids.length > 0;
        } else {
            const ids = allActiveIds[step] ? allActiveIds[step] : [];
            return ids.length === 1;
        }
    },

    files: [],
    totalFileSize: 0,
    addFiles: (newFiles) =>
        set((state) => {
            const updatedFiles = [...state.files, ...newFiles];
            const updatedSize = updatedFiles.reduce((total, file) => total + file.size, 0);
            return { files: updatedFiles, totalFileSize: updatedSize };
        }),
    deleteFile: (filePath) =>
        set((state) => {
            const updatedFiles = state.files.filter((file) => file.path !== filePath);
            const updatedSize = updatedFiles.reduce((total, file) => total + file.size, 0);
            return { files: updatedFiles, totalFileSize: updatedSize };
        }),
    resetFiles: () => set({ files: [], totalFileSize: 0 }),

    fileUrls: [], // This will store the URLs of the uploaded files

    addFileUrls: (urls) =>
        set((state) => ({
            fileUrls: [...state.fileUrls, ...urls],
        })),

    clearFileUrls: () => set({ fileUrls: [] }),

    // Optionally, you might want to remove a specific URL if a file is deleted or replaced
    removeFileUrl: (urlToRemove) =>
        set((state) => ({
            fileUrls: state.fileUrls.filter((url) => url !== urlToRemove),
        })),
}));

export default useStore;
