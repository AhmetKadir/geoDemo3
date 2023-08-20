package com.example.geodemo3.service;

import com.example.geodemo3.payload.MyPolygon;
import com.example.geodemo3.payload.OtherShape;
import org.springframework.http.ResponseEntity;

public interface GeoJsonService {

    ResponseEntity<OtherShape> findShapesWithinPolygon(OtherShape otherShape, MyPolygon myPolygon) throws Exception;
}
