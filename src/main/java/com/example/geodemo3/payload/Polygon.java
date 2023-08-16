package com.example.geodemo3.payload;

import java.util.List;

public class Polygon{
	private List<FeaturesItem> features;
	private String type;

	public void setFeatures(List<FeaturesItem> features){
		this.features = features;
	}

	public List<FeaturesItem> getFeatures(){
		return features;
	}

	public void setType(String type){
		this.type = type;
	}

	public String getType(){
		return type;
	}

	public static class Properties{

	}

	public static class Geometry{
		private List<List<List<Object>>> coordinates;
		private String type;

		public void setCoordinates(List<List<List<Object>>> coordinates){
			this.coordinates = coordinates;
		}

		public List<List<List<Object>>> getCoordinates(){
			return coordinates;
		}

		public void setType(String type){
			this.type = type;
		}

		public String getType(){
			return type;
		}
	}

	public static class FeaturesItem{
		private Geometry geometry;
		private String type;
		private Properties properties;

		public void setGeometry(Geometry geometry){
			this.geometry = geometry;
		}

		public Geometry getGeometry(){
			return geometry;
		}

		public void setType(String type){
			this.type = type;
		}

		public String getType(){
			return type;
		}

		public void setProperties(Properties properties){
			this.properties = properties;
		}

		public Properties getProperties(){
			return properties;
		}
	}
}