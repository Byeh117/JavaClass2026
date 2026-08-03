package org.example;


import java.util.stream.IntStream;

public class Main {
    public static void main(String[] args) {
//        Car car = new Car();
//        car.brand = "Toyota";
//        car.setModel(778432);
//        car.start();
//        System.out.println(car.getModel());

//        Zoo zoo = new Zoo();
//        Zoo myLion = new Lion();
//
//        zoo.makeSound();
//
//        myLion.makeSound();

//        Calculator calc = new Calculator();
//
//        System.out.println(calc.add(5, 10)); // returns 15
//        System.out.println(calc.add(5, 10, 15)); // returns 30
//        System.out.println(calc.add(5.5, 4.5)); // returns 10

        IntStream.rangeClosed(1,100).forEach(System.out::println);
    }
}
