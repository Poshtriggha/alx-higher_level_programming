def uppercase(input_str):
    for char in input_str:
        # Check if the character is a lowercase letter
        if 'a' <= char <= 'z':
            # Convert the character to uppercase using ASCII manipulation
            uppercase_char = chr(ord(char) - ord('a') + ord('A'))
            print(uppercase_char, end='')
        else:
            # If the character is not a lowercase letter, print it as is
            print(char, end='')

    # Print a newline character after processing the entire string
    print()

# Example usage:
input_str = "Hello, World!"
uppercase(input_str)
