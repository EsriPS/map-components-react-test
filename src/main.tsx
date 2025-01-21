import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import "@arcgis/map-components/dist/components/arcgis-map";
import { ArcgisMap } from "@arcgis/map-components-react";

import { setAssetPath as setCalciteComponentsAssetPath } from "@esri/calcite-components/dist/components";

setCalciteComponentsAssetPath(
  "https://js.arcgis.com/calcite-components/2.13.2/assets"
);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ArcgisMap></ArcgisMap>
  </React.StrictMode>
);
