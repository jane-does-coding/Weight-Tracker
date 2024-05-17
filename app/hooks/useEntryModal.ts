import {create} from "zustand"

interface EntryModalStore{
  isOpen: boolean
  onOpen: () => void
  onClose: () => void
}

const useEntryModal = create<EntryModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({isOpen: true}),
  onClose: () => set({isOpen: false})
}))

export default useEntryModal