for i in range(ord('z'), ord('A') - 1, -1):
    if i % 2 == 1:
        # Use chr(i) to get the character corresponding to the ASCII value i
        print(chr(i), end='')
