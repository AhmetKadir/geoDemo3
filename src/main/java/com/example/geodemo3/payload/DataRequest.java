package com.example.geodemo3.payload;

public class DataRequest {
    private MyPoints points;
    private MyPolygon myPolygon;

    public MyPoints getPoints() {
        return points;
    }

    public void setPoints(MyPoints points) {
        this.points = points;
    }

    public MyPolygon getPolygon() {
        return myPolygon;
    }

    public void setPolygon(MyPolygon myPolygon) {
        this.myPolygon = myPolygon;
    }
}

