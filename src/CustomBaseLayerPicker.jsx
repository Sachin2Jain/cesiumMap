import React, { useEffect } from "react";
import * as Cesium from "cesium";

const CustomBaseLayerPicker = () => {
  useEffect(() => {
    const viewer = new Cesium.Viewer("cesiumContainer", {
      imageryProvider: new Cesium.ArcGisMapServerImageryProvider({
        url: "https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer",
      }),
    });

    if (!viewer || !viewer.scene || !viewer.scene.globe) {
      console.error("Error creating viewer or scene globe.");
      return;
    }

    const customLayer1 = new Cesium.SingleTileImageryProvider({
      url: "https://eoimages.gsfc.nasa.gov/images/imagerecords/73000/73776/world.topo.bathy.200412.3x5400x2700.jpg",
      rectangle: Cesium.Rectangle.fromDegrees(-180, -90, 180, 90),
      credit: "NASA Blue Marble",
      tileWidth: 5400,
      tileHeight: 2700,
    });

    const customLayer2 = new Cesium.SingleTileImageryProvider({
      url: "https://stamen-tiles.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.jpg",
      rectangle: Cesium.Rectangle.fromDegrees(-180, -90, 180, 90),
      credit: "Stamen Watercolor Map",
      tileWidth: 256,
      tileHeight: 256,
    });

    viewer.scene.imageryLayers.addImageryProvider(customLayer1);
    viewer.scene.imageryLayers.addImageryProvider(customLayer2);

    return () => {
      viewer.destroy();
    };
  }, []);

  return <div id="cesiumContainer" style={{ height: "100vh" }}></div>;
};

export default CustomBaseLayerPicker;
