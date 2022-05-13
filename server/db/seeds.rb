# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "Create users!"
User.destroy_all
user_one = User.create(name: 'Will', email: 'willard@gmail.com', password: '123456789')
user_two = User.create(name: 'Pablo', email: 'pablo@gmail.com', password: '123456789')
user_three = User.create(name: 'James', email: 'james@gmail.com', password: '123456789')