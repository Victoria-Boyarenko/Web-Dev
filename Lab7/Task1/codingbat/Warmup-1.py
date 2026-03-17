#sleep_in
def sleep_in(weekday, vacation):
    return not weekday or vacation

#diff21
def diff21(n):
    if n <= 21:
        return 21 - n
    else:
        return (n - 21) * 2
    
#near_hundred
def near_hundred(n):
    return abs(n - 100) <= 10 or abs(n - 200) <= 10

#missing_char
def missing_char(str, n):
    return str[:n] + str[n+1:]

#monkey_trouble
def monkey_trouble(a_smile, b_smile):
    return a_smile == b_smile

# parrot_trouble
def parrot_trouble(talking, hour):
    return talking and (hour < 7 or hour > 20)

#pos_neg
def pos_neg(a, b, negative):
    if negative:
        return a < 0 and b < 0
    else:
        return (a < 0 and b > 0) or (a > 0 and b < 0)
    
#front_back
def front_back(str):
    if len(str) <= 1:
        return str

    result = ""
    for i in range(len(str)):
        if i == 0:
            result += str[-1]
        elif i == len(str) - 1:
            result += str[0]
        else:
            result += str[i]

    return result

#sum_double
def sum_double(a, b):
    if a == b:
        return (a + b) * 2
    return a + b

#makes10
def makes10(a, b):
    return a == 10 or b == 10 or a + b == 10

#not_string
def not_string(str):
    if str.startswith("not"):
        return str
    return "not " + str

# front3
def front3(str):
    front = str[:3]
    return front * 3

