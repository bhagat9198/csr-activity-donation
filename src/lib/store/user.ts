import { writable } from "svelte/store";

const userState = {
  authState: false,
  category: '', // ngo user corprate
  name: '',
  email: '',
  phone: '',
  uid: '',
  activities: [''],
  donations: [''],
  activitiesAdded: [''],
  donationsAdded: [''],
}

function createUserStore() {
  const { set, subscribe, update } = writable({
    ...userState
  })

  return {
    subscribe, set, update,
    reset: () => {
      set({ ...userState })
    },

  }
}

export default createUserStore();
