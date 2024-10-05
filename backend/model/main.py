import sys

def main():
    # Get the input argument from command line
    input_data = sys.argv[1]
    
    # Process the input and return a string
    result = f"Processed data: {input_data}"
    
    # Print the result (this will be captured by Ballerina)
    print(result)

if __name__ == "__main__":
    main()
