import { useRoutes } from "react-router-dom";

import ROUTES from '../const/routes'

const AppRoutes = () => {
  let element = useRoutes(ROUTES);

  return element;
};

export default AppRoutes;
