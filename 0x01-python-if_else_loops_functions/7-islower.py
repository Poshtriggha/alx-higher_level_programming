def islower(c):
    # Check if the ASCII value of the character is within the lowercase range
    return 97 <= ord(c) <= 122

# Example usage:
char = 'a'
result = islower(char)
print(f"Is '{char}' lowercase? {result}")  # Output: Is 'a' lowercase? True
