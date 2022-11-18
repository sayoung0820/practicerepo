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

# your_name = gets.chomp 
# puts "#{your_name}, give me your age please?"

# weekly_birthday_crew = {:first=>'Kent', :second=>'Ramirez', :third=> 'Matt'}
# p weekly_birthday_crew
# p weekly_birthday_crew.first
# p weekly_birthday_crew[:first]
# p weekly_birthday_crew[0]

# learn_crew = Hash.new
# p learn_crew
# learn_crew[:boss_lady] = 'Chelsea'
# learn_crew[:admissions] = 'Kumba'
# learn_crew[:insructor] = ['Austin', 'Elyse']
# # {:boss_lady=>"Chelsea", :admissions=>"Kumba"}
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

        def my_coworkers hash
            hash.map do |key, value|
                "My coworker is #{value}"
            end
        end
        p my_coworkers