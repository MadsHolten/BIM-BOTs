import argparse
parser = argparse.ArgumentParser()

# Define arguments
parser.add_argument("-s", "--square", type=float, help="display a square of a given number")

# Parse arguments
args = parser.parse_args()

# Calculate result
res = args.square**2

print(res)