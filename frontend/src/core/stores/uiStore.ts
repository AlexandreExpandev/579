import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

interface UiState {
  isSidebarOpen: boolean;
  isModalOpen: boolean;
  modalContent: React.ReactNode | null;
}

interface UiActions {
  toggleSidebar: () => void;
  openModal: (content: React.ReactNode) => void;
  closeModal: () => void;
}

/**
 * @store useUiStore
 * @summary Zustand store for managing global UI state.
 * @domain core
 * @type global-store
 * @category ui
 */
export const useUiStore = create<UiState & UiActions>()(
  immer((set) => ({
    // State
    isSidebarOpen: false,
    isModalOpen: false,
    modalContent: null,

    // Actions
    toggleSidebar: () =>
      set((state) => {
        state.isSidebarOpen = !state.isSidebarOpen;
      }),
    openModal: (content) =>
      set((state) => {
        state.isModalOpen = true;
        state.modalContent = content;
      }),
    closeModal: () =>
      set((state) => {
        state.isModalOpen = false;
        state.modalContent = null;
      }),
  })),
);
