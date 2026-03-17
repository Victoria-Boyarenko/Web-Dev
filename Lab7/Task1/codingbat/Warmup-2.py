#string_times
def string_times(str, n):
    return str * n

#string_splosion
def string_splosion(str):
    result = ""
    for i in range(len(str)):
        result += str[:i+1]
    return result

#array_front9
def array_front9(nums):
    return 9 in nums[:4]

#front_times
def front_times(str, n):
    front = str[:3]
    return front * n

#last2
def last2(str):
    if len(str) < 2:
        return 0

    last = str[-2:]
    count = 0

    for i in range(len(str) - 2):
        if str[i:i+2] == last:
            count += 1

    return count

#array123
def array123(nums):
    for i in range(len(nums) - 2):
        if nums[i] == 1 and nums[i+1] == 2 and nums[i+2] == 3:
            return True
    return False

#string_bits
def string_bits(str):
    return str[::2]

#array_count9
def array_count9(nums):
    return nums.count(9)

# string_match
def string_match(a, b):
    count = 0
    length = min(len(a), len(b))

    for i in range(length - 1):
        if a[i:i+2] == b[i:i+2]:
            count += 1

    return count