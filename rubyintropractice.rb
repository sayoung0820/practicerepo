# Remember that floats are fractional numbers whereas integers are whole numbers. In Ruby, 1 and 1.0 are defined by different data types with slightly different behaviors.

# Complete the following challenges in the IRB console.

# Open the IRB terminal. Exit the terminal and reopen the terminal.
# DONE

# Add, subtract, multiply, and divide integers.
# DONE

# Add, subtract, multiply, and divide floats.
# DONE

# Find the remainder of dividing two numbers using the modulo operator (%).
# DONE

# Divide an integer by 0.
# error

# Divide a float by 0.
# Infinity

# Divide 0 by 0.
# Error

# Create a variable and assign an integer.

# Calculate the variable divided by 2.
 nums = 4
# p nums

# Find the remainder of the variable when divided by 3.
 p nums * 2
 

# Create another variable and assign it the integer 13.
# nums 2 = 13

# Use the relational operators on the two variables.
# true 
# 3.0.0 :022 > 4 > 13
#  => false 
# 3.0.0 :023 > 4 <= 13
#  => true 
# 3.0.0 :024 > 4 >= 13
#  => false 


# Reassign the value of one variable to be 7.
# DONE

# Reassign the value of one variable to be 26 times its current value.
# 3.0.0 :031 > num = 4
#  => 4 
# 3.0.0 :032 > num = num * 26
#  => 104 

# Complete the following challenges in a Ruby file.

# Create a variable and return it in a sentence using string interpolation.

# name = 'Shannon'
# puts "Hey there #{name}"

# # Create a variable that contains a string and test some of the Ruby string 
# # methods:

greeter = 'Hello Golf!'
# puts greeter

# # .upcase 
# puts greeter.upcase

# # .reverse
# puts greeter.reverse

# # .include?
# puts greeter.include? "G"

# # .capitalize
# greeter2 = 'hello golf!'
# puts greeter2.capitalize

# # .delete
puts greeter.delete "l"

# # .index
# puts greeter.index('l')

# # .swapcase
# puts greeter.swapcase

# # Create an array that contains the name of at least five TV shows you enjoy.

# shows_array = ['Let the right one in', 'AHS', 'Law and Order', 'Forenseic Files', 'P Valley']
# puts shows_array

# # Find the length of the array.
# puts shows_array.length

# # Return the first item in the array.
# puts shows_array[0]

# # Return the fourth item in the array.
# puts shows_array[3]

# # Permanently reverse the order of the array.
# puts shows_array.reverse!

# Create a new empty array for your top favorite TV shows.

# shows_array = Array.new
# puts shows_array.length

# Using the full TV show array, add your top two favorite shows to the empty array.

# shows_array = shows_array << 'AHS', 'P Valley'
# puts shows_array()

