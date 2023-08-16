package com.example.geodemo3.service.impl;

import com.example.geodemo3.payload.Points;
import com.example.geodemo3.payload.Polygon;
import com.example.geodemo3.service.GeoJsonService;
import org.locationtech.jts.geom.Coordinate;
import org.locationtech.jts.geom.GeometryFactory;
import org.locationtech.jts.geom.Point;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import com.google.gson.Gson;

import java.util.List;

@Service
public class GeoJsonServiceImpl implements GeoJsonService {
    @Override
    public ResponseEntity<Points> getPointsInsidePolygon(Points points, Polygon polygon) {
        Gson gson = new Gson();
        String pointStr = gson.toJson(points);
        String polygonStr = gson.toJson(polygon);

        System.out.println("polygonStr: " + polygonStr);
        System.out.println("pointStr: " + pointStr);

       // implement logic here


        return ResponseEntity.ok(points);
    }
}
