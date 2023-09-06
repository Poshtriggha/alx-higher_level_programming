def pow(a, b):
    result = 1
    for _ in range(b):
        result *= a
    return result

# Example usage:
base = 2
exponent = 3
power_result = pow(base, exponent)
print(f"{base} raised to the power of {exponent} is {power_result}")
