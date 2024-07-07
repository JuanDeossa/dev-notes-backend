export const notesServices = {
  getNotes: async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(["Note 1", "Note 2", "Note 3"]);
      }, 200);
    });
  },
  getNote: async (id: string) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Note " + id);
      }, 200);
    });
  },
  createNote: async (note: any) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(note);
      }, 200);
    });
  },
};
