import { writable } from "svelte/store";

const userState = {
  authState: false,
  category: 'ngo', // ngo user corprate
  name: 'Alex',
  email: 'a@a.com',
  phone: '81654657897'
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
