package org.example;

public class Car extends Vehicle{
    private int doors = 4;

    public String brand;

    private int model;

    public int getModel() {
        return model;
    }

    public void setModel(int model) {
        this.model = model;
    }
    public void start() {
        System.out.println("Car has started!");
    }

    public void displayDetails() {
        System.out.println("Speed: " + mph + " mph");
    }
}
