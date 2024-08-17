import { createSlice } from "@reduxjs/toolkit";

import dashboardData from "../dashboardData.json";

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState: {
    categories: dashboardData.categories,
    allWidgets: dashboardData.allWidgets,
  },
  reducers: {
    addWidget: (state, action) => {
      const { category, widget } = action.payload;
      const categoryIndex = state.categories.findIndex(
        (cat) => cat.name === category
      );
      if (categoryIndex !== -1) {
        state.categories[categoryIndex].widgets.push(widget);
        state.allWidgets.push(widget);
      }
    },
    removeWidget: (state, action) => {
      const { category, widgetId } = action.payload;
      const categoryIndex = state.categories.findIndex(
        (cat) => cat.name === category
      );
      if (categoryIndex !== -1) {
        const widgetIndex = state.categories[categoryIndex].widgets.findIndex(
          (widget) => widget.id === widgetId
        );

        if (widgetIndex !== -1) {
          state.categories[categoryIndex].widgets.splice(widgetIndex, 1);
          const allWidgetIndex = state.allWidgets.findIndex(
            (widget) => widget.id === widgetId
          );
          if (allWidgetIndex !== -1) {
            state.allWidgets.splice(allWidgetIndex, 1);
          }
        }
      }
    },
  },
});

export const { addWidget, removeWidget } = dashboardSlice.actions;

export default dashboardSlice.reducer;
