import "./Dashboard.css";
import Widget from "./Widget";
import WidgetForm from "./WidgetForm";
import { useSelector, useDispatch } from "react-redux";
import { removeWidget } from "../slices/dashboardSlice";

const Dashboard = () => {
  const categories = useSelector((state) => state.dashboard.categories);
  const dispatch = useDispatch();

  const handleRemoveWidget = (category, widgetId) => {
    dispatch(removeWidget({ category, widgetId }));
  };
  return (
    <div className="dashboard">
      {categories.map((category) => (
        <div key={category.name} className="category">
          <h3>{category.name}</h3>
          <div className="widget-1">
            {category.widgets.map((widget) => (
              <Widget
                key={widget.id}
                widget={widget}
                category={category.name}
                onRemove={handleRemoveWidget}
              />
            ))}
            <WidgetForm category={category.name} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Dashboard;
