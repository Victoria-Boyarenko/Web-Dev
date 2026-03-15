from models import Animal, Dog, Cat

def main():
    animal = Animal("Dazai", 5, "brown")
    dog = Dog("Chuuya", 3, "red", "Chihuahua")
    cat = Cat("Mimi", 2, "black", True)

    animals = [animal, dog, cat]

    print ("----Objects---")
    for i in animals:
        print(i)

    print ("\n--- Calling parent methods ---")
    for i in animals:
        print(i.eat())
        print(i.sleep())

    print("\n--- Demonstrating polymorphism ---")
    for i in animals:
        print(i.speak())

    print("\n--- Calling unique child methods ---")
    print(dog.fetch())
    print(cat.climb())

    
if __name__ == "__main__":
    main()


