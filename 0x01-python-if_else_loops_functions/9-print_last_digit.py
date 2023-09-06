def print_last_digit(number):
    # Get the absolute value of the number to handle negative numbers
    abs_number = abs(number)
    
    # Calculate the last digit using modulo operation
    last_digit = abs_number % 10
    
    # Print the last digit
    print(f"The last digit of {number} is {last_digit}")
    
    # Return the last digit
    return last_digit

# Example usage:
number = 12345
last_digit_value = print_last_digit(number)
