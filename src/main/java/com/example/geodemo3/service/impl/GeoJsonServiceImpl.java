package com.example.geodemo3.service.impl;

import com.example.geodemo3.payload.MyPoints;
import com.example.geodemo3.payload.MyPolygon;
import com.example.geodemo3.service.GeoJsonService;
import org.locationtech.jts.geom.Coordinate;
import org.locationtech.jts.geom.Geometry;
import org.locationtech.jts.geom.GeometryFactory;
import org.locationtech.jts.geom.Polygon;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class GeoJsonServiceImpl implements GeoJsonService {
    @Override
    public ResponseEntity<MyPoints> getPointsInsidePolygon(MyPoints myPoints, MyPolygon myPolygon) throws Exception {
        // List of coordinate arrays
        List<org.locationtech.jts.geom.Polygon> polygonList = new ArrayList<>();

        // Create coordinates arrays
        Double x;
        Double y;
        var polygonCoordinateSize = 0;
        for (int i = 0; i < myPolygon.getFeatures().size(); i++) {
            List<List<List<Object>>> coordinatesFromJson = myPolygon.getFeatures().get(i).getGeometry().getCoordinates();
            for (int j = 0; j < coordinatesFromJson.size(); j++) {
                polygonCoordinateSize = coordinatesFromJson.get(j).size();

                Coordinate[] polygonCoordinates = new Coordinate[polygonCoordinateSize];
                for (int k = 0; k < polygonCoordinateSize; k++) {
                    Object o = coordinatesFromJson.get(j).get(k).get(0);
                    if (o instanceof ArrayList) {
                        polygonCoordinates = new Coordinate[coordinatesFromJson.get(j).get(k).size()];
                        for (int l = 0; l < coordinatesFromJson.get(j).get(k).size(); l++) {
                            o = coordinatesFromJson.get(j).get(k).get(l);

                            if (((ArrayList<?>) o).get(0) instanceof Integer intX)
                                x = intX.doubleValue();
                            else x = (Double) ((ArrayList<?>) o).get(0);

//                            System.out.println(i + " " + j + " " + k + " " + l + " " + x);

                            if (((ArrayList<?>) o).get(1) instanceof Integer intY)
                                y = intY.doubleValue();
                            else
                                y = (Double) ((ArrayList<?>) o).get(1);

                            var newCoordinate = new Coordinate(x, y);
                            polygonCoordinates[l] = newCoordinate;
                        }
                    } else {

                        if (coordinatesFromJson.get(j).get(k).get(0) instanceof Integer intX)
                            x = intX.doubleValue();
                        else x = (Double) coordinatesFromJson.get(j).get(k).get(0);

                        if (coordinatesFromJson.get(j).get(k).get(1) instanceof Integer intY)
                            y = intY.doubleValue();
                        else
                            y = (Double) coordinatesFromJson.get(j).get(k).get(1);

                        var newCoordinate = new Coordinate(x, y);
                        polygonCoordinates[k] = newCoordinate;
                    }
                }
                var newPolygon = new GeometryFactory().createPolygon(polygonCoordinates);
                polygonList.add(newPolygon);
            }
        }

        String geometricType = myPoints.getFeatures().get(0).getGeometry().getType();
        MyPoints pointsInsidePolygon = new MyPoints();


                switch (geometricType) {
            case "Point":
                pointsInsidePolygon = getPointsIfInside(myPoints, polygonList);
                break;
            case "LineString":
                pointsInsidePolygon = getLineStringIfInside(myPoints, polygonList);
                break;
            case "MultiPolygon":
                break;
            case "Polygon":
                pointsInsidePolygon = getPolygonIfInside(myPoints, polygonList);
                break;
            default:
                throw new Exception("Invalid geometric type");
        }


        return ResponseEntity.ok(pointsInsidePolygon);
    }

    private static MyPoints getPointsIfInside(MyPoints myPoints, List<Polygon> polygonList) {
        Double x, y;
        var pointsInsidePolygon = new MyPoints();
        var features = new ArrayList<MyPoints.FeaturesItem>();

        for (int i = 0; i < myPoints.getFeatures().size(); i++) {
            var pointCoordinates = myPoints.getFeatures().get(i).getGeometry().getCoordinates();

            if (pointCoordinates.get(0) instanceof Integer intX)
                x = intX.doubleValue();
            else
                x = (Double) pointCoordinates.get(0);

            if (pointCoordinates.get(1) instanceof Integer intY)
                y = intY.doubleValue();
            else y = (Double) pointCoordinates.get(1);

            var coordinate = new Coordinate(x, y);

            var geoPoint = new GeometryFactory().createPoint(coordinate);

            if (polygonList.stream().anyMatch(thePolygon -> thePolygon.contains(geoPoint))) {
                var newFeature = myPoints.getFeatures().get(i);
                features.add(newFeature);
            }
        }

        pointsInsidePolygon.setFeatures(features);
        return pointsInsidePolygon;
    }

    private static MyPoints getLineStringIfInside(MyPoints myPoints, List<Polygon> polygonList) {
        Double x;
        Double y;
        var pointsInsidePolygon = new MyPoints();
        var features = new ArrayList<MyPoints.FeaturesItem>();

        for (int i = 0; i < myPoints.getFeatures().size(); i++) {
            var lineStringCoordinates = myPoints.getFeatures().get(i).getGeometry().getCoordinates();
            Coordinate[] coordinates = new Coordinate[lineStringCoordinates.size()];
            Object o;

            for (int j = 0; j < lineStringCoordinates.size(); j++) {
                o = lineStringCoordinates.get(j);

                if (((ArrayList<?>) o).get(0) instanceof Integer intX)
                    x = intX.doubleValue();
                else x = (Double) ((ArrayList<?>) o).get(0);

                if (((ArrayList<?>) o).get(1) instanceof Integer intY)
                    y = intY.doubleValue();
                else
                    y = (Double) ((ArrayList<?>) o).get(1);

                var coordinate = new Coordinate(x, y);
                coordinates[j] = coordinate;
            }

            var geoLineString = new GeometryFactory().createLineString(coordinates);

            if (polygonList.stream().anyMatch(thePolygon -> geoLineString.intersects(thePolygon))) {
                var newFeature = myPoints.getFeatures().get(i);
                features.add(newFeature);
            }
        }

        pointsInsidePolygon.setFeatures(features);
        return pointsInsidePolygon;
    }

    private static MyPoints getPolygonIfInside(MyPoints myPoints, List<Polygon> polygonList) {
        Double x;
        Double y;
        var pointsInsidePolygon = new MyPoints();
        var features = new ArrayList<MyPoints.FeaturesItem>();
        var polygonCoordinateSize = 0;


        for (int i = 0; i < myPoints.getFeatures().size(); i++) {
            ArrayList<Object> coordinatesFromJson = (ArrayList<Object>) myPoints.getFeatures().get(i).getGeometry().getCoordinates();
            for (int j = 0; j < coordinatesFromJson.size(); j++) {
                ArrayList<Object> coordinatesFromJson2 = (ArrayList<Object>) coordinatesFromJson.get(j);
                polygonCoordinateSize = coordinatesFromJson2.size();
                Coordinate[] polygonCoordinates = new Coordinate[polygonCoordinateSize];

                for (int k = 0; k < polygonCoordinateSize; k++) {
                    ArrayList<Object> coordinatesFromJson3 = (ArrayList<Object>) coordinatesFromJson2.get(k);

                    Object o = coordinatesFromJson3.get(0);

                    if (o instanceof ArrayList) {
                        polygonCoordinates = new Coordinate[coordinatesFromJson3.size()];
                        for (int l = 0; l < coordinatesFromJson3.size(); l++) {
                            o = coordinatesFromJson3.get(l);

                            if (((ArrayList<?>) o).get(0) instanceof Integer intX)
                                x = intX.doubleValue();
                            else x = (Double) ((ArrayList<?>) o).get(0);

//                            System.out.println(i + " " + j + " " + k + " " + l + " " + x);

                            if (((ArrayList<?>) o).get(1) instanceof Integer intY)
                                y = intY.doubleValue();
                            else
                                y = (Double) ((ArrayList<?>) o).get(1);

                            var newCoordinate = new Coordinate(x, y);
                            polygonCoordinates[l] = newCoordinate;
                        }
                    } else {

                        if (coordinatesFromJson3.get(0) instanceof Integer intX)
                            x = intX.doubleValue();
                        else x = (Double) coordinatesFromJson3.get(0);

                        if (coordinatesFromJson3.get(1) instanceof Integer intY)
                            y = intY.doubleValue();
                        else
                            y = (Double) coordinatesFromJson3.get(1);

                        var newCoordinate = new Coordinate(x, y);
                        polygonCoordinates[k] = newCoordinate;
                    }
                }
                var newPolygon = new GeometryFactory().createPolygon(polygonCoordinates);
                if (polygonList.stream().anyMatch(thePolygon -> thePolygon.intersects(newPolygon))) {
                    var newFeature = myPoints.getFeatures().get(i);
                    features.add(newFeature);
                }
            }
        }

        pointsInsidePolygon.setFeatures(features);
        return pointsInsidePolygon;
    }


}
