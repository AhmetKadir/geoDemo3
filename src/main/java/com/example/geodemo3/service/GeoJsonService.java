package com.example.geodemo3.service;

import com.example.geodemo3.payload.Points;
import com.example.geodemo3.payload.Polygon;
import org.apache.coyote.Response;
import org.springframework.http.ResponseEntity;

public interface GeoJsonService {

    ResponseEntity<Points> getPointsInsidePolygon(Points points, Polygon polygon);
}
