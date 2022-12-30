# def golf_message
#     p 'Aloha Golf! What is your slogan?'
# end
#  golf_message

# golf_message

# def my_name
#     puts "My name is Shannon Ashley"
# end
# my_name

# def new_message
#     response = "Testing out this Ruby thing"
#     puts response
# end
# new_message

# def message name
#     "Aloha, #{name}!"
# end
# p message('Shannon')

# def message name
#     "Hey girl hey #{name}"
# end
# p message('Zora')

# def flower_up(name1, name2)
#     "#{name1} is a better smelling flower than #{name2}"
# end
# p flower_up "tulip", "rose"

# def mama(name1, name2)
#     "#{name1} is my grandmom, #{name2} is my mom"
# end
# p mama "biddy", "vita"

# def wrestling wrestler
#     if wrestler == 'The Rock'
#          'Can you smell what the Rock is cooking?'
#     end
# end
# p wrestling 'The Rock'

# def wrestling wrestler
#     if wrestler == 'The Rock'
#          'Can you smell what the Rock is cooking?'
#     elsif wrestler == 'Stone Cold'
#         'Greatest wrestler alive'
#     else
#         'They suck'   
#     end
# end
# puts wrestling 'The Rock'
# puts wrestling 'Stone Cold'
# puts wrestling 'Undertaker'

# puts 'enter your name'
# your_name = gets.chomp 
# puts "#{your_name}, give me your age please?"
# age = gets.chomp
# puts "wow you're old"

learn_crew = {:first=>'Kent', :second=>'Ramirez', :third=> 'Matt'}
# p learn_crew
# p learn_crew.first
# p learn_crew[:first]
# p learn_crew[0]

# learn_crew = Hash.new
# p learn_crew
# learn_crew[:boss_lady] = 'Chelsea'
# learn_crew[:admissions] = 'Kumba'
# learn_crew[:insructor] = ['Austin', 'Elyse']
# {:boss_lady=>"Chelsea", :admissions=>"Kumba"}
# p learn_crew

# movie_hash = {:action_comedy=>['Hot Fuzz', 'Hot Shots'], :action_drama=>'Twilight'}
# fuzz = movie_hash[:action_comedy].delete
# p movie_hash

# Duck Typing
    # Ennumerables
        # things that are iterable
        # Range
        # Array
        # Hash

        # learn_crew.each do |key, value|
        #     p "#{value}'s job is #{key}"
        # end

        # def my_coworkers hash
        #     hash.map do |key, value|
        #         "My coworker is #{value}"
        #     end
        # end
        # p my_coworkers


        # puts 'enter your name'
        #  name = gets.chomp
        #  puts "Hello, #{name}. How are you today?"

        # def dog_years age
        #     age * 7
        #   end
          
        #   puts 'Enter your age to see how old you are in dog years.'
        #   user_age = gets.chomp.to_i
        #   p dog_years user_age

        #   def preg_time months
        #     months * 2
        #   end

        #   puts 'this is your gestation time'
        #   user_time = gets.chomp.to_i
        #   p preg_time user_time