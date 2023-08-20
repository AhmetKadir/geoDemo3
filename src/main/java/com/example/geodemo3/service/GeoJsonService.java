package com.example.geodemo3.service;

import com.example.geodemo3.payload.MyPoints;
import com.example.geodemo3.payload.MyPolygon;
import org.springframework.http.ResponseEntity;

public interface GeoJsonService {

    ResponseEntity<MyPoints> getPointsInsidePolygon(MyPoints points, MyPolygon myPolygon) throws Exception;
}
