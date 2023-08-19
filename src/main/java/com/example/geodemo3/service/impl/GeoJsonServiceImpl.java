package com.example.geodemo3.service.impl;

import com.example.geodemo3.payload.MyPoints;
import com.example.geodemo3.payload.MyPolygon;
import com.example.geodemo3.service.GeoJsonService;
import org.locationtech.jts.geom.Coordinate;
import org.locationtech.jts.geom.GeometryFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class GeoJsonServiceImpl implements GeoJsonService {
    @Override
    public ResponseEntity<MyPoints> getPointsInsidePolygon(MyPoints myPoints, MyPolygon myPolygon) {
        // List of coordinate arrays
        List<org.locationtech.jts.geom.Polygon> polygonList = new ArrayList<>();

        // Create coordinates arrays
        var polygonCoordinateSize = 0;
        for (int i = 0; i < myPolygon.getFeatures().size(); i++) {
            List<List<List<Object>>> coordinatesFromJson = myPolygon.getFeatures().get(i).getGeometry().getCoordinates();
            for (int j = 0; j < coordinatesFromJson.size(); j++) {
                polygonCoordinateSize = coordinatesFromJson.get(j).size();
                Coordinate[] polygonCoordinates = new Coordinate[polygonCoordinateSize];
                for (int k = 0; k < polygonCoordinateSize; k++) {
                    var x = (Double) coordinatesFromJson.get(j).get(k).get(0);
                    var y = (Double) coordinatesFromJson.get(j).get(k).get(1);
                    var newCoordinate = new Coordinate(x, y);
                    polygonCoordinates[k] = newCoordinate;
                }
                var newPolygon = new GeometryFactory().createPolygon(polygonCoordinates);
                polygonList.add(newPolygon);
            }
        }

        var pointsInsidePolygon = new MyPoints();
        var features = new ArrayList<MyPoints.FeaturesItem>();

        for (int i = 0; i < myPoints.getFeatures().size(); i++) {
            var pointCoordinates = myPoints.getFeatures().get(i).getGeometry().getCoordinates();
            var x = (Double) pointCoordinates.get(0);
            var y = (Double) pointCoordinates.get(1);
            var coordinate = new Coordinate(x, y);
            var geoPoint = new GeometryFactory().createPoint(coordinate);

            if (polygonList.stream().anyMatch(thePolygon -> thePolygon.contains(geoPoint))) {
                var newFeature = myPoints.getFeatures().get(i);
                features.add(newFeature);
            }
        }

        pointsInsidePolygon.setFeatures(features);

        return ResponseEntity.ok(pointsInsidePolygon);
    }
}
