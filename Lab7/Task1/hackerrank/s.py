#1
print("Hello, World!")

#2
if __name__ == '__main__':
    n = int(input().strip())

    if n % 2 != 0:
        print("Weird")
    elif n % 2 == 0 and n >= 2 and n <= 5:
        print("Not Weird")
    elif n % 2 == 0 and n >= 6 and n <= 20:
        print("Weird")
    else:
        print("Not Weird")

#3
if __name__ == '__main__':
    a = int(input())
    b = int(input())
    
    print (a+b)
    print(a-b)
    print (a*b)

#4
if __name__ == '__main__':
    n = int(input())
    
    for i in range (0,n):
        print(i**2)

#5
if __name__ == '__main__':
    n = int(input())
    result=""
    
    for i in range(1,n+1):
        result+=str(i)
        
print (result)

#6
if __name__ == '__main__':
    N = int(input())      
    lst = []             

    for i in range(N):
        command = input().split()   

        if command[0] == "insert":
            i = int(command[1])
            e = int(command[2])
            lst.insert(i, e)

        elif command[0] == "print":
            print(lst)

        elif command[0] == "remove":
            e = int(command[1])
            lst.remove(e)

        elif command[0] == "append":
            e = int(command[1])
            lst.append(e)

        elif command[0] == "sort":
            lst.sort()

        elif command[0] == "pop":
            lst.pop()

        elif command[0] == "reverse":
            lst.reverse()

#7
if __name__ == '__main__':
    x = int(input())
    y = int(input())
    z = int(input())
    n = int(input())

    result = []

    for i in range(0, x + 1):
        for j in range(0, y + 1):
            for k in range(0, z + 1):

                if i + j + k != n:
                    result.append([i, j, k])

    print(result)

#8
if __name__ == '__main__':
    n = int(input())
    arr = list(map(int, input().split()))

    max_value = max(arr)

    while max_value in arr:
        arr.remove(max_value)

    print(max(arr))

#9
if __name__ == '__main__':
    
    students = []

    for _ in range(int(input())):
        name = input()
        score = float(input())

        students.append([name, score])

    scores = []

    for student in students:
        scores.append(student[1])

    scores = list(set(scores))
    scores.sort()

    second_lowest = scores[1]

    names = []

    for student in students:
        if student[1] == second_lowest:
            names.append(student[0])

    names.sort()

    for name in names:
        print(name)

#10
if __name__ == '__main__':
    
    n = int(input())
    
    student_marks = {}

    for i in range(n):
        data = input().split()
        
        name = data[0]
        scores = []

        for j in range(1, len(data)):
            scores.append(float(data[j]))

        student_marks[name] = scores

    query_name = input()

    scores = student_marks[query_name]

    total = 0

    for score in scores:
        total = total + score

    average = total / len(scores)

    print("{:.2f}".format(average))
