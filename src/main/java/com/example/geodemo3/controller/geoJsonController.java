package com.example.geodemo3.controller;

import com.example.geodemo3.payload.DataRequest;
import com.example.geodemo3.payload.Points;
import com.example.geodemo3.payload.Polygon;
import com.example.geodemo3.service.GeoJsonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.http.HttpResponse;

@RestController
@RequestMapping("/api")
public class geoJsonController {

    GeoJsonService geoJsonService;

    @Autowired
    public geoJsonController(GeoJsonService geoJsonService) {
        this.geoJsonService = geoJsonService;
    }

    @PostMapping("/data")
    public ResponseEntity<Points> postData(
            @RequestBody DataRequest dataRequest ) {

        return geoJsonService.getPointsInsidePolygon(dataRequest.getPoints(), dataRequest.getPolygon());
    }

}
