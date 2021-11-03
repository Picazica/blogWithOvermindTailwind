import { createOvermind } from "overmind";
import { createActionsHook, createStateHook } from "overmind-react";

export const useOvermindAction = createActionsHook();
export const useOvermindState = createStateHook();

export const overmind = createOvermind({
  state: { blogs: [], loading: true, length: 0, update: false },
  actions: {
    async deleteBlog({ state }, id) {
      await fetch("http://localhost:3001/blogs/" + id, {
        method: "DELETE",
      });
      state.update = !state.update;
    },
    async addPost({ state }, newPost) {
      newPost.id = state.lenght + 1;
      await fetch("http://localhost:3001/blogs/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newPost),
      });
      state.update = !state.update;
    },
    async populateBlogs({ state }) {
      const response = await fetch("http://localhost:3001/blogs");
      const data = await response.json();
      state.blogs = data;
      if (state.blogs) state.loading = false;
      state.length = state.blogs.length;
    },
    update() {},
  },
});
