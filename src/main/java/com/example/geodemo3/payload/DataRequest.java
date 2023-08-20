package com.example.geodemo3.payload;

public class DataRequest {
    private OtherShape otherShape;
    private MyPolygon polygon;

    public OtherShape getOtherShape() {
        return otherShape;
    }

    public void setOtherShape(OtherShape otherShape) {
        this.otherShape = otherShape;
    }

    public MyPolygon getPolygon() {
        return polygon;
    }

    public void setPolygon(MyPolygon myPolygon) {
        this.polygon = myPolygon;
    }
}

