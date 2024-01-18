import { useState, useEffect, useRef } from "react";
import "./App.css";
import * as Cesium from "cesium";
import { Viewer, CameraFlyTo, ImageryLayer } from "resium";

import { ArcGisMapServerImageryProvider } from "cesium";
import CustomBaseLayerPicker from "./CustomBaseLayerPicker";

function App() {
  // const viewerRef = useRef(null);

  const imageryViewModels = [];
  imageryViewModels.push(
    new Cesium.ProviderViewModel({
      name: "Earth at Night",
      iconUrl: Cesium.buildModuleUrl(
        "Widgets/Images/ImageryProviders/openStreetMap.png"
      ),
      tooltip:
        "The lights of cities and villages trace the outlines of civilization \
in this global view of the Earth at night as seen by NASA/NOAA's Suomi NPP satellite.",
      creationFunction: function () {
        return Cesium.IonImageryProvider.fromAssetId(3812);
      },
    })
  );
  imageryViewModels.push(
    new Cesium.ProviderViewModel({
      name: "Open\u00adStreet\u00adMap",
      iconUrl: Cesium.buildModuleUrl(
        "Widgets/Images/ImageryProviders/openStreetMap.png"
      ),
      tooltip:
        "OpenStreetMap (OSM) is a collaborative project to create a free editable \
map of the world.\nhttp://www.openstreetmap.org",
      creationFunction: function () {
        return new Cesium.OpenStreetMapImageryProvider({
          url: "https://tile.openstreetmap.org/",
        });
      },
    })
  );

  // const terrainProvider = Cesium.createWorldTerrainAsync();
  // const positions = [
  //   Cesium.Cartographic.fromDegrees(86.925145, 27.988257),
  //   Cesium.Cartographic.fromDegrees(87.0, 28.0),
  // ];
  // let updatedPositions = Cesium.sampleTerrain(terrainProvider, 11, positions);
  // const viewer = new Cesium.Viewer("cesiumContainer");
  // viewer.extend(Cesium.viewerCesium3DTilesInspectorMixin);
  return (
    <>
      <div className="card">
        <Viewer full imageryProviderViewModels={imageryViewModels} />
        {/* <CameraFlyTo
            destination={Cesium.Cartesian3.fromDegrees(
              20.5937,
              78.9629,
              1000000
            )}
          /> */}
        {/* <CustomBaseLayerPicker /> */}
      </div>
    </>
  );
}

export default App;
