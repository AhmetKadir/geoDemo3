package com.example.geodemo3.payload;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.List;

public class MyPoints {
    private List<FeaturesItem> features;
    private String type;

    public List<FeaturesItem> getFeatures() {
        return features;
    }

    public void setFeatures(List<FeaturesItem> features) {
        this.features = features;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public static class Geometry {
        private List<Object> coordinates;
        private String type;

        public List<Object> getCoordinates() {
            return coordinates;
        }

        public void setCoordinates(List<Object> coordinates) {
            this.coordinates = coordinates;
        }

        public String getType() {
            return type;
        }

        public void setType(String type) {
            this.type = type;
        }
    }

    public static class FeaturesItem {
        private Integer layerID;
        private Geometry geometry;
        private String type;
        private Properties properties;

        public Integer getLayerID() {
            return layerID;
        }

        public void setLayerID(Integer layerID) {
            this.layerID = layerID;
        }

        public Geometry getGeometry() {
            return geometry;
        }

        public void setGeometry(Geometry geometry) {
            this.geometry = geometry;
        }

        public String getType() {
            return type;
        }

        public void setType(String type) {
            this.type = type;
        }

        public Properties getProperties() {
            return properties;
        }

        public void setProperties(Properties properties) {
            this.properties = properties;
        }
    }

    public static class Properties {
        // F_ID

        @JsonProperty("F_ID")
        private Integer fId;
        private String uniqueId;

        @JsonProperty("F_ID")
        public Integer getFId() {
            return fId;
        }

        @JsonProperty("F_ID")
        public void setFId(Integer fId) {
            this.fId = fId;
        }

        public String getUniqueId() {
            return uniqueId;
        }

        public void setUniqueId(String uniqueId) {
            this.uniqueId = uniqueId;
        }
    }
}