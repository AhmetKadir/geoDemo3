package com.example.geodemo3.controller;

import com.example.geodemo3.payload.DataRequest;
import com.example.geodemo3.payload.OtherShape;
import com.example.geodemo3.service.GeoJsonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class geoJsonController {

    GeoJsonService geoJsonService;

    @Autowired
    public geoJsonController(GeoJsonService geoJsonService) {
        this.geoJsonService = geoJsonService;
    }

    @CrossOrigin
    @PostMapping("/data")
    public ResponseEntity<OtherShape> postData(
            @RequestBody DataRequest dataRequest) throws Exception {

        return geoJsonService.findShapesWithinPolygon(dataRequest.getOtherShape(), dataRequest.getPolygon());
    }

}
